<template>
  <a-form
    class="account-password"
    :model="form"
    layout="vertical"
    size="large"
    ref="formRef"
    :rules="rules"
    @submit="onSubmit"
  >
    <a-form-item label="账号" field="account">
      <a-input v-model="form.account" />
    </a-form-item>
    <a-form-item label="密码" field="password">
      <a-input-password v-model="form.password" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" :loading="loading" :disabled="loading" long>
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { login } from '@/api/auth.ts'
import { useRouter, useRoute } from 'vue-router'
import { useToken } from '@/common/hooks/use-token.ts'

defineOptions({ name: 'AccountPassword' })

const { setToken, setRefreshToken } = useToken()

const router = useRouter()
const route = useRoute()

const formRef = ref()
const loading = ref(false)
const form = reactive({
  account: import.meta.env.VITE_APP_DEFAULT_LOGIN_ACCOUNT || '',
  password: import.meta.env.VITE_APP_DEFAULT_LOGIN_PASSWORD || ''
})
const rules = {
  account: [{ required: true, message: '必填项' }],
  password: [{ required: true, message: '必填项' }]
}

const onSubmit = async () => {
  try {
    const noPass = await formRef.value.validate()
    if (!noPass) {
      loading.value = true
      const res = await login(form)
      setToken(res.accessToken)
      setRefreshToken(res.refreshToken)
      await router.push((route.query.redirect as string) || '/')
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.account-password,
label {
  font-weight: bold;
}
</style>
