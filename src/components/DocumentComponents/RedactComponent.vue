<script setup lang="ts">
const { documentList } = useDocument()
</script>

<template>
  <div v-for="item in documentList" :key="item.name" class="mt-5">
    <div class="flex items-center">
      <div class="li__block">
        <div
          class="border border-coolGray rounded text-kaspiText"
          :class="[item.icon]"
        />
      </div>
      <div>
        <h1 class="font-sm ml-4 text-lg">
          {{ item.name }}
        </h1>
      </div>
      <div>
        <input
          v-model="item.visible"
          type="checkbox"
          class="ml-4"
          @click.stop
        >
      </div>
    </div>
  </div>
</template>
