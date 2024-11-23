<script setup lang="ts">
const { documentList } = useDocument()
</script>

<template>
  <div v-for="item in documentList" :key="item.name" class="pb-4 pl-4 pt-3">
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
      <div class="ml-auto mr-5">
        <input v-model="item.visible" type="checkbox" @click.stop>
      </div>
    </div>
  </div>
</template>
