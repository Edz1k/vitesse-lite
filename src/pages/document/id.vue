<script setup lang="ts">
import { useScroll } from '@vueuse/core'

const el = ref<HTMLElement | null>(null)
const onScroll = useScroll(el, { behavior: 'smooth' })

function scrollToTab(pos: number) {
  onScroll.x.value = window.innerWidth * (pos - 1)
}
</script>

<template>
  <TabsComponent :state="onScroll" @select="scrollToTab" />
  <div ref="el" class="hidden-scrollbar flex snap-x snap-mandatory overflow-x-auto">
    <div class="min-w-full snap-center">
      <KaspiCard />
      <FooterComponent />
    </div>
    <div class="min-w-full snap-center">
      <DetailsComponent />
    </div>
  </div>
</template>
