<template>
  <aside>
    <NavFirst />
    <NavSecond />
  </aside>
</template>

<script setup lang="ts">
import NavFirst from './NavFirst.vue'
import NavSecond from './NavSecond.vue'

defineOptions({ name: 'Aside' })
</script>

<style scoped></style>
