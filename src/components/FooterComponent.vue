<script setup lang="ts">
const isShow = ref(false)
const loading = ref(false)

const { shareDocument } = useDocument()

function randomCode(): number {
  return Math.floor(Math.random() * 1000000)
}

function changeModel() {
  loading.value = true
  setTimeout(() => {
    isShow.value = !isShow.value
    loading.value = false
  }, 500)
}
</script>

<template>
  <div class="relative z-10 border-t bg-white p-5 text-lg">
    <div>
      <div
        class="flex items-center justify-center rounded-xl bg-kaspiBlue p-4 text-white"
        @click="changeModel"
      >
        <div class="i-mdi-qrcode-scan" mr-2 text-xl />
        <button>Предъявить документ</button>
      </div>
      <div
        class="mt-5 flex items-center justify-center border border-blue rounded-xl p-4 text-kaspiBlue"
        @click="shareDocument"
      >
        <div class="i-iconamoon-share-2-fill text-xl" mr-2 />
        <button>Отправить документ</button>
      </div>
    </div>

    <div v-if="loading" class="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div
        class="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          class="i-mdi-loading animate-spin animate-duration-500 text-3xl text-kaspiRed"
        />
      </div>
    </div>
    <!-- minimum code -->
    <ModalComponent v-model="isShow" :number="randomCode()" />
  </div>
</template>
