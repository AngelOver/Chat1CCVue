<script lang="ts" setup>
import { ref } from 'vue'
import { NButton, NInput, NSlider,NSpace,NSwitch , NCheckbox, useMessage } from 'naive-ui'
import { useSettingStore } from '@/store'
import type { SettingsState } from '@/store/modules/settings/helper'
import { t } from '@/locales'

const settingStore = useSettingStore()

const ms = useMessage()

const systemMessage = ref(settingStore.systemMessage ?? '')

const vipCode = ref(settingStore.vipCode ?? '')

const temperature = ref(settingStore.temperature ?? 0.5)

const top_p = ref(settingStore.top_p ?? 1)

const msgNum = ref(settingStore.msgNum ?? 3)

const vipFlag = ref(settingStore.vipFlag ?? false)

function updateSettings(options: Partial<SettingsState>) {
  settingStore.updateSetting(options)
  ms.success(t('common.success'))
}

function handleReset() {
  settingStore.resetSetting()
  ms.success(t('common.success'))
  window.location.reload()
}


</script>

<template>
  <div class="p-4 space-y-5 min-h-[200px]">
    <div class="space-y-6">

			<div class="flex items-center space-x-4">
				<span class="flex-shrink-0 w-[120px]">VIP激活码</span>
				<div class="flex-1">
					<NInput v-model:value="vipCode" type="password" :placeholder="'填写购买的VIP激活码'" class="mb-2"  />
				</div>
				<NButton size="tiny" text type="primary" @click="updateSettings({ vipCode })">
					{{ $t('common.save') }}
				</NButton>
			</div>
<!--			<div class="flex items-center space-x-4">-->
<!--				<span class="flex-shrink-0 w-[120px]">VIP通道:</span>-->
<!--				<div class="flex-1">-->
<!--					回复快、支持追问、更长答案。 云端同步数据，无广告，独立稳定。 各种行业角色随意切换。无限制的AI绘画。-->
<!--				</div>-->
<!--			</div>-->
<!--			<div class="flex items-center space-x-4">-->
<!--				<span class="flex-shrink-0 w-[120px]">VIP权限</span>-->
<!--				<div class="flex-1">-->
<!--					账号xxxx.qq.com，VIP到期时间：2023/6/13,购买续费,请点击-->
<!--				</div>-->
<!--			</div>-->
			<NSpace align="center" item-style="display: flex;">
				<span class="flex-shrink-0 w-[120px]">VIP权限</span>
				<NSwitch v-model:value="vipFlag" @change="updateSettings({ vipFlag })" />
<!--				<span class="flex-1"> 剩余时间 无限 续费地址 xxx</span>-->
			</NSpace>

			<div class="flex items-center space-x-4">
				<span class="flex-shrink-0 w-[120px]">连续上下文 </span>
				<div class="flex-1">
					<NSlider v-model:value="msgNum" :max="20" :min="-1" :step="1" />
				</div>
				<span>{{ msgNum }}</span>
				<NButton size="tiny" text type="primary" @click="updateSettings({ msgNum })">
					 {{ $t('common.save') }}
				</NButton>
			</div>


      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">{{ $t('setting.role') }}</span>
        <div class="flex-1">
          <NInput v-model:value="systemMessage" type="textarea" :autosize="{ minRows: 1, maxRows: 4 }" />
        </div>
        <NButton size="tiny" text type="primary" @click="updateSettings({ systemMessage })">
          {{ $t('common.save') }}
        </NButton>
      </div>

      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">{{ $t('setting.temperature') }} </span>
        <div class="flex-1">
          <NSlider v-model:value="temperature" :max="1" :min="0" :step="0.1" />
        </div>
        <span>{{ temperature }}</span>
        <NButton size="tiny" text type="primary" @click="updateSettings({ temperature })">
          {{ $t('common.save') }}
        </NButton>
      </div>


      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">{{ $t('setting.top_p') }} </span>
        <div class="flex-1">
          <NSlider v-model:value="top_p" :max="1" :min="0" :step="0.1" />
        </div>
        <span>{{ top_p }}</span>
        <NButton size="tiny" text type="primary" @click="updateSettings({ top_p })">
          {{ $t('common.save') }}
        </NButton>
      </div>
      <div class="flex items-center space-x-4">
        <span class="flex-shrink-0 w-[120px]">&nbsp;</span>
        <NButton size="small" @click="handleReset">
          {{ $t('common.reset') }}
        </NButton>
      </div>
    </div>
  </div>
</template>
