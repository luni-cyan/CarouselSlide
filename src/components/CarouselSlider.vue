<script setup>
import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import { ref } from 'vue'
import Apples from '../assets/Carousel_Slider_Image/Apples/Apples.png'
import Background2 from '../assets/Carousel_Slider_Image/Apples/Background_Slider.png'
import Button2 from '../assets/Carousel_Slider_Image/Apples/button.png'
import Label2 from '../assets/Carousel_Slider_Image/Apples/Labels.png'
import Background3 from '../assets/Carousel_Slider_Image/PassionFruits/Background_Slider.png'
import Button3 from '../assets/Carousel_Slider_Image/PassionFruits/button.png'
import Label3 from '../assets/Carousel_Slider_Image/PassionFruits/Labels.png'
import PassionFruits from '../assets/Carousel_Slider_Image/PassionFruits/Passion_fruits.png'
import Background1 from '../assets/Carousel_Slider_Image/Pears/Background_Slider.png'
import Button1 from '../assets/Carousel_Slider_Image/Pears/button.png'
import Label1 from '../assets/Carousel_Slider_Image/Pears/Labels.png'
import Pears from '../assets/Carousel_Slider_Image/Pears/Pears.png'
import HeaderGreen from '../assets/Header/Header-green.png'
import HeaderWhite from '../assets/Header/Header-white.png'

const headerList = [HeaderGreen, HeaderWhite]
const headerIndex = ref(0)
const buttonIndex = ref(0)

const sliderIndex = ref(0)
const sliderList = [
  { fruit: PassionFruits, background: Background1, label: Label1, button: Button1 },
  { fruit: Apples, background: Background2, label: Label2, button: Button2 },
  { fruit: Pears, background: Background3, label: Label3, button: Button3 },
]
function sliderHandler() {
  const state = Flip.getState('.default-area')
  const headerImage = document.querySelector(`.header-image${headerIndex.value + 1}`)
  const buttonImage = document.querySelector(`.button-image${buttonIndex.value + 1}`)
  if (sliderIndex.value === 0) {
    gsap.to('.background-slider', { translateX: '-100%', ease: 'power1.in' })
    gsap.timeline().to('.fruit-3', { translateY: '100%', ease: 'power1.in' }).to('.fruit-2', { translateY: '100%', ease: 'power1.in' }, '<').to('.fruit-1', { translateY: '100%', ease: 'power1.in' }, '<')
    sliderIndex.value = 1

    gsap.to([headerImage, buttonImage], { opacity: 0.8 })
    headerIndex.value = 1
    buttonIndex.value = 1
  }
  else if (sliderIndex.value === 1) {
    gsap.to('.background-slider', { translateX: '-200%', ease: 'power1.in' })
    gsap.timeline().to('.fruit-3', { translateY: '-100%', ease: 'power1.out' }).to('.fruit-2', { translateY: '200%', ease: 'power1.in' }, '<').to('.fruit-1', { translateY: '200%', ease: 'power1.in' }, '<')
    sliderIndex.value = 2

    gsap.to([headerImage, buttonImage], { opacity: 0.8 })
    headerIndex.value = 1
    buttonIndex.value = 2
  }
  else if (sliderIndex.value === 2) {
    gsap.to('.background-slider', { translateX: '0%', duration: 1.1, ease: 'power1.Out' })
    gsap.timeline().to('.fruit-3', { translateY: '0%', duration: 1, ease: 'power1.in' }).to('.fruit-2', { translateY: '0%', ease: 'power1.out' }, '<').to('.fruit-1', { translateY: '0%', ease: 'power1.out' }, '<')
    sliderIndex.value = 0

    gsap.to([headerImage, buttonImage], { opacity: 0.8 })
    headerIndex.value = 0
    buttonIndex.value = 0
  }
  Flip.from(state, {
    ease: 'circ.inOut',
    onComplete: () => {
      gsap.to([headerImage, buttonImage], { opacity: 1 })
    },
  })
}
</script>

<template>
  <div class="container">
    <div class="gallery" @click="sliderHandler">
      <div class="default-area">
        <img :src="headerList[headerIndex]" :class="`header-image${headerIndex + 1}`" draggable="false">
        <div class="can">
          <h1 style="color: black;writing-mode: vertical-rl;">
            這裡放替換圖片
          </h1>
        </div>
        <div class="button">
          <img :src="sliderList[sliderIndex].button" alt="" :class="`button-image${buttonIndex + 1}`">
        </div>
      </div>

      <div v-for="(item, index) in sliderList" :key="`background_${index}`" class="background-slider">
        <img :src="item.background" class="background-image">
        <div class="label-slider">
          <img :src="item.label" class="label-image" draggable="false">
        </div>
      </div>

      <div class="fruits-gallery">
        <figure
          v-for="(item, index) in sliderList" :key="`fruit_${index}`" class="fruits-slider"
          :class="`fruit-${index + 1}`"
        >
          <img :src="item.fruit" class="fruit-image" draggable="false">
          <img src="" alt="" draggable="false">
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  width: 1440px;
  /* overflow: hidden; */
  position: relative;
  display: flex;
}

.can {
  width: 350px;
  height: 600px;
  margin-top: 100px;
  overflow: hidden;
  position: relative;
  background-image: url('../assets/can.png');
  background-repeat: no-repeat;
}

.default-area {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 1000px;
  padding: 0 25px;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.background-slider {
  width: 100%;
  margin: 0;
  flex-shrink: 0;
}

.label-slider {
  position: absolute;
  top: 0;
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fruits-gallery {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fruits-slider {
  width: 100%;
  height: 1000px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

}

.background-image,
.label-image,
.fruit-image {
  object-fit: cover;
}
</style>
