<template>
  <div class="nav-collapse-line" @mousedown="onMouseDown" :style="style">
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useEventListener, useCssVar } from '@vueuse/core'
import { useSettingStore } from '@/store/modules/settings.ts'

defineOptions({ name: 'CollapseLine' })

const settingStore = useSettingStore()

const cursorLeft = new URL('@/assets/images/svg/resize-left.svg', import.meta.url).href
const cursorRight = new URL('@/assets/images/svg/resize-right.svg', import.meta.url).href

const collapse = computed(() => settingStore.collapse)
const style = computed(() => ({
  cursor: collapse.value
    ? `url('${cursorRight}') 6 0,col-resize`
    : `url('${cursorLeft}') 10 0,col-resize`
}))

const isDragging = ref(false)
const startX = ref(0)
const dragDirection = ref('')

let cleanupMouseMove: any = null // 记录 mousemove 解绑函数

function onMouseDown(e: MouseEvent) {
  isDragging.value = true
  startX.value = e.clientX
  dragDirection.value = ''

  // 绑定 mousemove 实时判断方向
  cleanupMouseMove = useEventListener(window, 'mousemove', onMouseMove)
}

function onMouseMove(e: MouseEvent) {
  if (!isDragging.value) return
  const deltaX = e.clientX - startX.value

  if (deltaX > 10) {
    if (dragDirection.value !== 'right') {
      dragDirection.value = 'right'
      handleRight()
    }
  } else if (deltaX < -10) {
    if (dragDirection.value !== 'left') {
      dragDirection.value = 'left'
      handleLeft()
    }
  } else {
    dragDirection.value = ''
  }
}

function onMouseUp() {
  isDragging.value = false
  if (cleanupMouseMove) {
    cleanupMouseMove() // 移除监听
    cleanupMouseMove = null
  }
}

const el = document.documentElement
const key1 = ref('--first-nav-width')
const key2 = ref('--second-nav-width')
const firstNavWidth = useCssVar(key1, el, { initialValue: '120px' })
const secondNavWidth = useCssVar(key2, el, { initialValue: '200px' })
onMounted(() => {
  if (collapse.value) {
    firstNavWidth.value = '64px'
    secondNavWidth.value = '0px'
  } else {
    firstNavWidth.value = '120px'
    secondNavWidth.value = '200px'
  }
})

function handleLeft() {
  settingStore.setCollapse(true)
  firstNavWidth.value = '64px'
  secondNavWidth.value = '0px'
}

function handleRight() {
  settingStore.setCollapse(false)
  firstNavWidth.value = '120px'
  secondNavWidth.value = '200px'
}

// 鼠标放开时解除拖动状态
useEventListener(window, 'mouseup', onMouseUp)
</script>

<style scoped>
.nav-collapse-line {
  user-select: none;
  position: absolute;
  right: -2px;
  height: 100%;
  width: 4px;
  /*cursor:*/
  /*  url('@/assets/images/svg/resize-left.svg') 10 0,*/
  /*  col-resize;*/

  &:hover {
    & > div {
      background-color: rgb(var(--primary-6)) !important;
    }
  }

  & > div {
    height: 100%;
    width: 1px;
  }
}
</style>
