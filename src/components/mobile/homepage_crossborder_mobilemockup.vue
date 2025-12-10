<template>
  <div class="tablet-mockup-container" ref="container">
    <div class="tablet-glow" ref="glow"></div>

    <div class="tablet-wrapper" ref="tabletWrapper">
      <div class="tablet" ref="tablet">
        <!-- Aluminum edge hint -->
        <div class="frame-edge frame-edge-left"></div>
        <div class="frame-edge frame-edge-right"></div>

        <div class="tablet-inner">
          <!-- Top camera + sensor -->
          <div class="top-bar">
            <span class="camera-dot"></span>
            <span class="sensor-line"></span>
          </div>

          <!-- Screen -->
          <div class="tablet-screen">
            <img :src="imageSrc" alt="Mockup content" class="screen-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  autoFloat: {
    type: Boolean,
    default: true,
  },
});

const container = ref(null);
const tabletWrapper = ref(null);
const tablet = ref(null);
const glow = ref(null);

let floatTween = null;
let mouseMoveHandler = null;

onMounted(() => {
  // Intro animation
  gsap.from(tabletWrapper.value, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(glow.value, {
    opacity: 0,
    scale: 0.7,
    duration: 1,
    ease: "power3.out",
  });

  // Floating animation
  if (props.autoFloat && tabletWrapper.value) {
    floatTween = gsap.to(tabletWrapper.value, {
      y: "-=16",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  // Parallax tilt
  mouseMoveHandler = (e) => {
    if (!container.value || !tablet.value) return;
    const rect = container.value.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(tablet.value, {
      rotationY: x * 18,
      rotationX: -y * 12,
      transformPerspective: 900,
      transformOrigin: "center",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(glow.value, {
      x: x * 30,
      y: y * 20,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  container.value.addEventListener("mousemove", mouseMoveHandler);
});

onBeforeUnmount(() => {
  if (floatTween) floatTween.kill();
  if (mouseMoveHandler && container.value) {
    container.value.removeEventListener("mousemove", mouseMoveHandler);
  }
});
</script>

<style scoped>
.tablet-mockup-container {
  position: relative;
  width: 410px;   /* wider than phone */
  height: 630px;  /* more tablet-like */
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
}

/* Glow under tablet – blue gradient + pulse */
.tablet-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background:
    radial-gradient(circle at center, rgba(56, 189, 248, 0.85), transparent 65%),
    radial-gradient(circle at bottom, rgba(37, 99, 235, 0.9), transparent 70%);
  opacity: 0.95;
  filter: blur(26px);
  transform: translateY(40px);
  z-index: 0;
  animation: baseGlowPulse 4s ease-in-out infinite;
}

.tablet-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.tablet {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  padding: 10px;
  background: linear-gradient(145deg, #020617, #0f172a, #1d4ed8, #38bdf8);
  
  transform-style: preserve-3d;
}

/* Frame edges (flat aluminum feel) */
.frame-edge {
  position: absolute;
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(to bottom, #111827, #60a5fa, #111827);
  opacity: 0.95;
}

.frame-edge-left {
  left: -3px;
  top: 18%;
  height: 60%;
}

.frame-edge-right {
  right: -3px;
  top: 22%;
  height: 56%;
}

.tablet-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
  padding: 12px 12px 14px;
  background: radial-gradient(circle at top, #020617, #020617 45%, #030712);
  box-shadow:
    inset 0 0 0 1px rgba(15, 23, 42, 0.9),
    inset 0 0 30px rgba(30, 64, 175, 0.7);
  overflow: hidden;
}

/* Top camera + sensor (centered) */
.top-bar {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 3;
}

.camera-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: radial-gradient(circle at center, #22c55e, #020617);
  box-shadow: 0 0 12px rgba(34, 197, 94, 0.9);
}

.sensor-line {
  width: 48px;
  height: 3px;
  border-radius: 999px;
  background: radial-gradient(circle at center, #111827, #020617);
}

/* ============================
   SCREEN + BLUE GRADIENT GLOW & SCAN
   ============================ */
.tablet-screen {
  position: relative;
  margin-top: 34px;
  width: 100%;
  height: calc(100% - 46px);
  border-radius: 1.2rem;
  overflow: hidden;
  background:
    radial-gradient(circle at center, #020617 0%, #020617 60%, #000000 100%);

}

/* Blue radial glow behind the image */
.tablet-screen::before {
  content: "";
  position: absolute;
  inset: -25%;
  background:
    radial-gradient(circle at 50% 35%, rgba(59, 130, 246, 0.7), transparent 60%),
    radial-gradient(circle at 50% 80%, rgba(56, 189, 248, 0.5), transparent 65%);
  mix-blend-mode: screen;
  pointer-events: none;
  animation: screenGlow 3.5s ease-in-out infinite;
  z-index: 1;
}

/* Tech scan effect:
   - scanlines
   - subtle grid
   - bright blue gradient scan bar
*/
.tablet-screen::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    /* Layer 1: horizontal scanlines */
    repeating-linear-gradient(
      to bottom,
      rgba(15, 23, 42, 0.85) 0px,
      rgba(15, 23, 42, 0.85) 1px,
      rgba(15, 23, 42, 0) 3px
    ),
    /* Layer 2: vertical grid */
    linear-gradient(
      to right,
      rgba(37, 99, 235, 0.22) 1px,
      transparent 1px
    ),
    /* Layer 3: blue gradient scan bar */
    linear-gradient(
      to bottom,
      rgba(37, 99, 235, 0) 0%,
      rgba(37, 99, 235, 0.4) 15%,
      rgba(56, 189, 248, 0.85) 40%,
      rgba(224, 242, 254, 0.95) 50%,
      rgba(56, 189, 248, 0.85) 60%,
      rgba(37, 99, 235, 0.4) 85%,
      rgba(37, 99, 235, 0) 100%
    );
  background-size:
    100% 4px,   /* scanline thickness */
    28px 100%,  /* grid spacing */
    100% 40%;   /* scan bar height */
  background-repeat: repeat, repeat, no-repeat;
  background-position:
    0 0,
    0 0,
    0 -60%;
  mix-blend-mode: screen;
  pointer-events: none;
  opacity: 0.95;
  animation: screenScan 3s linear infinite;
  z-index: 3;
}

.screen-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.01);
  position: relative;
  z-index: 2; /* between glow and scan layers */
}

/* ============================
   KEYFRAMES
   ============================ */
@keyframes baseGlowPulse {
  0%, 100% {
    transform: translateY(40px) scale(1);
    opacity: 0.85;
  }
  50% {
    transform: translateY(40px) scale(1.08);
    opacity: 1;
  }
}

@keyframes screenGlow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.95;
    transform: scale(1.05);
  }
}

/* Moves the blue scan bar downward & shifts lines slightly */
@keyframes screenScan {
  0% {
    background-position:
      0 0,      /* scanlines */
      0 0,      /* grid */
      0 -60%;   /* scan bar above screen */
  }
  100% {
    background-position:
      0 4px,    /* slight drift for scanlines */
      12px 0,   /* slight drift for grid */
      0 130%;   /* scan bar below screen */
  }
}
</style>
