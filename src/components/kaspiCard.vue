<script setup lang="ts">
import { ETab } from '~/types/enums'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
})

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
    useStorage('photo', result)
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div v-if="props.modelValue === ETab.Documents">
      <div v-if="!photo" class="h-[70svh] flex items-center justify-center">
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
      <div v-if="photo">
        <img :src="photo" class="m-auto h-[70svh] w-full transform" alt="">
      </div>
    </div>
    <div v-if="props.modelValue === ETab.Requirements">
      <DetailsComponent />
    </div>
  </div>
  <FooterComponent v-if="props.modelValue === ETab.Documents" class="mb-5" />
</template>
