<script setup lang="ts"></script>

<template>
  <div class="fixed bottom-1 w-full border-t bg-white p-4 text-lg">
    <div>
      <div
        class="flex items-center justify-center rounded-xl bg-blue p-4 text-white"
      >
        <div class="i-mdi-qrcode-scan" mr-2 text-xl />

        <button>Предъявить документ</button>
      </div>
      <div
        class="mt-5 flex items-center justify-center border border-blue rounded-xl p-4 text-blue"
      >
        <div class="i-iconamoon-share-2-fill text-xl" mr-2 />
        <button>Отправить документ</button>
      </div>
    </div>
  </div>
</template>
