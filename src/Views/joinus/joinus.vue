<template>
  <main_navbar
    title="ຮ່ວມງານກັບເຮົາ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຮ່ວມງານກັບເຮົາ',
    ]"
    background-image="/aboutus/joinus/navigatorjoinus.png"
  />
  <div class="joinus-page">
    <!-- SECTION 1: HERO -->
    <section class="hero-section" ref="heroRef">
      <div class="hero-content">
        <h1 class="hero-title">Join Our Team</h1>
        <p class="hero-text">
            ພັດທະນາລະບົບການຊໍາລະທຸລະກຳຍ່ອຍໃຫ້ເປັນສູນກາງການຊໍາລະຂອງບັນດາຜູ້ໃຫ້ບໍລິການຊໍາລະ ທັງພາຍໃນ ແລະ ສາກົນ, ແນໃສ່ໃຫ້ປະຊາຊົນລາງໄດ້ໃຊ້ບໍລິການຊໍາລະທີ່ສະດວກວ່ອງໄວ, ທັນສະໄໝ, ປອດໄພ, ຕົ້ນທືນຕໍາ ແລະ ເພື່ອໃຫ້ບໍລິສັດການເປັນໂຄງຮ່າງພື້ນຖານໃຫ້ແກ່ການຊໍາລະໃນ ສປປ ລາວ.


        </p>
        <router-link to="/contactus">
        <button class="hero-button">
          ຕິດຕໍ່ພວກເຮົາ
        </button>
        </router-link>
      </div>

      <div class="hero-image-wrapper">
        <img
          class="hero-image"
          src="/aboutus/joinus/interview.png"
          alt="Team working together"
        />
      </div>
    </section>

    <!-- SECTION 2: SWIPER (ACTIVITIES) -->
  <!-- SECTION 2: SWIPER (ACTIVITIES) -->
<section class="swiper-section" ref="swiperRef">
  <div class="section-header swiper-header">
    <div>
      <h2>Life at LAPNet</h2>
      <p>ກິດຈະກຳຕ່າງໆຂອງບໍລິສັດ LAPNet
      </p>
    </div>
    <div class="swiper-meta">
    
    </div>
  </div>

  <Swiper
    class="activities-swiper"
    :modules="swiperModules"
    :slides-per-view="1"
    :space-between="32"
    :loop="true"
    :speed="800"
    :autoplay="{
      delay: 2600,
      disableOnInteraction: false
    }"
    :breakpoints="{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }"
    :pagination="{
      clickable: true,
      type: 'fraction'
    }"
  >
    <SwiperSlide
      v-for="(item, index) in activities"
      :key="index"
      class="activity-card"
    >
      <div class="activity-image-wrapper">
        <img
          :src="item.image"
          :alt="item.title"
          class="activity-image"
        />

        <div class="activity-chip">
          <span class="activity-index">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <span class="activity-chip-text">Activity</span>
        </div>
      </div>

      <div class="activity-info">
        <h3 class="activity-title">{{ item.title }}</h3>
        <p class="activity-subtitle">{{ item.subtitle }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</section>


    <!-- SECTION 3: FILTERS + DROPDOWNS WITH GSAP -->
    <section class="filters-section" ref="filterRef">
      <div class="section-header">
        <h2>Position</h2>
        <p>LAPNet ຕ້ອງການເພື່ອນຮ່ວມງານ</p>
      </div>

      <div class="filters-grid">
        <!-- BOX 1: All Position -->
        <div class="dropdown" @click.stop="toggleDropdown('position')">
          <button class="dropdown-trigger">
            <span>{{ selectedPosition }}</span>
            <span class="chevron" :class="{ open: isPositionOpen }">⌄</span>
          </button>

          <div
            v-if="isPositionOpen"
            class="dropdown-menu"
            ref="positionMenuRef"
          >
            <button
              class="dropdown-item"
              v-for="(item, index) in positions"
              :key="index"
              @click.stop="selectPosition(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>

        <!-- BOX 2: All Department -->
        <div class="dropdown" @click.stop="toggleDropdown('department')">
          <button class="dropdown-trigger">
            <span>{{ selectedDepartment }}</span>
            <span class="chevron" :class="{ open: isDepartmentOpen }">⌄</span>
          </button>

          <div
            v-if="isDepartmentOpen"
            class="dropdown-menu"
            ref="departmentMenuRef"
          >
            <button
              class="dropdown-item"
              v-for="(item, index) in departments"
              :key="index"
              @click.stop="selectDepartment(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>

        <!-- BOX 3: Levels -->
        <div class="dropdown" @click.stop="toggleDropdown('level')">
          <button class="dropdown-trigger">
            <span>{{ selectedLevel }}</span>
            <span class="chevron" :class="{ open: isLevelOpen }">⌄</span>
          </button>

          <div
            v-if="isLevelOpen"
            class="dropdown-menu"
            ref="levelMenuRef"
          >
            <button
              class="dropdown-item"
              v-for="(item, index) in levels"
              :key="index"
              @click.stop="selectLevel(item)"
            >
              {{ item }}
            </button>
          </div>
        </div>
      </div>

      <!-- JOB POSTS DROPDOWN LIST (LIKE YOUR IMAGE) -->
      <div class="jobs-list">
        <div
          v-for="job in jobs"
          :key="job.id"
          class="job-card"
        >
          <button class="job-header" @click="toggleJob(job.id)">
            <h3 class="job-title">{{ job.title }}</h3>
            <span class="job-chevron" :class="{ open: openJobId === job.id }">⌄</span>
          </button>

          <transition name="job-collapse">
            <div
              v-if="openJobId === job.id"
              class="job-body"
            >
              <ul class="job-detail-list">
                <li
                  v-for="(item, idx) in job.details"
                  :key="idx"
                >
                  {{ item }}
                </li>
              </ul>

              <p class="job-date">
                ໂພສເມື່ອ {{ job.postedAt }}
              </p>

              <button class="job-apply-btn">
                Apply Now
              </button>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <div class="boxmargin" style="width: 100%; height:15vh"></div>
  </div>
  <secondfooter/>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import gsap from 'gsap';
import main_navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import secondfooter from '../../components/footer/mainfooter/secondfooter.vue';
const swiperModules = [Autoplay, Pagination];

// SECTION REFS FOR GSAP
const heroRef = ref(null);
const swiperRef = ref(null);
const filterRef = ref(null);

// DROPDOWN REFS
const positionMenuRef = ref(null);
const departmentMenuRef = ref(null);
const levelMenuRef = ref(null);

// SWIPER CONTENT (6 ACTIVITIES)
const activities = [
  {
    title: 'ງານລ້ຽງ',
    subtitle: 'ງານລ້ຽງປີໃໝ່ລາວປີ 2025 ຂອງບໍລິສັດ LAPNet.',
    image:'/aboutus/joinus/joinusswiper/swiper1.jpeg'
  },
  {
    title: 'ທ່ອງທ່ຽວ',
    subtitle: 'LAPNet ທ່ອງທ່ຽວທີ່ນະຄອນຫຼວງພະບາງປະຈຳປີ 2025.',
    image: '/aboutus/joinus/joinusswiper/swiper2.jpeg'
  },
  {
    title: 'ທ່ອງທ່ຽວ',
    subtitle: 'LAPNet ທ່ອງທ່ຽວທີ່ນະຄອນຫຼວງພະບາງປະຈຳປີ 2025.',
    image:'/aboutus/joinus/joinusswiper/swiper3.jpeg'
  },
  {
    title: 'ທ່ອງທ່ຽວ',
    subtitle: 'LAPNet ທ່ອງທ່ຽວທີ່ນະຄອນຫຼວງພະບາງປະຈຳປີ 2025.',
    image: '/aboutus/joinus/joinusswiper/swiper4.jpeg'
  },
  {
    title: 'ທ່ອງທ່ຽວ',
    subtitle: 'LAPNet ທ່ອງທ່ຽວທີ່ນະຄອນຫຼວງພະບາງປະຈຳປີ 2025.',
    image: '/aboutus/joinus/joinusswiper/swiper5.jpeg'
  },
  {
    title: 'ທ່ອງທ່ຽວ',
    subtitle: 'LAPNet ທ່ອງທ່ຽວທີ່ວັງວຽງປະຈຳປີ 2023.',
    image:'/aboutus/joinus/joinusswiper/swiper6.jpeg'
  }
];


// DROPDOWN STATE (FILTERS)
const positions = ['All Position', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer'];
const departments = ['All Department', 'Engineering', 'Design', 'Marketing', 'Product'];
const levels = ['Levels', 'Intern', 'Junior', 'Mid', 'Senior', 'Lead'];

const selectedPosition = ref('All Position');
const selectedDepartment = ref('All Department');
const selectedLevel = ref('Levels');

const isPositionOpen = ref(false);
const isDepartmentOpen = ref(false);
const isLevelOpen = ref(false);

const closeAllDropdowns = () => {
  isPositionOpen.value = false;
  isDepartmentOpen.value = false;
  isLevelOpen.value = false;
};

const animateMenuOpen = (menuRef) => {
  nextTick(() => {
    const el = menuRef.value;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
    );
  });
};

const toggleDropdown = (type) => {
  if (type === 'position') {
    const newState = !isPositionOpen.value;
    closeAllDropdowns();
    isPositionOpen.value = newState;
    if (newState) animateMenuOpen(positionMenuRef);
  } else if (type === 'department') {
    const newState = !isDepartmentOpen.value;
    closeAllDropdowns();
    isDepartmentOpen.value = newState;
    if (newState) animateMenuOpen(departmentMenuRef);
  } else if (type === 'level') {
    const newState = !isLevelOpen.value;
    closeAllDropdowns();
    isLevelOpen.value = newState;
    if (newState) animateMenuOpen(levelMenuRef);
  }
};

const selectPosition = (value) => {
  selectedPosition.value = value;
  isPositionOpen.value = false;
};

const selectDepartment = (value) => {
  selectedDepartment.value = value;
  isDepartmentOpen.value = false;
};

const selectLevel = (value) => {
  selectedLevel.value = value;
  isLevelOpen.value = false;
};

// JOB POSTS (FOR BOX 3 ACCORDION)
const jobs = ref([
  {
    id: 1,
    title: 'IT Front-End Developer',
    postedAt: '29/05/2025',
    details: [
      'Developer/Software Engineer (Front-end / Back-end / FullStack)',
      'Application Support',
      'Quality Assurance (Tester)',
      'Database',
      'IT Governance & Security',
      'Risk Management',
      'IT Compliance',
      'Finance & Accounting',
      'Business Development'
    ]
  },
   {
    id: 2,
    title: 'IT Front-End Developer',
    postedAt: '29/05/2025',
    details: [
      'Developer/Software Engineer (Front-end / Back-end / FullStack)',
      'Application Support',
      'Quality Assurance (Tester)',
      'Database',
      'IT Governance & Security',
      'Risk Management',
      'IT Compliance',
      'Finance & Accounting',
      'Business Development'
    ]
  },
  // you can add more jobs here
  // {
  //   id: 2,
  //   title: 'IT Back-End Developer',
  //   postedAt: '10/06/2025',
  //   details: [...]
  // }
]);

const openJobId = ref(null);

const toggleJob = (id) => {
  openJobId.value = openJobId.value === id ? null : id;
};

// GSAP PAGE LOAD ANIMATIONS
onMounted(() => {
  gsap.from(heroRef.value, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from(swiperRef.value, {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
  });

  gsap.from(filterRef.value, {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
  });

  // Click outside to close filter dropdowns
  window.addEventListener('click', closeAllDropdowns);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', closeAllDropdowns);
});
</script>

<style scoped>
.joinus-page {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 3rem 1.75rem 5rem;
  max-width: 1280px;
  margin: 0 auto;
}

/* SECTION 1 - HERO */
.hero-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2.75rem;
  padding: 3.8rem 3.1rem;
  border-radius: 28px;
  background: linear-gradient(
    95deg,
    rgba(0, 3, 41, 1) 0%,
    rgba(0, 51, 171, 1) 46%
  );
  color: #ffffff;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.4);
}

.hero-content {
  flex: 1 1 320px;
  max-width: 580px;
}

.hero-title {
  font-size: clamp(2.6rem, 4vw, 3.4rem);
  font-weight: 750;
  font-family: "Inter";
  margin-bottom: 1.3rem;
}

.hero-text {
  font-size: 1.04rem;
  line-height: 1.8;
  opacity: 0.95;
  margin-bottom: 2rem;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.1rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 650;
  font-size: 1.02rem;
  background: #ffffff;
  color: #002a9f;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.55);
  background: #f5f7ff;
}

.hero-image-wrapper {
  flex: 1 1 260px;
  display: flex;
  justify-content: center;
}

.hero-image {
  width: 100%;
  max-width: 380px;
  border-radius: 26px;
  object-fit: cover;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
}

/* COMMON SECTION HEADER */
.section-header {
    font-family: "Inter";
  margin-bottom: 1.9rem;
  
}

.section-header h2 {
  font-size: 1.8rem;
  font-weight: 650;
  margin-bottom: 0.4rem;
  color: #05081b;
    font-family: "Inter";
}

.section-header p {
  font-size: 1rem;
  color: #7a8095;
}

/* SECTION 2 - SWIPER (ACTIVITIES) */
.swiper-section {
  padding: 2.6rem 2.3rem;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 22px 70px rgba(11, 23, 70, 0.12);
}

.activities-swiper {
  width: 100%;
}

.activity-card {
  height: 100%;
  border-radius: 22px;
  background: #ffffff;
  border: 1px solid #e0e4f5;
  box-shadow: 0 14px 32px rgba(8, 18, 60, 0.09);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.activity-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 68%;
  overflow: hidden;
}

.activity-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.activity-card:hover .activity-image {
  transform: scale(1.05);
}

.activity-info {
  padding: 1.1rem 1.15rem 1.3rem;
  background: linear-gradient(135deg, #f4f6ff, #ffffff);
}

.activity-title {
  font-size: 1.02rem;
  font-weight: 650;
  color: #11152c;
}

/* SECTION 3 - FILTERS + DROPDOWNS */
.filters-section {
  padding: 2.6rem 2.3rem;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 22px 70px rgba(11, 23, 70, 0.12);
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
  margin-bottom: 2.2rem;
}

.dropdown {
  position: relative;
}

.dropdown-trigger {
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: 16px;
  border: 1px solid #d0d6ed;
  background: linear-gradient(135deg, #f5f6ff, #ffffff);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
  cursor: pointer;
  transition: box-shadow 0.16s ease, transform 0.16s ease, border-color 0.16s ease,
    background 0.16s ease;
}

.dropdown-trigger:hover {
  box-shadow: 0 14px 34px rgba(11, 23, 70, 0.18);
  transform: translateY(-1px);
  border-color: #b9c3f2;
  background: linear-gradient(135deg, #eef1ff, #ffffff);
}

.dropdown-menu {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 0.35rem;
  padding: 0.45rem;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 22px 50px rgba(8, 18, 60, 0.22);
  border: 1px solid #e0e4f3;
  z-index: 20;
  max-height: 260px;
  overflow-y: auto;
}

.dropdown-item {
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: 11px;
  border: none;
  background: transparent;
  text-align: left;
  font-size: 0.92rem;
  cursor: pointer;
  transition: background 0.14s ease, color 0.14s ease;
}

.dropdown-item:hover {
  background: rgba(0, 51, 171, 0.08);
  color: #0033ab;
}

.chevron {
  font-size: 0.85rem;
  transition: transform 0.16s ease;
}

.chevron.open {
  transform: rotate(180deg);
}

/* JOB LIST (ACCORDION) */

.jobs-list {
  display: none;
  flex-direction: column;
  gap: 1.2rem;
}

.job-card {
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
  border: 1px solid #dfe3f2;
  overflow: hidden;
}

.job-header {
  width: 100%;
  padding: 1.1rem 1.4rem;
  border: none;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.job-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111318;
}

.job-chevron {
  font-size: 1rem;
  transition: transform 0.18s ease;
}

.job-chevron.open {
  transform: rotate(180deg);
}

.job-body {
  padding: 1.1rem 1.4rem 1.4rem;
  border-top: 1px solid #eceff6;
  background: #ffffff;
}

.job-detail-list {
  padding-left: 1.3rem;
  margin-bottom: 1.1rem;
  font-size: 0.95rem;
  color: #262a33;
}

.job-detail-list li + li {
  margin-top: 0.1rem;
}

.job-date {
  font-size: 0.86rem;
  color: #a0a4b4;
  margin-bottom: 1rem;
}

.job-apply-btn {
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  background: linear-gradient(90deg, #0044ff, #0066ff);
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 14px 32px rgba(0, 68, 255, 0.35);
}

/* accordion transition */
.job-collapse-enter-active,
.job-collapse-leave-active {
  transition: all 0.22s ease;
}

.job-collapse-enter-from,
.job-collapse-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-section {
    padding: 2.8rem 2.1rem;
  }

  .filters-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .joinus-page {
    padding-inline: 1.25rem;
  }

  .swiper-section,
  .filters-section {
    padding-inline: 1.5rem;
  }

  .hero-section {
    padding-inline: 1.6rem;
  }
}
</style>
