<template>
  <div>
    <section class="main bg-no-repeat bg-cover sm:pb-20 sm:h-auto relative" :style="{ backgroundImage: `url('${imageBackground}')` }">
      <Navigation />
      <div class="mt-12 sm:mt-32 max-wrapper">
        <h2 class="text-white w-8 mb-4 title-size sm:text-6xl text-5xl">{{ $t('exclusiveBoutiqueHotel') }}</h2>
        <p class="text-white sm:text-base text-lg mb-8">{{ $t('luxuryBoutiqueHotel') }}</p>
        <ul class="flex gap-2 mb-12">
          <li v-for="icon in socialList" :key="icon.id">
            <img :src="icon.image" :alt="icon.id">
          </li>
        </ul>
        <ul class="lg:flex-nowrap sm:flex sm:flex-wrap bg-sky-800 rounded-xl relative shadow-lg z-10">
          <li v-for="(dateSelector, index) in dateSelectorArr" class="px-10 py-6 lg:w-1/4 sm:w-1/2 w-full list-item-border" :key="dateSelector.title" :class="{ 'sm:border-r': index === 0}">
            <p class="gray-title">{{ dateSelector.title }}</p>
            <div class="flex">
              <p class="text-white text-5xl mr-3 tracking-widest font-semibold">{{ dateSelector.date }}</p>
              <div class="mr-3">
                <p class="text-white">{{ `${dateSelector.month}, ${dateSelector.year}` }}</p>
                <p class="text-slate-50 text-xs">{{ dateSelector.day }}</p>
              </div>
              <img :src="buttonOnlyDropDown" alt="dropdown">
            </div>
          </li>
          <li v-for="(guestType, index) in guestTypeArr" class="py-6 px-10 lg:w-1/8 sm:w-1/4 xs:w-1/2 inline-flex flex-col list-item-border sm:border-r" :key="guestType.title" :class="{ 'border-r': index === 0,  }">
            <p class="gray-title text-center sm:text-left md:text-center text-sm">{{ guestType.title }}</p>
            <div class="flex justify-center">
              <img :src="buttonMinus">
              <p class="text-white text-5xl px-2 font-semibold">{{ guestType.amount }}</p>
              <img :src="buttonPlus">
            </div>
          </li>
          <li class="flex justify-center items-center px-6 flex-grow py-12">
            <button class="bg-lime-300 rounded-3xl px-7 py-3 text-lg">{{ $t('checkAvailability') }}</button>
          </li>
          <button class="absolute w-[48px] h-[48px] bg-contain bg-no-repeat left-1/2 transform -translate-x-1/2 -bottom-[24px] border-none shadow-lg rounded-full" :style="{ backgroundImage: `url('${buttonDropDown}')` }"></button>
        </ul>
        <div class="bg-cyan-200 h-60 sm:hidden absolute -bottom-1 w-full left-0 z-0"></div>
      </div>
    </section>
    <section class="bg-cyan-200 md:h-screen md:min-h-[50rem] h-auto overflow-hidden md:pt-0">
      <div class="md:flex h-full max-wrapper md:items-center md:mt-0 mb-32 md:mb-0">
        <div class="md:w-1/2 pt-32">
          <h2 class="title-size md:text-5xl text-4xl mb-4">{{ $t('luxuryPlaza') }}</h2>
          <h2 class="title-size md:text-5xl text-4xl">{{ $t('HotelForYou') }}</h2>
          <p class="text-gray-300 md:text-base mb-8 mt-8 max-w-sm text-lg">{{ $t('distantOrbHasPowerToRaiseAndPurifyOurThoughtsLikeAStrainOfSacredMusic') }}</p>
          <button class="btn-size ring-gray-200">{{ $t('aboutUs') }}</button>
        </div>
        <div :style="{ backgroundImage: `url('${imageItem}')`}" class="bg-center w-full md:w-1/2 bg-no-repeat md:pt-[49%] pt-[150%] relative bg-cover rounded-3xl overflow-hidden shadow-2xl mt-20 md:mt-0">
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
    <footer class="bg-sky-800 lg:h-72">
      <div class="lg:flex max-wrapper h-full items-center justify-between py-12 lg:py-0">
        <div>
          <h2 class="text-white text-5xl mb-8 font-semibold">{{ $t('title') }}</h2>
          <ul class="lg:flex gap-7">
            <li v-for="contactMethod in contactMethodArr" :key="contactMethod.id" class="flex mb-2">
              <img :src="contactMethod.image" :alt="contactMethod.id" class="w-4">
              <p :class="contactMethod.color" class="ml-3">{{ contactMethod.text }}</p>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-white text-2xl mb-2 mt-8 lg:mt-0">{{ $t('subscribe') }}</p>
          <input type="text" :placeholder="$t('email')" class="px-4 py-2 min-w-[274px] border-gray-300 w-full">
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
import button_onlyDropDown from '@/assets/images/button_onlyDropDown.svg'
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
    const buttonOnlyDropDown = ref(button_onlyDropDown)
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
      contactMethodArr,
      buttonOnlyDropDown
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
.list-item-border {
  @apply border-sky-900 lg:border-r border-b;
}
</style>