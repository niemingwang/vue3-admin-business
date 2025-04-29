<template>
  <div>dashboard</div>
  <a-button type="primary" status="warning" @click="logout">登出</a-button>
  <a-button type="primary" status="success" @click="goDemo">demo</a-button>
</template>

<script setup lang="ts">
import { useUserStoreWithOut } from '@/store/modules/user'
import { useRouter } from 'vue-router'

defineOptions({ name: 'Dashboard' })

const router = useRouter()

const logout = async () => {
  const userStore = useUserStoreWithOut()
  await userStore.loginOut()
  await router.replace('/login')
}

const goDemo = () => {
  router.push('/demo')
}
</script>

<style scoped></style>
