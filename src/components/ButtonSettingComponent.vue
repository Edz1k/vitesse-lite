<script setup lang="ts">
const hold = defineModel()
let holdTimeout: NodeJS.Timeout | null = null

const loading = ref(false)

function changeModel() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    hold.value = !hold.value
  }, 1000)
}

function handleTouchStart() {
  holdTimeout = setTimeout(() => {
    hold.value = true
  }, 1500)
}

function handleTouchEnd() {
  if (holdTimeout) {
    clearTimeout(holdTimeout)
    holdTimeout = null
  }
}
</script>

<template>
  <div
    class="rounded text-sm outline-blue outline"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <div
      class="flex justify-center p-2 text-size-[13px] text-blue"
      @click="changeModel"
    >
      <div
        v-if="loading"
        class="i-mdi-loading animate-spin animate-duration-500 text-size-[16.5px]"
      />
      <button v-if="!loading" @click="changeModel">
        Обновить список документов
      </button>
    </div>
  </div>
</template>
