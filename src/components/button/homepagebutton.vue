<template>
  <div class="btn-wrapper">
    <div class="glow" ref="glowRef"></div>

    <button
      class="magic-btn"
      ref="buttonRef"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave"
      @click="handleClick"
    >
      <span class="pulse-dot" ref="dotRef"></span>
      <span class="label">
        {{ label }}
      </span>
      <span class="scan-line"></span>
      <span class="spark" ref="sparkRef"></span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  label: {
    type: String,
    default: "Start System",
  },
});

const buttonRef = ref(null);
const glowRef = ref(null);
const sparkRef = ref(null);
const dotRef = ref(null);

let floatTween = null;
let dotTween = null;

onMounted(() => {
  if (!buttonRef.value || !dotRef.value) return;

  // 按钮轻微上下浮动
  floatTween = gsap.to(buttonRef.value, {
    y: -3,
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  // 小圆点呼吸效果
  dotTween = gsap.to(dotRef.value, {
    scale: 1.3,
    duration: 1.1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});

onBeforeUnmount(() => {
  floatTween?.kill();
  dotTween?.kill();
});

const handleEnter = () => {
  if (!buttonRef.value || !glowRef.value || !sparkRef.value) return;

  gsap.to(buttonRef.value, {
    scale: 1.05,
    boxShadow:
      "0 24px 55px rgba(15, 23, 42, 0.95), 0 0 40px rgba(56, 189, 248, 0.75)",
    duration: 0.3,
    ease: "power2.out",
  });

  gsap.to(glowRef.value, {
    opacity: 1,
    duration: 0.3,
    ease: "power2.out",
  });

  gsap.to(sparkRef.value, {
    opacity: 1,
    duration: 0.3,
    ease: "power2.out",
  });
};

const handleLeave = () => {
  if (!buttonRef.value || !glowRef.value || !sparkRef.value) return;

  gsap.to(buttonRef.value, {
    scale: 1,
    boxShadow:
      "0 18px 35px rgba(15, 23, 42, 0.9), 0 0 0 1px rgba(148, 163, 184, 0.25)",
    duration: 0.28,
    ease: "power2.out",
  });

  gsap.to(glowRef.value, {
    opacity: 0,
    duration: 0.28,
    ease: "power2.out",
  });

  gsap.to(sparkRef.value, {
    opacity: 0,
    duration: 0.28,
    ease: "power2.out",
  });
};

const handleClick = () => {
  if (!buttonRef.value || !glowRef.value || !sparkRef.value) return;

  const tl = gsap.timeline();

  // 点击缩放弹跳
  tl.to(buttonRef.value, {
    scale: 0.95,
    duration: 0.1,
    ease: "power2.in",
  })
    .to(buttonRef.value, {
      scale: 1.07,
      duration: 0.16,
      ease: "back.out(3)",
    })
    .to(buttonRef.value, {
      scale: 1.02,
      duration: 0.16,
      ease: "power2.out",
    });

  // glow 脉冲
  tl.to(
    glowRef.value,
    {
      opacity: 1.25,
      duration: 0.14,
      ease: "power1.out",
    },
    "<"
  ).to(glowRef.value, {
    opacity: 0.85,
    duration: 0.32,
    ease: "power2.out",
  });

  // spark 光扫效果
  gsap.fromTo(
    sparkRef.value,
    { x: -60, y: -10, opacity: 0.6 },
    {
      x: 60,
      y: 10,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    }
  );
};
</script>

<style scoped>
.btn-wrapper {
  position: relative;
  display: inline-block;
}


.glow {
  position: absolute;
  inset: -4px;
  border-radius: 999px;
  background: conic-gradient(
    from 180deg,
    #0ea5e9,
    #38bdf8,
    #22d3ee,
    #60a5fa,
    #0ea5e9
  );
  filter: blur(12px);
  opacity: 0;
  pointer-events: none;
}


.magic-btn {
  position: relative;
  padding: 0.9rem 2.8rem;
  border-radius: 10px;
  border: 1px solid rgba(125, 211, 252, 0.45);
  background:
    radial-gradient(circle at 0% 0%, #0088FF 0, transparent 38%),
    radial-gradient(circle at 100% 100%, #0033AB 0, #0088FF 55%);
  color: #e5f2ff;
  font-size: 1.2rem;
 
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  box-shadow:
    0 18px 35px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(56, 189, 248, 0.25);
  overflow: hidden;
  backdrop-filter: blur(8px);
}

/* 文字 */
.magic-btn .label {
  position: relative;
  z-index: 2;
  text-shadow: 0 0 6px rgba(56, 189, 248, 0.8);
}

/* 顶层整体光晕 */
.magic-btn .spark {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 0 0,
    rgba(191, 219, 254, 0.35),
    transparent 55%
  );
  mix-blend-mode: screen;
  opacity: 0;
  pointer-events: none;
}

/* 左侧小蓝点：像系统在线指示灯 */
.magic-btn .pulse-dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #38bdf8;
  box-shadow:
    0 0 18px rgba(56, 189, 248, 0.95),
    0 0 25px rgba(37, 99, 235, 0.9);
  flex-shrink: 0;
}

/* 中间有一条科技 HUD 扫描线 */
.magic-btn .scan-line {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0,
    rgba(191, 219, 254, 0.0) 40%,
    rgba(191, 219, 254, 0.18) 50%,
    rgba(191, 219, 254, 0.0) 60%,
    transparent 100%
  );
  mix-blend-mode: screen;
  opacity: 0.75;
  animation: scan 2.4s linear infinite;
  pointer-events: none;
}

@keyframes scan {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(120%);
  }
}

.magic-btn:focus-visible {
  outline: 2px solid #38bdf8;
  outline-offset: 3px;
}
</style>
