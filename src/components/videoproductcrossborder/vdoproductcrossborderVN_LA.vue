<template>
  <div class="video-background-container">
    <!-- Background Video -->
    <video ref="videoRef" class="video-bg" autoplay muted loop playsinline>
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <!-- Center Content -->
    <div class="content">
      <div class="glass-card">
        <div class="topcontainer">
          <h1 ref="titleRef">
            ຫວຽດນາມ
            <img src="https://flagcdn.com/vn.svg" alt="Vietnam Flag" />
            ສະແກນຊຳລະ ລາວ
            <img src="https://flagcdn.com/la.svg" alt="Laos Flag" />:
            ນັກທ່ອງທ່ຽວຫວຽດນາມຊຳລະຢູ່ລາວ
          </h1>
        </div>

        <div class="centercontainer">
          <div class="headercondition">
            <p>
              ເບື້ອງຫວຽດນາມ (ສະແກນຊຳລະ) : 09 ທະນາຄານຫຼັກ.
            </p>
          </div>
          <div class="logomember">
            <div class="logo-row">
              <img src="/logoallmember/retangle_scale/VTB.jpg" alt="VTB" />
              <img src="/logoallmember/retangle_scale/sacom.png" alt="Sacom" />
              <img src="/logoallmember/retangle_scale/BIDV.jpeg" alt="BIDV" />
              <img src="/logoallmember/retangle_scale/VTB.png" alt="VTB 2" />
              <img src="/logoallmember/retangle_scale/TPB.jpeg" alt="TPB" />
              <img src="/logoallmember/retangle_scale/BV.png" alt="BV" />
              <img src="/logoallmember/retangle_scale/NamA.jpeg" alt="NamA" />
              <img src="/logoallmember/retangle_scale/NCB.avif" alt="NCB" />
            </div>
          </div>
        </div>

        <div class="bottomcontainer">
          <div class="headercondition">
            <p class="laos-text">
              ເບື້ອງລາວ (ຮັບການຊຳລະ) : 14 ທະນາຄານສະມາຊິກ.
            </p>
          </div>
          <div class="logomember">
            <div class="logo-row">
              <img src="/logoallmember/retangle_scale/BCEL.png" alt="BCEL" />
              <img src="/logoallmember/retangle_scale/LDBnew.png" alt="LDB" />
              <img src="/Logomember/APB.png" alt="APB" />
              <img src="/logoallmember/retangle_scale/LVBnew.png" alt="LVB" />
              <img src="/logoallmember/retangle_scale/jdbnew.png" alt="JDB" />
              <img src="/logoallmember/retangle_scale/STB.jpg" alt="STB" />
              <img src="/logoallmember/retangle_scale/BICnew.jpeg" alt="BIC" />
              <img src="/logoallmember/retangle_scale/ACL.jpg" alt="ACL" />
            </div>
            <div class="logo-row" style="margin-top: 10px">
              <img src="/logoallmember/retangle_scale/IBbankk.JPG" alt="IB" />
              <img src="/Logomember/psvbre.PNG" alt="PSVBRE" />
              <img src="/logoallmember/retangle_scale/sacom.png" alt="Sacom Laos" />
              <img src="/logoallmember/retangle_scale/mjbl.jpeg" alt="MJBL" />
              <img src="/logoallmember/retangle_scale/MB.png" alt="MB" />
              <img src="/logoallmember/retangle_scale/VTB.jpg" alt="VTB Laos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== Base layout ===== */

.video-background-container {
  position: relative;
  width: 100%;
  min-height: 100vh; /* full screen instead of fixed 1000px */
  padding: 40px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Poppins", sans-serif;
  z-index: 0;
}

.video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: brightness(70%);
  z-index: 1;
}

.content {
  position: relative;
  z-index: 3;
  width: 90%;
  max-width: 1200px;
  min-height: 60vh; /* let content grow */
  display: flex;
  flex-direction: column;
}

/* ===== Glass card ===== */

.glass-card {
  width: 100%;
  height: 100%;
  padding: 24px 32px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 0px 0px rgba(255, 255, 255, 0);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
}

.glass-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    transparent,
    rgba(255, 255, 255, 0.3)
  );
}

/* ===== Top (title) ===== */

.topcontainer {
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.topcontainer h1 {
  font-size: clamp(1.4rem, 2vw + 1rem, 2.5rem);
  font-weight: bold;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #fff;
}

.topcontainer img {
  width: 40px;
  height: 30px;
  border-radius: 3px;
}

/* ===== Text blocks ===== */

.centercontainer {
  margin-top: 20px;
  width: 100%;
}

.headercondition {
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  gap: 12px;
  padding: 0 10px;
}

.headercondition p {
  font-size: clamp(1rem, 0.8vw + 0.8rem, 1.75rem);
  font-weight: bold;
  line-height: 1.4;
}

.laos-text {
  font-size: clamp(1rem, 1vw + 0.8rem, 1.8rem);
}

/* ===== Logos ===== */

.logomember {
  width: 100%;
  margin-top: 16px;
}

.logo-row {
  display: flex;
  flex-wrap: wrap; /* this makes it responsive */
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin: 0 auto;
}

.logo-row img {
  width: 110px;
  max-width: 20vw;
  height: auto;
  object-fit: contain;
}

/* ===== Bottom section ===== */

.bottomcontainer {
  margin-top: 24px;
  width: 100%;
}

/* Kept QR block styles in case you add images there later */
.imgqrpayment {
  width: 30%;
  max-width: 260px;
  margin: 20px auto 0;
}

.imgqrpayment img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* ===== Responsive breakpoints ===== */

/* Tablets */
@media (max-width: 1024px) {
  .glass-card {
    padding: 20px;
  }

  .logo-row img {
    width: 90px;
    max-width: 24vw;
  }

  .imgqrpayment {
    width: 40%;
  }
}

/* Mobile & small tablets */
@media (max-width: 768px) {
  .video-background-container {
    padding: 24px 0;
  }

  .glass-card {
    padding: 16px;
  }

  .topcontainer h1 {
    font-size: clamp(1.2rem, 3vw + 0.8rem, 1.9rem);
  }

  .topcontainer img {
    width: 32px;
    height: 24px;
  }

  .logo-row {
    gap: 10px;
  }

  .logo-row img {
    width: 80px;
    max-width: 30vw;
  }

  .headercondition {
    min-height: auto;
  }

  .imgqrpayment {
    width: 50%;
  }
}

/* Small phones */
@media (max-width: 480px) {
  .content {
    width: 94%;
  }

  .topcontainer h1 {
    font-size: 1.1rem;
  }

  .headercondition p,
  .laos-text {
    font-size: 0.95rem;
    padding: 0 8px;
  }

  .logo-row img {
    width: 70px;
    max-width: 35vw;
  }

  .imgqrpayment {
    width: 65%;
  }
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const videoSrc = "/videos/testcrossborder.mp4";
const videoRef = ref(null);
const titleRef = ref(null);
const subtitleRef = ref(null); // optional if you add a subtitle later
const buttonRef = ref(null);   // optional for a button later

onMounted(() => {
  if (titleRef.value) {
    gsap.from(titleRef.value, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }

  if (subtitleRef.value) {
    gsap.from(subtitleRef.value, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }

  if (buttonRef.value) {
    gsap.from(buttonRef.value, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "back.out(1.7)",
    });
  }
});

function playAnimation() {
  if (!buttonRef.value) return;
  gsap.to(buttonRef.value, {
    scale: 0.9,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
  });
}
</script>
