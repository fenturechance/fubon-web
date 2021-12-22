<template>
  <section class="main bg-no-repeat bg-cover pb-20" :style="{ backgroundImage: `url('${imageBackground}')` }">
    <Navigation />
    <div class="mt-44 max-wrapper">
      <h2 class="text-white text-7xl w-8 mb-4">{{ $t('exclusiveBoutiqueHotel') }}</h2>
      <p class="text-white text-xl mb-8">{{ $t('luxuryBoutiqueHotel') }}</p>
      <ul class="flex gap-2 mb-7">
        <li v-for="icon in socialList" :key="icon.id">
          <img :src="icon.image" :alt="icon.id">
        </li>
      </ul>
      <ul class="flex bg-sky-800 rounded-xl divide-x divide-sky-900">
        <li v-for="dateSelector in dateSelectorArr" class="px-10 py-6" :key="dateSelector.title">
          <p class="grey-title">{{ dateSelector.title }}</p>
          <div class="flex">
            <p class="text-white text-5xl mr-3 tracking-widest font-semibold">{{ dateSelector.date }}</p>
            <div class="mr-8">
              <p class="text-white">{{ `${dateSelector.month}, ${dateSelector.year}` }}</p>
              <p class="text-slate-50 text-sm">{{ dateSelector.day }}</p>
            </div>
          </div>
        </li>
        <li v-for="guestType in guestTypeArr" class="py-6 px-5" :key="guestType.title">
          <p class="grey-title">{{ guestType.title }}</p>
          <div class="flex">
            <img :src="imageMinus">
            <p class="text-white text-5xl px-2 font-semibold">{{ guestType.amount }}</p>
            <img :src="imagePlus">
          </div>
        </li>
        <li class="flex justify-center items-center px-6">
          <button class="bg-lime-300 rounded-3xl px-7 py-3 text-lg">{{ $t('checkAvailability') }}</button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import image_background from '@/assets/images/image_background.svg'
import image_FB from '@/assets/images/image_FB.svg'
import image_ig from '@/assets/images/image_ig.svg'
import image_twitter from '@/assets/images/image_twitter.svg'
import button_plus from '@/assets/images/button_plus.svg'
import button_minus from '@/assets/images/button_minus.svg'
import Navigation from '@/components/Navigation.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
export default {
  components: {
    Navigation
  },
  setup() {
    const { t } = useI18n()
    const imageBackground = ref(image_background)
    const imagePlus = ref(button_plus)
    const imageMinus = ref(button_minus)
    const socialList = ref([
      { id: 'fb', image: image_FB },
      { id: 'twitter', image: image_twitter },
      { id: 'ig', image: image_ig },
    ])
    const dateSelectorArr = ref([
      { title: t('arrival'), date: 18, month: 'Oct', year: 2019, day: 'Friday' },
      { title: t('departure'), date: 19, month: 'Oct', year: 2019, day: 'Saturday' },
    ])
    const guestTypeArr = ref([
      { title: t('adults'), amount: 2 },
      { title: t('children'), amount: 0 },
    ])
    return {
      imageBackground,
      socialList,
      dateSelectorArr,
      guestTypeArr,
      imagePlus,
      imageMinus
    }
  }
}
</script>
<style scoped>
.grey-title {
  @apply text-slate-50 mb-4;
}
</style>