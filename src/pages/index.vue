<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
const hold = ref(false)
</script>

<template>
  <div class="m-auto select-none container">
    <div class="text-left text-xl font-light">
      <h1 class="mb-3 mt-4 pl-4 text-[21.5px] text-black font-700">
        Мои документы
      </h1>
      <div
        v-if="!hold"
        class="border-b border-kaspiGreyTabs rounded-2xl bg-white"
      >
        <DocumentStock />
      </div>
      <div v-if="hold">
        <RedactComponent />
      </div>
      <div class="relative bottom-4 z-[-1] h-7 bg-kaspiGreyTabs" />
      <div class="pl-4 pr-4">
        <ButtonSettingComponent v-model="hold" />
      </div>
    </div>
  </div>
</template>
