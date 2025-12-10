<template>
  <main_navbar
    title="ສະພາຜູ້ບໍລິຫານ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ກ່ຽວກັບພວກເຮົາ',
      'ຄະນະສະພາຜູ້ບໍລິຫານ'
      
    ]"
    background-image="/aboutus/navigatormission-bg.png"
  />
  <div class="navbardirector">
    <bod_navbar />
  </div>

  <div class="chart-page">
    <div class="chart-wrapper">
      <h1 class="chart-title">ຄະນະສະພາຜູ້ບໍລິຫານ</h1>
      <p class="chart-subtitle" style="display:flex ; align-items: center;">
        ຄະນະບໍລິຫານງານ Lao National Payment Network
        <img
          src="/logolapnet/fullcircle.png"
          style="width: 25px; height:25px ; margin-left: 5px;"
          alt=""
        >
      </p>

      <!-- DESKTOP LAYOUT -->
      <div class="chart-grid-desktop">
        <div
          v-for="(row, rowIndex) in cleanLayout"
          :key="'row-' + rowIndex"
          :class="[
            'chart-row',
            rowIndex === cleanLayout.length - 1
              ? 'chart-row--grid'
              : 'chart-row--flex'
          ]"
        >
          <div
            v-for="(slot, colIndex) in row"
            :key="'cell-' + rowIndex + '-' + colIndex"
            class="chart-cell"
            :class="[
              slot.roleTag === 'president' && 'chart-cell--president',
              slot.roleTag === 'vp' && 'chart-cell--vp'
            ]"
          >
            <div
              class="member-card"
              :class="[
                slot.roleTag === 'president' && 'member-card--president',
                slot.roleTag === 'vp' && 'member-card--vp',
                (rowIndex === 0 || rowIndex === 1 || rowIndex === cleanLayout.length - 1) && 'member-card--large'
              ]"
            >
              <span class="shine"></span>

              <div class="avatar-wrapper">
                <img
                  class="avatar-image"
                  :src="slot.image"
                  :alt="slot.name"
                />
              </div>
              <div class="member-info">
                <div class="member-name">
                  {{ slot.name }}
                </div>
                <div class="member-role">
                  {{ slot.role }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MOBILE LAYOUT (President first, VP second) -->
      <div class="chart-grid-mobile">
        <div
          v-for="(member, index) in mobileMembers"
          :key="'mobile-' + index"
          class="chart-cell mobile-cell"
        >
          <div
            class="member-card"
            :class="[
              member.roleTag === 'president' && 'member-card--president',
              member.roleTag === 'vp' && 'member-card--vp'
            ]"
          >
            <span class="shine"></span>

            <div class="avatar-wrapper">
              <img
                class="avatar-image"
                :src="member.image"
                :alt="member.name"
              />
            </div>
            <div class="member-info">
              <div class="member-name">
                {{ member.name }}
              </div>
              <div class="member-role">
                {{ member.role }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END MOBILE LAYOUT -->
    </div>
  </div>

  <div class="boxmargin" style="width: 100%; height: 15vh"></div>
  <mainfooter />
</template>

<script setup>
import { onMounted, onBeforeUnmount, nextTick, computed } from "vue";
import { gsap } from "gsap";
import mainfooter from "../../../components/footer/mainfooter/mainfooter.vue";
import main_navbar from "../../../components/miannavbar/main_navbar.vue";
import bod_navbar from "../companystructure/navbarcompany/bod_navbar.vue";

// 4 columns layout (desktop)
// Row 1 :            President
// Row 2 :            Vice President
// Row 3 :      UPI      LDB      APB
// Row 4 :      LVB      JDB      STB      BIC
const layout = [
  // Row 1: President
  [
    null,
    {
      type: "member",
      name: "ທ່ານ ມະໂນລິດ ຊຸມພົນພັກດີ",
      role: "ປະທານສະພາ",
      roleTag: "president",
      image: "/logoallmember/circle_scale/BOL.png"
    },
    null,
    null
  ],

  // Row 2: Vice President
  [
    null,
    {
      type: "member",
      name: "ທ່ານ ນັນທະລາດ ແກ້ວປະເສີດ",
      role: "ຮອງປະທານສະພາ",
      roleTag: "vp",
      image: "/logoallmember/circle_scale/BCEL.png"
    },
    null,
    null
  ],

  // Row 3: UPI – LDB – APB
  [
    {
      type: "member",
      name: "ທ່ານ CHU XUEMEI",
      role: "ຄະນະສະພາບໍລິຫານ",
      roleTag: "member",
      image: "/logoallmember/circle_scale/UPI.png"
    },
    {
      type: "member",
      name: "ທ່ານ ວຽງຄຳ ວັນສີລາລົມ",
      role: "ຄະນະສະພາບໍລິຫານ",
      roleTag: "member",
      image: "/logoallmember/circle_scale/LDB.PNG"
    },
    {
      type: "member",
      name: "ທ່ານ ສີສະອາດ ນຶມອາສາ",
      role: "ຄະນະສະພາບໍລິຫານ",
      roleTag: "member",
      image: "/logoallmember/circle_scale/APBB.PNG"
    },
    null
  ],

  // Row 4: LVB – JDB – STB – BIC
  [
    {
      type: "member",
      name: "ທ່ານ ວຽງວິໄລ ແສງຄຳຢອງ",
      role: "ຄະນະສະພາບໍລິຫານ",
      roleTag: "member",
      image: "/logoallmember/circle_scale/lvb.PNG"
    },
    {
      type: "member",
      name: "ທ່ານ ຈັນຊະນະ ສິງຫາວົງ",
      role: "ຄະນະສະພາບໍລິຫານ",
      roleTag: "member",
      image: "/logoallmember/circle_scale/JDB.png"
    },
    {
      type: "member",
      name: "ທ່ານ ເອກະລາດ ລັດຕະນະຈານ",
      role: "ຄະນະສະພາບໍລິຫານ",
      roleTag: "member",
      image: "/logoallmember/circle_scale/STB.png"
    },
    {
      type: "member",
      name: "ທ່ານ ຟີລິກ ດີຟຣານຊິສ",
      role: "ຄະນະສະພາບໍລິຫານ",
      roleTag: "member",
      image: "/logoallmember/circle_scale/BIC.png"
    }
  ]
];

// Clean layout for desktop (remove nulls)
const cleanLayout = computed(() =>
  layout.map((row) => row.filter((slot) => slot && slot.type === "member"))
);

// Mobile order: President first, Vice President second, then all others
const mobileMembers = computed(() => {
  const all = [];
  layout.forEach((row) => {
    row.forEach((slot) => {
      if (slot && slot.type === "member") {
        all.push(slot);
      }
    });
  });

  const presidentIndex = all.findIndex((m) => m.roleTag === "president");
  const vpIndex = all.findIndex((m) => m.roleTag === "vp");

  const result = [];

  if (presidentIndex !== -1) {
    result.push(all[presidentIndex]);
  }
  if (vpIndex !== -1) {
    result.push(all[vpIndex]);
  }

  all.forEach((m, idx) => {
    if (idx !== presidentIndex && idx !== vpIndex) {
      result.push(m);
    }
  });

  return result;
});

// store GSAP tweens to clean up later
const shineTweens = [];

onMounted(async () => {
  await nextTick();

  const cards = document.querySelectorAll(".member-card");

  cards.forEach((card) => {
    const shine = card.querySelector(".shine");
    if (!shine) return;

    // Optional GSAP tween here
    // const tween = gsap.to(shine, { ... });
    // shineTweens.push(tween);
  });
});

onBeforeUnmount(() => {
  shineTweens.forEach((t) => t.kill());
  shineTweens.length = 0;
});
</script>

<style scoped>
.navbardirector {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-page {
  min-height: 100vh;
  padding: 56px 16px; /* slightly smaller horizontal padding */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* better on mobile, content starts from top */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
  color: #f5f7ff;
  overflow-x: hidden; /* guard against accidental oversize */
}

/* main card wrapper */
.chart-wrapper {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;              /* center container */
  padding: 32px 36px 40px;
  box-sizing: border-box;      /* IMPORTANT: prevents oversize with padding */
  border-radius: 32px;
  background: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.14),
      transparent 55%
    ),
    rgba(4, 8, 36, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(20px);
}

.chart-title {
  font-size: clamp(2.2rem, 2.5vw + 1.4rem, 3.5rem);
  font-weight: 700;
  margin: 0 0 6px;
}

.chart-subtitle {
  margin: 0 0 28px;
  font-size: 14px;
  opacity: 0.85;
}

/* DESKTOP GRID WRAPPER */
.chart-grid-desktop {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Base row (animation + spacing only) */
.chart-row {
  gap: 22px;
  opacity: 0;
  transform: translateY(18px) scale(0.98);
  animation: rowIn 0.7s ease-out forwards;
}

/* last row: 4-column full-width grid */
.chart-row--grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

/* row 1–3: centered flex rows */
.chart-row--flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.chart-cell {
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 170px;
  /* fluid default width for normal members */
  flex: 0 1 390px;
  max-width: 100%;
}

/* wider VP */
.chart-row--flex .chart-cell--vp {
  flex: 0 1 480px;
}

/* widest President */
.chart-row--flex .chart-cell--president {
  flex: 0 1 500px;
}

/* MOBILE LIST (hidden by default) */
.chart-grid-mobile {
  display: none;
}

/* Member Card */
.member-card {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 22px;
  border-radius: 24px;
  background: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.16),
      transparent 55%
    ),
    rgba(6, 12, 52, 0.98);
  box-shadow: 0 20px 52px rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  transition: transform 220ms ease, box-shadow 220ms ease,
    background 220ms ease;
}

/* Bigger cards: row 1, row 2, row 4 */
.member-card--large {
  padding: 26px 26px;
}

.member-card--large .avatar-wrapper {
  width: 96px;
  height: 96px;
}

.member-card--large .member-name {
  font-size: 18px;
}

.member-card--large .member-role {
  font-size: 1.05rem;
}

/* Glow border effect */
.member-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    95deg,
    rgba(0, 3, 41, 1) 0%,
    rgba(0, 51, 171, 1) 46%,
    rgba(157, 214, 255, 0.9) 100%
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.7;
  pointer-events: none;
}

/* ultra-smooth GSAP-controlled light sweep */
.member-card .shine {
  position: absolute;
  top: -70%;
  left: -40%;
  width: 70%;
  height: 240%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.32),
    rgba(255, 255, 255, 0)
  );
  pointer-events: none;
  transform: translateX(-220%);
  will-change: transform;
  filter: blur(6px);
  mix-blend-mode: screen;
}

/* Hover interaction */
.member-card:hover {
  transform: translateY(-8px) scale(1.035);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.75);
}

.member-card--president {
  background: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.2),
      transparent 55%
    ),
    rgba(8, 20, 90, 0.98);
}

.member-card--vp {
  background: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.18),
      transparent 55%
    ),
    rgba(6, 16, 70, 0.98);
}

.avatar-wrapper {
  flex-shrink: 0;
  width: 84px;
  height: 84px;
  border-radius: 999px;
  padding: 4px;
  background: linear-gradient(
    135deg,
    rgba(157, 214, 255, 1),
    rgba(0, 51, 171, 1)
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
  background: #020617;
}

.member-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.member-name {
  font-size: 17px;
  font-weight: 600;
}

.member-role {
  font-size: 1rem;
  text-transform: uppercase;
  opacity: 0.85;
}

/* Animations */
@keyframes rowIn {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .chart-row {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* MEDIUM SCREENS – tablets, small laptops */
@media (max-width: 1200px) {
  .chart-wrapper {
    padding: 28px 22px 32px;
  }

  /* Stack president / VP a bit nicer, keep full-width */
  .chart-row--flex .chart-cell,
  .chart-row--flex .chart-cell--vp,
  .chart-row--flex .chart-cell--president {
    flex: 1 1 100%;
    max-width: 600px;
  }

  /* Make last row 2x2 instead of 4 squeezed columns */
  .chart-row--grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .member-card--large {
    padding: 22px 22px;
  }

  .member-card--large .avatar-wrapper {
    width: 88px;
    height: 88px;
  }
}

/* RESPONSIVE – mobile */
@media (max-width: 900px) {
  .chart-page {
    padding: 40px 12px;
  }

  .chart-wrapper {
    padding: 24px 16px 28px;
    max-width: 100%; /* ensure it never grows beyond viewport */
  }

  /* Hide desktop grid, show mobile stack */
  .chart-grid-desktop {
    display: none;
  }

  .chart-grid-mobile {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 20px;
  }

  .mobile-cell {
    min-height: 160px;
  }

  .chart-title {
    text-align: center;
  }

  .chart-subtitle {
    text-align: center;
  }

  .member-card {
    padding: 18px 16px;
    gap: 14px;
  }

  .avatar-wrapper {
    width: 72px;
    height: 72px;
  }

  .member-name {
    font-size: 16px;
  }

  .member-role {
    font-size: 0.9rem;
  }
}
</style>
