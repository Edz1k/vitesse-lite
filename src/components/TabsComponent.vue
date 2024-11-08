<script setup lang="ts">
const modelValue = ref('Документы')
</script>

<template>
  <div>
    <ul class="flex bg-red">
      <li
        :class="{ 'bg-amber-500': modelValue === 'Документы' }"
        @click="modelValue = 'Документы'"
      >
        Документы
      </li>
      <li

        :class="{ 'bg-amber-500': modelValue === 'Реквизиты' }"
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
