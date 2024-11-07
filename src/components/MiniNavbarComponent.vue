<script setup lang="ts">

</script>

<template>
  <div class="flex">
    <div class="w-1/2">
      <RouterLink to="/document/id" class="text-lg font-bold" active-class="text-blue">
        Документы
      </RouterLink>
    </div>
    <div class="w-1/2">
      <RouterLink to="/document/board/detailShowcase" class="text-lg font-bold" active-class="text-blue">
        Реквизиты
      </RouterLink>
    </div>
  </div>
</template>
