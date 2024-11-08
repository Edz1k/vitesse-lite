<script setup lang="ts">
const modelValue = ref('Документы')
</script>

<template>
  <div class="p-4">
    <ul class="border- flex border-2 border-light-9 rounded-lg bg-light-9 text-lg">
      <li
        class="rounded-lg"
        :class="{ 'bg-white': modelValue === 'Документы' }"
        @click="modelValue = 'Документы'"
      >
        Документы
      </li>
      <li
        class="rounded-lg"
        :class="{ 'bg-white': modelValue === 'Реквизиты' }"
        @click="modelValue = 'Реквизиты'"
      >
        Рекизиты
      </li>
    </ul>
  </div>
  <KaspiCard :model-value="modelValue" />
</template>

<style scoped>
ul > li {
  width: 50%;
}
</style>
