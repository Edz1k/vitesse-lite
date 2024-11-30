<script setup lang="ts">
import { useStorage } from '@vueuse/core'
// import { useOpenApi } from '~/composables/useOpenApi'

// const { analyzedImage } = useOpenApi()
const fileInput = ref()
const photo = ref(localStorage.getItem('photo'))
// not reactive
// const photo = useStorage('photo', null)

function handleInput() {
  const reader = new FileReader()
  reader.readAsDataURL(fileInput.value.files?.[0])
  reader.onload = () => {
    const result = reader.result as string
    photo.value = result
    // analyzedImage(result)
    useStorage('photo', result)
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div v-if="!photo" class="h-[65svh] flex items-center justify-center">
      <label for="file-upload" class="border border-coolGray rounded-lg p-3">Загрузите фотографию</label>
      <input
        id="file-upload"
        ref="fileInput"
        type="file"
        accept="image/png, image/jpeg"
        class="hidden"
        @change="handleInput"
      >
    </div>
    <div
      v-if="photo"
      class="h-[65svh] flex touch-auto items-start justify-center overflow-auto"
    >
      <img :src="photo" class="scale-90 transform -mt-5" alt="">
    </div>
  </div>
</template>
