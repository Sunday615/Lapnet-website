<template>
  <div class="membercontainer">
    <!-- LOGO -->
    <div class="logobox">
      <img :src="image" :alt="alt" />
    </div>

    <!-- CARD -->
    <div
      ref="card"
      class="hover-card"
      :style="{ background: bg }"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div ref="overlay" class="card-overlay"></div>

      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>

      <div class="icons" ref="icons">
        <a
          v-if="link1"
          :href="link1"
          class="icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>

        <a
          v-if="link2"
          :href="link2"
          class="icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-globe"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

/* ==================== PROPS ==================== */
const props = defineProps({
  // Content
  image: { type: String, required: true },
  alt: { type: String, default: "Card" },

  title: { type: String, required: true },
  subtitle: { type: String, required: true },

  // Links
  link1: { type: String, default: "" },
  link2: { type: String, default: "" },

  // Background layers
  layer1: {
    type: String,
    default:
      "linear-gradient(#cb0202, #a71f33) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
  },
  layer2: {
    type: String,
    default: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
  },
  layer3: {
    type: String,
    default: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
  },
  layer4: {
    type: String,
    default: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
  },
  layer5: {
    type: String,
    default: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
  },

  // Hover overlay
  overlayHoverOpacity: { type: Number, default: 0.15 },
});

/* ==================== COMPUTED ==================== */
const bg = computed(() =>
  [props.layer1, props.layer2, props.layer3, props.layer4, props.layer5]
    .filter(Boolean)
    .join(", ")
);

/* ==================== REFS ==================== */
const card = ref(null);
const overlay = ref(null);
const icons = ref(null);

/* ==================== GSAP ==================== */
let tl = null;

const createTimeline = () => {
  if (!overlay.value || !icons.value) return;

  tl = gsap.timeline({ paused: true });

  tl.to(overlay.value, {
    opacity: props.overlayHoverOpacity,
    duration: 0.4,
    ease: "power2.out",
  });

  tl.fromTo(
    icons.value,
    { opacity: 0, y: 20, scale: 0.9 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "-=0.2"
  );
};

/* ==================== HANDLERS ==================== */
const handleMouseEnter = () => {
  tl?.play();
};

const handleMouseLeave = () => {
  tl?.reverse();
};

/* ==================== LIFECYCLE ==================== */
onMounted(() => {
  createTimeline();
});

onBeforeUnmount(() => {
  tl?.kill();
  tl = null;
});
</script>

<style scoped>
.membercontainer {
  width: 100%;
  max-width: 100%;
  position: relative;
  margin-bottom: 18px;
}

/* LOGO BOX – always overlapping on the left */
.logobox {
  position: absolute;
  left: 12px;
  top: 12px;
  width: 120px;

  overflow: hidden;
  z-index: 2;
  border: 1px solid #00000025;
  border-radius: 50%;
}

.logobox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* CARD – text pushed to the right so logo overlaps nicely */
.hover-card {
  position: relative;
  width: 100%;
  min-height: 200px;
  padding: 18px 16px 52px 150px; /* left padding = logo width + spacing */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  border-radius: 0px;
  box-sizing: border-box;
}

/* TITLE / SUBTITLE */
.hover-card h1 {
  font-size: var(--fs-md);
  font-weight: 700;
  padding-bottom: 10px;
  width: 100%;
  text-align: left;
  color: #fff;
  font-family: "Noto Sans Lao", sans-serif;
}

.hover-card h2 {
  font-size: var(--fs-base);
  color: #fff;
  width: 100%;
  text-align: left;
  font-weight: 600;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

/* OVERLAY */
.card-overlay {
  position: absolute;
  inset: 0;
  background: #000;
  opacity: 0;
  pointer-events: none;
}

/* ICONS */
.icons {
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
}

.icon {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: #0f172a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
}

.icon:hover {
  transform: translateY(-3px);
}

/* ======================= RESPONSIVE ======================= */

/* Small phones – shrink logo a bit, adjust padding */
@media (max-width: 480px) {
  .logobox {
    width: 95px;
    left: 10px;
    top: 10px;
  }

  .hover-card {
    padding: 16px 12px 48px 125px;
    min-height: 180px;
  }

  .hover-card h1 {
    font-size: var(--fs-base);
  }

  .hover-card h2 {
    font-size: var(--fs-sm);
  }
}

/* Tablets and up – closer to original big overlap */
@media (min-width: 768px) {
  .logobox {
    width: 180px;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
  }

  .hover-card {
    min-height: 220px;
    padding: 24px 20px 56px 230px; /* bigger padding to match bigger logo */
  }
}

/* Large desktop – a bit more room */
@media (min-width: 1200px) {
  .logobox {
    width: 200px;
    left: 22px;
  }

  .hover-card {
    padding: 28px 24px 60px 260px;
  }
}
</style>
