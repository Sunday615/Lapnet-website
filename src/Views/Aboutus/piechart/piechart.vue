<template>
  <div class="pie-wrapper">
    <!-- LEFT: PIE CHART -->
    <svg
      class="pie-svg"
      viewBox="-300 -300 600 600"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <!-- gradient for tech line -->
        <linearGradient id="tech-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="50%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#6366f1" />
        </linearGradient>

        <!-- Clip for center logo to keep it inside circle -->
        <clipPath id="center-logo-clip">
          <circle :r="innerRadius" cx="0" cy="0" />
        </clipPath>
      </defs>

      <g ref="chartGroup">
        <!-- Pie slices -->
        <g
          v-for="(slice, index) in slices"
          :key="slice.label"
          class="slice-group"
          :ref="el => sliceRefs[index] = el"
          @mouseenter="onEnter(index)"
          @mouseleave="onLeave(index)"
        >
          <path
            class="slice"
            :d="slice.path"
            :fill="slice.color"
            stroke="#ffffff"
            stroke-width="2"
          />
        </g>

        <!-- OUTER LOGOS + TECHNOLOGY CONNECTOR LINES -->
        <g
          v-for="(slice, index) in slices"
          :key="'outer-logo-' + slice.label"
          class="outer-logo-group"
          :ref="el => logoRefs[index] = el"
        >
          <!-- glow line behind -->
          <path
            class="connector-line-glow"
            :d="slice.connectorPath"
          />
          <!-- main tech line (dashed, animated) -->
          <path
            class="connector-line-main tech-line"
            :d="slice.connectorPath"
          />
          <!-- tech nodes -->
          <circle
            class="connector-node connector-node-start"
            :cx="slice.nodeStartX"
            :cy="slice.nodeStartY"
            r="3.5"
          />
          <circle
            class="connector-node connector-node-bend"
            :cx="slice.bendX"
            :cy="slice.bendY"
            r="4"
          />
          <circle
            class="connector-node connector-node-end"
            :cx="slice.nodeEndX"
            :cy="slice.nodeEndY"
            r="3"
          />

          <!-- halo behind logo -->
          <circle
            :cx="slice.iconX"
            :cy="slice.iconY"
            r="32"
            class="logo-halo"
          />
          <!-- logo outside pie -->
          <image
            :href="slice.logo"
            :x="slice.iconX - iconSize / 2"
            :y="slice.iconY - iconSize / 2"
            :width="iconSize"
            :height="iconSize"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        <!-- CENTER DONUT + YOUR LOGO -->
        <circle
          class="center-circle"
          cx="0"
          cy="0"
          :r="innerRadius"
        />
        <image
          ref="centerLogoRef"
          :href="centerLogo"
          :x="-centerLogoSize / 2"
          :y="-centerLogoSize / 2"
          :width="centerLogoSize"
          :height="centerLogoSize"
          clip-path="url(#center-logo-clip)"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </svg>

    <!-- RIGHT: BIGGER MODERN BOX WITH LOGOS -->
    <div class="info-box">
      <div class="info-header">
        <h2 style="display: flex; align-items: center;">Lao National Payment Network <img src="/logolapnet/fullcircle.png" style="width: 30px; height: 30px ; margin-left: 7px;  " alt=""></h2>
        <p>ໂຄງສ້າງຜູ້ຖືຮຸ້ນຂອງບໍລິສັດມີດັ່ງລຸ່ມນີ້:</p>
      </div>

      <ul class="legend">
        <li
          v-for="slice in slices"
          :key="'legend-' + slice.label"
          class="legend-item"
        >
          <div class="legend-left">
            <span
              class="legend-color"
              :style="{ backgroundColor: slice.color }"
            ></span>
            <span class="legend-label">{{ slice.label }}</span>
          </div>

          <!-- Logo instead of % -->
          <img
            class="legend-logo"
            :src="slice.logo"
            :alt="slice.label + ' logo'"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { gsap } from 'gsap'

const iconSize = 56
const radius = 210          // outer radius of pie
const innerRadius = 95      // donut "hole" radius
const centerLogoSize = 120  // size of your center logo

// MAIN CENTER LOGO
const centerLogo = '/logolapnet/fullcircle.png'

// Logos per slice
const rawData = [
  { label: 'ທະນາຄານແຫ່ງ ສປປ ລາວ', value: 25, logo: '/logoallmember/circle_scale/BOL.png' },
  { label: 'ທະນາຄານການຄ້າຕ່າງປະເທດລາວມະຫາຊົນ', value: 20, logo: '/logoallmember/circle_scale/BCEL.png' },
  { label: 'ບໍລິສັດ ຢູນຽນເພ ສາກົນ ຈຳກັດ', value: 15, logo: '/logoallmember/circle_scale/UPI.png' },
  { label: 'ທະນາຄານ ພັດທະນາລາວ ຈຳກັດ', value: 10, logo: '/logoallmember/circle_scale/LDB.PNG' },
  { label: 'ທະນາຄານ ສົ່ງເສີມກະສິກຳ ຈຳກັດ', value: 10, logo: '/logoallmember/circle_scale/APBB.PNG' },
  { label: 'ທະນາຄານ ຮ່ວມທຸລະກິດລາວຫວຽດ ຈຳກັດ', value: 5,  logo: '/logoallmember/circle_scale/lvb.PNG' },
  { label: 'ທະນາຄານ ຮ່ວມພັດທະນາ ຈຳກັດ', value: 5,  logo: '/logoallmember/circle_scale/JDB.png' },
  { label: 'ທະນາຄານ ເອສທີ ຈຳກັດ', value: 5,  logo: '/logoallmember/circle_scale/STB.png' },
  { label: 'ທະນາຄານ ບີໄອຊີ ຈຳກັດ', value: 5,  logo: '/logoallmember/circle_scale/BIC.png' }
]

const colors = [
  '#222d68',
  '#a82329',
  '#007a83',
  '#1294d8',
  '#4bc6bb',
  '#1c4693',
  '#0953a0',
  '#3360ad',
  '#212f51'
]

const slices = computed(() => {
  const total = rawData.reduce((sum, item) => sum + item.value, 0)
  // Start at 11 o'clock
  let currentAngle = -140

  return rawData.map((item, index) => {
    const angle = (item.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    currentAngle = endAngle

    const path = describeSlice(0, 0, radius, startAngle, endAngle)

    const midAngle = (startAngle + endAngle) / 2
    const rad = (midAngle * Math.PI) / 180

    // positions for outer logo
    const logoRadius = radius + 90
    const iconX = logoRadius * Math.cos(rad)
    const iconY = logoRadius * Math.sin(rad)

    // connector with "elbow": from slice edge -> bend -> near logo
    const connectorInnerRadius = radius * 0.88
    const startX = connectorInnerRadius * Math.cos(rad)
    const startY = connectorInnerRadius * Math.sin(rad)

    const bendRadius = radius + 30
    const bendX = bendRadius * Math.cos(rad)
    const bendY = bendRadius * Math.sin(rad)

    const connectorEndRadius = radius + 60
    const endX = connectorEndRadius * Math.cos(rad)
    const endY = connectorEndRadius * Math.sin(rad)

    const connectorPath = [
      'M', startX, startY,
      'L', bendX, bendY,
      'L', endX, endY
    ].join(' ')

    // small tech nodes
    const nodeStartX = (startX + bendX) / 2
    const nodeStartY = (startY + bendY) / 2
    const nodeEndX = (bendX + endX) / 2
    const nodeEndY = (bendY + endY) / 2

    return {
      ...item,
      color: colors[index % colors.length],
      path,
      iconX,
      iconY,
      bendX,
      bendY,
      nodeStartX,
      nodeStartY,
      nodeEndX,
      nodeEndY,
      connectorPath,
      startAngle,
      endAngle
    }
  })
})

function polarToCartesian (cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  }
}

function describeSlice (cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, startAngle)
  const end = polarToCartesian(cx, cy, r, endAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  return [
    'M', cx, cy,
    'L', start.x, start.y,
    'A', r, r, 0, largeArcFlag, 1, end.x, end.y,
    'Z'
  ].join(' ')
}

const chartGroup = ref(null)
const sliceRefs = ref([])
const logoRefs = ref([])
const centerLogoRef = ref(null)

const onEnter = (index) => {
  const sliceEl = sliceRefs.value[index]
  const logoEl = logoRefs.value[index]
  if (!sliceEl || !logoEl) return

  gsap.to(sliceEl, {
    duration: 0.3,
    scale: 1.06,
    transformOrigin: '50% 50%'
  })
  gsap.to(logoEl, {
    duration: 0.3,
    scale: 1.08,
    transformOrigin: '50% 50%'
  })
}

const onLeave = (index) => {
  const sliceEl = sliceRefs.value[index]
  const logoEl = logoRefs.value[index]
  if (!sliceEl || !logoEl) return

  gsap.to(sliceEl, {
    duration: 0.3,
    scale: 1,
    transformOrigin: '50% 50%'
  })
  gsap.to(logoEl, {
    duration: 0.3,
    scale: 1,
    transformOrigin: '50% 50%'
  })
}

onMounted(() => {
  // whole chart pop-in
  if (chartGroup.value) {
    gsap.from(chartGroup.value, {
      duration: 1.2,
      scale: 0.7,
      opacity: 0,
      ease: 'back.out(1.7)',
      transformOrigin: '50% 50%'
    })
  }

  // slices
  gsap.from(sliceRefs.value, {
    duration: 1,
    scale: 0,
    ease: 'back.out(1.7)',
    transformOrigin: '50% 50%',
    stagger: 0.05
  })

  // outer logos + groups
  gsap.from(logoRefs.value, {
    duration: 1,
    opacity: 0,
    y: 10,
    ease: 'back.out(1.7)',
    transformOrigin: '50% 50%',
    stagger: 0.05,
    delay: 0.2
  })

  // TECHNOLOGY line animation: infinite flowing dash
  const connectorEls = document.querySelectorAll('.tech-line')
  connectorEls.forEach(el => {
    const length = el.getTotalLength()
    gsap.set(el, {
      strokeDasharray: `${length / 6} ${length / 3}`,
      strokeDashoffset: 0
    })
    gsap.to(el, {
      strokeDashoffset: -length,
      duration: 3.2,
      ease: 'none',
      repeat: -1
    })
  })

  // center logo
  if (centerLogoRef.value) {
    gsap.from(centerLogoRef.value, {
      duration: 0.9,
      opacity: 0,
      scale: 0.3,
      ease: 'back.out(1.7)',
      transformOrigin: '50% 50%',
      delay: 0.4
    })
  }
})
</script>

<style scoped>
.pie-wrapper {
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  /* ⬇️ more gap between chart & box */
  gap: 56px;              /* was 32px */
  align-items: stretch;
  justify-content: center;
  padding: 32px;
  border-radius: 24px;
  background: radial-gradient(circle at top left, #0f172a, #020617);
  color: #e5e7eb;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.9);
}


/* LEFT: make chart bigger and give it more flex space */
.pie-svg {
  flex: 1.3 1 520px;  /* ⬅️ takes more width than before */
  width: 100%;
  max-width: 680px;   /* ⬅️ bigger chart size */
  height: auto;
  overflow: visible;
}

/* center donut circle */
.center-circle {
  fill: #020617;
  stroke: rgba(148, 163, 184, 0.4);
  stroke-width: 2;
}

/* connector lines */
.connector-line-main {
  fill: none;
  stroke: url(#tech-line-gradient);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.connector-line-glow {
  fill: none;
  stroke: rgba(45, 212, 191, 0.18);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.9;
  filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.7));
}

.connector-node {
  fill: #22d3ee;
  stroke: rgba(15, 23, 42, 0.9);
  stroke-width: 1.4;
}

.connector-node-bend {
  fill: #38bdf8;
}

.connector-node-start,
.connector-node-end {
  opacity: 0.9;
}

/* halo behind outer logos */
.logo-halo {
  fill: #020617;
  stroke: rgba(148, 163, 184, 0.7);
  stroke-width: 1.4;
  filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.5));
}

/* BIG MODERN BOX on the right */
.info-box {
  flex: 1.4 1 420px; /* still big, but chart is big too now */
  max-width: 520px;
  padding: 24px 26px;
  border-radius: 22px;
  background: radial-gradient(circle at top, rgba(15, 23, 42, 0.98), rgba(30, 64, 175, 0.9));
  box-shadow:
    0 18px 40px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(148, 163, 184, 0.25);
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.info-header h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.info-header p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #9ca3af;
}

.legend {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.legend-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.35);
}

.legend-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 999px;
}

.legend-label {
  font-size: 14px;
}

/* Logo in info box */
.legend-logo {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: #020617;
  object-fit: contain;
  padding: 3px;
}

/* hover effects */
.slice-group {
  cursor: pointer;
  transition: filter 0.2s ease;
}

.slice-group:hover {
  filter: drop-shadow(0 0 12px rgba(129, 140, 248, 0.85));
}

.outer-logo-group {
  cursor: pointer;
}

/* Responsive layout */
@media (max-width: 1024px) {
  .pie-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .pie-svg {
    max-width: 520px;
    flex: 1 1 auto;
  }

  .info-box {
    width: 100%;
    max-width: 520px;
    flex: 1 1 auto;
  }
}

@media (max-width: 768px) {
  .pie-wrapper {
    padding: 20px;
  }
}
</style>

