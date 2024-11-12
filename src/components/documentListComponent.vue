<script setup lang="ts">
const hold = ref(false)
</script>

<template>
  <div v-if="!hold">
    <DocumentStock />
  </div>
  <div v-if="hold">
    <RedactComponent />
  </div>
  <div class="mt-10">
    <ButtonSettingComponent v-model="hold" />
  </div>
</template>
