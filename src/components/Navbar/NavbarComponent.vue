<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const lst: Record<string, string> = {
  '/document/id': 'Удостоверение личности',
  '/': 'Цифровые документы',
  '/document/passport': 'Пасспорт',
  '/document/driverlc': 'Водительское удостоверение',
  '/document/studentid': 'Студенческий билет',
  '/document/reference': 'Справки',
}
</script>

<template>
  <div>
    <div class="relative flex items-center justify-between">
      <div class="i-mdi-chevron-left text-4xl" @click="router.back()" />
      <div class="absolute left-1/2 w-[70%] transform -translate-x-1/2">
        <h1 class="text-size-[15.5px] text-black font-700">
          {{ lst[route.path] }}
        </h1>
      </div>
    </div>
  </div>
</template>
