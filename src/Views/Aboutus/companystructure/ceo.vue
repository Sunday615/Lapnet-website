<!-- LaoStyleOrgChart_CEO.vue -->

<template>
  <main_navbar
    title="ໂຄງຮ່າງການຈັດຕັ້ງ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ກ່ຽວກັບພວກເຮົາ',
      'ໂຄງຮ່າງການຈັດຕັ້ງ',
      'ຄະນະອຳນວຍການ',
    ]"
    background-image="/aboutus/navigatormission-bg.png"
  />
  <div class="navbarcompany">
    <cpn_navbar />
  </div>

  <div class="org-page">
    <div class="org-container" ref="root">
      <!-- TOP HEADER BAR -->
      <header class="org-header">
        <div class="org-header-left">
          <h1 class="org-title-lao">ຄະນະອຳນວຍການ</h1>
        </div>
        <div class="org-header-right">
          <div class="org-logo-circle">
            <img src="/logolapnet/fullcircle.png" alt="LAPNet logo" />
          </div>
          <div class="org-header-en">
            LAO NATIONAL<br />
            PAYMENT NETWORK
          </div>
        </div>
      </header>

      <!-- ORG CHART FRAME -->
      <section class="org-frame">
        <!-- 2 ROWS: CEO + DEPUTY -->
        <div
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          :class="['org-row', `org-row--${rowIndex}`]"
        >
          <article
            v-for="person in row"
            :key="person.id"
            class="org-card"
          >
            <!-- AVATAR -->
            <div class="org-avatar-wrapper">
              <div class="org-avatar-ring">
                <div class="org-avatar-inner">
                  <img
                    v-if="person.photo"
                    :src="person.photo"
                    :alt="person.name"
                    class="org-avatar-img"
                  />
                  <span v-else class="org-avatar-placeholder">
                    {{ getInitials(person.name) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- TEXT -->
            <div class="org-card-body">
              <h2 class="org-card-name">
                {{ person.name }}
              </h2>
              <p class="org-card-role">
                {{ person.role }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>

  <secondfooter />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

import main_navbar from '../../../components/miannavbar/main_navbar.vue'
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue'
import cpn_navbar from './navbarcompany/cpn_navbar.vue'
import secondfooter from '../../../components/footer/mainfooter/secondfooter.vue'

const root = ref(null)

/**
 * โครงสร้างตามรูป:
 *  row 0: CEO
 *  row 1: Deputy CEO
 */
const rows = [
  [
    {
      id: 1,
      name: 'ທ່ານ ສິດສະໄຊ ສີຣະນິດຣາດ',  
      role: 'ຜູ້ອຳນວຍການ',
      photo: '/aboutus/company/lapnet_employee_image/CEO/CEO.png'                 
    }
  ],
  [
    {
      id: 2,
      name: 'ທ່ານ ນາງ ນີວະສອນ ມາລາທິບ', 
      role: 'ຮອງຜູ້ອຳນວຍການ',
  photo: '/aboutus/company/lapnet_employee_image/CEO/CFO.png'      
    }
  ]
]

// initials fallback (2 ตัวแรก)
const getInitials = (name) => (name || '').trim().slice(0, 2) || '?'

let gsapCtx

onMounted(() => {
  gsapCtx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    })

    tl.from('.org-container', {
      opacity: 0,
      y: 48,
      scale: 0.97,
      duration: 0.8
    })
      .from(
        '.org-header-left',
        { x: -40, opacity: 0, duration: 0.6 },
        '-=0.4'
      )
      .from(
        '.org-header-right',
        { x: 40, opacity: 0, duration: 0.6 },
        '-=0.5'
      )
      .from(
        '.org-frame',
        { opacity: 0, y: 24, duration: 0.7 },
        '-=0.25'
      )
      .from(
        '.org-row',
        { opacity: 0, y: 40, duration: 0.7, stagger: 0.18 },
        '-=0.2'
      )
      .from(
        '.org-card',
        {
          opacity: 0,
          y: 30,
          rotateX: -18,
          transformOrigin: '50% 100%',
          duration: 0.9,
          stagger: { each: 0.15, from: 'start' }
        },
        '-=0.5'
      )
      .from(
        '.org-avatar-ring',
        {
          scale: 0.5,
          opacity: 0,
          duration: 0.55,
          stagger: { each: 0.18, from: 'start' }
        },
        '-=0.55'
      )

    // soft floating effect
    gsap.to('.org-card', {
      y: -4,
      duration: 3.4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })
  }, root.value)
})

onBeforeUnmount(() => {
  if (gsapCtx) gsapCtx.revert()
})
</script>

<style scoped>
/* NAVBAR WRAPPER */
.navbarcompany {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #f5f7fb;
}

/* PAGE BACKGROUND */
.org-page {
  min-height: 100vh;
  padding: 56px 24px;
  background: radial-gradient(circle at top, #dde7ff, #eef3fb 45%, #e2e8f0);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
}

/* MAIN CONTAINER – เพิ่มความกว้างขึ้น */
.org-container {
  width: 100%;
  max-width: 1480px; /* เดิม 1380 → ขยาย */
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.18);
  overflow: hidden;
}

/* HEADER BAR */
.org-header {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: linear-gradient(135deg, #0f2d55, #123765);
  color: #ffffff;
  padding: 26px 56px;
}

.org-header-left {
  display: flex;
  align-items: center;
}

.org-title-lao {
  margin: 0;
  font-size: 1.9rem;
  font-weight: 600;
}

.org-header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.org-logo-circle {
  width: 82px;
  height: 82px;
  border-radius: 999px;
  border: 3px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: radial-gradient(circle at 30% 0, #4f8efc, #0a2b5c);
}

.org-logo-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.org-header-en {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

/* FRAME AROUND NODES */
.org-frame {
  margin: 40px 56px 46px;
  padding: 70px 40px 54px;
  border-radius: 16px;
  border: 2px dashed rgba(148, 163, 184, 0.8);
  background: radial-gradient(circle at top, #f8fafc, #edf2ff 40%, #f9fafb);
  perspective: 1600px; /* เพิ่ม perspective ให้ 3D แรงขึ้น */
}

/* ROWS: 2 แถว ตรงกลาง */
.org-row {
  display: flex;
  justify-content: center;
  gap: 42px;
  margin-bottom: 70px;
}

.org-row--1 {
  margin-bottom: 0;
}

/* CARD – กว้างขึ้น + 3D / gradient border */
.org-card {
  position: relative;
  width: 420px;          /* เดิม 310 → เพิ่มความกว้าง */
  max-width: 90%;
  background: radial-gradient(circle at top, #123765, #061429);
  border-radius: 20px;
  padding: 60px 40px 28px;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.45);
  transform-style: preserve-3d;
  border: 1px solid rgba(148, 163, 184, 0.45);
  overflow: visible;
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.35s ease-out;
}

/* gradient glow border (ใช้ pseudo) */
.org-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  
  opacity: 0;
  z-index: -1;
  transition: opacity 0.35s ease-out;
}

/* modern 3D hover */
.org-card:hover {
  transform: translateY(-12px) rotateX(6deg) rotateY(-3deg) scale(1.02);
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.65);
  background: radial-gradient(circle at top, #1a4174, #050c1a);
}

.org-card:hover::before {
  opacity: 1;
}

/* AVATAR */
.org-avatar-wrapper {
  position: absolute;
  top: -56px;
  left: 50%;
  transform: translateX(-50%);
}

.org-avatar-ring {
  width: 132px;
  height: 132px;
  border-radius: 999px;
  padding: 10px;
  background: #123765;
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.55);
}

.org-avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #020617;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.org-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.org-avatar-placeholder {
  font-size: 1.4rem;
  font-weight: 600;
  color: #e5edff;
}

/* TEXT */
.org-card-name {
  margin: 18px 0 6px;
  font-size: var(--fs-md);
  font-weight: 600;
}

.org-card-role {
  margin: 0;
  font-size: 0.92rem;
  opacity: 0.94;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .org-frame {
    margin: 28px 24px 32px;
    padding: 56px 20px 42px;
  }

  .org-row {
    flex-wrap: wrap;
    margin-bottom: 50px;
  }

  .org-card {
    width: 360px;
  }
}

@media (max-width: 640px) {
  .org-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 22px 24px;
  }

  .org-card {
    width: 100%;
    max-width: 340px;
    padding-inline: 24px;
  }

  .org-frame {
    margin: 22px 16px 30px;
    padding: 50px 16px 34px;
  }
}
</style>
