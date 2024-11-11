<script setup lang="ts">
const props = defineProps<{
  number: number
}>()
const modelValue = defineModel<boolean>()
function changeModel() {
  modelValue.value = !modelValue.value
}
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-5 bg-black bg-opacity-50"
    @click="changeModel"
  >
    <div
      class="fixed bottom-0 left-0 right-0 z-10 w-full rounded-t-xl bg-white p-4 pb-15 pt-2"
      @click="(event) => event.stopPropagation()"
    >
      <div class="m-auto h-[4px] w-[8%] rounded-2xl bg-kaspiGreyTabs" />
      <div class="mt-3 flex items-center justify-between">
        <h1 class="text-lg font-semibold">
          Удостоверение личности
        </h1>
        <div class="i-mdi-close text-xl text-gray-500" @click="changeModel" />
      </div>
      <div class="mt-4 text-sm">
        <p>Покажите QR-код сотруднику</p>
        <div class="m-auto mt-3 w-1/3">
          <img src="/assets/qr.png" alt="QR-код">
        </div>
        <div class="mt-3">
          <p>или скажите код</p>
          <span class="text-2xl text-black font-600">{{ props.number }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
