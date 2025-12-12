<template>
  <div class="sidebar-wrapper">
    <!-- Backdrop -->
    <div ref="backdropEl" class="sidebar-backdrop" :class="{ 'sidebar-backdrop--active': isOpen }"
      @click="closeSidebar"></div>

    <!-- Sidebar -->
    <nav ref="sidebarEl" class="lapnet-sidebar">
      <header class="sidebar-header">
        <div class="brand">
          <div class="brand-orb"><img src="/logolapnet/logolapnet.PNG" alt=""></div>
          <div class="brand-text">
            <span class="brand-title">LAPNet</span>
            <span class="brand-sub">Lao National Payment Network</span>
          </div>
        </div>
      </header>

      <ul class="sidebar-nav">
        <router-link to="/">
        <li class="sidebar-item active">
          <span class="sidebar-dot sidebar-dot--pulse"></span>
          <span>ໜ້າຫຼັກ</span>
        </li>
        </router-link>


        <li class="sidebar-item has-children" :class="{ 'is-open': openKey === 'product' }">
          <div class="sidebar-item-main" @click="toggleMenu('product')">
            <span class="sidebar-dot"></span>
            <span class="sidebar-label">ຜະລິດຕະພັນ &amp; ການບໍລິການ</span>
            <span class="sidebar-arrow"></span>
          </div>

          <ul v-if="openKey === 'product'" class="sidebar-subnav">
            <li class="sidebar-subitem" @click.stop @click="goTo('/products_service/atm-inquiry')">ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/products_service/atm-cash-withdraw')">ຖອນເງິນສົດຂ້າມທະນາຄາານຜ່ານຕູ້ ATM</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/products_service/atm-transfer')">ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/products_service/mobile-transfer')">ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/products_service/qr-payment')">ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/products_service/crossborder')">ຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງປະເທດ</li>
          </ul>
        </li>


        <li class="sidebar-item has-children" :class="{ 'is-open': openKey === 'member' }">
          <div class="sidebar-item-main" @click="toggleMenu('member')">
            <span class="sidebar-dot"></span>
            <span class="sidebar-label">ສະມາຊິກ</span>
            <span class="sidebar-arrow"></span>
          </div>

          <ul v-if="openKey === 'member'" class="sidebar-subnav">
            <li class="sidebar-subitem" @click.stop @click="goTo('/member/membercardATM')" >ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/member/mobile_banking')" >ສະມາຊິກລະບົບຊຳລະຂ້າມທະນາຄານເທິງມືຖື</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/member/crossborder')" >ສະມາຊິກລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ</li>
          </ul>
        </li>
        <router-link to="/bloggrid">
        <li class="sidebar-item">
          <span class="sidebar-dot"></span>
          <span>ຂ່າວສານ &amp; ກິດຈະກຳ</span>
        </li>
        </router-link>
        <router-link to="/joinus">
        <li class="sidebar-item">
          <span class="sidebar-dot"></span>
          <span>ຮ່ວມງານກັບເຮົາ</span>
        </li>
        </router-link>

        <li class="sidebar-item has-children" :class="{ 'is-open': openKey === 'contact' }">
          <div class="sidebar-item-main" @click="toggleMenu('contact')">
            <span class="sidebar-dot"></span>
            <span class="sidebar-label">ກ່ຽວກັບພວກເຮົາ</span>
            <span class="sidebar-arrow"></span>
          </div>

          <ul v-if="openKey === 'contact'" class="sidebar-subnav">
            <li class="sidebar-subitem" @click.stop @click="goTo('/aboutus/vision')">ວິໄສທັດ ແລະ ພາລະກິດ</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/aboutus/role')">ພາລະບົດບາດ</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/aboutus/history')">ຄວາມເປັນມາ</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/aboutus/board_director')">ສະພາຜູ້ບໍລິຫານ</li>
            <li class="sidebar-subitem" @click.stop @click="goTo('/aboutus/companystructureimage')">ໂຄງຮ່າງການຈັດຕັ້ງ</li>
          </ul>
        </li>
        <router-link to="/contactus">
        <li class="sidebar-item">
          <span class="sidebar-dot"></span>
          <span>ຕິດຕໍ່ພວກເຮົາ</span>
        </li>
        </router-link>
      </ul>

      <footer class="sidebar-footer">
        <router-link to="/contactus">
          <div class="status-pill">
            <span class="status-dot"></span>
            <div class="status-text">

              <span>Help Center</span>
              <small>Contact us</small>

            </div>
          </div>
        </router-link>
      </footer>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { defineExpose } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()



const openKey = ref(null)

const toggleMenu = (key) => {
  openKey.value = openKey.value === key ? null : key
}


const isOpen = ref(false)

const sidebarEl = ref(null)
const backdropEl = ref(null)

const initPosition = () => {
  if (!sidebarEl.value || !backdropEl.value) return
  // start off-screen on the right
  gsap.set(sidebarEl.value, { x: '100%' })
  gsap.set(backdropEl.value, { opacity: 0 })
  isOpen.value = false
}

const openSidebar = () => {
  if (!sidebarEl.value) return
  isOpen.value = true

  gsap.to(sidebarEl.value, {
    duration: 0.45,
    x: 0,
    ease: 'power3.out'
  })

  if (backdropEl.value) {
    gsap.to(backdropEl.value, {
      duration: 0.35,
      opacity: 1,
      ease: 'power2.out'
    })
  }
}

const closeSidebar = () => {
  if (!sidebarEl.value) return
  isOpen.value = false

  gsap.to(sidebarEl.value, {
    duration: 0.4,
    x: '100%',
    ease: 'power3.inOut'
  })

  if (backdropEl.value) {
    gsap.to(backdropEl.value, {
      duration: 0.3,
      opacity: 0,
      ease: 'power2.inOut'
    })
  }
}

const toggleSidebar = () => {
  isOpen.value ? closeSidebar() : openSidebar()
}

onMounted(() => {
  initPosition()
  window.addEventListener('resize', initPosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', initPosition)
})

// ✅ expose functions so parent (homepage) can call them
defineExpose({
  openSidebar,
  closeSidebar,
  toggleSidebar
})


// function receives path from click
const goTo = (path) => {
  router.push(path)
  // or: router.push({ path })
}

</script>

<style scoped>
/* Parent item that has dropdown */
.has-children {
  /* override ค่าเดิมจาก .sidebar-item */
  display: flex;
  flex-direction: column;
  /* ⬅️ ทำให้ด้านในเรียงลงมา 1 column */
  align-items: stretch;
  padding: 0;
  /* padding จะไปอยู่ที่ .sidebar-item-main แทน */
}

.sidebar-item-main {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 8px;
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
  transition: background 0.16s ease, box-shadow 0.16s ease, transform 0.12s ease;
}

.has-children .sidebar-label {
  flex: 1;
}

/* Arrow icon */
.sidebar-arrow {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  position: relative;
  overflow: hidden;
}

.sidebar-arrow::before {
  content: '▾';
  transform: translateY(-1px);
  transition: transform 0.18s ease;
  color: #e5e7eb;
}

.has-children.is-open .sidebar-arrow::before {
  transform: rotate(180deg) translateY(1px);
}

/* Hover effect on parent */
.has-children .sidebar-item-main:hover {
  background: radial-gradient(circle at 0 0,
      rgba(59, 130, 246, 0.45),
      rgba(15, 23, 42, 0.9));
  box-shadow: 0 0 18px rgba(59, 130, 246, 0.45);
  transform: translateY(-1px);
}

/* Submenu */
.sidebar-subnav {
  list-style: none;
  margin: 4px 0 0;
  padding: 4px 0 4px 22px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
}

.sidebar-subitem {
  font-size: 1rem;
  padding: 5px 8px;
  border-radius: 10px;
  color: #cbd5f5;
  cursor: pointer;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.35);
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
  transition: background 0.15s ease, transform 0.12s ease, box-shadow 0.15s ease;
}

.sidebar-subitem:hover {
  background: radial-gradient(circle at 0 0,
      rgba(56, 189, 248, 0.4),
      rgba(15, 23, 42, 0.95));
  box-shadow: 0 0 16px rgba(56, 189, 248, 0.55);
  transform: translateX(2px);
}

.sidebar-wrapper {
  position: fixed;
  inset: 0;
  pointer-events: none;
  /* interactions controlled by children */
  z-index: 999;
}

/* Backdrop */
.sidebar-backdrop {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right,
      rgba(37, 99, 235, 0.75),
      rgba(15, 23, 42, 0.95));
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}

.sidebar-backdrop--active {
  pointer-events: auto;
}

/* Sidebar panel */
.lapnet-sidebar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 80vw);
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.25), transparent 55%),
    radial-gradient(circle at bottom right, rgba(79, 70, 229, 0.4), rgba(15, 23, 42, 1));
  border-left: 1px solid rgba(148, 163, 184, 0.4);
  box-shadow: -5px 0 60px rgba(15, 23, 42, 0.9);
  padding: 18px 18px 22px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(18px);
  pointer-events: auto;
}

/* Inner glow frame */
.lapnet-sidebar::before {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: 20px;
  border: 1px solid rgba(129, 140, 248, 0.5);
  pointer-events: none;
}

/* Header / brand */
.sidebar-header {
  padding-bottom: 14px;
  border-bottom: 1px dashed rgba(148, 163, 184, 0.4);
  position: relative;
  z-index: 1;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-orb img {
  width: 100%;
  height: 100%;
}

.brand-orb {
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background:
    radial-gradient(circle at 30% 20%, #e0f2fe, #38bdf8 45%, #1d4ed8 70%, #020617 100%);
  box-shadow:
    0 0 18px rgba(59, 130, 246, 0.9),
    0 0 38px rgba(56, 189, 248, 0.7);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-title {
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #e5f0ff;
  font-weight: 600;
}

.brand-sub {
  font-size: 0.75rem;
  color: #9ca3af;
}

/* Nav */
.sidebar-nav {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  z-index: 1;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 11px;
  border-radius: 14px;
  font-size: 1rem;
  color: #e5e7eb;
  cursor: pointer;
  transition: background 0.16s ease, transform 0.12s ease, box-shadow 0.16s ease;
}

.sidebar-item span:last-child {
  flex: 1;
}

.sidebar-item:hover {
  background: radial-gradient(circle at 0 0,
      rgba(59, 130, 246, 0.4),
      rgba(15, 23, 42, 0.9));
  box-shadow: 0 0 18px rgba(59, 130, 246, 0.4);
  transform: translateY(-1px);
}

.sidebar-item.active {
  background: linear-gradient(120deg, #2563eb, #22d3ee);
  color: #f9fafb;
  box-shadow:
    0 0 20px rgba(37, 99, 235, 0.9),
    0 0 40px rgba(56, 189, 248, 0.7);
}

.sidebar-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 20%, #a5b4fc, #1e293b);
  box-shadow: 0 0 8px rgba(129, 140, 248, 0.8);
}

.sidebar-dot--pulse {
  position: relative;
}

.sidebar-dot--pulse::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  border: 1px solid rgba(129, 140, 248, 0.8);
  opacity: 0.6;
  animation: sidebarPulse 2s infinite ease-out;
}

@keyframes sidebarPulse {
  0% {
    transform: scale(0.9);
    opacity: 0.9;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

/* Footer */
.sidebar-footer {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px dashed rgba(148, 163, 184, 0.4);
  position: relative;
  z-index: 1;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(52, 211, 153, 0.5);
  box-shadow: 0 0 18px rgba(16, 185, 129, 0.6);
}

.status-dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 20%, #bbf7d0, #22c55e);
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.9);
}

.status-text {
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  color: #e5e7eb;
}

.status-text span {
  font-size: 0.75rem;
  font-weight: 500;
}

.status-text small {
  color: #9ca3af;
}

/* Mobile-first: works on all sizes; icon visibility handled in parent */
</style>
