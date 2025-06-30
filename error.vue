<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const is404Error = computed(() => {
  return props.error.statusCode === 404
})

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  router.back()
}

</script>

<template>
  <section class="bg-white w-full">
    <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
      <div>
        <p class="text-sm font-medium text-blue-500 dark:text-blue-400">{{ props.error.statusCode }} error</p>
        <h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          <template v-if="is404Error">
            We can’t find that page
          </template>
          <template v-else>
            Something went wrong
          </template>
        </h1>
        <p class="mt-4 text-gray-500 dark:text-gray-400" v-if="is404Error">Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <template v-else>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            We apologize for the inconvenience, but it seems that something went wrong with our website.
            We understand that encountering errors can be frustrating, and we're here to assist you in resolving the issue.
            Our team has been alerted to the problem and is working diligently to fix it as quickly as possible.
          </p>
          <p class="mt-4 text-gray-500 dark:text-gray-400">{{ props.error.message }}</p>
        </template>

        <div class="flex items-center mt-6 gap-x-3">
          <button class="btn btn-sm flex items-center justify-center" @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>Go back</span>
          </button>

          <button class="btn btn-info" @click="goHome">
            Take me home
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
