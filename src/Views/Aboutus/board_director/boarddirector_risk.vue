<template>
  <main_navbar
    title="ສະພາຜູ້ບໍລິຫານ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ກ່ຽວກັບພວກເຮົາ',
      'ສະພາຜູ້ບໍລິຫານ',
      'ຄະນະກຳມະການຄຸ້ມຄອງຄວາມສ່ຽງ'
    ]"
    background-image="/aboutus/navigatormission-bg.png"
  />


  <div class="boardofdirector">
    <bod_navbar />
  </div>

  <div class="org-layout">
    <div ref="orgShell" class="org-shell">
      <header class="org-header">
        <h2>ຄະນະກຳມະການຄຸ້ມຄອງຄວາມສ່ຽງ</h2>
        <p style="display: flex; align-items: center;">
          Lao National Payment Network
          <img
            src="/logolapnet/fullcircle.png"
            alt=""
            style="width: 25px; height: 25px; margin-left: 5px;"
          />
        </p>
      </header>

      <!-- VERTICAL SIDE STRUCTURE (2 NODES) -->
      <div class="org-vertical">
        <!-- Node 1 -->
        <div class="org-node">
          <div class="connector-dot"></div>
          <div class="person-card member-card">
            <div class="avatar-wrapper">
              <div class="avatar">
                <img src="/logoallmember/circle_scale/BIC.png" alt="" />
              </div>
            </div>
            <div class="person-info">
              <div class="name">ທ່ານ ຟີລິກ ດີຟຣານຊິສ</div>
              <div class="position">
                ຫົວໜ້າຄະນະກຳມະການຄຸ້ມຄອງຄວາມສ່ຽງ
              </div>
            </div>
          </div>
        </div>

        <!-- Node 2 -->
        <div class="org-node">
          <div class="connector-dot"></div>
          <div class="person-card member-card">
            <div class="avatar-wrapper">
              <div class="avatar">
                <img src="/logoallmember/circle_scale/lvb.PNG" alt="" />
              </div>
            </div>
            <div class="person-info">
              <div class="name">ທ່ານ ວຽງວິໄລ ແສງຄຳຢອງ</div>
              <div class="position">
                ຮອງຫົວໜ້າຄະນະກຳມະການຄຸ້ມຄອງຄວາມສ່ຽງ
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /VERTICAL SIDE STRUCTURE -->
    </div>
  </div>

  <div class="boxmargin"></div>
  <mainfooter />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

import bod_navbar from '../../../Views/Aboutus/companystructure/navbarcompany/bod_navbar.vue';
import main_navbar from '../../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';

const orgShell = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray('.person-card');

    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        duration: 0.8
      }
    });

    tl.from('.org-shell', {
      opacity: 0,
      y: 40,
      scale: 0.97
    })
      .from(
        '.org-header',
        {
          opacity: 0,
          y: 20
        },
        '-=0.4'
      )
      .from(
        cards,
        {
          opacity: 0,
          y: 24,
          filter: 'blur(6px)',
          stagger: 0.1
        },
        '-=0.3'
      );
  }, orgShell);
});

onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<style scoped>
.boardofdirector {
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
}

.boxmargin {
  width: 100%;
  height: 15vh;
  background-color: #f6f6f6;
}

.org-layout {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 4vw, 2.5rem);
  background: #f6f6f6;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text',
    sans-serif;
}

/* gradient token */
.org-layout {
  --blue-gradient: linear-gradient(
    95deg,
    rgba(0, 3, 41, 1) 0%,
    rgba(0, 51, 171, 1) 46%
  );
}

.org-shell {
  width: 100%;
  max-width: 900px;
  background: #ffffff;
  border-radius: 2.8rem;
  padding: 3rem 3.2rem 3rem;
  position: relative;
  overflow: hidden;
  margin-inline: auto;
  box-shadow:
    0 32px 90px rgba(15, 23, 42, 0.22),
    0 0 0 1px rgba(148, 163, 184, 0.28);
}

/* background glow */
.org-shell::before {
  content: '';
  position: absolute;
  inset: -40% 20%;
  background: var(--blue-gradient);
  opacity: 0.22;
  pointer-events: none;
  z-index: -1;
}

/* header */
.org-header {
  margin-bottom: 2.4rem;
}

.org-header h2 {
  margin: 0;
  font-size: clamp(1.6rem, 2vw, 2rem);
  font-weight: 600;
  color: #0f172a;
  letter-spacing: 0.03em;
}

.org-header p {
  margin: 0.5rem 0 0;
  font-size: clamp(0.95rem, 1.1vw, 1.05rem);
  color: #6b7280;
}

/* VERTICAL SIDE STRUCTURE --------------------------------------- */
.org-vertical {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2.8rem;
}

/* vertical line */
.org-vertical::before {
  content: '';
  position: absolute;
  left: 1.4rem;
  top: 0.6rem;
  bottom: 0.6rem;
  width: 2px;
  background: linear-gradient(
    180deg,
    rgba(0, 51, 171, 0.15),
    rgba(37, 99, 235, 0.8)
  );
}

/* one row/node in the vertical line */
.org-node {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

/* dot on the line */
.connector-dot {
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #ffffff;
  border: 3px solid #1d4ed8;
  box-shadow:
    0 0 0 4px rgba(191, 219, 254, 0.7),
    0 10px 20px rgba(15, 23, 42, 0.25);
  margin-top: 1.3rem;
  flex-shrink: 0;
}

/* PERSON CARD ---------------------------------------------------- */
.person-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1.4rem 1.8rem;
  background: #ffffff;
  border-radius: 1.9rem;
  border: 1px solid #e5e7eb;
  box-shadow:
    0 24px 50px rgba(15, 23, 42, 0.14),
    0 0 0 1px rgba(148, 163, 184, 0.16);
  box-sizing: border-box;
  transition:
    transform 0.16s ease-out,
    box-shadow 0.16s ease-out,
    border-color 0.16s ease-out,
    background 0.16s ease-out;
}

.person-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 30px 60px rgba(15, 23, 42, 0.26),
    0 0 0 1px rgba(37, 99, 235, 0.6);
  border-color: rgba(37, 99, 235, 0.7);
}

/* avatar left */
.avatar-wrapper {
  flex: 0 0 82px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 82px;
  height: 82px;
  border-radius: 999px;
  background: var(--blue-gradient);
  box-shadow:
    0 22px 40px rgba(15, 23, 42, 0.45),
    0 0 0 4px rgba(255, 255, 255, 0.96);
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

/* text */
.person-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #111827;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.position {
  margin-top: 0.28rem;
  font-size: 1.05rem;
  color: #6b7280;
}

/* members */
.member-card {
  background: #f3f4f6;
}

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .boardofdirector,
  .boxmargin {
    height: 10vh;
  }

  .org-shell {
    padding: 2.2rem 1.8rem 2.4rem;
    border-radius: 2.4rem;
  }

  .org-vertical {
    padding-left: 2.1rem;
  }

  .org-vertical::before {
    left: 1.1rem;
  }

  .avatar-wrapper {
    flex-basis: 64px;
  }

  .avatar {
    width: 64px;
    height: 64px;
  }

  .name {
    font-size: 1.15rem;
  }

  .position {
    font-size: 0.95rem;
  }
}

@media (max-width: 600px) {
  .boardofdirector,
  .boxmargin {
    height: 8vh;
  }

  .org-layout {
    padding: 1.5rem 1rem;
  }

  .org-shell {
    padding-inline: 1.4rem;
    padding-block: 1.8rem 2rem;
    border-radius: 2.1rem;
    box-shadow:
      0 20px 40px rgba(15, 23, 42, 0.16),
      0 0 0 1px rgba(148, 163, 184, 0.18);
  }

  .org-header {
    margin-bottom: 1.6rem;
    text-align: left;
  }

  .org-vertical {
    gap: 1.6rem;
    padding-left: 1.9rem;
  }

  .person-card {
    padding: 1.1rem 1.4rem;
    gap: 1rem;
  }

  .name {
    white-space: normal;
  }
}

@media (max-width: 480px) {
  .org-layout {
    padding: 1.25rem 0.75rem;
  }

  .org-shell {
    border-radius: 1.6rem;
  }

  .org-node {
    gap: 0.75rem;
  }

  .person-card {
    padding: 0.9rem 1.1rem;
  }

  .avatar-wrapper {
    flex-basis: 56px;
  }

  .avatar {
    width: 56px;
    height: 56px;
  }

  .org-header h2 {
    font-size: 1.4rem;
  }

  .org-header p {
    font-size: 0.9rem;
  }
}
</style>
