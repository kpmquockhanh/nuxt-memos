<script setup lang="ts">
import { computed, nextTick, type Ref, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UserIcon from '@vicons/ionicons5/PersonSharp'
import Alert24Filled from '@vicons/fluent/Alert24Filled'
import DynamicImage from '@components/DynamicImage.vue'
import { Icon } from '@vicons/utils'
import NotificationComponent from '@components/NotificationComponent.vue'
import PeopleSearch24Filled from '@vicons/fluent/PeopleSearch24Filled'
import Settings24Filled from '@vicons/fluent/Settings24Filled'
import LogOutOutlined from '@vicons/ionicons5/LogOutOutline'
import LogInOutlined from '@vicons/ionicons5/LogInOutline'
import Key24Filled from '@vicons/fluent/Key24Filled'

type MenuItem = {
  path: string
  label: string
  icon?: any
  show?: boolean
  children?: MenuItem[]
}

const route = useRoute()
const router = useRouter()
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const isAuthenticated = computed(() => () => !!user.value?.id)

const menu = ref<MenuItem[]>([
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/chat',
    label: 'Chat'
  },
  {
    path: '/settings',
    label: 'Settings'
  },
  {
    path: '/tools',
    label: 'Tools',
    children: [
      {
        path: '/tools/random',
        label: 'Random'
      },
      {
        path: '/tools/number-prediction',
        label: 'Number prediction'
      },
    ]
  }
])

const accountMenu = computed(() => [
  {
    name: 'login',
    path: '/login',
    label: 'Login',
    show: !isAuthenticated.value,
    icon: LogInOutlined
  },
  {
    name: 'register',
    path: '/register',
    label: 'Register',
    show: !isAuthenticated.value,
    icon: Key24Filled
  },
  {
    name: 'friends',
    path: '/friends',
    label: 'Find friends',
    show: isAuthenticated.value,
    icon: PeopleSearch24Filled
  },
  {
    name: 'settings',
    path: '/settings',
    label: 'Settings',
    show: isAuthenticated.value,
    icon: Settings24Filled
  },
  {
    name: 'logout',
    path: '/logout',
    label: 'Logout',
    show: isAuthenticated.value,
    action: onLogout,
    icon: LogOutOutlined
  }
])

const isOpen: Ref<Map<string, boolean>> = ref(new Map())

watch(route, () => {
  isOpen.value = new Map()
})

const onMyToggle = (e: ToggleEvent, name: string) => {
  isOpen.value.set(name, e.newState === 'open')
  for (const key of isOpen.value.keys()) {
    if (key !== name && e.newState === 'open') {
      isOpen.value.set(key, false)
    }
  }
}

const onLogout = async () => {
  await supabase.auth.signOut()
  router.push({
    name: 'login'
  })
}

const appName = computed(() => {
  return import.meta.env.VITE_APP_NAME
})
</script>

<template>
  <div class="navbar bg-base-100 z-10">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li
            v-for="item in menu"
            :key="item.label"
            class="mb-1 last:mb-0"
          >
            <NuxtLink
              v-if="!item.children"
              :to="item.path"
              :class="[{'active': $route.name === item.name}, 'mr-1']"
            >
              {{ item.label }}
            </NuxtLink>
            <details
              v-else
              :open="isOpen.get(item.path)"
              @toggle="onMyToggle($event, item.path)"
            >
              <summary>
                {{ item.label }}
              </summary>
              <ul class="p-2 bg-base-100 rounded-t-none">
                <li
                  v-for="childItem in item.children"
                  :key="childItem.label"
                >
                  <NuxtLink
                    to="/"
                    :class="[{'active': $route.path === childItem.path}, 'mt-1']"
                  >
                    {{ childItem.label }}
                  </NuxtLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <NuxtLink
        to="/"
        class="btn btn-ghost text-xl px-2"
      >
        {{ appName }}
      </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li
          v-for="item in menu"
          :key="item.label"
        >
          <NuxtLink
            v-if="!item.children"
            :to="item.path"
            :class="[{'active': $route.path === item.path}, 'mr-1']"
          >
            {{ item.label }}
          </NuxtLink>
          <details
            v-else
            :open="isOpen.get(item.label)"
            @toggle="onMyToggle($event, item.label)"
          >
            <summary>
              {{ item.label }}
            </summary>
            <ul class="p-2 bg-base-100 rounded-t-none">
              <li
                v-for="childItem in item.children"
                :key="childItem.label"
              >
                <NuxtLink
                  :to="childItem.path"
                  :class="[{'active': $route.path === childItem.path}, 'mt-1']"
                >
                  {{ childItem.label }}
                </NuxtLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div class="navbar-end gap-4">
      <details
        v-if="isAuthenticated.value"
        class="dropdown dropdown-end"
        :open="isOpen.get('notification')"
        @toggle="onMyToggle($event, 'notification')"
      >
        <summary class="btn btn-ghost btn-circle avatar online">
          <div class="w-10">
            <div class="flex justify-center items-center h-full">
              <Icon size="24">
                <Alert24Filled />
              </Icon>
            </div>
          </div>
        </summary>
        <div class="dropdown-content bg-base-100 rounded-box z-[1] w-72 p-2 shadow">
          <NotificationComponent />
        </div>
      </details>

      <details
        class="dropdown dropdown-end"
        :open="isOpen.get('account')"
        @toggle="onMyToggle($event, 'account')"
      >
        <summary class="btn btn-ghost btn-circle avatar">
          <div
            class="w-10 rounded-full ring ring-gray-600 ring-offset-base-100 ring-offset-1 flex items-center justify-center">
            <UserIcon v-if="!user?.photoUrl" />
            <DynamicImage
              v-else
              :src="user.user?.photoUrl"
              alt="profile"
              :loading-height="40"
              :loading-width="40"
            />
          </div>
        </summary>
        <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li v-for="menu in accountMenu.filter((m) => m.show)" :key="menu.name" class="mb-1 last:mb-0">
            <NuxtLink
              v-if="!menu.action"
              :to="menu.path"
              :class="[{'active': $route.name === menu.name}]"
            >
              <div class="flex gap-2 items-center">
                <Icon v-if="menu.icon" size="24">
                  <component :is="menu.icon" />
                </Icon>
                <span>{{ menu.label }}</span>
              </div>
            </NuxtLink>
            <a v-else @click="menu.action">
              <div class="flex gap-2">
                <Icon v-if="menu.icon" size="24">
                  <component :is="menu.icon" />
                </Icon>
                <span>{{ menu.label }}</span>
              </div>
            </a>
          </li>
        </ul>
      </details>
    </div>
  </div>
</template>
