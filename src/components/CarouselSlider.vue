<script setup>
import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import { ref } from 'vue'
import apples from '../assets/Carousel_Slider_Image/Apples/Apples.png'
import applesBackground from '../assets/Carousel_Slider_Image/Apples/Background_Slider.png'
import applesButton from '../assets/Carousel_Slider_Image/Apples/button.png'
import applesLabel from '../assets/Carousel_Slider_Image/Apples/Labels.png'
import passionFruitsBackground from '../assets/Carousel_Slider_Image/PassionFruits/Background_Slider.png'
import passionFruitsButton from '../assets/Carousel_Slider_Image/PassionFruits/button.png'
import passionFruitsLabel from '../assets/Carousel_Slider_Image/PassionFruits/Labels.png'
import passionFruits from '../assets/Carousel_Slider_Image/PassionFruits/Passion_fruits.png'
import pearsBackground from '../assets/Carousel_Slider_Image/Pears/Background_Slider.png'
import pearsButton from '../assets/Carousel_Slider_Image/Pears/button.png'
import pearsLabel from '../assets/Carousel_Slider_Image/Pears/Labels.png'
import pears from '../assets/Carousel_Slider_Image/Pears/Pears.png'
import fruityGreen from '../assets/Header/Fruity-green.png'
import fruityWhite from '../assets/Header/Fruity-white.png'
import leafGroup1Image1 from '../assets/leafGroup1Image1.png'
import leafGroup1Image2 from '../assets/leafGroup1Image2.png'
import leafGroup2Image1 from '../assets/leafGroup2Image1.png'
import leafGroup2Image2 from '../assets/leafGroup2Image2.png'
import shadow1 from '../assets/shadow-1.png'
import shadow2 from '../assets/shadow-2.png'
import shadow3 from '../assets/shadow-3.png'

const headerList = [fruityGreen, fruityWhite]
const headerIndex = ref(0)
const shadowList = [shadow1, shadow2, shadow3]
const leafList = [leafGroup1Image1, leafGroup1Image2, leafGroup2Image1, leafGroup2Image2]
const sliderIndex = ref(0)
const sliderList = [
  { fruit: passionFruits, background: pearsBackground, label: pearsLabel, button: pearsButton },
  { fruit: apples, background: applesBackground, label: applesLabel, button: applesButton },
  { fruit: pears, background: passionFruitsBackground, label: passionFruitsLabel, button: passionFruitsButton },
]
const refs = {
  mainArea: ref(null),
  headerImage: ref(null),
  leafArray: ref(null),
  shadowArray: ref(null),
  backgroundSlider: ref(null),
  canLabels: ref(null),
  fruitArray: ref(null),
}
const { mainArea, headerImage, leafArray, shadowArray, backgroundSlider, canLabels, fruitArray } = refs

function sliderHandler() {
  const state = Flip.getState(mainArea.value)
  const tl = gsap.timeline({ default: { ease: 'power2.inOut' } })
  if (sliderIndex.value === 0) {
    tl.to(leafArray.value[0], { x: 60, y: 200, rotationZ: -50 })
      .to(leafArray.value[1], { x: -120, y: -200 }, '<')
      .to(leafArray.value[2], { x: 140, y: 170 })
      .to(leafArray.value[3], { x: -140, y: -110 }, '<')
      .to(shadowArray.value[1], { right: 0, bottom: 100 }, '<')
      .to(shadowArray.value[2], { right: 850, bottom: 250 }, '<')
    gsap.to(backgroundSlider.value, { xPercent: -100, ease: 'power2.in' })
    gsap.to(canLabels.value, { x: -320 })
    gsap.timeline().to(fruitArray.value[2], { yPercent: 100, ease: 'power2.in' }).to(fruitArray.value[1], { yPercent: 100, ease: 'power2.in' }, '<').to(fruitArray.value[0], { yPercent: 100, ease: 'power2.in' }, '<')
    gsap.to(headerImage.value, { opacity: 0.6 })

    sliderIndex.value = 1
    headerIndex.value = 1
  }
  else if (sliderIndex.value === 1) {
    tl.to(leafArray.value[2], { x: -200, rotationY: 180 })
      .to(leafArray.value[3], { x: 200, rotationY: 180 }, '<')
      .to(shadowArray.value[0], { right: 170, bottom: 210, yoyo: true, repeat: 1, duration: 0.2 }, '<')
      .to(shadowArray.value[1], { right: 1150, bottom: 50 }, '<')
      .to(shadowArray.value[2], { right: 400, bottom: 200, yoyo: true, repeat: 1, duration: 0.3 }, '<')

    gsap.to(backgroundSlider.value, { xPercent: -200, ease: 'power2.in' })
    gsap.to(canLabels.value, { x: -640 })
    gsap.timeline().to(fruitArray.value[2], { yPercent: -100, ease: 'power2.out' }).to(fruitArray.value[1], { yPercent: 200, ease: 'power2.in' }, '<').to(fruitArray.value[0], { yPercent: 200, ease: 'power2.in' }, '<')
    gsap.to(headerImage.value, { opacity: 0.6 })

    sliderIndex.value = 2
    headerIndex.value = 1
  }
  else if (sliderIndex.value === 2) {
    tl.to(leafArray.value[2], { x: -80, y: 0, rotationX: 45 }, '<')
      .to(leafArray.value[3], { y: 180, rotationX: -45 }, '<')
      .set(leafArray.value[1], { x: 0, rotationX: -90 })
      .to(leafArray.value[0], { x: 0, y: 0, rotationX: 0, rotationY: 0, rotationZ: 0 })
      .to([leafArray.value[0], leafArray.value[1], leafArray.value[2], leafArray.value[3]], { x: 0, y: 0, rotationX: 0, rotationY: 0, rotationZ: 0 }, '<')
      .to(shadowArray.value[0], { right: 80, bottom: 220 }, '<')
      .to(shadowArray.value[1], { right: 850, bottom: 250 }, '<')
      .to(shadowArray.value[2], { right: 350, bottom: 180 }, '<')
      .set(shadowArray.value[0], { right: 0, bottom: 220 })
      .set(shadowArray.value[2], { right: 330, bottom: 220 }, '<')
      .to(shadowArray.value[0], { right: 100, bottom: 170 }, '<')
      .to(shadowArray.value[2], { right: 180, bottom: 300 }, '<')

    gsap.to(backgroundSlider.value, { xPercent: 0, ease: 'power2.Out' })
    gsap.to(canLabels.value, { x: 0 })
    gsap.timeline().to(fruitArray.value[2], { yPercent: 0, ease: 'power2.in' }).to(fruitArray.value[1], { yPercent: 0, ease: 'power2.out' }, '<').to(fruitArray.value[0], { yPercent: 0, ease: 'power2.out' }, '<')
    gsap.to(headerImage.value, { opacity: 0.6 })

    sliderIndex.value = 0
    headerIndex.value = 0
  }
  Flip.from(state, {
    ease: 'circ.inOut',
    onComplete: () => {
      gsap.to(headerImage.value, { opacity: 1 })
    },
  })
}
</script>

<template>
  <div class="container">
    <div class="gallery" @click="sliderHandler">
      <div ref="mainArea" class="main-area">
        <div class="header">
          <img ref="headerImage" :src="headerList[headerIndex]" alt="header-image" class="header-image" draggable="false">
          <img src="../assets/Header/Frame-1.png" class="header-frame-1">
          <img src="../assets/Header/Frame-2.png" class="header-frame-2">
        </div>
        <div class="shadow">
          <img
            v-for="(item, index) in shadowList" :key="`shadow_${index}`" ref="shadowArray" :src="item" :alt="`shadow-image${index + 1}`" class="shadow-image"
            draggable="false"
          >
        </div>
        <div class="can">
          <div class="leafs-area">
            <img
              v-for="(item, index) in leafList" :key="`leaf_${index}`" ref="leafArray" :src="item" :alt="`leaf-image${index + 1}`" class="leaf-image"
              draggable="false"
            >
          </div>
          <div class="can-label">
            <img ref="canLabels" src="../assets/Labels.png" alt="can-labels-image" class="can-labels-image" draggable="false">
          </div>
          <img src="../assets/can.png" alt="can-image" class="can-mask" draggable="false">
        </div>
        <div class="button">
          <img :src="sliderList[sliderIndex].button" :alt="`button-image${sliderIndex + 1}`" draggable="false">
        </div>
      </div>

      <div v-for="(item, index) in sliderList" :key="`background_${index}`" ref="backgroundSlider" class="background-slider">
        <img :src="item.background" :alt="`background${index}`">
        <div class="label-slider">
          <img :src="item.label" :alt="`fruit-label${index}`" draggable="false">
        </div>
      </div>

      <div class="fruits-slider">
        <figure
          v-for="(item, index) in sliderList" :key="`fruit_${index}`" ref="fruitArray"
          class="fruits-figure"
        >
          <img :src="item.fruit" alt="fruit-image" draggable="false">
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
.header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  box-sizing: border-box;
}
.header-image{
  flex:0 1 100px;
}
.header-frame-1{
  flex:0 1 750px;
}
.header-frame-2{
  flex:0 1 250px;
}

.can {
  width: 320px;
  height: 600px;
  margin-top: 100px;
  position: relative;
}

.can-mask {
  width: 100%;
  mix-blend-mode: multiply;
  position: absolute;
  inset: 0;
}

.can-label {
  height: 100%;
  mask-image: url(../assets/can.png);
  mask-repeat: no-repeat;
  display: flex;
  align-items: center;
}

.can-labels-image {
  width: 960px;
  height: auto;
}

.leafs-area {
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
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
  flex-shrink: 0;
  position: relative;
}

.label-slider {
  position: absolute;
  inset: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fruits-slider {
  position: absolute;
  bottom: 0;
  left: 0;
}

.fruits-figure {
  height: 1000px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
