<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const lst: Record<string, string> = {
  '/document/id': 'Удостоверение личности',
  '/': 'Цифровые документы',
  '/document/passport': 'Пасспорт',
  '/document/driverlc': 'Водительское удостоверение',
  '/document/studentid': 'Студенческий билет',
}
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="i-mdi-chevron-left text-4xl" @click="router.back()" />
      <div class="m-auto">
        <h1 class="text-lg font-bold">
          {{ lst[route.path] }}
        </h1>
      </div>
    </div>
  </div>
</template>
