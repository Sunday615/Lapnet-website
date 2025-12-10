<template>
  <main_navbar
    title="ໂຄງຮ່າງການຈັດຕັ້ງ"
    :breadcrumb="['ໜ້າຫຼັກ', 'ກ່ຽວກັບພວກເຮົາ', 'ໂຄງຮ່າງການຈັດຕັ້ງ']"
    background-image="/aboutus/navigatormission-bg.png"
  />

  <div class="navbarcompany">
    <cpn_navbar />
  </div>

  <router-view />

  <div class="lapnet-org-chart">
    <!-- Top blue banner / org chart image -->
    <img
      src="/aboutus/company/orgchartborder2.png"
      alt="Company organization chart"
      class="top-banner org-chart-img"
      @click="openOverlay"
    />
  </div>

  <!-- Fullscreen overlay for org chart -->
  <div
    v-if="isOverlayOpen"
    ref="overlayRef"
    class="org-chart-overlay"
    @click.self="closeOverlay"
  >
    <!-- Actions: download + close -->
    <div class="overlay-actions">
      <button class="overlay-download-btn" @click.stop="downloadImage">
        ⬇ Download
      </button>
      <button class="overlay-close-btn" @click.stop="closeOverlay">
        ✕
      </button>
    </div>

    <img
      ref="overlayImageRef"
          src="/aboutus/company/orgchartborder2.png"
      alt="Company organization chart fullscreen"
      class="org-chart-overlay-img"
      @click.stop
    />
  </div>

  <div
    class="boxmargin"
    style="width: 100%; height: 15vh; background-color: #f5f7fb;"
  ></div>
  <mainfooter />
</template>

<script setup>
import main_navbar from '../../../components/miannavbar/main_navbarstructure.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';
import cpn_navbar from './navbarcompany/cpn_navbar.vue';

import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ----- Overlay state & refs -----
const isOverlayOpen = ref(false);
const overlayRef = ref(null);
const overlayImageRef = ref(null);

const openOverlay = async () => {
  isOverlayOpen.value = true;

  // wait for DOM to render
  await nextTick();

  // Overlay fade-in + image pop animation
  gsap.fromTo(
    overlayRef.value,
    { opacity: 0 },
    { opacity: 1, duration: 0.35, ease: 'power2.out' }
  );

  gsap.fromTo(
    overlayImageRef.value,
    { y: 40, scale: 0.96, opacity: 0 },
    { y: 0, scale: 1, opacity: 1, duration: 0.6, ease: 'power3.out' }
  );
};

const closeOverlay = () => {
  if (!overlayRef.value || !overlayImageRef.value) {
    isOverlayOpen.value = false;
    return;
  }

  const tl = gsap.timeline({
    defaults: { duration: 0.35, ease: 'power2.inOut' },
    onComplete: () => {
      isOverlayOpen.value = false;
    },
  });

  tl.to(overlayImageRef.value, {
    y: 40,
    scale: 0.96,
    opacity: 0,
  }).to(
    overlayRef.value,
    {
      opacity: 0,
    },
    '-=0.2'
  );
};

// Download org chart image from overlay
const downloadImage = () => {
  const imgEl = overlayImageRef.value;
  if (!imgEl) return;

  const link = document.createElement('a');
  link.href = imgEl.src; // use current image src
  link.download = 'company-organization-chart.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// ----- Original scroll / load animations -----
onMounted(() => {
  gsap.set('.horizontal-connector, .vertical-connector', {
    transformOrigin: 'top center',
  });

  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: 'power3.out' },
  });

  // Image entrance on page load
  tl.from('.top-banner', {
    opacity: 0,
    y: 40,
    scale: 0.95,
    duration: 1.1,
    ease: 'power3.out',
  });

  tl.from('.chart-wrapper', { y: 30, opacity: 0 }, '-=0.4')
    .from('.board-node', { y: 20, opacity: 0 }, '-=0.3')
    .from(
      '.horizontal-connector, .vertical-connector',
      { scaleY: 0, opacity: 0, stagger: 0.05 },
      '-=0.4'
    )
    .from(
      '.committees-row .two-line-node',
      { y: 25, opacity: 0, stagger: 0.12 },
      '-=0.3'
    )
    .from(
      '.executive-row .two-line-node',
      { y: 25, opacity: 0, stagger: 0.15 },
      '-=0.3'
    );

  gsap.from('.departments-row .department', {
    scrollTrigger: {
      trigger: '.departments-row',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.7,
    ease: 'power3.out',
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<style scoped>
.navbarcompany {
  width: 100%;
  height: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #f5f7fb;
}

.lapnet-org-chart {
  box-sizing: border-box;
  width: 100%;
  padding: 32px 16px 56px;
  background: #f5f7fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Noto Sans Lao', 'Noto Sans', system-ui, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #123456;
}

/* Image styling + modern feel */
.lapnet-org-chart img {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
  will-change: transform, opacity;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: zoom-in;
}

/* Subtle hover effect */
.lapnet-org-chart img:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25);
}

/* ---------- Overlay styles ---------- */
.org-chart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  /* smaller padding so the image can be bigger */
  padding: 8px;
  z-index: 999;
  backdrop-filter: blur(6px);
}

.org-chart-overlay-img {
  /* allow the fullscreen image to be larger than the normal one */
  max-width: 100vw;
  max-height: 96vh;
  border-radius: 12px;
  box-shadow: 0 26px 60px rgba(0, 0, 0, 0.45);
  object-fit: contain;
}

/* Actions container (top-right) */
.overlay-actions {
  position: absolute;
  top: 20px;
  right: 24px;
  display: flex;
  gap: 12px;
}

/* Buttons (close + download) */
.overlay-close-btn,
.overlay-download-btn {
  width: auto;
  min-width: 40px;
  height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.9);
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  transition: transform 0.18s ease, background 0.18s ease,
    box-shadow 0.18s ease;
  white-space: nowrap;
}

.overlay-close-btn:hover,
.overlay-download-btn:hover {
  transform: translateY(-2px) scale(1.05);
  background: rgba(30, 64, 175, 0.95);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.6);
}

.overlay-close-btn:active,
.overlay-download-btn:active {
  transform: scale(0.98);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.6);
}
</style>
