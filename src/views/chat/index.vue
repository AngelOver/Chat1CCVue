<script setup lang='ts'>
import type { Ref } from 'vue'
import { get, post } from '@/utils/request'
import { computed, defineAsyncComponent, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import type { MessageReactive } from 'naive-ui'
import { NAutoComplete, NButton, NInput, NSpin, useDialog, useMessage } from 'naive-ui'
import html2canvas from 'html2canvas'
import { Message } from './components'
import { useScroll } from './hooks/useScroll'
import { useChat } from './hooks/useChat'
import { useCopyCode } from './hooks/useCopyCode'
import { useUsingContext } from './hooks/useUsingContext'
import HeaderComponent from './components/Header/index.vue'
import { HoverButton, SvgIcon } from '@/components/common'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { useAuthStore, useChatStore, usePromptStore,useSettingStore } from '@/store'

import { fetchChatAPIProcess } from '@/api'
import { t } from '@/locales'
import { debounce } from '@/utils/functions/debounce'
import IconPrompt from '@/icons/Prompt.vue'
import {getChat, getChats} from "../../../service/src/storage/mongo";
import {isNotEmptyString} from "../../../service/src/utils/is";
const Prompt = defineAsyncComponent(() => import('@/components/common/Setting/Prompt.vue'))

let controller = new AbortController()

const openLongReply = import.meta.env.VITE_GLOB_OPEN_LONG_REPLY === 'true'

const route = useRoute()
const dialog = useDialog()
const ms = useMessage()
const authStore = useAuthStore()

const chatStore = useChatStore()
const settingStore = useSettingStore()

const vipMsgNum = ref(settingStore.msgNum ?? 3)

const vipFlag = ref(settingStore.vipFlag ?? false)



useCopyCode()
let mj_1chat = 'https://mj.c3r.ink'
let imageUrl_wxzs = 'https://qiniuchat.littlewheat.com/other/wx/wxzs.jpg?t=' + new Date().toDateString()
let downUrl_1chat = 'https://qiniuchat.littlewheat.com/other/app/android/1chat.apk?t=' + Date.now()
let downUrl_chatcn = 'https://qiniuchat.littlewheat.com/other/app/android/ChatGPT%E5%9B%BD%E5%86%85%E7%89%88.apk?t=' + Date.now()

const { isMobile } = useBasicLayout()
const { addChat, updateChat, updateChatSome, getChatByUuidAndIndex } = useChat()
const { scrollRef, scrollToBottom, scrollToBottomIfAtBottom, scrollToBottomIfAtBottomOnly,scrollTo } = useScroll()
const { usingContext, toggleUsingContext } = useUsingContext()

const { uuid } = route.params as { uuid: string }

const dataSources = computed(() => chatStore.getChatByUuid(+uuid))
const conversationList = computed(() => dataSources.value.filter(item => (!item.inversion && !!item.conversationOptions)))

const prompt = ref<string>('')
const firstLoading = ref<boolean>(false)
const loading = ref<boolean>(false)
const inputRef = ref<Ref | null>(null)
const showPrompt = ref(false)

const currentChatHistory = computed(() => chatStore.getChatHistoryByCurrentActive)

let showDraw =  ref<boolean>(false)

let loadingms: MessageReactive
let allmsg: MessageReactive
let prevScrollTop: number
let isFist =ref<boolean>(true)

const msgNow = ref({
	uuid: 98552,
	dateTime: new Date().toLocaleString(),
	text: 'AI思考中',
	role: 'user',
	inversion: false,
	error: false,
	start: false,
	loading: true,
	conversationOptions: null,
	requestOptions: {prompt: 'AI思考中2', options: null},
})

if(vipFlag.value){
	chatStore.setUsingContext(true)
	//isFist.value = false
}else if(usingContext.value){
	chatStore.setUsingContext(false)
}


// 添加PromptStore
const promptStore = usePromptStore()

// 使用storeToRefs，保证store修改后，联想部分能够重新渲染
const { promptList: promptTemplate } = storeToRefs<any>(promptStore)

// 未知原因刷新页面，loading 状态不会重置，手动重置
dataSources.value.forEach((item, index) => {
  if (item.loading)
    updateChatSome(+uuid, index, { loading: false })
})

function handleSubmit() {
	if (isFist.value){
		isFist.value = false
	}
  onConversation()
}

 async function onConversation() {
	 let msgNum = vipMsgNum.value
	 if(msgNum == -1){
		 msgNum = 50
	 }
	 let message = prompt.value
	 let draw = showDraw.value
	 let drawFlag = false
	 let currPrompt	 =  settingStore.systemMessage;
// 得到历史记录数组（类型为 Chat.ChatData[]）
	 let chatHistory = chatStore.getChatByUuid(null);

	 if(currentChatHistory){
		 if(currentChatHistory.value){
			 currPrompt = currentChatHistory.value.prompt||settingStore.systemMessage;
		 }
	 }

// 将 ChatStore 中的记录转换成普通数组
	 let chatArray = Array.from(chatHistory);
// 取最后 3 个元素，并提取 role 和 text 属性，用 JSON 格式存储到 result 数组
	 let messageArr = [];

	 if(usingContext.value){
		 if (chatArray.length >= msgNum) {
			 messageArr = chatArray.slice(-msgNum).map(item => ({ role: item.role || 'user', content: item.text }));
		 } else {
			 messageArr = chatArray.map(item => ({ role: item.role, content: item.text }));
		 }
	 }

	 if(draw||message.startsWith("画")) {
		 if (message.startsWith("画")) {
			 message = message.substring(1)
		 }
		 drawFlag = true;
	 }

	 messageArr.push({role: 'user', content: message});

	 if (loading.value|| msgNow.value.start)
		 return

	 if (!message || message.trim() === '')
		 return

	 controller = new AbortController()

	 const chatUuid = Date.now()
	 addChat(
		 +uuid,
		 {
			 uuid: chatUuid,
			 dateTime: new Date().toLocaleString(),
			 text: message,
			 role: 'user',
			 inversion: true,
			 error: false,
			 conversationOptions: null,
			 requestOptions: {prompt: message, options: null},
		 },
	 )
	 scrollToBottom()

	 loading.value = true
	 prompt.value = ''

	 let options: Chat.ConversationRequest = {}
	 const lastContext = conversationList.value[conversationList.value.length - 1]?.conversationOptions

	 if (lastContext && usingContext.value)
		 options = {...lastContext}

	 //
	 //
	 // addChat(
		//  +uuid,
		//  {
		// 	 uuid: chatUuid,
		// 	 dateTime: new Date().toLocaleString(),
		// 	 text: '',
		// 	 role: 'assistant',
		// 	 loading: true,
		// 	 inversion: false,
		// 	 error: false,
		// 	 conversationOptions: null,
		// 	 requestOptions: {prompt: message, options: {...options}},
		//  },
	 // )

	 msgNow.value.text=""
	 msgNow.value.start=true
	 scrollToBottom()



	 let date1 = new Date();
	 let minutes1 = date1.getHours()*3+date1.getMinutes()*7;




	 let dataP = {
		 "model": {
			 "id": "gpt-3.5-turbo",
			 "name": "GPT-3.5",
			 "maxLength": 12000,
			 "tokenLimit": 4000
		 },
		 "messages": messageArr,
		 "prompt": 	 currPrompt,
		 "temperature": settingStore.temperature,
		 "generateImage": drawFlag,
	 }
	 const currentTime = new Date().toLocaleString();
	 try {
		 let lastText = ''

		 // let responsePromise = fetch('https://t5.c11r.cc/api/chat', {
			//  method: 'POST',
			//  headers: {
			// 	 'Accept': '*/*',
			// 	 'Content-Type': 'application/json',
			// 	 'Origin': 'https://t5.c11r.cc',
			// 	 'Referer': 'https://t5.c11r.cc/zh',
			//  },
			//  body: JSON.stringify(dataP)
		 // });
		 //
		 // // for await (const chunk of responsePromise) {
			// //  lastText += new TextDecoder("utf-8").decode(chunk);
			// //  console.log(currentText);
		 // // }
		 //
		 // for await (const chunk of responsePromise as any) {
			//  lastText += new TextDecoder("utf-8").decode(chunk)
			//  console.log(lastText)
		 // }
		 async function fetchResponse() {
			 let response = await fetch('https://t5.c11r.cc/api/chat', {
				 method: 'POST',
				 headers: {
					 'Accept': '*/*',
					 'Content-Type': 'application/json',
					 'Origin': 'https://t5.c11r.cc',
					 'Referer': 'https://t5.c11r.cc/zh',
					 'Authorization': minutes1,
				 },
				 body: JSON.stringify(dataP)
			 });

			 const reader = response.body.getReader();
			 const stream = new ReadableStream({
				 start(controller) {
					 function read() {
						 reader.read().then(({ done, value }) => {
							 if (done) {
								 controller.close();
								 return;
							 }
							 controller.enqueue(value);
							 read();
						 });
					 }
					 read();
				 }
			 });
			 const readableStreamDefaultReader = stream.getReader();

			 const textDecoder = new TextDecoder("utf-8");
			 let currentText = ''
			 let textNum = 0
			 while (true) {
				 const { done, value } = await readableStreamDefaultReader.read();
				 if (done){

					 // updateChat(
					 //  +uuid,
					 //  dataSources.value.length - 1,
					 //  {
					 // 	 dateTime: currentTime,
					 // 	 text: currentText,
					 // 	 role: 'assistant',
					 // 	 inversion: false,
					 // 	 error: false,
					 // 	 loading: true,
					 //  },
					 // )
					 msgNow.value.start=false
					 addChat(
						 +uuid,
						 {
							 uuid: chatUuid,
							 dateTime: currentTime,
							 text: currentText,
							 role: 'assistant',
							 loading: false,
							 inversion: false,
							 error: false,
							 conversationOptions: null,
							 requestOptions: {prompt: message, options: {...options}},
						 },
					 )
					 scrollToBottomIfAtBottom()
					 break
				 }
				 textNum++
					currentText += textDecoder.decode(value);

				 // updateChat(
					//  +uuid,
					//  dataSources.value.length - 1,
					//  {
					// 	 dateTime: currentTime,
					// 	 text: currentText,
					// 	 role: 'assistant',
					// 	 inversion: false,
					// 	 error: false,
					// 	 loading: true,
					//  },
				 // )

					msgNow.value.text = currentText
				 if (textNum%10==0) {
					 // 执行函数1（假设名称为 handleLineBreak）
					 scrollToBottomIfAtBottomOnly()
				 }
			 }
		 }
		 fetchResponse()
		 scrollToBottomIfAtBottom()
	 } catch (error: any) {
		 console.log(error)
		 const errorMessage = error?.message ?? t('common.wrong')
		 addChat(
			 +uuid,
			 {
				 dateTime: new Date().toLocaleString(),
				 text: errorMessage,
				 role: 'assistant',
				 inversion: false,
				 error: true,
				 loading: false,
				 conversationOptions: null,
				 requestOptions: {prompt: message, options: {...options}},
			 },
		 )
		 scrollToBottomIfAtBottom()
	 } finally {
		 loading.value = false
		 // console.log('finally')
		 // msgNow.value.start = false
		 // loading.value = false
	 }
 }

async function onRegenerate(index: number) {
  if (loading.value)
    return

  controller = new AbortController()

  const { requestOptions } = dataSources.value[index]

  let message = requestOptions?.prompt ?? ''
	let draw = showDraw.value

  let options: Chat.ConversationRequest = {}

  if (requestOptions.options)
    options = { ...requestOptions.options }

  loading.value = true
  const chatUuid = dataSources.value[index].uuid
  updateChat(
    +uuid,
    index,
    {
      dateTime: new Date().toLocaleString(),
      text: '',
      inversion: false,
      error: false,
      loading: true,
      conversationOptions: null,
      requestOptions: { prompt: message, options: { ...options } },
    },
  )

  try {
    let lastText = ''
    const fetchChatAPIOnce = async () => {
      await fetchChatAPIProcess<Chat.ConversationResponse>({
        roomId: +uuid,
        uuid: chatUuid || Date.now(),
        regenerate: true,
        prompt: message,
				draw: draw,
        options,
        signal: controller.signal,
        onDownloadProgress: ({ event }) => {
          const xhr = event.target
          const { responseText } = xhr
          // Always process the final line
          const lastIndex = responseText.lastIndexOf('\n', responseText.length - 2)
          let chunk = responseText
          if (lastIndex !== -1)
            chunk = responseText.substring(lastIndex)
          try {
            const data = JSON.parse(chunk)
            const usage = (data.detail && data.detail.usage)
              ? {
                  completion_tokens: data.detail.usage.completion_tokens || null,
                  prompt_tokens: data.detail.usage.prompt_tokens || null,
                  total_tokens: data.detail.usage.total_tokens || null,
                  estimated: data.detail.usage.estimated || null,
                }
              : undefined
            updateChat(
              +uuid,
              index,
              {
                dateTime: new Date().toLocaleString(),
                text: lastText + (data.text ?? ''),
                inversion: false,
                error: false,
                loading: true,
                conversationOptions: { conversationId: data.conversationId, parentMessageId: data.id },
                requestOptions: { prompt: message, options: { ...options } },
                usage,
              },
            )

            if (openLongReply && data.detail && data.detail.choices.length > 0 && data.detail.choices[0].finish_reason === 'length') {
              options.parentMessageId = data.id
              lastText = data.text
              message = ''
              return fetchChatAPIOnce()
            }
          }
          catch (error) {
            //
          }
        },
      })
      updateChatSome(+uuid, index, { loading: false })
    }
    await fetchChatAPIOnce()
  }
  catch (error: any) {
    if (error.message === 'canceled') {
      updateChatSome(
        +uuid,
        index,
        {
          loading: false,
        },
      )
      return
    }

    const errorMessage = error?.message ?? t('common.wrong')

    updateChat(
      +uuid,
      index,
      {
        dateTime: new Date().toLocaleString(),
        text: errorMessage,
        inversion: false,
        error: true,
        loading: false,
        conversationOptions: null,
        requestOptions: { prompt: message, options: { ...options } },
      },
    )
  }
  finally {
    loading.value = false
  }
}

function toggleDraw() {
	showDraw.value = !showDraw.value
	if (showDraw.value)
		ms.success("开启AI绘画模式")
	else
		ms.warning("关闭AI绘画模式 ，普通模式以“画” 这个字开头 即 输出图片")

	console.log(showDraw.value)
}

function handleExport() {
  if (loading.value)
    return

  const d = dialog.warning({
    title: t('chat.exportImage'),
    content: t('chat.exportImageConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: async () => {
      try {
        d.loading = true
        const ele = document.getElementById('image-wrapper')
        const canvas = await html2canvas(ele as HTMLDivElement, {
          useCORS: true,
        })
        const imgUrl = canvas.toDataURL('image/png')
        const tempLink = document.createElement('a')
        tempLink.style.display = 'none'
        tempLink.href = imgUrl
        tempLink.setAttribute('download', 'chat-shot.png')
        if (typeof tempLink.download === 'undefined')
          tempLink.setAttribute('target', '_blank')

        document.body.appendChild(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
        window.URL.revokeObjectURL(imgUrl)
        d.loading = false
        ms.success(t('chat.exportSuccess'))
        Promise.resolve()
      }
      catch (error: any) {
        ms.error(t('chat.exportFailed'))
      }
      finally {
        d.loading = false
      }
    },
  })
}

function handleDelete(index: number) {
  if (loading.value)
    return

  dialog.warning({
    title: t('chat.deleteMessage'),
    content: t('chat.deleteMessageConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: () => {
      chatStore.deleteChatByUuid(+uuid, index)
    },
  })
}

function handleClear() {
  if (loading.value)
    return

  dialog.warning({
    title: t('chat.clearChat'),
    content: t('chat.clearChatConfirm'),
    positiveText: t('common.yes'),
    negativeText: t('common.no'),
    onPositiveClick: () => {
      chatStore.clearChatByUuid(+uuid)
    },
  })
}

function handleEnter(event: KeyboardEvent) {

  if (!isMobile.value) {
    if (event.code === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit()
    }
  }
  else {
    if (event.code === 'Enter' && event.ctrlKey) {
      event.preventDefault()
      handleSubmit()
    }
  }
}

function handleStop() {
  if (loading.value) {
    controller.abort()
    loading.value = false
  }
}

async function loadMoreMessage(event: any) {
  const chatIndex = chatStore.chat.findIndex(d => d.uuid === +uuid)
  if (chatIndex <= -1)
    return

  const scrollPosition = event.target.scrollHeight - event.target.scrollTop

  const lastId = chatStore.chat[chatIndex].data[0].uuid
  await chatStore.syncChat({ uuid: +uuid } as Chat.History, lastId, () => {
    loadingms && loadingms.destroy()
    nextTick(() => scrollTo(event.target.scrollHeight - scrollPosition))
  }, () => {
    loadingms = ms.loading(
      '加载中...', {
        duration: 0,
      },
    )
  }, () => {
    allmsg && allmsg.destroy()
    allmsg = ms.warning('没有更多了', {
      duration: 1000,
    })
  })
}

const handleLoadMoreMessage = debounce(loadMoreMessage, 300)

async function handleScroll(event: any) {
  const scrollTop = event.target.scrollTop
  if (scrollTop < 50 && (scrollTop < prevScrollTop || prevScrollTop === undefined))
    handleLoadMoreMessage(event)
  prevScrollTop = scrollTop
}

// 可优化部分
// 搜索选项计算，这里使用value作为索引项，所以当出现重复value时渲染异常(多项同时出现选中效果)
// 理想状态下其实应该是key作为索引项,但官方的renderOption会出现问题，所以就需要value反renderLabel实现
const searchOptions = computed(() => {
  if (prompt.value.startsWith('/')) {
    return promptTemplate.value.filter((item: { key: string }) => item.key.toLowerCase().includes(prompt.value.substring(1).toLowerCase())).map((obj: { value: any }) => {
      return {
        label: obj.value,
        value: obj.value,
      }
    })
  }
  else {
    return []
  }
})

// value反渲染key
const renderOption = (option: { label: string }) => {
  for (const i of promptTemplate.value) {
    if (i.value === option.label)
      return [i.key]
  }
  return []
}

const placeholder = computed(() => {
  if (isMobile.value)
    return t('chat.placeholderMobile')
  return t('chat.placeholder')
})

const buttonDisabled = computed(() => {
  return loading.value || !prompt.value || prompt.value.trim() === ''
})

const footerClass = computed(() => {
  let classes = ['p-4']
  if (isMobile.value)
    classes = ['sticky', 'left-0', 'bottom-0', 'right-0', 'p-2', 'pr-3', 'overflow-hidden']
  return classes
})

onMounted(() => {
  firstLoading.value = true
  debounce(() => {
    // 直接刷 极小概率不请求
    chatStore.syncChat({ uuid: Number(uuid) } as Chat.History, undefined, () => {
      firstLoading.value = false
      scrollToBottom()
      if (inputRef.value && !isMobile.value)
        inputRef.value?.focus()
    })
  }, 200)()
})

onUnmounted(() => {
  if (loading.value)
    controller.abort()
})
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <HeaderComponent
      v-if="isMobile"
      :using-context="usingContext"
      :show-prompt="showPrompt"
			:show-draw="showDraw"
      @export="toggleDraw" @toggle-using-context="toggleUsingContext"
      @toggle-show-prompt="showPrompt = true"
    />
    <main class="flex-1 overflow-hidden">
      <div id="scrollRef" ref="scrollRef" class="h-full overflow-hidden overflow-y-auto" @scroll="handleScroll">
        <div
          id="image-wrapper"
          class="w-full max-w-screen-xl m-auto dark:bg-[#101014]"
          :class="[isMobile ? 'p-2' : 'p-4']"
        >
          <NSpin :show="firstLoading">
            <template v-if="!dataSources.length||isFist">
              <div class="flex items-center justify-center mt-4 text-center text-neutral-300">
                <SvgIcon icon="ri:bubble-chart-fill" class="mr-2 text-3xl" />
                <span v-if="!vipFlag">
									<a style="color: #c18401" href="https://0.0chat.cc" target="_blank">1.11Chat.cc </a>
									免费、无限制、免登录的ChatAI。最方便体验最好的网站。
<!--									备用域名<a style="color: #c18401" href="https://1.ai1.fun" target="_blank">1.ai1.fun </a>-->
<!--									备用:<a style="color: #c18401" href="https://1.ai1.fun" target="_blank">1.ai1.fun</a>-->
<!--									临时:<a style="color: #c18401" href="https://chat.littlewheat.com" target="_blank">chat.littlewheat.com </a>-->
<!--									。-->
									请收藏导航页: 		<a style="color: #c18401" href="https://chat.littlewheat.com" target="_blank">chat.littlewheat.com </a>
								</span>





								<span v-else="!vipFlag">
									<a style="color: #c18401" href="https://0.0chat.cc" target="_blank">1.11Chat.cc </a>
									Vip通道---->无限制、免登录的智能助手。最方便体验最好的网站
									<!--									备用域名<a style="color: #c18401" href="https://1.ai1.fun" target="_blank">1.ai1.fun </a>-->
									<!--									备用:<a style="color: #c18401" href="https://1.ai1.fun" target="_blank">1.ai1.fun</a>-->
									<!--									临时:<a style="color: #c18401" href="https://chat.littlewheat.com" target="_blank">chat.littlewheat.com </a>-->
									<!--									。-->

								</span>

							</div>





<!--								永久免费用于学习和测试,底下输入框输入就能直接用～，点左下角地球图标可关闭搜索模式，关闭后可极速响应-->
<!--								收藏当前页面即可永不迷路，点击左下角捐赠按钮可一直看到最新存活 国内备案不封链接：https://chat.jinshutuan.com/（稳定但有严格内容审查，若要分享到国内或微信分享请用此链接）-->
<!--								最新网站存活（无审查且不稳定勿分享）: https://chat2.aichatos.xyz/-->
<!--								禁止发布、传播任何违法、违规内容，使用本网站，视您接受并同意《免责声明》-->
<!--								服务器昂贵,接口昂贵,但网站免费！！如果你觉得做的好，可以给我买一瓶冰阔落-->
<!--								每人每月捐个三元、服务就能永久免费下去！！-->
<!--              </div>-->
<!--							<div style="color: rgb(50 197 157);margin-bottom: 0px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--						<span>-->
<!--						 AI绘画：MJ绘画已接入<a style="color: #c18401" :href="mj_1chat" target="_blank"><strong> 点击前往</strong> </a>-->
<!--							&lt;!&ndash;							; 其他：已破解OpenAI海外IOS客户端<a style="color: #c18401" :href="downUrl_1chat" target="_blank"><strong> 点击下载OpenAI国内版</strong> </a>&ndash;&gt;-->
<!--							&lt;!&ndash;					&ndash;&gt;-->
<!--						</span>-->
<!--							</div>-->
<!--							<div style="color: rgb(50 197 157);margin-bottom: 0px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--						<span>-->
<!--								 AI绘画：MJ最强绘画,<a style="color: #c18401" :href="mj_1chat" target="_blank"><strong> 点击前往</strong> </a>-->
<!--						 ;App端：<a style="color: #c18401" :href="downUrl_1chat" target="_blank"><strong> 点击下载</strong> </a>-->
<!--&lt;!&ndash;							; 其他：已破解OpenAI海外IOS客户端<a style="color: #c18401" :href="downUrl_1chat" target="_blank"><strong> 点击下载OpenAI国内版</strong> </a>&ndash;&gt;-->
<!--&lt;!&ndash;					&ndash;&gt;-->
<!--						</span>-->
<!--							</div>-->
<!--							<div style="color: rgb(50 197 157);margin-bottom: 0px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								服务器昂贵，接口昂贵，但网站免费！！！(说个数据：每日消耗OpenAI余额60刀，早起日常 ε(┬┬﹏┬┬)3 -快哭了)-->
<!--							</div>-->

<!--							<div style="color: rgb(50 197 157);margin: 1px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								服务器昂贵，接口昂贵，但网站免费！！！(说个数据：每日消耗OpenAI余额60刀  ε(┬┬﹏┬┬)3)-->
<!--							</div>-->
							<!--                                服务器昂贵，接口昂贵，但网站免费！！！ (说个数据：每日消耗OpenAI余额60刀，早起日常 ε(┬┬﹏┬┬)3 -快哭了)-->
<!--							<div style="margin-bottom: 0px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--									关注下抖音，网站动态与最新地址 会放抖音，见左侧-->
<!--							</div>-->
<!--							<div style="color: rgb(50 197 157);margin-bottom: 0px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								服务器昂贵，接口昂贵，但网站免费！！！ 如果你觉得做的好，可以给我买一瓶冰阔落-->
<!--							</div>-->
<!--							<div style="color: rgb(50 197 157);" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								服务器昂贵，接口昂贵，但网站免费！！！如果有帮助到您，可以给我买一瓶冰阔落！！！ 每人每月捐个三元、服务就能永久免费下去！！-->
<!--							</div>-->

<!--							<div style="" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								<span>-->
<!--									主域1: 	<a style="color: #c18401" href="https://1.1ai.fun" target="_blank">1.1ai.fun </a>-->
<!--									主域2：	<a style="color: #c18401" href="https://1.ai1.fun" target="_blank">1.ai1.fun</a>-->
<!--									临域： <a style="color: #c18401" href="https://chat.littlewheat.com" target="_blank">chat.littlewheat.com </a>-->
<!--								</span>-->
<!--							</div>-->
<!--							<div style="color: #c18401" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								<span>-->
<!--									<a style="" href="https://h5leu249nc.feishu.cn/sheets/NDEOst9OMhOq5CtjvavcfFD2n7f" target="_blank">  情况说明 见 【飞书文档】1Chat 域名更换通知 </a>-->
<!--								</span>-->
<!--							</div>-->
<!--							<div style="color: #c18401" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								<span> <a style="" href="https://h5leu249nc.feishu.cn/sheets/NDEOst9OMhOq5CtjvavcfFD2n7f" target="_blank">https://h5leu249nc.feishu.cn/sheets/NDEOst9OMhOq5CtjvavcfFD2n7f </a> </span>-->
<!--							</div>-->
<!--							<div style="color: #c18401" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								<img  style="max-width: 10rem" :src="imageUrl_wxzs" />-->
<!--							</div>-->

<!--							<div style="color: rgb(50 197 157);" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								每人每月捐个三元、服务就能永久免费下去！！ 如果你觉得做的好，可以给我买一瓶冰阔落-->
<!--							</div>-->

<!--							<div style="margin-bottom: 0px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								<span style="color: rgb(99 165 237)">-->
<!--								服务器昂贵，接口昂贵，但网站免费！！！-->
<!--								</span>-->
<!--							</div>-->
<!--							<div style="margin-bottom: 0px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								如果你觉得做的好，可以给我买一瓶冰阔落-->
<!--							</div>-->
<!--														<div style=";margin: 1px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--															 如果你觉得做的好，可以给我买一瓶冰阔落-->
<!--														</div>-->

<!--							<div v-if="!vipFlag" style="color:  rgb(50 197 157);margin: 20px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--									<span v-if="!vipFlag">-->
<!--										<a style="color: #f2cc60;font-size: 15px" href="https://vip.11chat.cc" target="_blank">-->
<!--											请收藏网址:  chat.aibeke.cn ,电脑端体验更佳 ,电脑端体验更佳-->
<!--										 </a>-->
<!--								</span>-->
<!--							</div>-->

							<div v-if="!vipFlag" style="color: rgb(50 197 157);margin: 1px" class="flex items-center justify-center mt-4 text-center text-neutral-300">
								每人每月捐个三元、服务就能永久免费下去！！如果你觉得我做的好，可以给我买一瓶冰阔落
							</div>

<!--									<div style="color: rgb(50 197 157);" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--											每人每月捐个三元、服务就能永久免费下去！！		<a style="" :href="imageUrl_wxzs" target="_blank">点击->赞助 </a>-->
<!--									</div>-->

											<div v-if="!vipFlag"  style="" class="flex items-center justify-center mt-4 text-center text-neutral-300">
																<img  style="max-width: 9rem" :src="imageUrl_wxzs" />
															</div>
<!--							<div v-if="!vipFlag" style="color:  rgb(50 197 157);margin: 20px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->

<!--							<div v-if="!vipFlag" style="color:  #c18401;margin: 20px" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--									<span v-if="!vipFlag">-->
<!--										<a style="color: #c18401;font-size: 15px" href="https://vip.11chat.cc" target="_blank">-->
<!--											点击进入VIP通道： 稳定、 回复快、支持追问、更长答案 和 更多功能-->
<!--										 </a>-->
<!--								</span>-->
<!--							</div>-->

							<div v-if="!vipFlag" style="color:  #c18401;margin: 20px" class="flex items-center justify-center mt-4 text-center text-neutral-300">
									<span v-if="!vipFlag">
										<a style="color: #c18401;font-size: 15px" href="https://vip.11chat.cc" target="_blank">
											全新的AI  <span >欢迎大家体验（AI绘图、消息云端存储、语音朗读、思维导图等）</span>
										 </a>
								</span>
							</div>


<!--							<div style="" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								<img  style="max-width: 15rem" :src="imageUrl_wxzs" />	<img style="max-width: 15rem" :src="imageUrl_wxzs" />-->
<!--							</div>-->

<!--							<div style="" class="flex items-center justify-center mt-4 text-center text-neutral-300">-->
<!--								<img  style="max-width: 10rem" :src="imageUrl_wxzs" />	<img style="max-width: 10rem" :src="imageUrl_wxzs" />-->
<!--							</div>-->

            </template>
            <template v-else>
              <div>
                <Message
                  v-for="(item, index) of dataSources"
                  :key="index"
                  :date-time="item.dateTime"
                  :text="item.text"
                  :inversion="item.inversion"
                  :usage="item && item.usage || undefined"
                  :error="item.error"
                  :loading="item.loading"
                  @regenerate="onRegenerate(index)"
                  @delete="handleDelete(index)"
                />

								<Message
									v-if="msgNow.start"
									:key="msgNow.uuid"
									:date-time="msgNow.dateTime"
									:text="msgNow.text"
									:inversion="msgNow.inversion"
									:usage="msgNow && msgNow.usage || undefined"
									:error="msgNow.error"
									:loading="msgNow.loading"
								/>


                <div class="sticky bottom-0 left-0 flex justify-center">
                  <NButton v-if="loading" type="warning" @click="handleStop">
                    <template #icon>
                      <SvgIcon icon="ri:stop-circle-line" />
                    </template>
                    Stop Responding
                  </NButton>
                </div>
              </div>
            </template>
          </NSpin>
        </div>
      </div>
    </main>
    <footer :class="footerClass">
      <div class="w-full max-w-screen-xl m-auto">
        <div class="flex items-center justify-between space-x-2">
          <HoverButton @click="handleClear">
            <span class="text-xl text-[#4f555e] dark:text-white">
              <SvgIcon icon="ri:delete-bin-line" />
            </span>
          </HoverButton>
<!--          <HoverButton v-if="!isMobile" @click="handleExport">-->
<!--            <span class="text-xl text-[#4f555e] dark:text-white">-->
<!--              <SvgIcon icon="ri:download-2-line" />-->
<!--            </span>-->
<!--          </HoverButton>-->
          <HoverButton v-if="!isMobile" @click="showPrompt = true">
            <span class="text-xl text-[#4f555e] dark:text-white">
              <IconPrompt class="w-[20px] m-auto" />
            </span>
          </HoverButton>

          <HoverButton v-if="!isMobile" @click="toggleUsingContext">
            <span class="text-xl" :class="{ 'text-[#4b9e5f]': usingContext, 'text-[#a8071a]': !usingContext }">
							<SvgIcon icon="ri:chat-history-line" />
            </span>

          </HoverButton>
					<HoverButton v-if="!isMobile" @click="toggleDraw">
            <span class="text-xl" :class="{ 'text-[#4b9e5f]': showDraw, 'text-[#c9d1d9b8]': !showDraw }">
							画
            </span>
					</HoverButton>

          <NAutoComplete v-model:value="prompt" :options="searchOptions" :render-label="renderOption">
            <template #default="{ handleInput, handleBlur, handleFocus }">
              <NInput
                ref="inputRef"
                v-model:value="prompt"

                type="textarea"
                :placeholder="placeholder"
                :autosize="{ minRows: 1, maxRows: isMobile ? 4 : 8 }"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @keypress="handleEnter"
              />
            </template>
          </NAutoComplete>
          <NButton type="primary" :disabled="buttonDisabled" @click="handleSubmit">
            <template #icon>
              <span class="dark:text-black">
                <SvgIcon icon="ri:send-plane-fill" />
              </span>
            </template>
          </NButton>
        </div>
      </div>
    </footer>
    <Prompt v-if="showPrompt" v-model:roomId="uuid" v-model:visible="showPrompt" />
	</div>
</template>
