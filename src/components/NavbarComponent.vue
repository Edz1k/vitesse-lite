<script setup lang="ts">
const route = useRoute()
const router = useRouter()
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="i-mdi-chevron-left text-4xl" @click="router.push('/')" />
      <div class="m-auto">
        <h1 v-if="route.path === '/document/id' || route.path === '/document/board/detailShowcase'" class="text-lg font-bold">
          Удостоверение личности
        </h1>
        <h1 v-if="route.path === '/'" class="text-lg font-bold">
          Цифровые документы
        </h1>
        <h1 v-if="route.path === '/document/passport'" class="text-lg font-bold">
          Пасспорт
        </h1>
        <h1 v-if="route.path === '/document/driverlc'" class="text-lg font-bold">
          Водительское удостоверение
        </h1>
        <h1 v-if="route.path === '/document/studentid'" class="text-lg font-bold">
          Студенческий билет
        </h1>
      </div>
    </div>
  </div>
</template>
