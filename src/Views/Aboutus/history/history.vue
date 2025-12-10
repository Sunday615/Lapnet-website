<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import main_navbar from "../../../components/miannavbar/main_navbar.vue";
import mainfooter from "../../../components/footer/mainfooter/mainfooter.vue";

import piechart from "../piechart/piechart.vue";
gsap.registerPlugin(ScrollTrigger);

const root = ref(null);
const track = ref(null);
const active = ref(null);

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

const steps = [
  {
    n: "01",
    title: "ເລີ່ມກໍຕັ້ງບໍລິສັດ",
    color: "#10C7FF",
    glow: "rgba(16,199,255,0.38)",
    iconClass: "fa-solid fa-building-columns",
    detail:
      " ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ຫຼື LAPNet ດຳເນີນທຸລະກິດໃນຮູບແບບ ບໍລິສັດຈຳກັດ,ເຊິ່ງໄດ້ຮັບອະນຸຍາດເປັນຜູ້ຄວບຄຸມລະບົບບັດທະນາຄານຮ່ວມກັນ ຫຼື Lao ATM Pool Switching (LAPS)ໂດຍແມ່ນໂຄງການຊ່ວຍເຫຼືອລະຫວ່າງລັດຖະບານ ສປ ຈີນ ຕໍ່ກັບ ສປປ ລາວ ຕາມສານແລກປ່ຽນວ່າດ້ວຍລັດຖະບານ ສປຈີນເຫັນດີຊ່ວຍເຫຼືອລັດຖະບານ ສປປ ລາວ ປະຕິບັດ ‘’ໂຄງການລະບົບຊຳລະດ້ວຍບັດອັດຕະໂນມັດຂອງທະນາຄານ’’",
  },
  {
    n: "02",
    title: "ເປີດນຳໃຊ້ລະບົບຢ່າງເປັນທາງການ",
    color: "#5B52FF",
    glow: "rgba(91,82,255,0.34)",
    iconClass: "fa-solid fa-power-off",
    detail:
      " ໂຄງການດັ່ງກ່າວໄດ້ສຳເລັດ ແລະ ເປີດນຳໃຊ້ລະບົບຢ່າງເປັນທາງການໃນວັນທີ 01/12/2015ໂດຍຢູ່ພາຍໃຕ້ການບໍລິຫານຂອງ ທຫລ, ເຊິ່ງຂັ້ນເທິງໄດເຫັນດີມອບໝາຍໃຫ້ກົມເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານເປັນຜູ້ຈັດຕັ້ງປະຕິບັດ ແລະ ໄດ້ສ້າງຕັ້ງພະແນກຄຸ້ມຄອງບັດທະນາຄານຂຶ້ນມາເພື່ອຄຸ້ມຄອງ ແລະ ເຮັດວຽກງານດັ່ງກ່າວໂດຍກົງ,ເຊິ່ງທາງຝ່າຍຈີນ ຮັບຜິດ ຊອບໃນການບຳລຸງຮັກສາທາງດ້ານເຕັກນິກຂອງລະບົບໃຫ້ ສປປ ລາວ ລ້າເປັນໄລຍະເວລາ 3 ປີ.",
  },
  {
    n: "03",
    title: "ຫັນປ່ຽນເປັນນິຕິບຸກຄົນ",
    color: "#8A48FF",
    glow: "rgba(138,72,255,0.34)",
    iconClass: "fa-solid fa-arrows-rotate",
    detail:
      "ຜ່ານການຈັດຕັ້ງປະຕິບັດຕົວຈິງເຫັນວ່າການນຳໃຊ້ລະບົບດັ່ງກ່າວແມ່ນຍັງບໍ່ເຕັມປະສິດທິພາບເທົ່າທີ່ຄວນ ເນື່ອງຈາກການດຳເນີນງານແມ່ນບໍ່ສອດຄ່ອງກັບພາລະບົດບາດຂອງ ທຫລ ທີ່ເປັນຜູ້ຄຸ້ມຄອງມະຫາພາກດ້ານການເງິນ-ເງິນຕາ, ທັງເປັນອົງກອນທີ່ບໍ່ສະແຫວງຫາຜົນກຳໄລ ຈຶ່ງເຮັດໃຫ້ການຄຸ້ມຄອງບໍລິຫານລະບົບດັ່ງ ກ່າວ ຍັງມີລັກສະນະ ‘’ນະໂຍບາຍ’’. ດັ່ງນັ້ນ, ຄະນະພັກ, ຄະນະຜູ້ວ່າການ ທຫລ ຈຶ່ງມີມະຕິຕົກລົງເຫັນດີໃຫ້ຫັນເອົາວຽກງານ LAPS ເປັນນິຕິບຸກຄົນຕາມມະຕິກອງປະຊຸມຄະນະປະຈຳພັກ-ຄະນະຜູ້ວ່າການ ທຫລ ປະຈຳເດືອນ ກຸມພາ 2016.",
  },
  {
    n: "04",
    title: "ການບຳລຸງຮັກສາລະບົບ",
    color: "#24DB00",
    glow: "rgba(76, 242, 41)",
    iconClass: "fa-solid fa-gears",
    detail:
      "ພາຍຫຼັງສິ້ນສຸດໄລຍະການບຳລຸງຮັກສາທາງດ້ານເຕັກນິກລ້າຈາກຝ່າຍຈີນໃນວັນທີ 01/12/2018, ສປປ ລາວຕ້ອງໄດ້ສືບຕໍ່ໃນການບໍາລຸງຮັກສາລະບົບເອງ. ໂດຍ ທຫລ ໄດ້ໂອນພາລະບົດບາດການດຳເນີນງານໃຫ້ບໍລິສັດLAPNetທີ່ຈະສ້າງຂຶ້ນ ເປັນຜູ້ສືບຕໍ່ດຳເນີນທຸລະກິດໃນການໃຫ້ບໍລິການລະບົບ LAPS ໃຫ້ມີປະສິດທິຜົນສູງສຸດ ແລະ ພັດທະນາໃຫ້ສາມາດເຊື່ອມໂຍງກັບພາກພື້ນ ແລະ ສາກົນ,ເພາະວ່າລະບົບຊຳລະທາງການເງິນແມ່ນຍິ່ງມີຄວາມສຳຄັນເປັນອັນດັບຕົ້ນໆຂອງຂະແໜງເສດຖະຖິດ-ການເງິນ  ທີ່ຄວນໄດ້ຮັບການພັດທະນາໃຫ້ມີຄວາມ ເໝາະສົມ-ສອດຄ່ອງກັບຄວາມຕ້ອງການຂອງໜ່ວຍງານເສດຖະກິດ ທັງພາກລັດ ແລະ ເອກະຊົນ.",
  },
  {
    n: "05",
    title: "ອຳນວຍຄວາມສະດວກໃຫ້ແກ່ຜູ້ຊົມໃຊ້",
    color: "#FF4B4B",
    glow: "rgba(255,75,75,0.34)",
    iconClass: "fa-solid fa-people-group",
    detail:
      "ບໍລິສັດລາວ ຈະເປັນສ່ວນໜຶ່ງໃນການປະກອບສ່ວນຊຸກຍູ້ເສດຖະກິດ ແລະ ໃຫ້ການສະໜັບສະໜູນບັນທະນາຄານທຸລະກິດໃຫ້ສາມາດເຊື່ອມໂຍງ ກັນໃຫ້ໄດ້ຫລາຍຊ່ອງທາງຂຶ້ນກວ່າເກົ່າ ເພື່ອເປັນການອຳນວຍຄວາມສະດວກໃຫ້ແກ່ຜູ້ຊົມໃຊ້ໄດ້ສາມາດດຳເນີນທຸລະກຳທາງດ້ານການເງິນໄດ້ “ ທຸກທີ່, ທຸກເວລາ, ທຸກຊ່ອງທາງການຊຳລະ”.",
  },

];

// Zig-zag vertical positions (bigger)
const nodeOffsets = [140, 380, 190, 410, 220];

// ถ้าภายหลัง steps มากกว่า 5 ให้ใช้รูปแบบสลับสูง/ต่ำอัตโนมัติ
const getTop = (i) => nodeOffsets[i] ?? (i % 2 === 0 ? 180 : 410);

const activeIndex = computed(() =>
  active.value ? steps.findIndex((s) => s.n === active.value.n) : -1
);

const openStep = (s) => {
  active.value = s;
  nextTick(() => {
    gsap.fromTo(
      ".modal__panel",
      { y: 18, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.28, ease: "power3.out" }
    );
  });
};

const closeModal = () => {
  gsap.to(".modal__panel", {
    y: 18,
    opacity: 0,
    duration: 0.18,
    ease: "power2.in",
    onComplete: () => (active.value = null),
  });
};

let st = null; // main ScrollTrigger

onMounted(async () => {
  await nextTick();

  const container = root.value;
  const content = track.value;
  if (!container || !content) return;

  const build = () => {
    // kill previous triggers for clean rebuild
    if (st) st.kill();
    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.set(content, { x: 0 });

    const scrollAmount = content.scrollWidth - container.clientWidth;

    const tween = gsap.to(content, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${Math.max(1, scrollAmount)}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    st = tween.scrollTrigger;

    // animate nodes in as they slide into view (containerAnimation)
    gsap.utils.toArray("[data-node]").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            containerAnimation: tween,
            start: "left 80%",
          },
        }
      );
    });
  };

  build();
  window.addEventListener("resize", build);

  onBeforeUnmount(() => {
    window.removeEventListener("resize", build);
  });
});

onBeforeUnmount(() => {
  st?.kill(true);
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
  <main_navbar title="ຄວາມເປັນມາ" :breadcrumb="[
    'ໜ້າຫຼັກ',
    'ກ່ຽວກັບພວກເຮົາ',
    'ຄວາມເປັນມາ'
  ]" background-image="/aboutus/navigatormission-bg.png" />
  <div class="boxmargin" style="width:100%; height:15vh"></div>
  <section ref="root" class="heroX">
    <header class="head">
      <h1 class="h1">
        ຄວາມເປັນມາຂອງ LAPNet <span class="brand"></span>
      </h1>
      <p class="sub" style="display:flex;   align-items: center ;">
        Lao National Payment Network
        <img src="/logolapnet/logolapnet.PNG" alt="" style="width: 30px ; height:30px">
      </p>
    </header>

    <div class="viewport">
      <div ref="track" class="track">
        <!-- road / connector -->
        <svg class="road" viewBox="0 0 2800 600" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M140,260 C460,520 690,520 940,360 C1220,180 1400,120 1660,220 C1950,335 2040,560 2320,420 C2600,280 2680,170 2740,220"
            fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="36" stroke-linecap="round" />
        </svg>

        <div class="nodes">
          <article v-for="(s, i) in steps" :key="s.n" class="node" data-node
            :style="{ '--c': s.color, '--g': s.glow, top: nodeOffsets[i] + 'px' }">
            <button class="node__hit" type="button" @click="openStep(s)">
              <span class="label">{{ s.n }}</span>

              <span class="tile">
                <span class="surface">
                  <!-- Font Awesome CDN icon -->
                  <i :class="s.iconClass" class="faIcon" aria-hidden="true"></i>
                </span>
                <span class="glow"></span>
              </span>

              <span class="titleRow">
                <span class="title">{{ s.title }}</span>
                <span class="line"></span>
              </span>

              <span class="hint">ອ່ານລາຍລະອຽດເພີ່ມເຕີ່ມ <i class="fa-solid fa-angle-right"></i></span>
            </button>
          </article>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div v-if="active" class="modal" @click.self="closeModal" role="dialog" aria-modal="true">
      <div class="modal__panel">
        <div class="modal__top">
          <div class="badge" :style="{ '--c': active.color }">
            <span class="badge__n">{{ active.n }}</span>
            <span class="badge__t">{{ active.title }}</span>
          </div>
          <button class="x" type="button" @click="closeModal" aria-label="Close">✕</button>
        </div>

        <div class="modal__content">
          <p class="modal__text">{{ active.detail }}</p>



          <div class="modal__nav">
            <button class="navBtn" type="button" :disabled="activeIndex <= 0" @click="openStep(steps[activeIndex - 1])">
              ← Prev
            </button>
            <button class="navBtn" type="button" :disabled="activeIndex >= steps.length - 1"
              @click="openStep(steps[activeIndex + 1])">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="boxmargin" style="width: 100%; height:15vh"></div>
  <div class="titleholder">
    <h1>ໂຄງສ້າງຜູ້ຖືຫຸ້ນ LAPNet</h1>
  </div>
  <div class="boxmargin" style="width: 100%; height:15vh"></div>
  <div class="shareholders">
    <piechart />
  </div>
  <div class="boxmargin" style="width: 100%;height:15vh"></div>
  <mainfooter />
</template>

<style scoped>
.titleholder h1 {
  font-size: var(--fs-hero);
  font-weight: bold;
  background: #5BBDFF;
  background: linear-gradient(to right, #5BBDFF 0%, #1500CF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.titleholder {
  width: 70%;
  margin: 0 auto;
  height: 15vh;
  border-bottom: 1px solid #0000001b;
  text-align: center;
}

.shareholders {
  margin: 0 auto;
  width: 90%;
  height: auto;
 
}

.heroX {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(1400px 620px at 35% 60%, #ffffff 0%, #ffffff 42%, #ffffff 100%);
  overflow: hidden;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
}

.head {
  max-width: 1600px;
  margin: 0 auto;
  padding: clamp(22px, 3vw, 44px) clamp(18px, 3vw, 40px) 12px;
}

.h1 {
  margin: 0;
  font-weight: bold;
  line-height: 1.02;


  background: #2DCEFF;
  background: linear-gradient(to right, #2DCEFF 0%, #0700CF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: clamp(44px, 5.6vw, 96px);
}

.brand {

  margin-left: 14px;
  font-size: clamp(12px, 1.2vw, 14px);
  letter-spacing: 0.28em;
  font-weight: 800;
  color: rgba(60, 60, 67, 0.35);
  vertical-align: middle;
}

.sub {
  margin: 10px 0 0;
  max-width: 920px;
  color: rgba(60, 60, 67, 0.65);
  line-height: 1.65;
  font-size: 14px;
}

/* pinned viewport */
.viewport {
  height: calc(100vh - 180px);
  min-height: 680px;
  position: relative;
  overflow: hidden;
}

/* extra wide horizontal content */
.track {
  position: relative;
  height: 100%;
  width: 2800px;
  padding: 20px 0;
}

.road {
  position: absolute;
  left: 0;
  right: 0;
  top: 110px;
  width: 2800px;
  height: 600px;
  pointer-events: none;
}

.nodes {
  position: relative;
  width: 2800px;
  height: 100%;
}

/* Node X positions */
.node {
  position: absolute;
}

.node:nth-child(1) {
  left: 320px;
}

.node:nth-child(2) {
  left: 860px;
}

.node:nth-child(3) {
  left: 1300px;
}

.node:nth-child(4) {
  left: 1740px;
}

.node:nth-child(5) {
  left: 2180px;
}


.node__hit {
  width: 380px;
  text-align: left;
  border: 0;
  padding: 16px 16px 18px;
  background: transparent;
  cursor: pointer;
  border-radius: 20px;
  transition: transform .18s ease, background .18s ease;
}

.node__hit:hover {
  background: rgba(255, 255, 255, 0.58);
  transform: translateY(-2px);
}

.node__hit:active {
  transform: translateY(0px) scale(0.99);
}

.label {
  display: inline-block;
  font-weight: 900;
  font-style: italic;
  font-size: 40px;
  color: var(--c);
  text-shadow: 0 12px 28px rgba(0, 0, 0, 0.10);
}

/* tile bigger */
.tile {
  position: relative;
  width: 210px;
  height: 150px;
  margin: 12px 0 16px;
  display: block;
  filter: drop-shadow(0 28px 34px rgba(0, 0, 0, 0.10));
}

.surface {
  position: absolute;
  inset: 0;
  border-radius: 30px;
  background:
    radial-gradient(170px 130px at 30% 30%, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.80) 35%, rgba(255, 255, 255, 0.58) 70%, rgba(255, 255, 255, 0.46) 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.76) 100%);
  border: 1px solid rgba(255, 255, 255, 0.86);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -12px 26px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.faIcon {
  font-size: 52px;
  color: rgba(40, 40, 55, 0.76);
  transform: translateY(-2px);
}

.glow {
  position: absolute;
  left: 50%;
  bottom: -52px;
  width: 250px;
  height: 140px;
  transform: translateX(-50%);
  background: radial-gradient(closest-side, var(--g), transparent 70%);
  filter: blur(8px);
  opacity: 0.95;
}

.titleRow {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  font-weight: bold;

  font-size: 24px;
  color: var(--c);
}

.line {
  height: 3px;
  width: 140px;
  border-radius: 999px;
  background: var(--c);
  opacity: .9;
}

.hint {
  display: block;
  margin-top: 9px;
  font-size: 12px;
  color: rgba(60, 60, 67, 0.55);
}

/* Modal */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 14, 0.42);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  z-index: 9999;
}

.modal__panel {
  width: min(880px, 96vw);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.modal__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.badge {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.badge__n {
  font-weight: 900;
  font-style: italic;
  font-size: 28px;
  color: var(--c);
}

.badge__t {
  font-weight: bold;
  font-size: 1.2rem;
  color: rgba(40, 40, 55, 0.86);
}

.x {
  border: 0;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.modal__content {
  padding: 16px;
}

.modal__text {
  margin: 0 0 14px;
  color: rgba(40, 40, 55, 0.78);
  line-height: 1.7;
}

.modal__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 720px) {
  .modal__meta {
    grid-template-columns: 1fr;
  }
}

.metaCard {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 12px;
}

.metaTitle {
  font-weight: 900;
  color: rgba(40, 40, 55, 0.86);
  margin-bottom: 8px;
}

.metaList {
  margin: 0;
  padding-left: 18px;
  color: rgba(40, 40, 55, 0.70);
  line-height: 1.7;
  font-size: 14px;
}

.pillRow {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.pill {
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 800;
  background: var(--c);
  color: white;
}

.pill.ghost {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(40, 40, 55, 0.8);
}

.small {
  margin-top: 10px;
  font-size: 13px;
  color: rgba(40, 40, 55, 0.65);
}

.modal__nav {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
}

.navBtn {
  border: 0;
  cursor: pointer;
  border-radius: 14px;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.06);
  font-weight: 800;
}

.navBtn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

/* responsive: make it still usable */
@media (max-width: 980px) {

  .track,
  .nodes,
  .road {
    width: 2800px;
  }

  .node__hit {
    width: 340px;
  }
}
</style>
