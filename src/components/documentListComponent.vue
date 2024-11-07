<script setup lang="ts">
const documentList = [{
  id: 1,
  name: 'Удостоверение личности',
  icon: 'i-mdi:id-card',
  route: '/document/id',
}, {
  id: 2,
  name: 'Студенческий билет',
  icon: 'i-mdi:account-credit-card-outline',
  route: '/document/studentid',
}, {
  id: 3,
  name: 'Пасспорт',
  icon: 'i-mdi:passport',
  route: '/document/passport',
}, {
  id: 4,
  name: 'Водительское удостоверение',
  icon: 'i-mdi:car-side',
  route: '/document/driverlice',
}]
</script>

<template>
  <div>
    <div v-for="item in documentList" :key="item.name" class="mt-5">
      <RouterLink :to="item.route">
        <div class="flex items-center">
          <div class="li__block">
            <div class="border border-coolGray rounded" :class="[item.icon]" />
          </div>
          <div>
            <h1 class="font-sm ml-4 text-lg">
              {{ item.name }}
            </h1>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
