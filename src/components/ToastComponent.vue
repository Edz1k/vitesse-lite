<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const { message, visible } = useToast()
</script>

<template>
  <div v-if="visible" class="absolute top-0 z-24 w-full p-4">
    <div class="flex items-center justify-center rounded-lg bg-blue p-2">
      <div class="i-mdi:checkbox-marked-circle text-emerald" />
      <div class="m-auto text-lg">
        {{ message }}
      </div>
    </div>
  </div>
</template>
