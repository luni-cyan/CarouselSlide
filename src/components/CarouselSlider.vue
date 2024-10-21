<script setup>
import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import { ref } from 'vue'
import Apples from '../assets/Carousel_Slider_Image/Apples/Apples.png'
import ApplesBackground from '../assets/Carousel_Slider_Image/Apples/Background_Slider.png'
import ApplesButton from '../assets/Carousel_Slider_Image/Apples/button.png'
import ApplesLabel from '../assets/Carousel_Slider_Image/Apples/Labels.png'
import PassionFruitsBackground from '../assets/Carousel_Slider_Image/PassionFruits/Background_Slider.png'
import PassionFruitsButton from '../assets/Carousel_Slider_Image/PassionFruits/button.png'
import PassionFruitsLabel from '../assets/Carousel_Slider_Image/PassionFruits/Labels.png'
import PassionFruits from '../assets/Carousel_Slider_Image/PassionFruits/Passion_fruits.png'
import PearsBackground from '../assets/Carousel_Slider_Image/Pears/Background_Slider.png'
import PearsButton from '../assets/Carousel_Slider_Image/Pears/button.png'
import PearsLabel from '../assets/Carousel_Slider_Image/Pears/Labels.png'
import Pears from '../assets/Carousel_Slider_Image/Pears/Pears.png'
import HeaderGreen from '../assets/Header-1.png'
import HeaderWhite from '../assets/Header-2.png'
import leafGroup1Image1 from '../assets/leafGroup1Image1.png'
import leafGroup1Image2 from '../assets/leafGroup1Image2.png'
import leafGroup2Image1 from '../assets/leafGroup2Image1.png'
import leafGroup2Image2 from '../assets/leafGroup2Image2.png'
import shadow1 from '../assets/shadow-1.png'
import shadow2 from '../assets/shadow-2.png'
import shadow3 from '../assets/shadow-3.png'

const headerList = [HeaderGreen, HeaderWhite]
const headerIndex = ref(0)
const leafList = [leafGroup1Image1, leafGroup1Image2, leafGroup2Image1, leafGroup2Image2]
const shadowList = [shadow1, shadow2, shadow3]
const sliderIndex = ref(0)
const sliderList = [
  { fruit: PassionFruits, background: PearsBackground, label: PearsLabel, button: PearsButton },
  { fruit: Apples, background: ApplesBackground, label: ApplesLabel, button: ApplesButton },
  { fruit: Pears, background: PassionFruitsBackground, label: PassionFruitsLabel, button: PassionFruitsButton },
]

function sliderHandler() {
  const state = Flip.getState('.main-area')
  const headerImage = document.querySelector(`.header-image${headerIndex.value + 1}`)
  const buttonImage = document.querySelector(`.button-image${sliderIndex.value + 1}`)
  const leafImage = gsap.utils.toArray('.leaf-image')
  const leafGroup1Image1 = leafImage[0]
  const leafGroup1Image2 = leafImage[1]
  const leafGroup2Image1 = leafImage[2]
  const leafGroup2Image2 = leafImage[3]
  const shadowList = gsap.utils.toArray('.shadow-image')
  const shadowImage1 = shadowList[0]
  const shadowImage2 = shadowList[1]
  const shadowImage3 = shadowList[2]

  const tl = gsap.timeline({ default: { ease: 'power2.inOut' } })
  if (sliderIndex.value === 0) {
    tl.to(leafGroup1Image1, { x: 60, y: 200, rotationZ: -50 })
      .to(leafGroup1Image2, { x: -120, y: -200 }, '<')
      .to(leafGroup2Image1, { x: 140, y: 170 })
      .to(leafGroup2Image2, { x: -140, y: -110 }, '<')
    tl.to(shadowImage2, { right: 0, bottom: 100 })
      .to(shadowImage3, { right: 850, bottom: 250 }, '<')
    gsap.to('.background-slider', { xPercent: -100, ease: 'power2.in' })
    gsap.to('.can-labels', { x: -320 })
    gsap.timeline().to('.fruit-3', { yPercent: 100, ease: 'power2.in' }).to('.fruit-2', { yPercent: 100, ease: 'power2.in' }, '<').to('.fruit-1', { yPercent: 100, ease: 'power2.in' }, '<')
    gsap.to([headerImage, buttonImage], { opacity: 0.8 })
    sliderIndex.value = 1
    headerIndex.value = 1
  }
  else if (sliderIndex.value === 1) {
    tl.to(leafGroup2Image1, { x: -200, rotationY: 180 })
      .to(leafGroup2Image2, { x: 200, rotationY: 180 }, '<')
    tl.to(shadowImage1, { right: 170, bottom: 210, yoyo: true, repeat: 1, duration: 0.2 })
      .to(shadowImage2, { right: 1150, bottom: 50 }, '<')
      .to(shadowImage3, { right: 400, bottom: 200, yoyo: true, repeat: 1, duration: 0.3 }, '<')

    gsap.to('.background-slider', { xPercent: -200, ease: 'power2.in' })
    gsap.to('.can-labels', { x: -640 })
    gsap.timeline().to('.fruit-3', { yPercent: -100, ease: 'power2.out' }).to('.fruit-2', { yPercent: 200, ease: 'power2.in' }, '<').to('.fruit-1', { yPercent: 200, ease: 'power2.in' }, '<')
    gsap.to([headerImage, buttonImage], { opacity: 0.8 })

    sliderIndex.value = 2
    headerIndex.value = 1
  }
  else if (sliderIndex.value === 2) {
    tl.to(leafGroup2Image1, { x: -80, y: 0, rotationX: 45 }, '<').to(leafGroup2Image2, { y: 180, rotationX: -45 }, '<').set(leafGroup1Image2, { x: 0, rotationX: -90 }).to(leafGroup1Image1, { x: 0, y: 0, rotationX: 0, rotationY: 0, rotationZ: 0 }).to([leafGroup1Image1, leafGroup1Image2, leafGroup2Image1, leafGroup2Image2], { x: 0, y: 0, rotationX: 0, rotationY: 0, rotationZ: 0 }, '<')
    tl.to(shadowImage1, { right: 80, bottom: 220 }).to(shadowImage2, { right: 850, bottom: 250 }, '<').to(shadowImage3, { right: 350, bottom: 180 }, '<').set(shadowImage1, { right: 0, bottom: 220 }).set(shadowImage3, { right: 330, bottom: 220 }, '<').to(shadowImage1, { right: 100, bottom: 170 }).to(shadowImage3, { right: 180, bottom: 300 }, '<')

    gsap.to('.background-slider', { xPercent: 0, ease: 'power2.Out' })
    gsap.to('.can-labels', { x: 0 })
    gsap.timeline().to('.fruit-3', { yPercent: 0, ease: 'power2.in' }).to('.fruit-2', { yPercent: 0, ease: 'power2.out' }, '<').to('.fruit-1', { yPercent: 0, ease: 'power2.out' }, '<')
    gsap.to([headerImage, buttonImage], { opacity: 0.8 })

    sliderIndex.value = 0
    headerIndex.value = 0
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
      <div class="main-area">
        <img :src="headerList[headerIndex]" :class="`header-image${headerIndex + 1}`" draggable="false">
        <div class="shadow">
          <img
            v-for="(item, index) in 3" :key="`shadow_${index}`" :src="shadowList[item - 1]" alt="" class="shadow-image"
            draggable="false"
          >
        </div>
        <div class="can">
          <div class="leafs-area">
            <img
              v-for="(item, index) in 4" :key="`leaf_${index}`" :src="leafList[item - 1]" class="leaf-image"
              draggable="false"
            >
          </div>
          <div class="can-mask">
            <img src="../assets/Labels.png" alt="" class="can-labels" draggable="false">
          </div>
          <img src="../assets/can.png" alt="" class="can-image" draggable="false">
        </div>
        <div class="button">
          <img :src="sliderList[sliderIndex].button" alt="" :class="`button-image${sliderIndex + 1}`" draggable="false">
        </div>
      </div>

      <div v-for="(item, index) in sliderList" :key="`background_${index}`" class="background-slider">
        <img :src="item.background">
        <div class="label-slider">
          <img :src="item.label" draggable="false">
        </div>
      </div>

      <div class="fruits-gallery">
        <figure
          v-for="(item, index) in sliderList" :key="`fruit_${index}`" class="fruits-slider"
          :class="`fruit-${index + 1}`"
        >
          <img :src="item.fruit" draggable="false">
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  width: 1440px;
  height: 1000px;
  overflow: hidden;
  position: relative;
  display: flex;
}

.can {
  width: 320px;
  height: 600px;
  margin-top: 100px;
  position: relative;
}

.can-image {
  width: 100%;
  height: auto;
  mix-blend-mode: multiply;
  position: absolute;
  top: 0;
  left: 0;
}

.can-mask {
  width: 100%;
  height: 100%;
  mask-image: url(../assets/can.png);
  mask-repeat: no-repeat;
  display: flex;
  align-items: center;
}

.can-labels {
  width: 960px;
  height: auto;
}

.main-area {
  position: absolute;
  inset: 0;
  margin: auto;
  margin-top: -30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.shadow {
  position: absolute;
  inset: 0;
  margin: auto;
}

.shadow-image:nth-child(1) {
  position: absolute;
  right: 100px;
  bottom: 170px;
}

.shadow-image:nth-child(2) {
  position: absolute;
  right: 850px;
  bottom: 250px;
}

.shadow-image:nth-child(3) {
  position: absolute;
  right: 180px;
  bottom: 300px;
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

.leafs-area {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  perspective: 1000px;
}

.leaf-image {
  transform-style: preserve-3d;
}

.leaf-image:nth-child(1) {
  position: absolute;
  top: -120px;
  left: -60px;
}

.leaf-image:nth-child(2) {
  position: absolute;
  bottom: 60px;
  right: -80px;
}

.leaf-image:nth-child(3) {
  position: absolute;
  bottom: 250px;
  right: 60px;
}

.leaf-image:nth-child(4) {
  position: absolute;
  top: 60px;
  left: 40px;
}
</style>
