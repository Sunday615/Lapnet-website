<template>
  <section class="card-section">
    <div class="card-header">
      <h2 class="card-title">ຂ່າວສານ ແລະ ກິດຈະກຳ</h2>
      <div class="titlelapnet">
          <img src="/logolapnet/logolapnet.PNG" style="width:50px ; height:50px" alt="">
      <p class="card-subtitle">
        
        Lao Nationnal Payment Network
      </p>
      </div>
    
    </div>

    <Swiper
      class="card-swiper"
      :modules="[Autoplay, Navigation, Pagination]"
      :slides-per-view="3"
      :space-between="20"
      :loop="true"
      :speed="900"
      :autoplay="{
        delay: 2200,
        disableOnInteraction: false
      }"
      :navigation="{
        nextEl: '.card-nav-next',
        prevEl: '.card-nav-prev'
      }"
      :pagination="{
        el: '.card-pagination',
        clickable: true
      }"
      :breakpoints="{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }"
      :centeredSlides="true"   
    >
     <SwiperSlide
  v-for="item in images"
  :key="item.id"
>
  <div class="card" @click="goToBlogDetail(item.id)">
    <div class="card-inner">
      <div class="card-image-wrapper">
        <img
          class="card-image"
          :src="item.src"
          :alt="item.alt"
        />
      </div>

      <div class="card-info">
        <div class="card-info-top">
          <h3 class="card-item-title">
            {{ item.title }}
          </h3>
          <span class="card-date-chip">
            {{ item.date }}
          </span>
        </div>

        <p class="card-description">
          {{ item.description }}
        </p>

        <!-- stop propagation so click is only on button if you want -->
        <button
          class="card-read-btn"
          @click.stop="goToBlogDetail(item.id)"
        >
          <span class="card-read-label">Read more</span>
          <span class="card-read-orb"></span>
        </button>
      </div>
    </div>
  </div>
</SwiperSlide>

    </Swiper>

    <!-- Controls -->
    <div class="card-controls">
      <button class="card-nav-btn card-nav-prev">
        <span class="card-nav-icon card-nav-icon-left"></span>
        <span class="card-nav-label">Prev</span>
      </button>

      <div class="card-pagination"></div>

      <button class="card-nav-btn card-nav-next">
        <span class="card-nav-label">Next</span>
        <span class="card-nav-icon card-nav-icon-right"></span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "vue-router";

const router = useRouter();

const goToBlogDetail = (id) => {
  router.push({
    name: "BlogDetail",
    params: { id }
  });
};

const images = [
  {
    id: 1,
    src: "/blog/1.jpg",
    alt: "My photo 1",
    title: "ພິທີລົງນາມເຊັນສັນຍາໂຄງການຊຳລະຂ້າມແດນລາວ-ຈີນ.",
    date: "19 ທັນວາ 2024",
    description: ""
  },
  {
    id: 2,
    src: "/blog/2/2.png",
    alt: "My photo 2",
    title:
      "ແຈ້ງເຊີນເຂົ້າຮ່ວມປະມູນຍື່ນຊອງລາຄາ ການບຳລຸງຮັກສາອຸປະກອນເຄືອຂ່າຍ.",
    date: "12 ສິງຫາ 2024",
    description: ""
  },
  {
    id: 3,
    src: "/blog/3/3.jpg",
    alt: "My photo 3",
    title:
      "ແຈ້ງເຊີນປະມູນ ອຸປະກອນ HARDWARE ເພື່ອສ້າງສູນສຳຮອງຂໍ້ມູນຂອງບໍລິສັດ LAPNET.",
    date: "15 ພຶດສະພາ 2024",
    description: ""
  },
  {
    id: 4,
    src: "/blog/4.png",
    alt: "My photo 4",
    title:
      "ພິທີເປີດໂຕການນຳໃຊ້ລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງ ລາວ - ໄທ.",
    date: "03 ເມສາ 2024",
    description: ""
  },
  {
    id: 5,
    src: "/blog/5.jpg",
    alt: "My photo 5",
    title:
      "ພິທີ ເຊັນສັນຍາວ່າດ້ວຍການຮ່ວມມືທາງດ້ານການເຊື່ອມຕໍ່ລະບົບຊຳລະຂ້າມແດນ QR CODE ລະຫວ່າງ ສປປ ລາວ ແລະ ປະເທດໄທ.",
    date: "14 ມີນາ 2024",
    description: ""
  },
  {
    id: 6,
    src: "/blog/6.jpg",
    alt: "My photo 6",
    title:
      "ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ເດີນທາງໄປແລກປ່ຽນບົດຮຽນທາງດ້ານການໃຫ້ບໍລິການເງິນທີ່ປະເທດສິງກະໂປ.",
    date: "29 ກັນຍາ 2023",
    description: ""
  }
];
</script>


<style scoped>
.titlelapnet{
  
    display: flex;
    align-items: center;
}
/* === WRAPPER === */
.card-section {
  max-width: 100%;
  margin: 0 auto;
  padding: 2.8rem 1.6rem 3.2rem;
  border-radius: 1.6rem;
  background:
    radial-gradient(circle at top left, #1e3a8a 0%, #020617 55%),
    radial-gradient(circle at bottom right, #0ea5e9 0%, transparent 60%);
  border: 1px solid rgba(59, 130, 246, 0.7);
  box-shadow:
    0 0 40px rgba(37, 99, 235, 0.75),
    0 0 90px rgba(59, 130, 246, 0.55);
  overflow: hidden;
  height: 90vh;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.9rem;
}

.card-title {
 
  font-size: clamp(3.5rem, 5vh , 5rem);
  color: #e5f0ff;
    
  font-weight: 600;
}

.card-subtitle {
  font-size: 0.86rem;
  color: #bfdbfe;
  opacity: 0.9;
}

.card-swiper {
  padding-bottom: 0.6rem;
}

/* === SLIDE: center slide = active === */
.swiper-slide {
  opacity: 0.35;
  transform: scale(0.94);
  transition:
    transform 0.6s ease-out,
    opacity 0.6s ease-out;
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
}

/* === CARD === */
.card {
  padding: 1px;
  height: 60vh;
  border-radius: 1.1rem;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.9),
    rgba(56, 189, 248, 0.9)
  );
}

.card-inner {
  position: relative;
  border-radius: 1rem;
  height: 100%;
  background: radial-gradient(circle at top, #020617, #020617 60%, #0b1120 100%);
  padding: 0.9rem;
  box-shadow:
    0 16px 38px rgba(15, 23, 42, 0.9),
    0 0 24px rgba(59, 130, 246, 0.45);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

/* subtle glow on hover */
.card-inner::before {
  content: "";
  position: absolute;
  inset: -30%;
  background: radial-gradient(
    circle at 0 0,
    rgba(191, 219, 254, 0.22),
    transparent 55%
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
}

.card-inner:hover::before {
  opacity: 1;
}

/* === IMAGE (top area) === */
.card-image-wrapper {
  position: relative;
  border-radius: 0.85rem;
  overflow: hidden;
  background: #020617;
  flex: 1.2;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* zoom from center */
  transform: scale(1.02);
  transform-origin: center center;

  transition:
    transform 0.9s ease-out,
    filter 0.6s ease-out;
  filter: saturate(1.05) contrast(1.05) hue-rotate(-6deg);
}

/* hover: centered zoom + brighten */
.card-inner:hover .card-image {
  transform: scale(1.12);
  filter: saturate(1.3) contrast(1.2) hue-rotate(-10deg);
}

/* === INFO (bottom area) === */
.card-info {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding-top: 0.5rem;
}

.card-info-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.card-item-title {
  font-size: 1.2rem;
  color: #e0f2fe;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.card-date-chip {
  flex-shrink: 0;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: radial-gradient(circle at top, rgba(59, 130, 246, 0.8), rgba(15, 23, 42, 1));
  border: 1px solid rgba(191, 219, 254, 0.9);
  color: #dbeafe;
}

.card-description {
  font-size: 0.8rem;
  color: #c7d2fe;
  opacity: 0.95;
  line-height: 1.55;
}

/* === READ MORE button === */
.card-read-btn {
  margin-top: 0.15rem;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(191, 219, 254, 0.95);
  background: radial-gradient(
      circle at top,
      rgba(37, 99, 235, 0.9),
      rgba(15, 23, 42, 0.98)
    );
  color: #e0f2fe;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow:
    0 0 16px rgba(59, 130, 246, 0.8),
    0 0 26px rgba(56, 189, 248, 0.6);
  position: relative;
  overflow: hidden;
  transition:
    background 180ms ease-out,
    transform 180ms ease-out,
    box-shadow 180ms ease-out,
    border-color 180ms ease-out;
}

.card-read-orb {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: radial-gradient(circle, #facc15, #f97316);
  box-shadow:
    0 0 12px rgba(250, 204, 21, 0.95),
    0 0 22px rgba(249, 115, 22, 0.75);
}

.card-read-label {
  position: relative;
  z-index: 1;
}

.card-read-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 0 0, rgba(239, 246, 255, 0.18), transparent 60%);
  opacity: 0;
  transition: opacity 200ms ease-out;
}

.card-read-btn:hover {
  transform: translateY(-1px);
  border-color: #e0f2fe;
  background: radial-gradient(
      circle at top,
      rgba(59, 130, 246, 1),
      rgba(15, 23, 42, 0.98)
    );
  box-shadow:
    0 0 22px rgba(96, 165, 250, 0.95),
    0 0 40px rgba(56, 189, 248, 0.7);
}

.card-read-btn:hover::before {
  opacity: 1;
}

/* === CONTROLS === */
.card-controls {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.35rem;
}

.card-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1.05rem;
  border-radius: 999px;
  border: 1px solid rgba(191, 219, 254, 0.9);
  background: radial-gradient(
      circle at top,
      rgba(59, 130, 246, 0.95),
      rgba(15, 23, 42, 0.98)
    );
  color: #e0f2fe;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow:
    0 0 18px rgba(59, 130, 246, 0.8),
    0 0 36px rgba(56, 189, 248, 0.5);
  transition:
    background 180ms ease-out,
    transform 180ms ease-out,
    box-shadow 180ms ease-out,
    border-color 180ms ease-out;
}

.card-nav-btn:hover {
  transform: translateY(-1px);
  background: radial-gradient(
      circle at top,
      rgba(96, 165, 250, 1),
      rgba(15, 23, 42, 0.98)
    );
  border-color: #e0f2fe;
  box-shadow:
    0 0 24px rgba(96, 165, 250, 0.95),
    0 0 48px rgba(56, 189, 248, 0.6);
}

.card-nav-label {
  font-size: 0.7rem;
}

.card-nav-icon {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  border: 1px solid rgba(191, 219, 254, 0.9);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.card-nav-icon::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 1px;
  border-style: solid;
  border-width: 0 2px 2px 0;
  border-color: #e0f2fe;
  display: block;
}

.card-nav-icon-left::before {
  transform: rotate(135deg) translateX(1px);
}

.card-nav-icon-right::before {
  transform: rotate(-45deg) translateX(-1px);
}

/* Pagination */
.card-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

.card-pagination :deep(.swiper-pagination-bullet) {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.7);
  opacity: 1;
  margin: 0 3px;
  transition:
    width 180ms ease-out,
    background 180ms ease-out,
    transform 180ms ease-out;
}

.card-pagination :deep(.swiper-pagination-bullet-active) {
  width: 20px;
  background: linear-gradient(90deg, #3b82f6, #0ea5e9);
  transform: translateY(-1px);
}

/* === RESPONSIVE === */
@media (max-width: 640px) {
  .card-section {
    padding: 2.2rem 1.1rem 2.6rem;
    border-radius: 1.35rem;
    height: auto;
  }

  .card {
    height: 360px;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-controls {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
