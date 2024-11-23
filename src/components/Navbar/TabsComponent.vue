<script setup lang="ts">
import type { UseScrollReturn } from '@vueuse/core'

const props = defineProps<{
  state: UseScrollReturn
}>()

const emit = defineEmits<{
  (event: 'select', pos: number): void
}>()

const ulWidth = ref<HTMLElement | null>(null)

const btnLeft = computed(() => {
  if (ulWidth.value) {
    const maxOffset = ulWidth.value.clientWidth / 2
    return Math.min(props.state.x.value, maxOffset)
  }
  return 0
})

function handleSelect(pos: number) {
  emit('select', pos)
}
</script>

<template>
  <div class="kaspiGrey px-4 pb-2 pt-4">
    <ul
      ref="ulWidth"
      class="relative flex border border-2 border-kaspiGreyTabs rounded-lg bg-kaspiGreyTabs text-[15px] font-500"
    >
      <div
        class="absolute left-0 top-[-3%] z-5 w-1/2 rounded-lg bg-white p-4"
        :style="{ left: `calc(${btnLeft}px)` }"
      />
      <li class="tab-item-left z-10 w-1/2 p-[4px]" @click="handleSelect(1)">
        Документ
      </li>
      <li class="tab-item z-10 w-1/2 p-[4px]" @click="handleSelect(2)">
        Рекизиты
      </li>
    </ul>
  </div>
</template>
