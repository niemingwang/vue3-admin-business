<template>
  <div class="login-container">
    <a-card class="login-wrapper">
      <div class="login-info">
        <LoginLogo />
      </div>
      <AccountPassword />
    </a-card>
  </div>
</template>

<script setup lang="ts">
import AccountPassword from '@/views/login/forms/AccountPassword.vue'
import LoginLogo from '@/views/login/components/LoginLogo.vue'

defineOptions({ name: 'Login' })
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-wrapper {
  width: 320px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f6f8fa;
}

.login-info {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
