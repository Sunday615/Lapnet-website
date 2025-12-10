
import { createApp } from 'vue';

import router from './router';
import { gsap } from "gsap";
import App from './App.vue';
import './mainstyle.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS CSS
createApp(App).use(router).mount('#app');
AOS.init();

App.use(gsap)


