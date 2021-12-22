<template>
  <nav class="flex spa justify-between pt-4 max-w-7xl m-auto items-center">
    <h1 class="text-4xl">{{ title }}</h1>
    <ul class="flex gap-8 text-lg">
      <li v-for="item in navigationList" :key="item.id">{{ item.title }}</li>
    </ul>
    <button class="text-lg ring-1 px-8 py-1 rounded-3xl ring-white">{{ $t('signUp') }}</button>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const title = ref(t('title'))
const navigationList = ref([
  { id: 'about', title: t('menu.about') },
  { id: 'service', title: t('menu.service') },
  { id: 'rooms', title: t('menu.rooms') },
  { id: 'blog', title: t('menu.blog') },
  { id: 'contact', title: t('menu.contact') },
])
</script>
<script>
export default {

}
</script>
<style>
</style>
