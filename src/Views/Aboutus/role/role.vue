<template>
  <main_navbar
    title="ໂຄງຮ່າງການຈັດຕັ້ງ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ກ່ຽວກັບພວກເຮົາ',
      'ໂຄງຮ່າງການຈັດຕັ້ງ'
    ]"
    background-image="/aboutus/navigatormission-bg.png"
  />

  <section class="hero">
    <!-- background layers -->
    <div class="hero-bg">
      <div class="hero-gradient"></div>

      <!-- 🎥 Video background overlay -->
      <video
        class="hero-video-overlay"
        autoplay
        muted
        loop
        playsinline
      >
        <!-- 🔁 change src to your real video path -->
        <source src="/videos/Rolebackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- geometric mesh / grid -->
      <div class="hero-mesh"></div>

      <!-- radial glow orbs -->
      <div class="hero-orb orb-1"></div>
      <div class="hero-orb orb-2"></div>
      <div class="hero-orb orb-3"></div>
    </div>

    <div class="hero-inner">
      <!-- Glassmorphism card -->
      <div ref="glassCard" class="hero-card">
        <div class="hero-pill">
          <span class="pill-dot"></span>
          <span class="pill-text">Lao National Payment Network</span>
        </div>

        <h1 class="hero-title">
          ພາລະບົດບາດ.
        </h1>

        <p class="hero-subtitle">
          ບໍລິສັດ ລາວເນ ເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ (LAPNet) ເຊິ່ງບໍລິສັດ LAPNet ເປັນຜູ້ໃຫ້ບໍລິການລະບົບ ການຊໍາລະທຸລະກໍາຍ່ອຍ ຕາມທີ່ໄດ້ກໍານົດໄວ້ໃນກົດໝາຍວ່າດ້ວຍລະບົບ ການຊໍາລະ. ຊຶ່ງເຮັດໜ້າທີ່ເປັນໂຕກາງໃນການ ເຊື່ອມໂຍງກັບທຸກຂະແໜງການຊຳລະທີ່ເປັນທະນາຄານ, ສະຖາບັນການເງິນ ແລະ ຜູ້ໃຫ້ບໍລິການ ການຊຳລະແຫ່ງດຽວໃນ ສປປ ລາວ;
          <br />
          ເພື່ອອໍານວຍຄວາມສະດວກໃຫ້ລູກຄ້າຂອງບັນດາທະນາຄານທີ່ເຂົ້າມາເປັນສະມາຊິກສາມາດນໍາໃຊ້ບັດສິນເຊື່ອ, ບັດເງິນຝາກ ແລະ ບັດ ATM ໃນ
          ການເຮັດທຸລະກໍາດ້ານການເງິນຜ່ານຕູ້ ATM ແລະ ເຄື່ອງ (POS)
          ຮ່ວມກັນລະຫວ່າງທະນາຄານ, ໄດ້ຢ່າງສະດວກ ທຸກທີ່ ທຸກເວລາ.
        </p>

        <div class="hero-actions">
            <router-link to="/">
          <button class="btn-primary">
            ໜ້າຫຼັກ
          </button>
          </router-link>
          <router-link to="/products_service/atm-inquiry">
          <button class="btn-ghost">
            ຜະລິດຕະພັນ ແລະ ການບໍລິການ
          </button>
          </router-link>
        </div>

        <div class="hero-metrics">
          <div class="metric">
            <span class="metric-value">21</span>
            <span class="metric-label">ສະມາຊິກ</span>
          </div>
          <div class="metric">
            <span class="metric-value">19</span>
            <span class="metric-label">ທະນາຄານສະມາຊິກ</span>
          </div>
          <div class="metric">
            <span class="metric-value">2</span>
            <span class="metric-label">Fintech</span>
          </div>
        </div>
      </div>

      <!-- Right: network / mesh visual -->
      <div class="hero-visual">
        <svg
          class="network-svg"
          viewBox="0 0 420 420"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- outer glowing ring -->
          <circle
            class="net-ring"
            cx="210"
            cy="210"
            r="150"
          />

          <!-- inner ring -->
          <circle
            class="net-ring net-ring-inner"
            cx="210"
            cy="210"
            r="90"
          />

          <!-- lines (edges) -->
          <g class="net-lines">
            <line x1="210" y1="60" x2="90"  y2="150" />
            <line x1="90"  y1="150" x2="110" y2="290" />
            <line x1="110" y1="290" x2="210" y2="360" />
            <line x1="210" y1="360" x2="310" y2="290" />
            <line x1="310" y1="290" x2="330" y2="150" />
            <line x1="330" y1="150" x2="210" y2="60" />

            <line x1="210" y1="60"  x2="210" y2="210" />
            <line x1="90"  y1="150" x2="210" y2="210" />
            <line x1="110" y1="290" x2="210" y2="210" />
            <line x1="310" y1="290" x2="210" y2="210" />
            <line x1="330" y1="150" x2="210" y2="210" />
          </g>

          <!-- nodes -->
          <g class="net-nodes">
            <circle cx="210" cy="60"  r="6" />
            <circle cx="90"  cy="150" r="6" />
            <circle cx="110" cy="290" r="6" />
            <circle cx="210" cy="360" r="6" />
            <circle cx="310" cy="290" r="6" />
            <circle cx="330" cy="150" r="6" />
            <circle class="net-node-core" cx="210" cy="210" r="8" />
          </g>
        </svg>

        <!-- Glass chip stack -->
        <div ref="chipStack" class="chip-stack">
          <div class="chip-row">
            <span class="chip-dot"></span>
            <span class="chip-label">ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</span>
            <span class="chip-value">01</span>
          </div>
          <div class="chip-row">
            <span class="chip-dot"></span>
            <span class="chip-label">ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM</span>
            <span class="chip-value">02</span>
          </div>
          <div class="chip-row">
            <span class="chip-dot"></span>
            <span class="chip-label">ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ໃນຮູບ ແບບການໂອນ ບັດ ຫາ ເລກໜ້າບັດ</span>
            <span class="chip-value">03</span>
          </div>
          <div class="chip-row">
            <span class="chip-dot"></span>
            <span class="chip-label">ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື ໃນຮູບແບບໂອນຈາກບັນຊີ-ບັນຊີ</span>
            <span class="chip-value">04</span>
          </div>
          <div class="chip-row">
            <span class="chip-dot"></span>
            <span class="chip-label">ຊໍາລະຂ້າມທະນາຄານ ຜ່ານ LAPNet QR pay</span>
            <span class="chip-value">05</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <secondfooter />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import main_navbar from '../../../components/miannavbar/main_navbar.vue'
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue'
import secondfooter from '../../../components/footer/mainfooter/secondfooter.vue'

const glassCard = ref(null)
const chipStack = ref(null)

onMounted(() => {
  // main glass card float-in
  if (glassCard.value) {
    gsap.from(glassCard.value, {
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out'
    })
  }

  // chip stack float-in
  if (chipStack.value) {
    gsap.from(chipStack.value, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    })
  }

  // subtle looping float
  if (glassCard.value) {
    gsap.to(glassCard.value, {
      y: -8,
      duration: 4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    })
  }

  if (chipStack.value) {
    gsap.to(chipStack.value, {
      y: -6,
      duration: 3.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 0.5
    })
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  box-sizing: border-box;
  color: #f9fafb;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
}

/* BACKGROUND LAYERS */
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  /* you can switch this to your blue gradient if you want:
     background: linear-gradient(to right, #5BBDFF 0%, #1500CF 100%); */
  background: linear-gradient(to right, #031239 0%,#093584 100%);
}

/* 🎥 Video background overlay */
.hero-video-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: soft-light;
  opacity: 0.7;
  pointer-events: none;
}

/* simple mesh / grid */
.hero-mesh {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 80px 80px;
  opacity: 0.4;
}

/* glowing orbs */
.hero-orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(40px);
  opacity: 0.9;
}

.orb-1 {
  width: 260px;
  height: 260px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.9), transparent 60%);
  top: -40px;
  left: 10%;
}

.orb-2 {
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(129, 140, 248, 0.9), transparent 60%);
  bottom: -60px;
  right: 8%;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.9), transparent 60%);
  bottom: 10%;
  left: 25%;
}

/* CONTENT LAYOUT */
.hero-inner {
  position: relative;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2.5fr);
  gap: 48px;
  align-items: center;
  z-index: 1;
}

/* GLASS CARD (LEFT) */
.hero-card {
  position: relative;
  padding: 28px 30px;
  border-radius: 26px;
  background: radial-gradient(circle at top left, rgba(255,255,255,0.18), rgba(12,18,44,0.8));
  border: 1px solid rgba(255,255,255,0.16);
  box-shadow:
    0 24px 60px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(148, 163, 184, 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* small accent line on top left */
.hero-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 24px;
  width: 96px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(to right, #22d3ee, #a855f7);
  opacity: 0.9;
}

/* pill tag */
.hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 4px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.4);
  margin-bottom: 14px;
}

.pill-dot {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: radial-gradient(circle, #4ade80 0%, #16a34a 40%, transparent 70%);
  box-shadow: 0 0 12px rgba(74, 222, 128, 0.8);
}

.pill-text {
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #e5e7eb;
}

/* headings */
.hero-title {
  font-size: clamp(32px, 4vw, 42px);
  line-height: 1.15;
  margin: 0 0 14px;
  font-weight: 650;
}

.accent {
  background: linear-gradient(to right, #f9fafb, #a5b4fc);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  margin: 0 0 20px;
  font-size: 14px;
  line-height: 1.6;
  color: #e5e7eb;
  opacity: 0.9;
}

/* actions */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.btn-primary {
  padding: 10px 18px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #0b1120;
  background: linear-gradient(to right, #22d3ee, #6366f1);
  box-shadow: 0 16px 40px rgba(37, 99, 235, 0.6);
}

.btn-primary:hover {
  filter: brightness(1.05);
}

.btn-ghost {
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid rgba(156, 163, 175, 0.5);
  background: rgba(15, 23, 42, 0.7);
  color: #e5e7eb;
  font-size: 14px;
  cursor: pointer;
}

.btn-ghost:hover {
  border-color: rgba(209, 213, 219, 0.9);
}

/* metrics */
.hero-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.metric {
  display: flex;
  flex-direction: column;
}

.metric-value {
  font-size: 18px;
  font-weight: 600;
}

.metric-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: #9ca3af;
}

/* RIGHT VISUAL AREA */
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.network-svg {
  width: 100%;
  max-width: 360px;
  filter: drop-shadow(0 16px 40px rgba(15, 23, 42, 0.9));
}

/* rings & lines */
.net-ring {
  fill: none;
  stroke: rgba(191, 219, 254, 0.5);
  stroke-width: 1.4;
}

.net-ring-inner {
  stroke: rgba(96, 165, 250, 0.9);
  stroke-dasharray: 4 8;
}

.net-lines line {
  stroke: rgba(191, 219, 254, 0.7);
  stroke-width: 1.4;
  stroke-linecap: round;
}

/* nodes */
.net-nodes circle {
  fill: #22d3ee;
  stroke: rgba(15, 23, 42, 0.95);
  stroke-width: 1.8;
}

.net-node-core {
  fill: #38bdf8;
  box-shadow: 0 0 16px rgba(56, 189, 248, 0.9);
}

/* Glass chip stack */
.chip-stack {
  position: absolute;
  right: 0;
  bottom: 16px;
  transform: translateX(18%);
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.6);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  min-width: 210px;
}

.chip-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 1rem;
  padding: 6px 0;
}

.chip-row + .chip-row {
  border-top: 1px solid rgba(148, 163, 184, 0.4);
}

.chip-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: radial-gradient(circle, #22c55e, transparent 60%);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.85);
}

.chip-label {
  flex: 1;
  color: #e5e7eb;
}

.chip-value {
  font-weight: 600;
  color: #a5b4fc;
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }

  .hero-visual {
    order: -1;
  }

  .chip-stack {
    position: static;
    transform: none;
    margin-top: 16px;
    align-self: flex-end;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 24px 16px;
  }

  .hero-card {
    padding: 22px 20px;
  }

  .hero-inner {
    gap: 24px;
  }

  .network-svg {
    max-width: 280px;
  }
}
</style>
