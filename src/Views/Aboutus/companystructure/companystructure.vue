<template>
  <main_navbar
    title="ໂຄງຮ່າງການຈັດຕັ້ງ"
    :breadcrumb="['ໜ້າຫຼັກ', 'ກ່ຽວກັບພວກເຮົາ', 'ໂຄງຮ່າງການຈັດຕັ້ງ']"
    background-image="/aboutus/navigatormission-bg.png"
  />

  <div class="navbarcompany" >
    <cpn_navbar/>
  </div>
    <router-view />
  <div class="lapnet-org-chart">
    <!-- Top blue banner -->
    <header class="top-banner">
      <div class="top-banner-left">
        <div class="top-banner-title-la">
          ໂຄງຮ່າງການຈັດຕັ້ງ ບໍລິສັດ LAPNet
        </div>
      </div>

      <div class="top-banner-right">
        <div class="logo-circle">
          <img src="/logolapnet/logolapnet.PNG" alt="">
        </div>
        <div class="brand-text">
          <div class="brand-main">LAO NATIONAL</div>
          <div class="brand-sub">PAYMENT NETWORK</div>
        </div>
      </div>
    </header>

    <!-- White main canvas -->
    <section class="chart-wrapper">
      <!-- Board of directors -->
      <div class="node two-line-node board-node">
        <div class="node-top">ສະພາຜູ້ບໍລິຫານ</div>
        <div class="node-bottom">Board of directors</div>
      </div>

      <!-- Committees row -->
      <div class="horizontal-connector connector-board-committee"></div>

      <div class="row committees-row">
        <div class="node two-line-node">
          <div class="node-top">ຄະນະກຳມະການຄົ້ນຄວ້ານະໂຍບາຍ</div>
          <div class="node-bottom">Policy Research Committee</div>
        </div>

        <div class="node two-line-node">
          <div class="node-top">ຄະນະກຳມະການຄຸ້ມຄອງຄວາມສ່ຽງ</div>
          <div class="node-bottom">Risk Management Committee</div>
        </div>

        <div class="node two-line-node long-en">
          <div class="node-top">ຄະນະກຳມະການຕິດຕາມການພັດທະນາລະບົບ</div>
          <div class="node-bottom">
            System Development Monitoring Committee
          </div>
        </div>

        <div class="node two-line-node">
          <div class="node-top">ຄະນະກຳມະການກວດກາ</div>
          <div class="node-bottom">Audit Committee</div>
        </div>
      </div>

      <!-- CEO / COO -->
      <div class="vertical-connector connector-committee-ceo"></div>

      <div class="row executive-row">
        <div class="node two-line-node medium">
          <div class="node-top">ຜູ້ອຳນວຍການ</div>
          <div class="node-bottom">Chief executive officer</div>
        </div>
      </div>

      <div class="vertical-connector connector-ceo-coo"></div>

      <div class="row executive-row">
        <div class="node two-line-node medium">
          <div class="node-top">ຮອງຜູ້ອຳນວຍການ</div>
          <div class="node-bottom">Chief operating officer</div>
        </div>
      </div>

      <!-- Departments -->
      <div class="vertical-connector connector-coo-dept"></div>
      <div class="horizontal-connector connector-dept"></div>

      <div class="row departments-row">
        <!-- Administration -->
        <div class="department">
          <div class="department-head">
            <div class="node-top">ພະແນກຫ້ອງການ</div>
            <div class="node-bottom">Administration</div>
          </div>
          <div class="department-body">
            <ul>
              <li>- ບຸກຄະລາກອນ</li>
              <li>- ສັງລວມ ແລະ ລາຍງານ</li>
              <li>- ນິຕິກຳ</li>
              <li>- ເລຂານຸການ</li>
              <li>- ບໍາລຸງຮັກສາ ແລະ ຊ່ວຍວຽກປິ່ນອ້ອມ</li>
            </ul>
          </div>
        </div>

        <!-- Accounting - Finance -->
        <div class="department">
          <div class="department-head">
            <div class="node-top">ພະແນກບັນຊີ - ການເງິນ</div>
            <div class="node-bottom">Accounting - Finance</div>
          </div>
          <div class="department-body">
            <ul>
              <li>- ບັນຊີ</li>
              <li>- ການເງິນວິເຄາະ</li>
              <li>- ການເງິນທົ່ວໄປ
              </li>
            </ul>
          </div>
        </div>

        <!-- IT -->
        <div class="department">
          <div class="department-head">
            <div class="node-top">ພະແນກໄອທີ</div>
            <div class="node-bottom">IT</div>
          </div>
          <div class="department-body">
            <ul>
              <li>- ຄົ້ນຄວ້າ ແລະ ອອກແບບນະວັດຕະກຳ</li>
              <li>- ຄຸ້ມຄອງ ແລະ ພັດທະນາຊັອບແວ</li>
              <li>- ຄຸ້ມຄອງ ແລະ ບຳລຸງຮັກສາໂຄງລ່າງພື້ນຖານດ້ານໄອທີ</li>
              <li>- ຄຸ້ມຄອງ ແລະ ບຳລຸງຮັກສາລະບົບເຄືອຂ່າຍ ແລະ ຄວາມປອດໄພ</li>
              <li>- ສະໜັບສະໜູນການນຳໃຊ້ລະບົບໄອທີ</li>
            </ul>
          </div>
        </div>

        <!-- Operation -->
        <div class="department">
          <div class="department-head">
            <div class="node-top">ພະແນກດໍາເນີນງານ</div>
            <div class="node-bottom">Operation</div>
          </div>
          <div class="department-body">
            <ul>
              <li>- ໄລ່ລຽງ, ສະສາງ ແລະ ແກ້ໄຂຂໍ້ຂັດແຍ່ງ</li>
              <li>- ການຕະຫຼາດ</li>
              <li>- ສະໜັບສະໜູນການດຳເນີນງານ</li>
              <li>- ຄຸ້ມຄອງຄວາມສ່ຽງ ແລະ ຕ້ານການສໍ້ໂກງ</li>
            </ul>
          </div>
        </div>

        <!-- Internal Audit -->
        <div class="department">
          <div class="department-head">
            <div class="node-top">ພະແນກກວດສອບພາຍໃນ</div>
            <div class="node-bottom">Internal Audit</div>
          </div>
          <div class="department-body">
            <ul>
              <li>- ກວດສອບພາຍໃນ</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="boxmargin" style="width: 100%; height:15vh; background-color: #f5f7fb;"></div>
  <secondfooter />
</template>

<script setup>
import main_navbar from '../../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';
import cpn_navbar from './navbarcompany/cpn_navbar.vue';
import secondfooter from '../../../components/footer/mainfooter/secondfooter.vue';
import { onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.set('.horizontal-connector, .vertical-connector', {
    transformOrigin: 'top center',
  });

  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: 'power3.out' },
  });

  tl.from('.top-banner', { y: -40, opacity: 0 })
    .from('.chart-wrapper', { y: 30, opacity: 0 }, '-=0.4')
    .from('.board-node', { y: 20, opacity: 0 }, '-=0.3')
    .from(
      '.horizontal-connector, .vertical-connector',
      { scaleY: 0, opacity: 0, stagger: 0.05 },
      '-=0.4'
    )
    .from(
      '.committees-row .two-line-node',
      { y: 25, opacity: 0, stagger: 0.12 },
      '-=0.3'
    )
    .from(
      '.executive-row .two-line-node',
      { y: 25, opacity: 0, stagger: 0.15 },
      '-=0.3'
    );

  gsap.from('.departments-row .department', {
    scrollTrigger: {
      trigger: '.departments-row',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.7,
    ease: 'power3.out',
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<style scoped>
  .navbarcompany{
    width:100%;
    height: 13vh;
    display: flex;
    justify-content: center;
    align-items: center;   
    margin: 0 auto;
    background-color: #f5f7fb;
  }
.lapnet-org-chart {
  box-sizing: border-box;
  width: 100%;
  padding: 32px 16px 56px;
  background: #f5f7fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans Lao", "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  color: #123456;
}

/* Top banner + main container width */
.top-banner,
.chart-wrapper {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

/* Top banner */

.top-banner {
  background: #0b2b4a;
  color: #ffffff;
  border-radius: 18px;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.top-banner-left {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.top-banner-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.logo-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-text {
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
}

.brand-main {
  letter-spacing: 0.16em;
}

.brand-sub {
  letter-spacing: 0.24em;
}

/* Main chart wrapper */

.chart-wrapper {
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 40px 48px;
  border: 1px solid #d6e2f3;
  overflow: hidden;
}

/* === CARD / NODE BASE ===
   border + radius อยู่ที่ .node ทำให้โค้งทั้งบน-ล่างทุก box */
.node {
  border-radius: 20px;
  overflow: hidden;
  text-align: center;
  background: #f5f7fb;
  border: 1px solid #d6e2f3;
  display: flex;
  flex-direction: column;
}

/* header (สีน้ำเงิน) */
.two-line-node .node-top,
.department-head .node-top {
  background: #0b2b4a;
  color: #ffffff;
  padding: 8px 18px;
  font-weight: 600;
}

/* bottom (สีเทาอ่อน) ไม่มี border เองแล้ว */
.two-line-node .node-bottom,
.department-head .node-bottom {
  background: #f5f7fb;
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 500;
}

/* rows */

.row {
  display: flex;
  gap: 24px;
  margin-top: 40px;
}

/* Committees row: ทุกบล็อคเต็ม container และเท่ากัน */
.committees-row {
  width: 100%;
  justify-content: space-between;
}

.committees-row .two-line-node {
  flex: 1 1 0;
}

.committees-row .long-en .node-bottom {
  padding-inline: 20px;
}

/* Executive rows */

.executive-row {
  justify-content: center;
}

.executive-row .medium {
  min-width: 340px;
}

/* Department cards */

.departments-row {
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  margin-top: 56px;
}

.department {
  flex: 1 1 0;
  min-width: 180px;
  display: flex;
  flex-direction: column;
}

/* override head node so border ไม่ซ้อนสองชั้น */
.department-head {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #d6e2f3;
  background: #f5f7fb;
}

/* body */

.department-body {
  margin-top: 12px;
  border-radius: 14px;
  border: 1px solid #d6e2f3;
  padding: 16px 18px;
  min-height: 180px;
  background: #ffffff;
}

.department-body ul {
  padding-left: 18px;
  margin: 0;
}

.department-body li {
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 6px;
}

/* connectors (simple lines) */



/* Board to committees */

.connector-board-committee {
  top: 110px;
  left: 10%;
  right: 10%;
  height: 1px;
}

/* vertical line in the middle from board down */

.connector-committee-ceo {
  width: 1px;
  height: 80px;
  top: 110px;
  left: 50%;
  transform: translateX(-0.5px);
}

/* CEO to COO */

.connector-ceo-coo {
  width: 1px;
  height: 70px;
  top: 220px;
  left: 50%;
  transform: translateX(-0.5px);
}

/* COO to departments */

.connector-coo-dept {
  width: 1px;
  height: 70px;
  top: 320px;
  left: 50%;
  transform: translateX(-0.5px);
}

.connector-dept {
  top: 390px;
  left: 7%;
  right: 7%;
  height: 1px;
}

/* Responsive tweaks */

@media (max-width: 1200px) {
  .departments-row {
    flex-wrap: wrap;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding-inline: 24px;
  }

  .committees-row {
    flex-wrap: wrap;
  }

  .committees-row .two-line-node {
    flex: 0 0 calc(50% - 12px); /* 2 ต่อแถว */
  }

  .connector-board-committee,
  .connector-dept {
    left: 12%;
    right: 12%;
  }
}

@media (max-width: 768px) {
  .top-banner {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .top-banner-right {
    align-self: flex-end;
  }

  .committees-row .two-line-node {
    flex: 0 0 100%;
  }

  /* ✅ executive-row เต็ม columns */
  .executive-row {
    flex-direction: column;   /* เรียงเป็น 1 คอลัมน์ */
    align-items: stretch;     /* ให้ child กว้างเต็มแถว */
    gap: 16px;
  }

  .executive-row .medium {
    width: 100%;              /* เต็มความกว้าง container */
    min-width: auto;          /* ยกเลิก min-width: 340px ของ desktop */
  }

  /* ⬇️ departments 1 column, body ยังเต็ม container */
  .departments-row {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .department {
    flex: 0 0 100%;
    width: 100%;
    min-width: auto;
  }

  .department-body {
    width: 100%;
  }

  .horizontal-connector,
  .vertical-connector {
    display: none;
  }
}


</style>
