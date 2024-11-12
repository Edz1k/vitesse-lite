<script setup lang="ts">
const { shareDocument } = useDocument()

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
  <div class="p-5 pt-0 text-[17px] text-black">
    <div class="detailsBlock">
      <h1>ФИО</h1>
      <div class="flex">
        <input
          v-model="details.name"
          type="text"
          class="w-[90%] outline-none"
          :placeholder="details.name ? '' : 'Введите имя'"
        >
        <div class="i-mdi:content-copy ml-auto bg-kaspiText" />
      </div>
    </div>
    <div class="detailsBlock">
      <h1>ИИН</h1>
      <div class="flex">
        <input
          v-model="details.iin"
          type="text"
          class="outline-none"
          :placeholder="details.iin ? '' : 'Введите ИИН'"
        >
        <div class="i-mdi:content-copy ml-auto bg-kaspiText" />
      </div>
    </div>
    <div class="detailsBlock">
      <h1>Дата рождения</h1>
      <div class="flex">
        <input
          v-model="details.date"
          type="text"
          class="outline-none"
          :placeholder="details.date ? '' : 'Введите дату рождения'"
        >
        <div class="i-mdi:content-copy ml-auto bg-kaspiText" />
      </div>
    </div>
    <div class="detailsBlock">
      <h1>Номер документа</h1>
      <div class="flex">
        <input
          v-model="details.documentNumber"
          type="text"
          class="outline-none"
          :placeholder="details.documentNumber ? '' : 'Введите номер документа'"
        >
        <div class="i-mdi:content-copy ml-auto bg-kaspiText" />
      </div>
    </div>
    <div class="detailsBlock">
      <h1>Дата выдачи</h1>
      <div class="flex">
        <input
          v-model="details.dayRecieve"
          type="text"
          class="outline-none"
          :placeholder="details.dayRecieve ? '' : 'Введите дату выдачи'"
        >
        <div class="i-mdi:content-copy ml-auto bg-kaspiText" />
      </div>
    </div>
    <div class="detailsBlock">
      <h1>Срок действия</h1>
      <div class="flex">
        <input
          v-model="details.expiring"
          type="text"
          class="outline-none"
          :placeholder="details.expiring ? '' : 'Введите срок действия'"
        >
        <div class="i-mdi:content-copy ml-auto bg-kaspiText" />
      </div>
    </div>
  </div>
  <div class="fixed bottom-5 w-full p-5 text-lg">
    <div
      class="flex items-center justify-center border border-blue rounded-xl p-4 text-kaspiBlue"
      @click="shareDocument"
    >
      <div class="i-iconamoon-share-2-fill text-xl" mr-2 />
      <button>Отправить реквизиты</button>
    </div>
  </div>
</template>

<style scoped>
.detailsBlock > h1 {
  font-size: 12px;
  color: grey;
}
</style>
