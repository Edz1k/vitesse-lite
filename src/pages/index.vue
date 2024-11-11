<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="m-auto select-none container">
    <div class="p-5 text-left text-xl font-light">
      <h1 class="text-xl font-bold">
        Мои документы
      </h1>
      <div>
        <DocumentListComponent />
      </div>
    </div>
    <div class="p-5">
      <ButtonSettingComponent />
    </div>
  </div>
</template>
