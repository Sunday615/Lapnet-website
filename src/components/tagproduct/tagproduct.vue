<!-- FuturisticTag.vue -->
<template>
  <div class="tag-wrapper">
    <span class="tag-glow"></span>
    <span class="tag-main">
      <span class="tag-dot"></span>
      <span class="tag-text">
        {{ label }}
      </span>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Tagnology'
  },
  size: {
    type: String,
    default: 'md', // 'sm' | 'md' | 'lg'
  }
})
</script>

<style scoped>
.tag-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  border-radius: 999px;
  background: conic-gradient(
    from 130deg,
    rgba(0, 190, 255, 0.3),
    rgba(0, 102, 255, 0.9),
    rgba(0, 37, 115, 0.6),
    rgba(0, 190, 255, 0.3)
  );
  overflow: visible;
}

.tag-wrapper::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: radial-gradient(circle at 0 0, rgba(0, 255, 255, 0.35), transparent 55%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.tag-wrapper:hover::before {
  opacity: 1;
}

.tag-main {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.9rem 2rem;
  border-radius: 999px;
  background: radial-gradient(
      circle at 0 0,
      rgba(255, 255, 255, 0.18),
      rgba(0, 0, 40, 0.2)
    ),
    linear-gradient(135deg, #031633 0%, #031633 40%, #03264f 100%);
  border: 1px solid rgba(172, 212, 255, 0.28);
  box-shadow:
    0 0 15px rgba(0, 122, 255, 0.4),
    0 0 4px rgba(0, 204, 255, 0.7) inset;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #e8f3ff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
  font-size: var(--fs-sm);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
}

/* Size variants using attribute selector on prop via class binding (optional) */
.tag-main[data-size="sm"] {
  padding: 0.16rem 0.65rem;
  font-size: 0.7rem;
}

.tag-main[data-size="lg"] {
  padding: 0.32rem 1.05rem;
  font-size: 0.88rem;
}

/* animated scan line */
.tag-main::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255, 255, 255, 0.18) 45%,
    transparent 100%
  );
  mix-blend-mode: screen;
  transform: translateX(-120%);
  animation: scan 2.4s ease-in-out infinite;
}

.tag-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: radial-gradient(circle, #76ff9b 0%, #00bc2f 70%, #004224 100%);
  box-shadow:
    0 0 10px rgba(0, 230, 255, 0.9),
    0 0 22px rgba(0, 118, 255, 0.9);
}

/* Glow halo behind dot */
.tag-dot::before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(0, 204, 255, 0.5), transparent 60%);
  transform: translate(-5px, -5px);
  opacity: 0.7;
}

/* subtle text glow */
.tag-text {
  text-shadow: 0 0 8px rgba(0, 204, 255, 0.7);
  white-space: nowrap;
}

/* Extra glow element behind the tag */
.tag-glow {
  position: absolute;
  inset: -8px -16px;
  border-radius: 999px;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(0, 179, 255, 0.3),
    rgba(0, 40, 94, 0) 65%
  );
  opacity: 0.4;
  filter: blur(4px);
  z-index: -1;
}

@keyframes scan {
  0% {
    transform: translateX(-120%);
  }
  45% {
    transform: translateX(120%);
  }
  100% {
    transform: translateX(120%);
  }
}
</style>
