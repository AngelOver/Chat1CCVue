import { defineStore } from 'pinia'
import jwt_decode from 'jwt-decode'
import type { UserInfo } from '../user/helper'
import { getToken, removeToken, setToken } from './helper'
import { store, useChatStore, useUserStore } from '@/store'
import { fetchSession } from '@/api'

interface SessionResponse {
  auth: boolean
  model: 'ChatGPTAPI' | 'ChatGPTUnofficialProxyAPI'
  allowRegister: boolean
}

export interface AuthState {
  token: string | undefined
  session: SessionResponse | null
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    token: getToken(),
    session: null,
  }),

  getters: {
    isChatGPTAPI(state): boolean {
      return state.session?.model === 'ChatGPTAPI'
    },
  },

  actions: {
    async getSession() {
      try {
       let sessionRes = '{"status":"Success","message":"","data":{"auth":false,"allowRegister":true,"model":"ChatGPTAPI"}}'
        const { data } =  JSON.parse(sessionRes)

      }
      catch (error) {
        return Promise.reject(error)
      }
    },

    async setToken(token: string) {
      this.token = token
      const decoded = jwt_decode(token) as UserInfo
      const userStore = useUserStore()
      await userStore.updateUserInfo(false, {
        avatar: decoded.avatar,
        name: decoded.name,
        description: decoded.description,
        root: decoded.root,
      })
      setToken(token)
    },

    async removeToken() {
      this.token = undefined
      const userStore = useUserStore()
      userStore.resetUserInfo()
      const chatStore = useChatStore()
      await chatStore.clearLocalChat()
      removeToken()
    },
  },
})

export function useAuthStoreWithout() {
  return useAuthStore(store)
}
