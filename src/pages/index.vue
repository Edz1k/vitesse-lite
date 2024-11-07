<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="m-auto container">
    <div>
      <div class="flex items-center justify-between">
        <div class="i-mdi-chevron-left text-5xl" />
        <div class="m-auto">
          <h1 class="text-lg font-bold">
            Цифровые документы
          </h1>
        </div>
      </div>
      <div class="p-5 text-left text-xl font-light">
        <h1 class="text-xl font-bold">
          Мои документы
        </h1>
        <div>
          <DocumentListComponent />
        </div>
      </div>
    </div>
  </div>
</template>
