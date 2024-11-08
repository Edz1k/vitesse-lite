<script setup lang="ts">
import { ETab } from '~/types/enums'

const activeTab = ref<ETab>(ETab.Documents)

function changeTab(tab: ETab) {
  activeTab.value = tab
}
</script>

<template>
  <div class="p-4">
    <ul class="flex border border-2 border-light-9 rounded-lg bg-light-9 text-lg">
      <li
        class="w-1/2 rounded-lg"
        :class="{ 'bg-white': activeTab === ETab.Documents }"
        @click="changeTab(ETab.Documents)"
      >
        Документы
      </li>
      <li
        class="w-1/2 rounded-lg"
        :class="{ 'bg-white': activeTab === ETab.Requirements }"
        @click="changeTab(ETab.Requirements)"
      >
        Рекизиты
      </li>
    </ul>
  </div>
  <KaspiCard :model-value="activeTab" />
</template>
