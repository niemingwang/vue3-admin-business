<template>
  <div>Layout</div>

  <a-button type="primary" status="warning" @click="logout">登出</a-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStoreWithOut } from '@/store/modules/user.ts'

defineOptions({ name: 'Layout' })

const router = useRouter()

const logout = async () => {
  const userStore = useUserStoreWithOut()
  await userStore.loginOut()
  await router.replace('/login')
}
</script>

<style scoped></style>
