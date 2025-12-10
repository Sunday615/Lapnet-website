<template>
  <div 
    class="slideshow-container"
    @mouseenter="pauseAutoPlay"
    @mouseleave="resumeAutoPlay"
  >

    <!-- IMAGES -->
    <img
      v-for="(img, i) in images"
      :key="i"
      :src="img"
      class="slide-img"
      :ref="el => imageRefs[i] = el"
    />

    <!-- PAGINATION -->
    <div class="pagination-box">
      <button class="btn" @click="prevImage">Prev</button>
      <span class="number">{{ currentIndex + 1 }} / {{ images.length }}</span>
      <button class="btn" @click="nextImage">Next</button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

// Your images
const images = ref([
  
  "/swiper/1.png",
  "/swiper/2.png",
  "/swiper/3.png",
  "/swiper/4.png",
  "/swiper/5.png",
  
]);

const imageRefs = [];
const currentIndex = ref(0);
let intervalID = null;

// FADE animation
const fadeTo = (nextIndex) => {
  const current = imageRefs[currentIndex.value];
  const next = imageRefs[nextIndex];

  gsap.to(current, { opacity: 0, duration: 1.3, ease: "power2.out" });
  gsap.to(next, { opacity: 1, duration: 1.3, ease: "power2.out" });

  currentIndex.value = nextIndex;
};

// AUTO PLAY
const startAutoPlay = () => {
  intervalID = setInterval(() => {
    nextImage(false);
  }, 4000);
};

const pauseAutoPlay = () => {
  clearInterval(intervalID);
};

const resumeAutoPlay = () => {
  startAutoPlay();
};

// NEXT img
const nextImage = (reset = true) => {
  if (reset) pauseAutoPlay();
  const next = (currentIndex.value + 1) % images.value.length;
  fadeTo(next);
  if (reset) resumeAutoPlay();
};

// PREV img
const prevImage = () => {
  pauseAutoPlay();
  const prev = (currentIndex.value - 1 + images.value.length) % images.value.length;
  fadeTo(prev);
  resumeAutoPlay();
};

onMounted(() => {
  // Initial opacity setup
  gsap.set(imageRefs, { opacity: 0 });
  gsap.set(imageRefs[0], { opacity: 1 });

  startAutoPlay();
});
</script>

<style scoped>
.slideshow-container img{
    width: 100%;
    height: auto;
}
.slideshow-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  object-position: top;
  top: 0;
  left: 0;
  opacity: 0;
}

/* Pagination */
.pagination-box {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(0, 0, 0, 0.45);
  padding: 8px 16px;
  border-radius: 12px;
}

.btn {
  background: white;
  color: black;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn:hover {
  background: #e5e5e5;
}

.number {
  color: white;
  font-size: 14px;
  font-weight: bold;
}
</style>
