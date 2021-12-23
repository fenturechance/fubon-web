<template>
  <nav class="flex spa justify-between pt-4 items-center max-wrapper">
    <h1 class="text-4xl text-white font-semibold">{{ title }}</h1>
    <ul class="lg:gap-8 text-lg text-white none hidden lg:flex">
      <li v-for="item in navigationList" :key="item.id" class="cursor-pointer">{{ item.title }}</li>
    </ul>
    <div class="flex sm:gap-4 gap-2">
      <button class="btn-size ring-white text-white ring-opacity-30 whitespace-nowrap">{{ $t('signUp') }}</button>
      <img :src="buttonMenu" alt="menu" class="lg:hidden">
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import button_menu from '@/assets/images/button_menu.svg'
const { t } = useI18n()
const title = ref(t('title'))
const navigationList = ref([
  { id: 'about', title: t('menu.about') },
  { id: 'service', title: t('menu.service') },
  { id: 'rooms', title: t('menu.rooms') },
  { id: 'blog', title: t('menu.blog') },
  { id: 'contact', title: t('menu.contact') },
])
const buttonMenu = ref(button_menu)
</script>
<script>
export default {

}
</script>
<style>
</style>
