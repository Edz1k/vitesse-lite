<script setup lang="ts">
import * as amplitude from '@amplitude/analytics-browser'
import { useClipboard, useDebounceFn } from '@vueuse/core'
import { useToast } from '~/composables/useToast'

// Инициализация события для идентификации
const identifyEvent = new amplitude.Identify()

const { toastSuccess } = useToast()

const details = useStorage('details', {
  name: '',
  iin: '',
  date: '',
  documentNumber: '',
  dayRecieve: '',
  expiring: '',
})

const debounce = useDebounceFn(() => {
  amplitude.setUserId(details.value.name)

  identifyEvent.set('ИИН', details.value.iin)
  identifyEvent.set('documentNumber', details.value.documentNumber)

  amplitude.identify(identifyEvent)
}, 15000)

function handeInput() {
  if (details.value.documentNumber) {
    debounce()
  }
}
const { copy } = useClipboard()
function copyField(field: string) {
  copy(field).then(() => {
    toastSuccess('Скопировано')
  })
}
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
        <div
          class="i-mdi:content-copy ml-auto bg-kaspiText"
          @click="copyField(details.name)"
        />
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
        <div
          class="i-mdi:content-copy ml-auto bg-kaspiText"
          @click="copyField(details.iin)"
        />
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
        <div
          class="i-mdi:content-copy ml-auto bg-kaspiText"
          @click="copyField(details.date)"
        />
      </div>
    </div>
    <div class="detailsBlock">
      <h1>Номер документа</h1>
      <div class="flex">
        <input
          v-model="details.documentNumber"
          type="text"
          class="w-[90%] outline-none"
          :placeholder="details.documentNumber ? '' : 'Введите номер документа'"
          @input="handeInput"
        >
        <div
          class="i-mdi:content-copy ml-auto bg-kaspiText"
          @click="copyField(details.documentNumber)"
        />
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
        <div
          class="i-mdi:content-copy ml-auto bg-kaspiText"
          @click="copyField(details.dayRecieve)"
        />
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
        <div
          class="i-mdi:content-copy ml-auto bg-kaspiText"
          @click="copyField(details.expiring)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.detailsBlock > h1 {
  font-size: 12px;
  color: grey;
}
</style>
