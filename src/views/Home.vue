<template>
  <div>
    <section class="main bg-no-repeat bg-cover pb-20" :style="{ backgroundImage: `url('${imageBackground}')` }">
      <Navigation />
      <div class="mt-12 sm:mt-32 max-wrapper">
        <h2 class="text-white w-8 mb-4 title-size sm:text-6xl text-5xl">{{ $t('exclusiveBoutiqueHotel') }}</h2>
        <p class="text-white sm:text-base text-lg mb-8">{{ $t('luxuryBoutiqueHotel') }}</p>
        <ul class="flex gap-2 mb-12">
          <li v-for="icon in socialList" :key="icon.id">
            <img :src="icon.image" :alt="icon.id">
          </li>
        </ul>
        <ul class="flex bg-sky-800 rounded-xl divide-x divide-sky-900 relative">
          <li v-for="dateSelector in dateSelectorArr" class="px-10 py-6 w-1/4" :key="dateSelector.title">
            <p class="gray-title">{{ dateSelector.title }}</p>
            <div class="flex">
              <p class="text-white text-5xl mr-3 tracking-widest font-semibold">{{ dateSelector.date }}</p>
              <div class="mr-8">
                <p class="text-white">{{ `${dateSelector.month}, ${dateSelector.year}` }}</p>
                <p class="text-slate-50 text-sm">{{ dateSelector.day }}</p>
              </div>
            </div>
          </li>
          <li v-for="guestType in guestTypeArr" class="py-6 px-10 w-1/8" :key="guestType.title">
            <p class="gray-title">{{ guestType.title }}</p>
            <div class="flex">
              <img :src="buttonMinus">
              <p class="text-white text-5xl px-2 font-semibold">{{ guestType.amount }}</p>
              <img :src="buttonPlus">
            </div>
          </li>
          <li class="flex justify-center items-center px-6 flex-grow">
            <button class="bg-lime-300 rounded-3xl px-7 py-3 text-lg">{{ $t('checkAvailability') }}</button>
          </li>
          <button class="absolute w-[48px] h-[48px] bg-contain bg-no-repeat left-1/2 transform -translate-x-1/2 -bottom-[24px] border-none" :style="{ backgroundImage: `url('${buttonDropDown}')` }"></button>
        </ul>
      </div>
    </section>
    <section class="bg-cyan-200 h-screen">
      <div class="flex max-wrapper items-center h-full">
        <div class="w-1/2 pt-20">
          <h2 class="title-size text-5xl">{{ $t('luxuryPlaza') }}</h2>
          <h2 class="title-size text-5xl">{{ $t('HotelForYou') }}</h2>
          <p class="text-gray-300 text-base mb-8 mt-8 max-w-sm">{{ $t('distantOrbHasPowerToRaiseAndPurifyOurThoughtsLikeAStrainOfSacredMusic') }}</p>
          <button class="btn-size ring-gray-200">{{ $t('aboutUs') }}</button>
        </div>
        <div :style="{ backgroundImage: `url('${imageItem}')` }" class="w-1/2 bg-no-repeat pt-[49%] relative bg-cover rounded-3xl overflow-hidden shadow-2xl">
          <div class="bg-white absolute bottom-0 w-full px-6 py-8 flex items-center">
            <button :style="{ backgroundImage: `url('${buttonPlayer}')` }" class="w-[80px] h-[80px] bg-no-repeat"></button>
            <div class="ml-4">
              <p class="text-xl">{{ $t('playVideo') }}</p>
              <p class="text-gray-300">{{ videoLength }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="bg-sky-800 h-72">
      <div class="flex max-wrapper h-full items-center justify-between">
        <div>
          <h2 class="text-white text-5xl mb-8">{{ $t('title') }}</h2>
          <ul class="flex gap-7">
            <li v-for="contactMethod in contactMethodArr" :key="contactMethod.id" class="flex">
              <img :src="contactMethod.image" :alt="contactMethod.id">
              <p :class="contactMethod.color" class="ml-3">{{ contactMethod.text }}</p>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-white text-2xl mb-2">{{ $t('subscribe') }}</p>
          <input type="text" :placeholder="$t('email')" class="px-4 py-2 min-w-[274px] border-gray-300">
          <p class="text-gray-500 text-sm mt-2">{{ $t('noSpamOnlyProfit') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import image_background from '@/assets/images/image_background.svg'
import image_FB from '@/assets/images/image_FB.svg'
import image_ig from '@/assets/images/image_ig.svg'
import image_twitter from '@/assets/images/image_twitter.svg'
import image_item from '@/assets/images/image_item.svg'
import image_phone from '@/assets/images/image_phone.svg'
import image_mail from '@/assets/images/image_mail.svg'
import image_location from '@/assets/images/image_location.svg'
import button_dropDown from '@/assets/images/button_dropDown.svg'
import button_plus from '@/assets/images/button_plus.svg'
import button_minus from '@/assets/images/button_minus.svg'
import button_player from '@/assets/images/button_player.svg'
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
    const buttonPlus = ref(button_plus)
    const buttonMinus = ref(button_minus)
    const buttonDropDown = ref(button_dropDown)
    const imageItem = ref(image_item)
    const buttonPlayer = ref(button_player)
    const videoLength = ref('2:34')
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
    const contactMethodArr = ref([
      { id: 'phone', text: '(4321) 0987-654-320', color: 'text-white', image: image_phone },
      { id: 'email', text: 'support@hotel.com', color: 'text-white', image: image_mail },
      { id: 'location', text: '33 Jaja Park Rd, Yellow, USA', color: 'text-gray-500', image: image_location },
    ])
    return {
      imageBackground,
      socialList,
      dateSelectorArr,
      guestTypeArr,
      buttonPlus,
      buttonMinus,
      buttonDropDown,
      imageItem,
      buttonPlayer,
      videoLength,
      contactMethodArr
    }
  }
}
</script>
<style scoped>
.gray-title {
  @apply text-slate-50 mb-4;
}
.title-size {
  @apply font-semibold tracking-wider;
}
</style>