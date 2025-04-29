<template>
  <div class="app-login-page">
    <div class="login-container">
      <a-card class="login-wrapper">
        <div class="login-info">
          <LoginLogo />
        </div>
        <AccountPassword />
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountPassword from '@/views/login/forms/AccountPassword.vue'
import LoginLogo from '@/views/login/components/LoginLogo.vue'

defineOptions({ name: 'Login' })
</script>

<style scoped>
.app-login-page {
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('../../assets/images/png/login-bg.png') no-repeat center center;
  background-size: cover;
}

.login-container {
  padding: 50px;
  display: flex;
  position: absolute;
  inset: 0;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.5);
}

.login-wrapper {
  margin: auto;
  width: 320px;
  padding: 20px;
  background-color: #f6f8fa;
}

.login-info {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
