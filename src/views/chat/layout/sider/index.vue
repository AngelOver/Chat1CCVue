<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import { computed, ref, watch } from 'vue'
import { NButton, NLayoutSider } from 'naive-ui'
import List from './List.vue'
import Footer from './Footer.vue'
import { useAppStore, useAuthStore, useChatStore } from '@/store'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { PromptStore } from '@/components/common'

const appStore = useAppStore()
const authStore = useAuthStore()
const chatStore = useChatStore()

const { isMobile } = useBasicLayout()
const show = ref(false)

let imageUrl = 'https://qiniuchat.1chat.cc/other/chatgpt_wx.jpg?t=' + Date.now()

const collapsed = computed(() => appStore.siderCollapsed)

async function handleAdd() {
  await chatStore.addHistory({ title: 'New Chat', uuid: Date.now(), isEdit: false })
  if (isMobile.value)
    appStore.setSiderCollapsed(true)
}

function handleUpdateCollapsed() {
  appStore.setSiderCollapsed(!collapsed.value)
}

const getMobileClass = computed<CSSProperties>(() => {
  if (isMobile.value) {
    return {
      position: 'fixed',
      zIndex: 50,
    }
  }
  return {}
})

const mobileSafeArea = computed(() => {
  if (isMobile.value) {
    return {
      paddingBottom: 'env(safe-area-inset-bottom)',
    }
  }
  return {}
})

watch(
  isMobile,
  (val) => {
    appStore.setSiderCollapsed(val)
  },
  {
    immediate: true,
    flush: 'post',
  },
)
</script>

<template>

  <NLayoutSider
    :collapsed="collapsed"
    :collapsed-width="0"
    :width="260"
    :show-trigger="isMobile ? false : 'arrow-circle'"
    collapse-mode="transform"
    position="absolute"
    bordered
    :style="getMobileClass"
    @update-collapsed="handleUpdateCollapsed"
  >
    <div class="flex flex-col h-full" :style="mobileSafeArea">
      <main class="flex flex-col flex-1 min-h-0">
        <div class="p-4">
          <NButton dashed block  @click="handleAdd">
            {{ $t('chat.newChatButton') }}
          </NButton>
        </div>
        <div class="flex-1 min-h-0 pb-4 overflow-hidden">
          <List />
        </div>
				<div class="p-4 " style="padding-top: 0">
					<dev class="flex items-center justify-between  ">
						<div class="flex-1 flex-shrink-0 overflow-hidden">
							<p>
								ChatGPT交流群：
							</p>
							<p>
								v群:----------->
							</p>
							<p>
								q群:791303042
							</p>
						</div>
						<div class="flex-1 flex-shrink-0 overflow-hidden">
<!--							<img   :src=" 'https://qiniuchat.1chat.cc/other/chatgpt_wx.jpg?t='+{{Date.now()}} ">-->
							<img :src="imageUrl" />
						</div>
					</dev>

					<h6 style="color: #c18401">
						永久域名：<a href="https://1chat.cc"> https://1chat.cc </a>
					</h6>
					<h6 style="color: #c18401">
						<a href="https://fk.a3r.cn" target="_blank"> 外链：ChatGPT成品账号9.9元 </a>
					</h6>
					<NButton block @click="show = true">
						{{ $t('store.siderButton') }}
					</NButton>

				</div>
      </main>
      <Footer />
    </div>
  </NLayoutSider>
  <template v-if="isMobile">
    <div v-show="!collapsed" class="fixed inset-0 z-40 bg-black/40" @click="handleUpdateCollapsed" />
  </template>
  <PromptStore v-model:visible="show" />
</template>
