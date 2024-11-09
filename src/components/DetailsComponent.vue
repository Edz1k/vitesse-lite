<script setup lang="ts">
const details = ref({
  name: '',
  iin: '',
  date: '',
  documentNumber: '',
  dayRecieve: '',
  expiring: '',
})
useStorage('details', details)
</script>

<template>
  <div class="p-5">
    <div class="detailsBlock">
      <h1>ФИО</h1>
      <input
        v-model="details.name"
        type="text"
        class="outline-none"
        :placeholder="details.name ? '' : 'Введите имя'"
      >
    </div>
    <div class="detailsBlock">
      <h1>ИИН</h1>
      <input
        v-model="details.iin"
        type="text"
        class="outline-none"
        :placeholder="details.iin ? '' : 'Введите ИИН'"
      >
    </div>
    <div class="detailsBlock">
      <h1>Дата рождения</h1>
      <input
        v-model="details.date"
        type="text"
        class="outline-none"
        :placeholder="details.date ? '' : 'Введите Дату рождения'"
      >
    </div>
    <div class="detailsBlock">
      <h1>Номер документа</h1>
      <input
        v-model="details.documentNumber"
        type="text"
        class="outline-none"
        :placeholder="details.documentNumber ? '' : 'Введите номер документа'"
      >
    </div>
    <div class="detailsBlock">
      <h1>Дата выдачи</h1>
      <input
        v-model="details.dayRecieve"
        type="text"
        class="outline-none"
        :placeholder="details.dayRecieve ? '' : 'Введите дату выдачи'"
      >
    </div>
    <div class="detailsBlock">
      <h1>Срок действия</h1>
      <input
        v-model="details.expiring"
        type="text"
        class="outline-none"
        :placeholder="details.expiring ? '' : 'Введите срок действия'"
      >
    </div>
  </div>
</template>

<style scoped>
.detailsBlock > h1 {
  font-size: 12px;
  color: grey;
}
</style>
