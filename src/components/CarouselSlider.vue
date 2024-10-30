<script setup>
import { gsap } from 'gsap'
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
  { fruit: pears, background: pearsBackground, label: pearsLabel, button: pearsButton },
  { fruit: apples, background: applesBackground, label: applesLabel, button: applesButton },
  { fruit: passionFruits, background: passionFruitsBackground, label: passionFruitsLabel, button: passionFruitsButton },
]

const refs = {
  headerLogo: ref(null),
  leafGroup: ref(null),
  shadowGroup: ref(null),
  backgroundCarousel: ref(null),
  canLabels: ref(null),
  fruitSlider: ref(null),
}
const { headerLogo, leafGroup, shadowGroup, backgroundCarousel, canLabels, fruitSlider } = refs

const isAnimating = ref(false)

function sliderHandler() {
  const tl_leaf = gsap.timeline({ defaults: { ease: 'power2.inOut', duration: 0.8 } })
  const tl_shadow = gsap.timeline({ defaults: { ease: 'power2.inOut', duration: 0.8 } })
  const tl_fruit = gsap.timeline({ defaults: { ease: 'power2.inOut', duration: 0.8 } })

  if (isAnimating.value)
    return
  isAnimating.value = true

  switch (sliderIndex.value) {
    case 0:
      gsap.to(backgroundCarousel.value, { xPercent: -100, ease: 'power3.in', duration: 0.8 })
      gsap.to(canLabels.value, { x: -320, duration: 0.8, ease: 'power3.in' })

      tl_fruit.to(fruitSlider.value[0], { yPercent: 100 })
        .to(fruitSlider.value[1], { yPercent: 100 }, '<')

      tl_shadow.to(shadowGroup.value[1], { right: 0, bottom: 100 }, '<')
        .to(shadowGroup.value[2], { right: 850, bottom: 250 }, '<')

      tl_leaf.to(leafGroup.value[0], { x: 60, y: 200, rotationZ: -50, duration: 0.3 })
        .to(leafGroup.value[1], { x: -120, y: -200, rotationX: -30, duration: 0.3 }, '<')
        .to(leafGroup.value[2], { x: 140, y: 180, duration: 0.5 })
        .to(leafGroup.value[3], { x: -130, y: -120, duration: 0.5 }, '<')
        .eventCallback('onComplete', () => {
          isAnimating.value = false
          sliderIndex.value = 1
        })
      break

    case 1:
      gsap.to(backgroundCarousel.value, { xPercent: -200, ease: 'power3.in', duration: 0.8 })
      gsap.to(canLabels.value, { x: -640, duration: 0.8, ease: 'power3.in' })

      tl_fruit.to(fruitSlider.value[0], { yPercent: -100 })
        .to(fruitSlider.value[1], { yPercent: 200 }, '<')
        .to(fruitSlider.value[2], { yPercent: 200 }, '<')

      tl_shadow.to(shadowGroup.value[0], { right: 420, bottom: 250, opacity: 0, yoyo: true, repeat: 1, duration: 0.4 })
        .to(shadowGroup.value[1], { right: 1150, bottom: 50 }, '<')
        .to(shadowGroup.value[2], { right: 500, bottom: 200, opacity: 0, yoyo: true, repeat: 1, duration: 0.4 }, '<')

      tl_leaf.to(leafGroup.value[2], { x: -190, rotationY: 180 })
        .to(leafGroup.value[3], { x: 200, rotationY: 180 }, '<')
        .eventCallback('onComplete', () => {
          isAnimating.value = false
          sliderIndex.value = 2
        })
      break

    case 2:
      gsap.to(backgroundCarousel.value, { xPercent: 0, ease: 'power3.inOut', duration: 0.8 })
      gsap.to(canLabels.value, { x: 0, duration: 0.8, ease: 'power3.inOut' })

      tl_fruit.to(fruitSlider.value[2], { yPercent: 0 })
        .to(fruitSlider.value[1], { yPercent: 0 }, '<')
        .to(fruitSlider.value[0], { yPercent: 0 }, '<')

      tl_shadow.to(shadowGroup.value[0], { right: 80, bottom: 260, opacity: 0, yoyo: true, repeat: 1, duration: 0.4 })
        .to(shadowGroup.value[1], { right: 850, bottom: 250, duration: 0.8 }, '<')
        .to(shadowGroup.value[2], { right: 400, bottom: 180, opacity: 0, duration: 0.4 }, '<')
        .to(shadowGroup.value[2], { right: 200, bottom: 290, opacity: 1, duration: 0.4 }, '>')

      tl_leaf.to(leafGroup.value[2], { x: -80, y: 0, rotationX: 45, duration: 0.5 })
        .to(leafGroup.value[3], { y: 200, rotationX: -30, duration: 0.4, opacity: 0 }, '<')
        .to(leafGroup.value[0], { x: 0, y: 0, rotationX: 0, rotationY: 0, rotationZ: 0, duration: 0.8 }, '<')
        .fromTo(leafGroup.value[1], { opacity: 0 }, { x: 0, y: -200, opacity: 1, rotationX: 30, duration: 0.3 }, '<')
        .to([leafGroup.value[1], leafGroup.value[2], leafGroup.value[3]], { x: 0, y: 0, opacity: 1, rotationX: 0, rotationY: 0, rotationZ: 0, duration: 0.5 }, '>')
        .eventCallback('onComplete', () => {
          isAnimating.value = false
          sliderIndex.value = 0
        })
      break

    default:
      console.warn('Invalid slider index:', sliderIndex.value)
  }

  gsap.to(headerLogo.value, { opacity: 0.5, duration: 0.4, ease: 'circ.inOut', onComplete: () => {
    if (sliderIndex.value === 2) {
      headerIndex.value = 0
    }
    else { headerIndex.value = 1 }

    gsap.to(headerLogo.value, { opacity: 1, duration: 0.4, ease: 'circ.inOut' })
  } })
}
</script>

<template>
  <div class="area select-none">
    <div class="gallery w-1440px h-1025px overflow-hidden flex relative" @click="sliderHandler">
      <div v-for="(item, index) in sliderList" :key="`background_${index}`" ref="backgroundCarousel" class="background-carousel w-100% relative">
        <img :src="item.background" :alt="`background${index + 1}`">
        <div class="label-slider absolute inset-0 m-a flex justify-center items-center mt--50px">
          <img :src="item.label" :alt="`fruit-label${index + 1}`" draggable="false" class="label-image">
        </div>
      </div>

      <div class="fruits-slider absolute bottom-55px left-0 flex flex-col-reverse">
        <figure v-for="(item, index) in sliderList" :key="`fruit_${index}`" ref="fruitSlider" class="fruits-figure h-1000px m-0 flex justify-center items-center">
          <img :src="item.fruit" :alt="`fruit-image${index + 1}`" draggable="false">
        </figure>
      </div>

      <div class="main-area absolute inset-0 m-a mt--30px flex flex-col justify-evenly items-center">
        <div class="header w-100% flex justify-between px-40px py-20px box-border">
          <img ref="headerLogo" :src="headerList[headerIndex]" :alt="`header-logo${headerIndex + 1}`" class="header-logo flex-basis-100px" draggable="false">
          <img src="../assets/Header/Frame-1.png" alt="header-frame1" class="header-frame1 flex-basis-750px" draggable="false">
          <img src="../assets/Header/Frame-2.png" alt="header-frame2" class="header-frame2 flex-basis-250px" draggable="false">
        </div>
        <div class="shadow-group absolute inset-0 m-a">
          <img v-for="(item, index) in shadowList" :key="`shadow_${index}`" ref="shadowGroup" :src="item" :alt="`shadow-image${index + 1}`" class="shadow-image" draggable="false">
        </div>
        <div class="can w-320px h-600px mt-100px relative">
          <div class="leafs-area w-100% h-100% absolute inset-0">
            <img v-for="(item, index) in leafList" :key="`leaf_${index}`" ref="leafGroup" :src="item" :alt="`leaf-image${index + 1}`" class="leaf-image" draggable="false">
          </div>
          <div class="can-label h-100% flex">
            <img ref="canLabels" src="../assets/Labels.png" alt="can-labels-image" class="can-labels-image w-960px flex-shrink-0 object-cover" draggable="false">
          </div>
          <img src="../assets/can.png" alt="can-image" class="can-mask mix-blend-multiply absolute inset-0" draggable="false">
        </div>
        <div class="button">
          <img :src="sliderList[sliderIndex].button" :alt="`button-image${sliderIndex + 1}`" draggable="false">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.can-label {
  mask-image: url(../assets/can.png);
  mask-repeat: no-repeat;
}

.leaf-image:nth-child(1) {
  position: absolute;
  top: -120px;
  left: -60px;
}

.leaf-image:nth-child(2) {
  position: absolute;
  bottom: 30px;
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
  right: 200px;
  bottom: 290px;
}
</style>
