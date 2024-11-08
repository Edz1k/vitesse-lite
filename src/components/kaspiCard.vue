<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()
</script>

<template>
  <div v-if="props.modelValue === 'Документы'">
    <h1>Документы</h1>
  </div>
  <div v-if="props.modelValue === 'Реквизиты'">
    <h1>Реквизиты</h1>
  </div>
</template>
