<script setup lang="ts">
import { useScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const onScroll = useScroll(el)
</script>

<template>
  <TabsComponent :state="onScroll" />
  <div ref="el" class="flex snap-x snap-mandatory overflow-x-auto">
    <div class="min-w-full snap-center">
      <KaspiCard />
      <FooterComponent />
    </div>
    <div class="min-w-full snap-center">
      <DetailsComponent />
    </div>
  </div>
</template>
