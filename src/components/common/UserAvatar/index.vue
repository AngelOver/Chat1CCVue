<script setup lang='ts'>
import { computed, ref } from 'vue'
import { NAvatar, NButton } from 'naive-ui'
import { useAuthStore, useUserStore } from '@/store'
// import defaultAvatar from '@/assets/avatar.jpg'
import { isString } from '@/utils/is'
import Permission from '@/views/chat/layout/Permission.vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'

const userStore = useUserStore()
const authStore = useAuthStore()
const needPermission = ref(false)

const { isMobile } = useBasicLayout()
if (!!authStore.session?.auth && !authStore.token)
  needPermission.value = isMobile.value

const userInfo = computed(() => userStore.userInfo)

let defaultQNAvatar = "https://qiniuchat.littlewheat.com/other/avatar.jpg"

let downUrl_1chat = 'https://qiniuchat.littlewheat.com/other/app/android/1chat.apk?t=' + Date.now()

function toAppDown() {
	window.location.href = downUrl_1chat
}

function toVIP() {
	window.open("https://vip.11chat.cc?ref=1.11chat.cc")
}
</script>

<template>
  <div class="flex items-center overflow-hidden">
    <div class="w-10 h-10 overflow-hidden rounded-full shrink-0">
<!--      <template v-if="isString(userInfo.avatar) && userInfo.avatar.length > 0">-->
<!--        <NAvatar-->
<!--          size="large"-->
<!--          round-->
<!--          :src="userInfo.avatar ? userInfo.avatar : defaultQNAvatar"-->
<!--          :fallback-src="defaultQNAvatar"-->
<!--        />-->
<!--      </template>-->
<!--      <template v-else>-->
<!--        <NAvatar size="large" round :src="defaultQNAvatar" />-->
<!--      </template>-->
    </div>
    <div class="flex-1 min-w-0 ml-2">

<!--			<NButton text @click="toAppDown()">-->
<!--				安卓客户端下载-->
<!--			</NButton>-->
<!--			<NButton text @click="toVIP()">-->
<!--				更多域名见飞书文档（可收藏）-->
<!--			</NButton>-->
<!--      <h2 v-if="userInfo.name" class="overflow-hidden font-bold text-md text-ellipsis whitespace-nowrap">-->
<!--        {{ userInfo.name }}-->
<!--      </h2>-->


<!--      <NButton-->
<!--        v-else tag="a" text-->
<!--        @click="needPermission = !needPermission"-->
<!--      >-->

<!--        <span class="text-xl text-[#ff69b4] dark:text-white">-->
<!--          {{ $t('common.notLoggedIn') }}-->
<!--        </span>-->
<!--      </NButton>-->
    </div>
    <Permission :visible="needPermission" />
  </div>
</template>
