<script setup lang="ts">
import EmailIcon from '@vicons/ionicons5/Mail'
import KeyIcon from '@vicons/ionicons5/Key'
import { Icon } from '@vicons/utils'
import { useAuthStore } from '@/stores/auth'
import { onMounted, ref } from 'vue'
import { useToast } from 'vue-toastification'

const router = useRouter()

const email = ref('')
const password = ref('')
const toast = useToast()

const loading = ref(false)
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const onLogin = async () => {
  loading.value = true
  try {
    const result = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    loading.value = false
    if (result) {
      toast('Login success!')
      router.push('/').then()
      return
    }
    toast.error('Login failed!')
  } catch (e) {
    loading.value = false
    toast.error('Login failed!')
  }
}

const routeToRegister = () => {
  router.push('/register').then()
}

onMounted(() => {
  if (user.value?.id) {
    router.push('/').then()
  }
})
</script>
<template>
  <div class="flex flex-col gap-2 items-center w-full justify-center">
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Login page!</h2>
        <div class="divider m-0">OR</div>
        <label class="input input-bordered flex items-center gap-2">
          <Icon>
            <EmailIcon />
          </Icon>
          <input
              type="text"
              class="grow"
              placeholder="Email"
              v-model="email"
              @keyup.enter="onLogin"
              :disabled="loading"
          />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <Icon>
            <KeyIcon />
          </Icon>
          <input
              type="password"
              class="grow"
              placeholder="Password"
              v-model="password"
              @keyup.enter="onLogin"
              :disabled="loading"
          />
        </label>

        <div class="card-actions justify-end mt-4">
          <button class="btn" @click="routeToRegister" :disabled="loading">
            <span v-if="!loading">Go to register</span>
            <span v-else class="loading loading-white"></span>
          </button>

          <button class="btn btn-primary" @click="onLogin" :disabled="loading">
            <span v-if="!loading">Login</span>
            <span v-else class="loading loading-white"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
