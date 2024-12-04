<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { useOpenApi } from '~/composables/useOpenApi'
import { useToast } from '~/composables/useToast'

const { toastSuccess } = useToast()
const { res } = useOpenApi()

const details = ref({
  name: '',
  iin: '',
  date: '',
  documentNumber: '',
  dayRecieve: '',
  expiring: '',
})

function updateDetails(res: string | undefined) {
  if (!res)
    return

  const lines = res.split('\n').map(line => line.trim())
  details.value = {
    name: details.value.name ? details.value.name : lines[0]?.split('. ')[1],
    iin: details.value.iin ? details.value.iin : lines[1]?.split('. ')[1],
    date: details.value.date ? details.value.date : lines[2]?.split('. ')[1],
    documentNumber: details.value.documentNumber
      ? details.value.documentNumber
      : lines[3]?.split('. ')[1],
    dayRecieve: details.value.dayRecieve
      ? details.value.dayRecieve
      : lines[4]?.split('. ')[1],
    expiring: details.value.expiring
      ? details.value.expiring
      : lines[5]?.split('. ')[1],
  }
}

watch(
  res,
  (newVal) => {
    if (newVal)
      updateDetails(newVal) // Проверяем, что newVal не undefined
  },
  { immediate: true },
)

const { copy } = useClipboard()

function copyField(field: string) {
  copy(field).then(() => {
    toastSuccess('Cкопировано')
  })
}
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
