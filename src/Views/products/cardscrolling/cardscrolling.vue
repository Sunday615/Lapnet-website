<template>
  <div class="atm-page">
    <div class="content">
      <!-- LEFT PANEL -->
      <section class="left-panel">
        <h1 class="title">{{ title }}</h1>

        <p class="subtitle">
          {{ subtitle }}
        </p>

        <ul class="feature-list">
          <li v-for="(item, index) in features" :key="index">
            ✔ {{ item }}
          </li>
        </ul>

  
      </section>

      <!-- RIGHT PANEL -->
      <section class="right-panel">
        <div class="slider-header">
          <span class="badge">{{ badgeLabel }}</span>

          <p>
            {{ badgeDescription }}
          </p>
        </div>

        <div class="cards-window">
          <!-- The animated column -->
          <div class="cards-column" ref="cardsColumn">
            <div
              v-for="card in loopCards"
              :key="card.id + '-' + card.loopKey"
              class="atm-card"
            >
              <div class="card-top">
                <!-- CHIP WITH LOGO -->
                <span class="chip">
                  <img
                    :src="card.logo"
                    :alt="card.holder + ' logo'"
                    class="chip-logo"
                  />
                </span>

                <span class="network">{{ card.network }}</span>
              </div>

              <div class="card-number">
                {{ card.number }}
              </div>

              <div class="card-bottom">
                <div class="holder">
                  <span class="label">CARD HOLDER</span>
                  <span class="value">{{ card.holder }}</span>
                </div>
                <div class="expiry">
                  <span class="label">VALID THRU</span>
                  <span class="value">{{ card.expiry }}</span>
                </div>
              </div>

              <div class="card-accent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, defineProps } from "vue";
import gsap from "gsap";

/**
 * ✅ Props for dynamic content
 * - title
 * - subtitle
 * - features (array of strings)
 * - primaryButtonLabel
 * - badgeLabel
 * - badgeDescription
 */
const props = defineProps({
  title: {
    type: String,
    default: "ເງື່ອນໄຂການບໍລິການ",
  },
  subtitle: {
    type: String,
    default:
      "ລູກຄ້າທີ່ມີບັດ ATM ຂອງທະນາຄານທີ່ເປັນສະມາຊິກຂອງ LAPNet ສາມາດຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM ຂອງທະນາຄານສະມາຊິກ ໂດຍສາມາດສັງເກດໄດ້ຈາກສັນຍາລັກ LAPNet ວົງມົນສີຟ້າທີ່ຕິດຢູ່ໜ້າຕູ້ ATM.",
  },
  features: {
    type: Array,
    default: () => [
      "ເຊິ່ງການຖອນເງິນສົດຂ້າມຕູ້ເອທີເອັມນີ້ແມ່ນຈະຕ້ອງໄດ້ເສຍຄ່າທຳນຽມ 2,000 ກີບ ຕໍ່ ຄັ້ງ.",
    ],
  },
  primaryButtonLabel: {
    type: String,
    default: "Get Started",
  },
  badgeLabel: {
    type: String,
    default: "Member Cards",
  },
  badgeDescription: {
    type: String,
    default:
      "ເຊິ່ງການຖອນເງິນສົດຂ້າມຕູ້ເອທີເອັມນີ້ແມ່ນຈະຕ້ອງໄດ້ເສຍຄ່າທຳນຽມ 2,000 ກີບ ຕໍ່ ຄັ້ງ.",
  },
});

// 16 cards
const cards = [
  {
    id: 1,
    holder: "xxxxxxx xxxxxxx",
    number: "**** **** **** 1024",
    expiry: "08/27",
    network: "BCEL",
    logo: "/logoallmember/circle_scale/BCEL.png",
  },
  {
    id: 2,
    holder: "xxxxx xxxxxxxxx",
    number: "**** **** **** 9834",
    expiry: "11/26",
    network: "LDB",
    logo: "/logoallmember/circle_scale/LDB.PNG",
  },
  {
    id: 3,
    holder: "xxxxx xxxxxxx",
    number: "**** **** **** 5532",
    expiry: "04/28",
    network: "APB",
    logo: "/logoallmember/circle_scale/APBB.PNG",
  },
  {
    id: 4,
    holder: "xxxxx xxxxxxxx",
    number: "**** **** **** 7789",
    expiry: "09/27",
    network: "JDB",
    logo: "/logoallmember/circle_scale/JDB.png",
  },
  {
    id: 5,
    holder: "xxxxx xxxxxxxxx",
    number: "**** **** **** 1492",
    expiry: "02/29",
    network: "MJB",
    logo: "/logoallmember/circle_scale/Maruhan.png",
  },
  {
    id: 6,
    holder: "xxxxx xxxxxxxxx",
    number: "**** **** **** 6321",
    expiry: "06/27",
    network: "LVB",
    logo: "/logoallmember/circle_scale/lvb.PNG",
  },
  {
    id: 7,
    holder: "xxxxx xxxxxx",
    number: "**** **** **** 8420",
    expiry: "12/26",
    network: "ICBC",
    logo: "/logoallmember/circle_scale/ICBC.png",
  },
  {
    id: 8,
    holder: "xxxxxxxx xxxxxx",
    number: "**** **** **** 3901",
    expiry: "07/28",
    network: "BOC",
    logo: "/logoallmember/circle_scale/BOC.png",
  },
  {
    id: 9,
    holder: "xxxxx xxxxxxxxxx",
    number: "**** **** **** 4217",
    expiry: "03/27",
    network: "VTB",
    logo: "/logoallmember/circle_scale/VTB.png",
  },
  {
    id: 10,
    holder: "xxxxxxx xxxxxxxxx",
    number: "**** **** **** 7654",
    expiry: "10/26",
    network: "IDB",
    logo: "/logoallmember/circle_scale/IB.png",
  },
  {
    id: 11,
    holder: "xxxxx xxxxxx",
    number: "**** **** **** 2156",
    expiry: "05/28",
    network: "ACLE",
    logo: "/logoallmember/circle_scale/ACLB.png",
  },
  {
    id: 12,
    holder: "xxxxxx xxxxxxx",
    number: "**** **** **** 9999",
    expiry: "01/29",
    network: "BIC",
    logo: "/logoallmember/circle_scale/BIC.png",
  },
  {
    id: 13,
    holder: "xxxxxxx xxxxx",
    number: "**** **** **** 3201",
    expiry: "09/28",
    network: "SACOM",
    logo: "/logoallmember/circle_scale/SACOM.PNG",
  },
  {
    id: 14,
    holder: "xxxxxxx xxxxxxxx",
    number: "**** **** **** 8044",
    expiry: "02/27",
    network: "STB",
    logo: "/logoallmember/circle_scale/STB.png",
  },
  {
    id: 15,
    holder: "xxxxxxx xxxxxxxx",
    number: "**** **** **** 5678",
    expiry: "08/26",
    network: "KBANK",
    logo: "/logoallmember/circle_scale/Kasikorn.png",
  },
  {
    id: 16,
    holder: "xxxxxx ****xxxxxx",
    number: "**** **** **** 1111",
    expiry: "11/27",
    network: "ATM Card",
    logo: "/logoallmember/circle_scale/PUB.png",
  },
];

// duplicate to create seamless looping
const loopCards = computed(() => [
  ...cards.map((c) => ({ ...c, loopKey: "a" })),
  ...cards.map((c) => ({ ...c, loopKey: "b" })),
]);

const cardsColumn = ref(null);
let tween = null;

const initAutoScroll = () => {
  const col = cardsColumn.value;
  if (!col) return;

  const halfHeight = col.scrollHeight / 2;

  tween = gsap.to(col, {
    y: -halfHeight,
    duration: 40, // slow & smooth
    ease: "none",
    repeat: -1,
  });
};

const destroyAutoScroll = () => {
  if (tween) {
    tween.kill();
    tween = null;
  }
  if (cardsColumn.value) {
    gsap.set(cardsColumn.value, { y: 0 });
  }
};

onMounted(() => {
  initAutoScroll(); // auto-scroll on all screen sizes

  // soft floating animation on all cards
  gsap.to(".atm-card", {
    y: -8,
    duration: 2.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.1,
  });
});

onBeforeUnmount(() => {
  destroyAutoScroll();
});
</script>

<style scoped>
.atm-page {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: linear-gradient(135deg, #0b1f4a, #1155ff);
  color: #ffffff;
  padding: 1.5rem;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
}

.content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 2rem;
}

/* LEFT */
.left-panel {
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border-radius: 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.25),
    rgba(191, 219, 254, 0.15)
  );
  box-shadow: 0 20px 40px rgba(15, 76, 129, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.title {
  font-size: var(--fs-xl);
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: var(--fs-sm);
  color: rgba(240, 248, 255, 0.85);
  margin-bottom: 1.5rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: var(--fs-sm);
  color: rgba(240, 248, 255, 0.9);
}

.primary-btn {
  align-self: flex-start;
  padding: 0.75rem 1.6rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  background: linear-gradient(135deg, #2563eb, #60a5ff);
  color: #ffffff;
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.7);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
}

.primary-btn:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.85);
  filter: brightness(1.08);
}

/* RIGHT */
.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.4rem;
  border-radius: 1.5rem;
  background: linear-gradient(145deg, #0f2e7b, #1d4ed8, #3b82f6);
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(191, 219, 254, 0.4);
}

.slider-header {
  margin-bottom: 1.2rem;
}

.slider-header h2 {
  margin: 0.25rem 0 0.15rem;
  font-size: 1.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.slider-header p {
  margin: 0;
  font-size: 0.8rem;
  color: rgba(226, 239, 255, 0.8);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 1rem;
  border-radius: 999px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: linear-gradient(135deg, #2563eb, #60a5ff);
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.75);
}

/* Window for vertical slider */
.cards-window {
  flex: 1;
  overflow: hidden;
  position: relative;
  border-radius: 1.4rem;
  padding: 0.5rem;
  background: radial-gradient(
    circle at 0 0,
    #3b82f6 0,
    #0f265f 55%,
    #020617 100%
  );
}

/* Column that will be animated by GSAP */
.cards-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 0.2rem 0.5rem;
}

/* Single ATM card – bigger, more modern */
.atm-card {
  position: relative;
  width: 100%;
  min-height: 200px; /* bigger */
  border-radius: 1.4rem;
  padding: 1.2rem 1.4rem;
  box-sizing: border-box;
  overflow: hidden;
  background: linear-gradient(145deg, #1d4ed8, #3b82f6, #bfdbfe);
  box-shadow: 0 16px 34px rgba(15, 40, 80, 0.85);
  border: 1px solid rgba(191, 219, 254, 0.7);
  color: #f9fbff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(16px);
}

/* subtle glass highlight */
.atm-card::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at 0% 0%,
    rgba(255, 255, 255, 0.28),
    transparent 60%
  );
  opacity: 0.9;
  pointer-events: none;
}

/* decorative gradient loop line */
.card-accent {
  position: absolute;
  inset: 12% -30%;
  background: linear-gradient(
    120deg,
    rgba(191, 219, 254, 0.4),
    rgba(96, 165, 255, 0.95),
    rgba(191, 219, 254, 0.25)
  );
  filter: blur(20px);
  opacity: 0.85;
  transform: skewX(-18deg);
  pointer-events: none;
}

/* Top row: chip + network */
.card-top {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

/* BIGGER CHIP WITH LOGO */
.chip {
  width: 60px;
  height: 60px;
  border-radius: 0.9rem;
  box-shadow:
    0 0 0 1px rgba(15, 46, 94, 0.25),
    0 8px 16px rgba(15, 23, 42, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.chip-logo {
  width: 70%;
  height: auto;
  object-fit: contain;
}

.network {
  font-size: 0.85rem;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: rgba(15, 35, 80, 0.5);
  border: 1px solid rgba(219, 234, 254, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

/* Card number */
.card-number {
  position: relative;
  z-index: 1;
  font-size: 1.25rem;
  letter-spacing: 0.22em;
  margin: 1rem 0 0.7rem;
}

/* Bottom row: holder + expiry */
.card-bottom {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(239, 246, 255, 0.95);
}

.label {
  opacity: 0.8;
  display: block;
}

.value {
  font-size: 0.85rem;
  margin-top: 0.1rem;
}

/* TABLET & MOBILE (1 column) */
@media (max-width: 960px) {
  .content {
    flex-direction: column;
  }

  .left-panel,
  .right-panel {
    padding: 1.4rem;
  }

  .atm-page {
    height: auto;
    min-height: 80vh;
  }

  /* show about 4 cards height, rest hidden but auto-scrolling */
  .cards-window {
    max-height: calc(4 * 200px + 3 * 1rem + 1.4rem); /* 4 cards + gaps + padding */
    overflow: hidden;
    padding-right: 0.4rem;
    background: radial-gradient(
      circle at 0 0,
      #3b82f6 0,
      #0f265f 55%,
      #020617 100%
    );
  }
}

@media (max-width: 640px) {
  .atm-page {
    padding: 1rem;
  }
}
</style>
