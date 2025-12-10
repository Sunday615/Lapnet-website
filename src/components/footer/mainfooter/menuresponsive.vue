<template>
    <div class="menu-container">
            <div class="menu-section">
            <div class="menu-header" @click="toggleDropdown(1)">
                <span>ຜະລິດຕະພັນ ແລະ ການບໍລິການ</span>
                <span class="arrow" :class="{ open: open1 }">›</span>
            </div>

            <transition name="slide">
                <div v-show="open1" class="dropdown-content" @click="goTop()">
                    <router-link to="/products_service/atm-inquiry" class="menu-item" >ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</router-link>
                    <router-link to="/products_service/atm-cash-withdraw" class="menu-item">ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM</router-link>
                    <router-link to="/products_service/atm-transfer" class="menu-item">ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</router-link>
                    <router-link to="/products_service/mobile-transfer" class="menu-item">ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື</router-link>
                    <router-link to="/products_service/qr-payment" class="menu-item">ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR</router-link>
                    <router-link to="/products_service/crossborder" class="menu-item">ຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງປະເທດ</router-link>

                </div>
            </transition>
        </div>

     
        <router-link to="/bloggrid">
            <div class="menu-section">
                
                <div class="menu-header" @click="goTop()">
                    <span>ຂ່າວສານ ແລະ ກິດຈະກຳ</span>
                    <span class="arrownonrotage" :class="{ open: open1 }">›</span>
                </div>
            </div>
        </router-link>

       
        <div class="menu-section">
            <div class="menu-header" @click="toggleDropdown(2)">
                <span>ສະມາຊິກ</span>
                <span class="arrow" :class="{ open: open2 }">›</span>
            </div>

            <transition name="slide">
                <div v-show="open2" class="dropdown-content" @click="goTop()">
                    <router-link to="/member/membercardATM" class="menu-item" >ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ</router-link>
                    <router-link to="/member/mobile_banking" class="menu-item">ສະມາຊິກລະບົບຊຳລະຂ້າມທະນາຄານເທິງມືຖື</router-link>
                    <router-link to="/member/crossborder" class="menu-item">ສະມາຊິກລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ</router-link>

                </div>
            </transition>
        </div>

       
        <router-link to="/joinus">
            <div class="menu-section">
                <div class="menu-header" @click="goTop()">
                    <span>ຮ່ວມງານກັບເຮົາ</span>
                    <span class="arrownonrotage" :class="{ open: open3 }">›</span>
                </div>


            </div>
        </router-link>
        <div class="menu-section">
            <div class="menu-header" @click="toggleDropdown(4)">
                <span>ກ່ຽວກັບພວກເຮົາ</span>
                <span class="arrow" :class="{ open: open4 }">›</span>
            </div>

            <transition name="slide">
                <div v-show="open4" class="dropdown-content" @click="goTop()">
                    <router-link to="/aboutus/vision" class="menu-item">ວິໄສທັດ ແລະ ພາລະກິດ</router-link>
                    <router-link to="/aboutus/role" class="menu-item">ພາລະບົດບາດ</router-link>
                    <router-link to="/aboutus/history" class="menu-item">ຄວາມເປັນມາ</router-link>
                    <router-link to="/aboutus/board_director" class="menu-item">ສະພາຜູ້ບໍລິຫານ</router-link>
                    <router-link to="/aboutus/companystructure" class="menu-item">ໂຄ່ງຮ່າງການຈັດຕັ້ງ</router-link>

                </div>
            </transition>
        </div>
        <router-link to="/contactus">
            <div class="menu-section-sub">
                <div class="menu-header" @click="goTop()">
                    <span>ຕິດຕໍ່ພວກເຮົາ</span>
                    <span class="arrownonrotage" :class="{ open: open5 }">›</span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { onMounted } from 'vue'

function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const open1 = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
const open5 = ref(false)

function toggleDropdown(num) {
    if (num === 1) {
        open1.value = !open1.value
        open2.value = false
        open3.value = false
        open4.value = false
        open5.value = false
    } else if (num === 2) {
        open2.value = !open2.value
        open1.value = false
        open3.value = false
        open4.value = false

        open5.value = false
    } else if (num === 3) {
        open3.value = !open3.value
        open1.value = false
        open2.value = false
        open4.value = false
        open5.value = false
    } else if (num === 4) {
        open4.value = !open4.value
        open1.value = false
        open2.value = false

        open3.value = false
        open5.value = false
    } else if (num === 5) {
        open5.value = !open5.value
        open1.value = false
        open2.value = false
        open3.value = false
        open4.value = false
    }

}
</script>

<style scoped>
.menu-section-sub:hover{
     background: rgba(255, 255, 255, 0.08);
     
}

* {
    font-family: "Noto Sans Lao", sans-serif;
}

.menu-container {
    width: 100%;
   
    color: white;
    border-radius: 8px;



}

.menu-section {
    border-bottom: 1px solid rgba(221, 221, 221, 0.754);
}

.menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    cursor: pointer;
    font-size: 20px;
}

.arrow {
    transition: transform 0.3s ease;
    font-size: 40px;
}

.arrow.open {
    transform: rotate(90deg);
}

.arrownonrotage {
    font-size: 40px;

}

.dropdown-content {

    overflow: hidden;
}

.menu-item {
    display: block;
    padding: 10px 18px;
    font-size: 20px;
    cursor: pointer;
    border-top: 1px solid rgba(198, 198, 198, 0.1);
    color: white;
    text-decoration: none;
}

.menu-item:hover {
    background: rgba(255, 255, 255, 0.08);
}

/* slide animation */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
    max-height: 300px;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    max-height: 0;
}
</style>