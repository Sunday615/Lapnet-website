<template>
  <main_navbar title="ວິໄສທັດ ແລະ ພາລະກິດ" :breadcrumb="[
    'ໜ້າຫຼັກ',
    'ກ່ຽວກັບພວກເຮົາ',
    'ວິໄສທັດ ແລະ ພາລະກິດ'
  ]" background-image="/aboutus/navigatormission-bg.png" />
  <section class="vm-section-wrapper">
    <div class="vm-inner" ref="inner">
      <!-- Section 1 -->
      <div class="vm-section" ref="sectionOne">
        <div class="vm-content">
          <p class="vm-kicker">Our Vision</p>
          <h2 class="vm-hero">ວິໄສທັດ</h2>
          <p class="vm-paragraph">
            ພັດທະນາລະບົບການຊໍາລະທຸລະກຳຍ່ອຍໃຫ້ເປັນສູນກາງການຊໍາລະຂອງບັນດາຜູ້ໃຫ້ບໍລິການຊໍາລະ ທັງພາຍໃນ ແລະ ສາກົນ, ແນໃສ່ໃຫ້ປະຊາຊົນລາງໄດ້ໃຊ້ບໍລິການຊໍາລະທີ່ສະດວກວ່ອງໄວ, ທັນສະໄໝ, ປອດໄພ, ຕົ້ນທືນຕໍາ ແລະ ເພື່ອໃຫ້ບໍລິສັດການເປັນໂຄງຮ່າງພື້ນຖານໃຫ້ແກ່ການຊໍາລະໃນ ສປປ ລາວ.
          </p>
        </div>

        <div class="vm-image-container">
          <div class="vm-image-frame">
            <img
              src="/aboutus/vision/2.png"
              alt="Team collaborating around a digital interface"
              class="vm-image"
            />
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="vm-divider"></div>

      <!-- Section 2 -->
      <div class="vm-section vm-section-reverse" ref="sectionTwo">
       

        <div class="vm-content">
          <p class="vm-kicker">Our Mission</p>
          <h2 class="vm-hero">ພາລະກິດ</h2>
          <p class="vm-paragraph">
            ພັດທະນາລະບົບການຊໍາລະໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ, ຕອບຮັບໄດ້ທຸກຊ່ອງທາງການຊໍາລະທີ່ເກີດຂື້ນ, ເຕົ້າໂຮມເອົາບັນດາທະນາຄານທຸລະກິດ, ສະຖາບັນການເງິນ ແລະ ບໍລິສັດ Fintech ທີ່ເປັນຜູ້ໃຫ້ບໍລິການຊໍາລະ ໃຫ້ເຂົ້າມາເປັນສະມາຊີກຂອງບໍລິສັດ ເພື່ອພ້ອມກັນໃຫ້ບໍລິການລະບົບການຊໍາລະແກ່ສັງຄົມ, ຫັນເອົາການເຊື່ອມຕໍ່ສາກົນທີ່ມີລັກສະນະກະແຈກກະຈາຍລວມສູນເຂົ້າມາເຊື່ອມຕໍ່ເປັນຮູບແບບລະບົບປະຕູດຽວເພື່ອຫຼຸດຜ່ອນຕົ້ນທືນລວມຂອງທົ່ວລະບົບ, ເສີມຂະຫຍາຍຄວາມຮູ້-ເຂົ້າໃຈໃຫ້ແກ່ມວນຊົນໄດ້ຮັບຮູ້ເຖິງຄວາມສຳຄັນ ແລະ ປະໂຫຍກຂອງການນຳໃຊ້ລະບົບການຊໍາລະເອເລັກໂຕຣນິກຢ່າງຖ່ອງແທ້ ເພື່ອເຮັດໃຫ້ມວນຊົນໄດ້ນຳໃຊ້ລະບົບການຊໍາລະຢ່າງຖືກຕ້ອງ ແລະ ປອດໄພ ເປັນການເສີມສ້າງຄວາມໝັ້ນໃຈໃຫ້ແກ່ມວນຊົນ.
          </p>
        </div>
         <div class="vm-image-container">
          <div class="vm-image-frame">
            <img
              src="/aboutus/vision/1.png"
              alt="Modern workspace with data visualization on screen"
              class="vm-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <mainfooter/>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import main_navbar from "../../../components/miannavbar/main_navbar.vue";
import mainfooter from "../../../components/footer/mainfooter/mainfooter.vue";
const inner = ref(null);
const sectionOne = ref(null);
const sectionTwo = ref(null);

onMounted(() => {
  // Timeline for smooth, modern animation
  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: "power3.out" }
  });

  // Fade in + slide the gradient box
  tl.from(inner.value, {
    autoAlpha: 0,
    y: 40,
    scale: 0.96
  });

  // Animate section 1 content & image
  if (sectionOne.value) {
    const sectionOneChildren = sectionOne.value.querySelectorAll(
      ".vm-content, .vm-image-frame"
    );
    tl.from(
      sectionOneChildren,
      {
        y: 40,
        autoAlpha: 0,
        stagger: 0.15
      },
      "-=0.4"
    );
  }

  // Animate section 2 content & image
  if (sectionTwo.value) {
    const sectionTwoChildren = sectionTwo.value.querySelectorAll(
      ".vm-content, .vm-image-frame"
    );
    tl.from(
      sectionTwoChildren,
      {
        y: 40,
        autoAlpha: 0,
        stagger: 0.15
      },
      "-=0.5"
    );
  }
});
</script>

<style scoped>
/* White page background */
.vm-section-wrapper {
  min-height: 100vh;
  padding: 72px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-sizing: border-box;
}

/* Gradient only on the box container */
.vm-inner {
  width: 100%;
  max-width: 1500px;
  background: linear-gradient(
    95deg,
    rgba(0, 3, 41, 1) 0%,
    rgba(0, 51, 171, 1) 46%
  );
  border-radius: 28px;
  padding: 40px 32px 44px;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-sizing: border-box;
  color: #f5f7ff;
}

/* Shared Section Layout */
.vm-section {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.vm-section-reverse {
  flex-direction: row-reverse;
}

/* Left/Right containers */
.vm-content {
  flex: 1 1 320px;
  min-width: 280px;
}

.vm-image-container {
  flex: 1 1 320px;
  min-width: 280px;
  display: flex;
  justify-content: center;
}

/* Typography */
.vm-kicker {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.85rem;
  margin-bottom: 10px;
  opacity: 0.85;
}

.vm-hero {
  font-size: 2.4rem;
  line-height: 1.1;
  margin: 0 0 16px;
  font-weight: 700;
}

.vm-paragraph {
  margin: 0 0 12px;
  font-size: 0.98rem;
  line-height: 1.6;
  color: rgba(237, 240, 255, 0.9);
}

/* Images */
.vm-image-frame {
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: 26px;
  overflow: hidden;
  background: radial-gradient(
    circle at top,
    rgba(255, 255, 255, 0.14),
    rgba(12, 24, 78, 0.5)
  );
  padding: 3px;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
}

.vm-image {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 22px;
}

/* Divider between sections */
.vm-divider {
  margin: 36px 0;
  height: 1px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.45) 40%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0.9;
}

/* Responsiveness */
@media (max-width: 768px) {
  .vm-section-wrapper {
    padding: 40px 18px;
  }

  .vm-inner {
    padding: 28px 20px 32px;
    border-radius: 22px;
  }

  .vm-section,
  .vm-section-reverse {
    flex-direction: column;
  }

  .vm-hero {
    font-size: 2rem;
  }

  .vm-image-frame {
    max-width: 100%;
  }
}
</style>
