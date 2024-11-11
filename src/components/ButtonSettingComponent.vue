<script setup lang="ts">
const hold = defineModel()
let holdTimeout: NodeJS.Timeout | null = null

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
    class="rounded p-2 text-sm outline-blue outline"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <button class="w-full select-none rounded text-blue">
      Обновить список документов
    </button>
  </div>
  <div v-if="hold">
    dasdada
  </div>
</template>
