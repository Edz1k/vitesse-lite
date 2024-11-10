<script setup lang="ts">
function shareDocument() {
  if (navigator.share) {
    navigator
      .share({
        title: 'Удостоверение личности',
        url: window.location.href,
      })
      .catch(error => console.error('Ошибка при отправке документа', error))
  }
}
</script>

<template>
  <div class="sticky bottom-0 border-t bg-white p-5 text-lg">
    <div>
      <div
        class="flex items-center justify-center rounded-xl bg-kaspiBlue p-4 text-white"
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
  </div>
</template>
