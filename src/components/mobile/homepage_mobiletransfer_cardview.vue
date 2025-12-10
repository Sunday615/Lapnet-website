<template>
  <div
    class="viewer-3d"
    ref="viewer"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="card-3d" ref="card">
      <div class="card-border"></div>
      <div class="card-glow"></div>

      <div class="card-content">
        <img
          :src="imageSrc"
          alt="3D Tech Card"
          class="card-image"
        />

        <!-- Light sweep over image -->
        <div class="light-sweep" ref="lightSweep"></div>

        <div class="card-overlay" v-if="title || subtitle">
          <h2 v-if="title" class="card-title">{{ title }}</h2>
          <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
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
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
});

const viewer = ref(null);
const card = ref(null);
const lightSweep = ref(null);

let sweepTimeline = null;

const handleMouseMove = (event) => {
  if (!viewer.value || !card.value) return;

  const bounds = viewer.value.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;

  const relX = x / bounds.width;
  const relY = y / bounds.height;

  const rotateY = (relX - 0.5) * 30;
  const rotateX = (0.5 - relY) * 30;

  gsap.to(card.value, {
    rotationY: rotateY,
    rotationX: rotateX,
    duration: 0.35,
    ease: "power2.out",
    transformPerspective: 1600,
    transformOrigin: "center",
  });
};

const handleMouseEnter = () => {
  if (!card.value) return;

  // subtle pop-in
  gsap.to(card.value, {
    scale: 1.04,
    duration: 0.4,
    ease: "power2.out",
    boxShadow:
      "0 40px 80px rgba(0, 180, 255, 0.55), 0 0 40px rgba(0, 120, 255, 0.6)",
  });
};

const handleMouseLeave = () => {
  if (!card.value) return;

  gsap.to(card.value, {
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    duration: 0.6,
    ease: "power3.out",
    boxShadow:
      "0 24px 60px rgba(0, 60, 160, 0.6), 0 0 40px rgba(0, 120, 255, 0.7)",
  });
};

onMounted(() => {
  if (card.value) {
    gsap.to(card.value, {
      y: -10,
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }

  if (lightSweep.value) {
    // smoother, layered sweep animation (always running)
    sweepTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.2,
      defaults: {
        ease: "power2.inOut",
      },
    });

    // initial state
    gsap.set(lightSweep.value, {
      xPercent: -130,
      opacity: 0,
      scaleX: 0.9,
      filter: "blur(6px)",
    });

    sweepTimeline
      // fade in & approach
      .to(lightSweep.value, {
        opacity: 0.4,
        duration: 0.8,
      })
      // main smooth sweep across card
      .to(
        lightSweep.value,
        {
          xPercent: 160,
          opacity: 0.9,
          scaleX: 1.1,
          duration: 3.6,
          ease: "power1.inOut",
        },
        "<" // start at same time as previous
      )
      // soft fade-out / trail
      .to(lightSweep.value, {
        opacity: 0,
        duration: 0.9,
      })
      // reset position off-screen left for next cycle
      .set(lightSweep.value, {
        xPercent: -130,
        scaleX: 0.9,
      });
  }
});

onBeforeUnmount(() => {
  if (sweepTimeline) {
    sweepTimeline.kill();
    sweepTimeline = null;
  }
});
</script>

<style scoped>
.viewer-3d {
  width: 100%;
  height: 90%;
  max-width: 100%;
  max-height: 100vh;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  perspective: 2200px;
  overflow: hidden;
}

.card-3d {
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 32px;
  overflow: hidden;
  transform-style: preserve-3d;
  background: radial-gradient(circle at 10% 0%, #0c274b, #050b1a 60%);
  box-shadow:
    0 24px 60px rgba(0, 60, 160, 0.6),
    0 0 40px rgba(0, 120, 255, 0.7);
}

.card-border {
  pointer-events: none;
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background:
    conic-gradient(
      from 0deg,
      #00f0ff,
      #0066ff,
      #00ccff,
      #0020ff,
      #00f0ff
    );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.9;
}

.card-glow {
  pointer-events: none;
  position: absolute;
  inset: 40%;
  background: radial-gradient(circle, rgba(0, 196, 255, 0.75), transparent);
  filter: blur(40px);
  opacity: 0.7;
}

/* Image container */
.card-content {
  position: relative;
  inset: 14px;
  border-radius: 28px;
  overflow: hidden;
  width: calc(100% - 28px);
  height: calc(100% - 28px);
  background: #000;
  z-index: 1;
}

/* Image */
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateZ(40px);
  filter: saturate(1.3) contrast(1.1);
  position: relative;
  z-index: 1;
}

/* Light sweep (normal style) */
.light-sweep {
  position: absolute;
  top: 0;
  left: -50%;
  width: 60%;
  height: 100%;

  background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.12) 30%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0.12) 70%,
    rgba(255, 255, 255, 0) 100%
  );

  mix-blend-mode: screen;
  filter: blur(6px);
  transform: skewX(-20deg);
  opacity: 0;        /* GSAP animates this */
  z-index: 2;
  pointer-events: none;
}

/* Overlay text / HUD */
.card-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.4rem;
  padding: 2.4rem;
  background: linear-gradient(
    to top,
    rgba(1, 5, 20, 0.92),
    rgba(1, 5, 15, 0.65),
    transparent 65%
  );
  transform: translateZ(80px);
  z-index: 3;
}

.card-title {
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #e6f4ff;
  text-shadow:
    0 0 10px rgba(0, 200, 255, 0.7),
    0 0 32px rgba(0, 120, 255, 0.7);
}

.card-subtitle {
  font-size: 1rem;
  max-width: 60%;
  color: #a9d9ff;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-left: 3px solid rgba(0, 196, 255, 0.9);
  padding-left: 0.9rem;
  backdrop-filter: blur(4px);
}

/* Responsive */
@media (max-width: 768px) {
  .viewer-3d {
    height: 80vh;
  }

  .card-title {
    font-size: 1.4rem;
  }

  .card-subtitle {
    font-size: 0.75rem;
    max-width: 80%;
  }
}
</style>
