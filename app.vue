<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import Footer from "@/components/FooterComponent.vue";

const isHideFooter = computed(() => {
  return false
})
const classes = ref('min-h-screen')
</script>
<template>
  <div data-theme="light">
    <div  class="flex flex-col justify-between container mx-auto" :class="classes">
      <HeaderComponent />
      <div class="wrapper flex-grow flex px-2 pb-2">
        <NuxtPage />
      </div>
    </div>
    <Footer v-if="!isHideFooter" />
  </div>
</template>
