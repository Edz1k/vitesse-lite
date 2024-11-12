<script setup lang="ts">
const { documentListRemake } = useDocument()
</script>

<template>
  <div v-for="item in documentListRemake" :key="item.name" class="mt-5">
    <RouterLink :to="item.route">
      <div v-if="item.visible" class="flex items-center">
        <div class="li__block">
          <div
            class="border border-coolGray rounded text-kaspiText"
            :class="[item.icon]"
          />
        </div>
        <div class="ml-4 flex flex-col">
          <h1 class="text-lg text-black font-400">
            {{ item.name }}
          </h1>
          <p v-if="item.description" class="text-xs">
            {{ item.description }}
          </p>
        </div>
        <div class="i-mdi:chevron-right ml-auto text-kaspiGreyTabs" />
      </div>
    </RouterLink>
  </div>
</template>
