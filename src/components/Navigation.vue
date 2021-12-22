<template>
  <nav>
    <ul class="flex">
      <li v-for="item in navigationList" :key="item.id">{{ item.title }}</li>
    </ul>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
