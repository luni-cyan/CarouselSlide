import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { Flip } from 'gsap/Flip'
import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

gsap.registerPlugin(Flip, CustomEase)
createApp(App).mount('#app')
