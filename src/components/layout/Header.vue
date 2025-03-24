<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Bars4Icon } from '@heroicons/vue/24/solid'

const menulinks = ref([
  {
    path: '/',
    title: 'overview',
    children: [
      { path: '/add', title: 'add new medication' },
      { path: '/account', title: 'account' },
    ],
  },
  {
    path: '/info',
    title: 'more info',
    children: [
      { path: '/info/docs', title: 'docs' },
      { path: '/info/about', title: 'about' },
    ],
  },
])
</script>

<template>
  <header>
    <div class="container max-w-5xl mx-auto md:max-w-7xl">
      <div class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn lg:hidden">
              <Bars4Icon class="size-6 text-secondary" />
            </div>

            <!-- logo -->
            <div class="site-logo">
              <RouterLink to="/">
                <img
                  alt="MedsMinder logo"
                  class="logo"
                  src="@/assets/logo.png"
                  width="80"
                />
              </RouterLink>
            </div>

            <!-- main menu -->
            <ul
              class="p-2 mt-3 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
              tabindex="0"
            >
              <li v-for="link in menulinks" :key="link.path">
                <RouterLink :to="link.path">{{ link.title }}</RouterLink>

                <ul v-if="link.children?.length" class="p2">
                  <li v-for="child in link.children" :key="child.path">
                    <RouterLink :to="child.path">{{ child.title }}</RouterLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!-- mobile menu -->
        <div class="hidden navbar-center lg:flex">
          <ul class="px-1 menu menu-horizontal">
            <li v-for="link in menulinks" :key="link.path">
              <details>
                <summary>{{ link.title }}</summary>
                <ul v-if="link.children.length" class="p-2">
                  <li v-for="child in link.children" :key="child.path">
                    <RouterLink :to="child.path">
                      {{ child.title }}
                    </RouterLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <!-- account links -->
        <div class="navbar-end">
          <a class="btn btn-accent">Add new</a>
        </div>
      </div>
    </div>
  </header>
</template>
