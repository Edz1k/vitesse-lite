<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()
</script>

<template>
  <div v-if="props.modelValue === 'Документы'" class="tabsview">
    <h1>Документы</h1>
  </div>
  <div v-if="props.modelValue === 'Реквизиты'">
    <h1>Реквизиты</h1>
  </div>
  <FooterComponent />
</template>

<style scoped>
.tabsview {
  height: 65vh;
}
</style>
