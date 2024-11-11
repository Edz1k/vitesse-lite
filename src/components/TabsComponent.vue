<script setup lang="ts">
import { ETab } from '~/types/enums'

const activeTab = ref<ETab>(ETab.Documents)

function changeTab(tab: ETab) {
  activeTab.value = tab
}
</script>

<template>
  <div class="kaspiGrey p-4 pb-0">
    <ul
      class="font-lg flex border border-2 border-kaspiGrey rounded-lg bg-kaspiGrey text-[15px]"
    >
      <li
        class="w-1/2 rounded-lg p-[4px]"
        :class="{ 'bg-white': activeTab === ETab.Documents }"
        @click="changeTab(ETab.Documents)"
      >
        Документы
      </li>
      <li
        class="w-1/2 rounded-lg p-[4px]"
        :class="{ 'bg-white': activeTab === ETab.Requirements }"
        @click="changeTab(ETab.Requirements)"
      >
        Рекизиты
      </li>
    </ul>
  </div>
  <KaspiCard :model-value="activeTab" />
</template>
