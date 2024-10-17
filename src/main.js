import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

gsap.registerPlugin(Flip)
createApp(App).mount('#app')
