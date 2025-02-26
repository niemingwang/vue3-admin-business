<template>
  <a-space direction="vertical" align="center" :size="0" class="login-logo">
    <Icon icon="logo" :size="80" />
    <a-typography-title :heading="3" bold style="margin: 0">欢迎登录</a-typography-title>
  </a-space>
</template>

<script setup lang="ts">
defineOptions({ name: 'LoginLogo' })
</script>

<style scoped></style>
