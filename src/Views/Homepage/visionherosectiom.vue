<template>
  <section
    ref="heroSection"
    class="hero-wrapper"
  >
    <div class="hero-inner">
      <!-- Left: Text -->
      <div ref="content" class="hero-content">
        <div class="hero-badge-row">
          <span class="badge-pill">Vision </span>
       
        </div>

        <h1 class="headline">
          ວິໄສທັດ <span class="accent">&amp;</span> ພາລະກິດ
         
        </h1>

      

        <div class="hero-tags">
          <span class="tag-pill">19 ທະນາຄານສະມາຊິກທີ່ເຂົ້າຮ່ວມ</span>
          <span class="tag-pill">2 Fintech ທີ່ເຂົ້າຮ່ວມ</span>
    
       
        </div>

        <div class="cards-grid">
          <article class="info-card vision-card">
            <h2>Our Vision</h2>
            <p>
            ພັດທະນາລະບົບການຊໍາລະທຸລະກຳຍ່ອຍໃຫ້ເປັນສູນກາງການຊໍາລະຂອງບັນດາຜູ້ໃຫ້ບໍລິການຊໍາລະ ທັງພາຍໃນ ແລະ ສາກົນ, ແນໃສ່ໃຫ້ປະຊາຊົນລາງໄດ້ໃຊ້ບໍລິການຊໍາລະທີ່ສະດວກວ່ອງໄວ, ທັນສະໄໝ, ປອດໄພ, ຕົ້ນທືນຕໍາ ແລະ ເພື່ອໃຫ້ບໍລິສັດການເປັນໂຄງຮ່າງພື້ນຖານໃຫ້ແກ່ການຊໍາລະໃນ ສປປ ລາວ.
            </p>
          </article>
          <article class="info-card vision-card">
            <h2>Our Mission</h2>
            <p>
            ພັດທະນາລະບົບການຊໍາລະໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ, ຕອບຮັບໄດ້ທຸກຊ່ອງທາງການຊໍາລະທີ່ເກີດຂື້ນ, ເຕົ້າໂຮມເອົາບັນດາທະນາຄານທຸລະກິດ, ສະຖາບັນການເງິນ ແລະ ບໍລິສັດ Fintech ທີ່ເປັນຜູ້ໃຫ້ບໍລິການຊໍາລະ ໃຫ້ເຂົ້າມາເປັນສະມາຊີກຂອງບໍລິສັດ ເພື່ອພ້ອມກັນໃຫ້ບໍລິການລະບົບການຊໍາລະແກ່ສັງຄົມ, ຫັນເອົາການເຊື່ອມຕໍ່ສາກົນທີ່ມີລັກສະນະກະແຈກກະຈາຍລວມສູນເຂົ້າມາເຊື່ອມຕໍ່ເປັນຮູບແບບລະບົບປະຕູດຽວເພື່ອຫຼຸດຜ່ອນຕົ້ນທືນລວມຂອງທົ່ວລະບົບ, ເສີມຂະຫຍາຍຄວາມຮູ້-ເຂົ້າໃຈໃຫ້ແກ່ມວນຊົນໄດ້ຮັບຮູ້ເຖິງຄວາມສຳຄັນ ແລະ ປະໂຫຍກຂອງການນຳໃຊ້ລະບົບການຊໍາລະເອເລັກໂຕຣນິກຢ່າງຖ່ອງແທ້ ເພື່ອເຮັດໃຫ້ມວນຊົນໄດ້ນຳໃຊ້ລະບົບການຊໍາລະຢ່າງຖືກຕ້ອງ ແລະ ປອດໄພ ເປັນການເສີມສ້າງຄວາມໝັ້ນໃຈໃຫ້ແກ່ມວນຊົນ.
            </p>
          </article>

         
        </div>
      </div>

      <!-- Right: Your Image -->
      <div class="hero-image-wrapper">
        <div class="hero-image-card">
          <!-- Replace src with your own image path/url -->
          <img
            ref="heroImage"
            class="hero-image"
            src="/homepage/vision&mission.png"
            alt="Founder / Team"
          />
         
        </div>
      </div>
    </div>

    <!-- Background floating shapes -->
    <div class="blur-circle blur-circle-1"></div>
    <div class="blur-circle blur-circle-2"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroSection = ref(null)
const heroImage = ref(null)

onMounted(() => {
  const sectionEl = heroSection.value
  if (!sectionEl) return

  const timeline = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'power3.out',
    },
  })

  const headline = sectionEl.querySelector('.headline')
  const description = sectionEl.querySelector('.description')
  const badges = sectionEl.querySelectorAll('.badge-pill')
  const tags = sectionEl.querySelectorAll('.tag-pill')
  const cards = sectionEl.querySelectorAll('.info-card')

  // Intro animation
  timeline
    .from(sectionEl, {
      opacity: 0,
      y: 40,
    })
    .from(
      badges,
      {
        opacity: 0,
        y: 20,
        stagger: 0.1,
      },
      '-=0.4'
    )
    .from(
      headline,
      {
        opacity: 0,
        y: 30,
      },
      '-=0.3'
    )
    .from(
      description,
      {
        opacity: 0,
        y: 20,
      },
      '-=0.3'
    )
    .from(
      tags,
      {
        opacity: 0,
        y: 16,
        stagger: 0.08,
      },
      '-=0.3'
    )
    .from(
      cards,
      {
        opacity: 0,
        y: 40,
        stagger: 0.12,
      },
      '-=0.2'
    )
    .from(
      heroImage.value,
      {
        opacity: 0,
        x: 40,
        scale: 0.95,
      },
      '-=0.5'
    )

  // Soft floating animation for the image
  if (heroImage.value) {
    gsap.to(heroImage.value, {
      y: 12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }
})
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  padding: 4rem 1.5rem 5rem;
  background: #ffffff; /* WHITE BACKGROUND */
  color: #0f172a;
  overflow: hidden;
}

.hero-inner {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 3rem;
  align-items: center;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge-row {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.badge-pill {
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.8);
  color: #64748b;
}

.badge-secondary {
  border-style: dashed;
  border-color: rgba(59, 130, 246, 0.7);
}

.headline {
  font-size: clamp(2rem, 2.9vw, 3rem);
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #020617;
}

.headline .accent {
  background: linear-gradient(120deg, #22c55e, #38bdf8, #a855f7);
  -webkit-background-clip: text;
  color: transparent;
}

.description {
  max-width: 32rem;
  color: #4b5563;
  font-size: 0.98rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}

.tag-pill {
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.8rem;
  border: 1px solid rgba(148, 163, 184, 0.6);
  background: #f9fafb;
  color: #0f172a;
}

.cards-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) ;
  gap: 1.25rem;
}

.info-card {
  padding: 1.1rem 1.1rem 1rem;
  border-radius: 1.1rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.info-card h2 {
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin-bottom: 0.45rem;
  color: #111827;
}

.info-card p {
  font-size: 0.88rem;
  color: #4b5563;
  line-height: 1.6;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
  border-color: rgba(59, 130, 246, 0.7);
}

.hero-image-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
}

.hero-image-card {
  position: relative;
  border-radius: 1.5rem;
  padding: 0.6rem;
  background: linear-gradient(145deg, rgba(59, 130, 246, 0.08), rgba(56, 189, 248, 0.04));
  border: 1px solid #e5e7eb;
  box-shadow: 0 18px 60px rgba(15, 23, 42, 0.12);
  overflow: hidden;
  max-width: 340px;
  width: 100%;
}

.hero-image {
  width: 100%;
  display: block;
  border-radius: 1.25rem;
  object-fit: cover;
  aspect-ratio: 3 / 4;
}

.image-overlay {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 0.6rem 0.9rem;
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(209, 213, 219, 0.9);
  backdrop-filter: blur(10px);
}

.image-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #111827;
}

.image-subtitle {
  margin-top: 0.15rem;
  font-size: 0.72rem;
  color: #6b7280;
}

/* Background blur shapes */
.blur-circle {
  position: absolute;
  filter: blur(52px);
  opacity: 0.8;
  pointer-events: none;
}

.blur-circle-1 {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.55), transparent);
  top: -60px;
  left: -80px;
}

.blur-circle-2 {
  width: 260px;
  height: 260px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent);
  bottom: -80px;
  right: -40px;
}

/* Responsive */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr);
    gap: 2.5rem;
  }

  .hero-image-wrapper {
    justify-content: flex-start;
  }

  .hero-wrapper {
    padding-top: 3.25rem;
  }
}

@media (max-width: 640px) {
  .hero-wrapper {
    padding: 2.75rem 1.25rem 3.5rem;
  }

  .cards-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .headline {
    font-size: 1.9rem;
  }
}
</style>
