<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="m-auto container">
    <div class="p-5">
      <div class="flex items-center justify-between">
        <div class="i-mdi-chevron-left text-2xl" />
        <div class="m-auto">
          <h1 class="font-bold">
            Цифровые документы
          </h1>
        </div>
      </div>
      <div class="text-left">
        <h1 class="text-xl font-bold">
          Мои документы
        </h1>
        <ul>
          <li>
            <div class="border rounded-2xl bg-blueGray p-1">
              <div class="i-mdi:id-card" />
            </div><RouterLink to="/404">
              Удостоверение личности
            </RouterLink>
          </li>
          <li>
            <div class="border rounded-2xl bg-blueGray p-1">
              <div class="i-mdi:id-card" />
            </div><RouterLink to="/404">
              Удостоверение личности
            </RouterLink>
          </li>
          <li>
            <div class="border rounded-2xl bg-coolGray p-1">
              <div class="i-mdi:id-card" />
            </div><RouterLink to="/404">
              Удостоверение личности
            </RouterLink>
          </li>
          <li :to>
            <div class="border rounded-2xl bg-blueGray p-1">
              <div class="i-mdi:id-card" />
            </div><RouterLink to="/404">
              Удостоверение личности
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul > li {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
ul > li > div {
  margin-right: 10px;
}
</style>
