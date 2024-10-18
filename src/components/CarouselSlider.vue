<script setup>
import { gsap } from 'gsap'
import { Flip } from 'gsap/all'
import { ref } from 'vue'
import Apples from '../assets/Carousel_Slider_Image/Apples/Apples.png'
import Background2 from '../assets/Carousel_Slider_Image/Apples/Background_Slider.png'
import Button2 from '../assets/Carousel_Slider_Image/Apples/button.png'
import Label2 from '../assets/Carousel_Slider_Image/Apples/Labels.png'
import ApplesLeaf1 from '../assets/Carousel_Slider_Image/Apples/Mask_group.png'
import ApplesLeaf2 from '../assets/Carousel_Slider_Image/Apples/Mask_group_1.png'
import Background3 from '../assets/Carousel_Slider_Image/PassionFruits/Background_Slider.png'
import Button3 from '../assets/Carousel_Slider_Image/PassionFruits/button.png'
import Label3 from '../assets/Carousel_Slider_Image/PassionFruits/Labels.png'
import PassionFruitsLeaf1 from '../assets/Carousel_Slider_Image/PassionFruits/Mask_group.png'
import PassionFruitsLeaf2 from '../assets/Carousel_Slider_Image/PassionFruits/Mask_group_1.png'
import PassionFruits from '../assets/Carousel_Slider_Image/PassionFruits/Passion_fruits.png'
import Background1 from '../assets/Carousel_Slider_Image/Pears/Background_Slider.png'
import Button1 from '../assets/Carousel_Slider_Image/Pears/button.png'
import Label1 from '../assets/Carousel_Slider_Image/Pears/Labels.png'
import PearsLeaf1 from '../assets/Carousel_Slider_Image/Pears/Mask_group.png'
import PearsLeaf2 from '../assets/Carousel_Slider_Image/Pears/Mask_group_1.png'
import Pears from '../assets/Carousel_Slider_Image/Pears/Pears.png'
import HeaderGreen from '../assets/Header/Header-green.png'
import HeaderWhite from '../assets/Header/Header-white.png'

const headerList = [HeaderGreen, HeaderWhite]
const headerIndex = ref(0)
const leafList = [PearsLeaf1, PearsLeaf2, ApplesLeaf1, ApplesLeaf2]
const sliderIndex = ref(0)
const sliderList = [
  { fruit: PassionFruits, background: Background1, label: Label1, button: Button1 },
  { fruit: Apples, background: Background2, label: Label2, button: Button2 },
  { fruit: Pears, background: Background3, label: Label3, button: Button3 },
]

function sliderHandler() {
  const state = Flip.getState('.default-area')
  const headerImage = document.querySelector(`.header-image${headerIndex.value + 1}`)
  const buttonImage = document.querySelector(`.button-image${sliderIndex.value + 1}`)
  const leafImage = gsap.utils.toArray('.leaf-image')

  if (sliderIndex.value === 0) {
    gsap.timeline({ default: { ease: 'power4.inOut' } }).to(leafImage[0], { translateX: 100, translateY: 180, rotationX: 30, rotationY: -30, duration: 0.4 }).to(leafImage[2], { translateX: 140, translateY: 170, rotationZ: 0, duration: 0.6, onComplete: () => {

    } })
    gsap.timeline({ default: { ease: 'power4.inOut' } }).to(leafImage[1], { translateX: -120, translateY: -200, rotationZ: -30, duration: 0.3 }).to(leafImage[3], { translateX: -140, translateY: -110, rotationZ: 0, duration: 0.6 })
    gsap.to('.background-slider', { translateX: '-100%', ease: 'power1.in' })
    gsap.to('.labels', { translateX: '-320px' })
    gsap.timeline().to('.fruit-3', { translateY: '100%', ease: 'power1.in' }).to('.fruit-2', { translateY: '100%', ease: 'power1.in' }, '<').to('.fruit-1', { translateY: '100%', ease: 'power1.in' }, '<')
    gsap.to([headerImage, buttonImage], { opacity: 0.8 })
    sliderIndex.value = 1
    headerIndex.value = 1
  }
  else if (sliderIndex.value === 1) {
    gsap.timeline({ default: { ease: 'power2.inOut' } }).to(leafImage[2], { translateX: -200, rotateY: 180 }).to(leafImage[3], { translateX: 200, rotationY: 180 }, '<')
    gsap.to('.background-slider', { translateX: '-200%', ease: 'power1.in' })
    gsap.to('.labels', { translateX: '-640px' })
    gsap.timeline().to('.fruit-3', { translateY: '-100%', ease: 'power1.out' }).to('.fruit-2', { translateY: '200%', ease: 'power1.in' }, '<').to('.fruit-1', { translateY: '200%', ease: 'power1.in' }, '<')
    gsap.to([headerImage, buttonImage], { opacity: 0.8 })

    sliderIndex.value = 2
    headerIndex.value = 1
  }
  else if (sliderIndex.value === 2) {
    gsap.timeline({ default: { ease: 'power4.inOut' } }).to(leafImage[2], { translateX: 50, rotationZ: 60 }).to(leafImage[3], { translateY: 180 })

    gsap.to('.background-slider', { translateX: '0%', duration: 1.1, ease: 'power1.Out' })

    gsap.to('.labels', { translateX: '0px' })
    gsap.timeline().to('.fruit-3', { translateY: '0%', duration: 1, ease: 'power1.in' }).to('.fruit-2', { translateY: '0%', ease: 'power1.out' }, '<').to('.fruit-1', { translateY: '0%', ease: 'power1.out' }, '<')
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
      <div class="default-area">
        <img :src="headerList[headerIndex]" :class="`header-image${headerIndex + 1}`" draggable="false">

        <div class="can">
          <div class="can-mask">
            <img src="../assets/Labels.png" alt="" class="labels" draggable="false">
          </div>
          <img src="../assets/can.png" alt="" class="can-image" draggable="false">
          <div class="leafs-area">
            <img v-for="(item, index) in 4" :key="`leaf_${index}`" :src="leafList[item - 1]" class="leaf-image" draggable="false">
          </div>
        </div>
        <div class="button">
          <img :src="sliderList[sliderIndex].button" alt="" :class="`button-image${sliderIndex + 1}`" draggable="false">
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
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  width: 1440px;
  height: 1000px;
  /* overflow: hidden; */
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

.labels {
  width: 960px;
  height: auto;
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
  transform: rotateZ(-90deg);
}

.leaf-image:nth-child(4) {
  position: absolute;
  top: 60px;
  left: 40px;
  transform: rotateZ(90deg);
}
</style>
