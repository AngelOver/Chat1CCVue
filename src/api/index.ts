import type { AxiosProgressEvent, GenericAbortSignal } from 'axios'
import { get, post } from '@/utils/request'
import type { AuditConfig, ConfigState, MailConfig, SiteConfig } from '@/components/common/Setting/model'
import { useAuthStore, useSettingStore } from '@/store'

export function fetchChatAPI<T = any>(
  prompt: string,
  options?: { conversationId?: string; parentMessageId?: string },
  signal?: GenericAbortSignal,
) {
  return post<T>({
    url: '/chat',
    data: { prompt, options },
    signal,
  })
}

export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config',
  })
}

export function fetchChatAPIProcess<T = any>(
  params: {
    roomId: number
    uuid: number
    regenerate?: boolean
    draw?: boolean
    prompt: string
    options?: { conversationId?: string; parentMessageId?: string }
    signal?: GenericAbortSignal
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void },
) {
  const settingStore = useSettingStore()
  const authStore = useAuthStore()
	let dataP
  let data: Record<string, any> = {
    roomId: params.roomId,
    uuid: params.uuid,
		draw: params.draw || false,
    regenerate: params.regenerate || false,
    prompt: params.prompt,
    options: params.options,
  }

  if (authStore.isChatGPTAPI) {
    data = {
      ...data,
      systemMessage: settingStore.systemMessage,
      temperature: settingStore.temperature,
      top_p: settingStore.top_p,
    }
		//开始接口转换
		//


		dataP = {
			"model": {
				"id": "gpt-3.5-turbo",
				"name": "GPT-3.5",
				"maxLength": 12000,
				"tokenLimit": 4000
			},
			"messages": [
				{
					"role": "assistant",
					"content": "你好！有什么我可以帮助你解决的问题吗？"
				},
				{
					"role": "user",
					"content": "讲个故事吧"
				}
			],
			"prompt": params.prompt,
			"temperature": 0.8
		}


  }


	return post<T>({
		url: 'https://chatapi6.a1r.cc/chat',
		data: dataP,
		headers: {
			'Accept': '*/*',
			'Content-Type': 'application/json',
			'Origin': 'https://chatapi6.a1r.cc',
			'Referer': 'https://chatapi6.a1r.cc/zh',
		},
		signal: params.signal,
		onDownloadProgress: params.onDownloadProgress,
		// headers: {
		// 	referer: 'https://3.a1r.cc',
		// },
	})

  // return post<T>({
  //   url: '/chat-process',
  //   data,
  //   signal: params.signal,
  //   onDownloadProgress: params.onDownloadProgress,
	// 	// headers: {
	// 	// 	referer: 'https://3.a1r.cc',
	// 	// },
  // })
}

export function fetchSession<T>() {
  return post<T>({
    url: '/session',
  })
}

export function fetchVerify<T>(token: string) {
  return post<T>({
    url: '/verify',
    data: { token },
  })
}

export function fetchVerifyAdmin<T>(token: string) {
  return post<T>({
    url: '/verifyadmin',
    data: { token },
  })
}

export function fetchLogin<T = any>(username: string, password: string) {
  return post<T>({
    url: '/user-login',
    data: { username, password },
  })
}

export function fetchSendResetMail<T = any>(username: string) {
  return post<T>({
    url: '/user-send-reset-mail',
    data: { username },
  })
}

export function fetchResetPassword<T = any>(username: string, password: string, sign: string) {
  return post<T>({
    url: '/user-reset-password',
    data: { username, password, sign },
  })
}

export function fetchRegister<T = any>(username: string, password: string) {
  return post<T>({
    url: '/user-register',
    data: { username, password },
  })
}

export function fetchUpdateUserInfo<T = any>(name: string, avatar: string, description: string) {
  return post<T>({
    url: '/user-info',
    data: { name, avatar, description },
  })
}

export function fetchGetChatRooms<T = any>() {
  return get<T>({
    url: '/chatrooms',
  })
}

export function fetchCreateChatRoom<T = any>(title: string, roomId: number) {
  return post<T>({
    url: '/room-create',
    data: { title, roomId },
  })
}

export function fetchRenameChatRoom<T = any>(title: string, roomId: number) {
  return post<T>({
    url: '/room-rename',
    data: { title, roomId },
  })
}

export function fetchUpdateChatRoomPrompt<T = any>(prompt: string, roomId: number) {
  return post<T>({
    url: '/room-prompt',
    data: { prompt, roomId },
  })
}

export function fetchDeleteChatRoom<T = any>(roomId: number) {
  return post<T>({
    url: '/room-delete',
    data: { roomId },
  })
}

export function fetchGetChatHistory<T = any>(roomId: number, lastId?: number) {
  return get<T>({
    url: `/chat-hisroty?roomId=${roomId}&lastId=${lastId}`,
  })
}

export function fetchClearAllChat<T = any>() {
  return post<T>({
    url: '/chat-clear-all',
    data: { },
  })
}

export function fetchClearChat<T = any>(roomId: number) {
  return post<T>({
    url: '/chat-clear',
    data: { roomId },
  })
}

export function fetchDeleteChat<T = any>(roomId: number, uuid: number, inversion?: boolean) {
  return post<T>({
    url: '/chat-delete',
    data: { roomId, uuid, inversion },
  })
}

export function fetchUpdateMail<T = any>(mail: MailConfig) {
  return post<T>({
    url: '/setting-mail',
    data: mail,
  })
}

export function fetchTestMail<T = any>(mail: MailConfig) {
  return post<T>({
    url: '/mail-test',
    data: mail,
  })
}

export function fetchUpdateAudit<T = any>(audit: AuditConfig) {
  return post<T>({
    url: '/setting-audit',
    data: audit,
  })
}

export function fetchTestAudit<T = any>(text: string, audit: AuditConfig) {
  return post<T>({
    url: '/audit-test',
    data: { audit, text },
  })
}

export function fetchUpdateSite<T = any>(config: SiteConfig) {
  return post<T>({
    url: '/setting-site',
    data: config,
  })
}

export function fetchUpdateBaseSetting<T = any>(config: ConfigState) {
  return post<T>({
    url: '/setting-base',
    data: config,
  })
}
