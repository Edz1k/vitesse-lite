<script setup lang="ts">
const hold = ref(false)
const { documentListRemake, documentList } = useDocument()
</script>

<template>
  <div v-if="!hold">
    <div v-for="item in documentListRemake" :key="item.name" class="mt-5">
      <RouterLink :to="item.route">
        <div v-if="item.visible" class="flex items-center">
          <div class="li__block">
            <div
              class="border border-coolGray rounded text-kaspiText"
              :class="[item.icon]"
            />
          </div>
          <div class="ml-4 flex flex-col">
            <h1 class="text-lg font-500">
              {{ item.name }}
            </h1>
            <p v-if="item.description" class="text-sm">
              {{ item.description }}
            </p>
          </div>
          <div class="i-mdi:chevron-right ml-auto text-kaspiText" />
        </div>
      </RouterLink>
    </div>
  </div>
  <div v-if="hold">
    <div v-for="item in documentList" :key="item.name" class="mt-5">
      <div class="flex items-center">
        <div class="li__block">
          <div
            class="border border-coolGray rounded text-kaspiText"
            :class="[item.icon]"
          />
        </div>
        <div>
          <h1 class="font-sm ml-4 text-lg">
            {{ item.name }}
          </h1>
        </div>
        <div>
          <input
            v-model="item.visible"
            type="checkbox"
            class="ml-4"
            @click.stop
          >
        </div>
      </div>
    </div>
  </div>
  <div class="mt-10">
    <ButtonSettingComponent v-model="hold" />
  </div>
</template>
