<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="m-auto select-none container">
    <div class="p-5 text-left text-xl font-light">
      <h1 class="text-[21.5px] text-black font-700">
        Мои документы
      </h1>
      <div>
        <DocumentListComponent />
      </div>
    </div>
  </div>
</template>
