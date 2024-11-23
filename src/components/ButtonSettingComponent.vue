<script setup lang="ts">
const hold = defineModel()
let holdTimeout: NodeJS.Timeout | null = null
const loading = ref(false)

function changeModel() {
  loading.value = true
  hold.value = false
  setTimeout(() => {
    loading.value = false
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
    class="relative rounded text-sm"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <div
      class="absolute inset-0 border-[2px] border-kaspiBlueSec rounded-lg bg-white opacity-50"
    />
    <div
      class="relative flex justify-center p-3 text-size-[15px] text-kaspiBlueSec"
      @click="changeModel"
    >
      <div
        v-if="loading"
        class="i-mdi-loading animate-spin animate-duration-500 text-size-[16.5px]"
      />
      <button v-if="!loading" class="font-500">
        Обновить список документов
      </button>
    </div>
  </div>
</template>
