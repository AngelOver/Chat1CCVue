import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
  temperature: number
  top_p: number
	msgNum: number

	vipFlag: boolean
	vipCode: string
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: '我是一台基于深度学习和自然语言处理技术的AI机器人，旨在为用户提供高效、精准、个性化的智能服务',
    temperature: 0.8,
    top_p: 1,
		msgNum: 3,
		vipFlag: false,
		vipCode: '',
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
