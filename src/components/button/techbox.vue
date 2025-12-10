<template>
  <div class="tech-box">
    <div class="tech-box-inner">
      <div class="tech-box-left">
        <div class="dot"></div>
        <div class="line"></div>
      </div>

      <div class="tech-box-content">
        <span class="tech-title">{{ label }}</span>
        <span v-if="subLabel" class="tech-subtitle">{{ subLabel }}</span>
      </div>

      <div class="tech-box-right">
        <!-- Country flag via vue-country-flag-next -->
        <CountryFlag
          class="flag-badge"
          :country="countryCode"
          size="normal"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import CountryFlag from "vue-country-flag-next";

const props = defineProps({
  label: {
    type: String,
    default: "Quantum Node",
  },
  subLabel: {
    type: String,
    default: "ONLINE • SECURE",
  },
  // ISO 3166-1 alpha-2 code, e.g. "us", "jp", "fr"
  countryCode: {
    type: String,
    default: "us",
  },
});
</script>

<style scoped>
.tech-box {
  width: 200px;
  height: 80px;
  position: relative;
  padding: 1px; /* for border glow */
  border-radius: 14px;
  background: radial-gradient(circle at 0% 0%, #3bf5ff 0%, #0055ff 35%, #020617 90%);
  overflow: hidden;
}

/* Animated border glow */
.tech-box::before {
  content: "";
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    #3bf5ff,
    #4f9dff,
    #00f0ff,
    #3bf5ff,
    transparent 360deg
  );
  animation: spin 5s linear infinite;
  opacity: 0.5;
}

.tech-box-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: radial-gradient(circle at 20% 0%, #0b1733 0%, #020617 70%);
  display: flex;
  align-items: center;
  justify-content: flex-start; /* push content left, we'll push flag to right with margin-left:auto */
  padding: 10px 12px;
  box-shadow:
    0 0 20px rgba(56, 189, 248, 0.3),
    inset 0 0 18px rgba(15, 118, 236, 0.55);
  backdrop-filter: blur(10px);
  transform: translateZ(0);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.tech-box:hover .tech-box-inner {
  transform: translateY(-2px);
  box-shadow:
    0 0 24px rgba(56, 189, 248, 0.6),
    inset 0 0 22px rgba(37, 99, 235, 0.6);
}

.tech-box-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: radial-gradient(circle, #4adeff, #0ea5e9 55%, #020617 100%);
  box-shadow:
    0 0 10px #38bdf8,
    0 0 18px #0ea5e9;
  animation: pulse 1.6s ease-in-out infinite;
}

.line {
  width: 2px;
  height: 32px;
  border-radius: 999px;
  background: linear-gradient(
    to bottom,
    rgba(56, 189, 248, 0),
    rgba(56, 189, 248, 0.8),
    rgba(37, 99, 235, 0)
  );
}

.tech-box-content {
  flex: 1;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.tech-title {
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #e0f2ff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tech-subtitle {
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #60a5fa;
  opacity: 0.85;
}

/* Right side: flag */
.tech-box-right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;      /* push to far right */
}

/* Bigger flag */
.flag-badge {
  display: inline-block;
  width: 50px;            /* was 24px */
  height: 40px;           /* was 18px */
  border-radius: 4px;

  overflow: hidden;
  box-shadow:
    0 0 8px rgba(59, 130, 246, 0.9),
    0 0 14px rgba(37, 99, 235, 0.8);
}

/* Animations */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
</style>
