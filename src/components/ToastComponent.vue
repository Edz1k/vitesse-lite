<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const { message, visible } = useToast()
// comment
</script>

<template>
  <div v-if="visible" class="fade-in-out absolute top-8 z-24 w-full p-4">
    <div class="flex items-center rounded-lg bg-kaspiText p-3">
      <div class="i-mdi:checkbox-marked-circle text-xl text-emerald" />
      <div class="ml-5 text-lg text-white">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInOut {
  0% {
    opacity: 0; /* Начальное состояние: прозрачность 0 */
  }
  20% {
    opacity: 1; /* Появление: прозрачность 1 */
  }
  80% {
    opacity: 1; /* Длительное отображение */
  }
  100% {
    opacity: 0; /* Исчезновение: прозрачность 0 */
  }
}

.fade-in-out {
  animation: fadeInOut 3s ease-in-out forwards;
}
</style>
