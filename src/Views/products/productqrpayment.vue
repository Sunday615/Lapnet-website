<script setup>
import navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import homepagebutton from '../../components/button/homepagebutton.vue';
import videobackgroundhomepage from '../../components/videobackground/productbackgroundvideo.vue'
import tagproduct from '../../components/tagproduct/tagproduct.vue';
import product5_footerlogomember from '../../components/footer/logomemberfooter/product5_footerlogomember.vue';
import product5tech from '../techbenetfit/product5tech.vue';
import hero_sectionproduct5 from '../../Views/products/product_herosection/hero_sectionproduct5.vue'
import secondfooter from '../../components/footer/mainfooter/secondfooter.vue';

import { onMounted } from 'vue';


onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

const heroVideo = '/videos/productvdo-background.mp4'

const memberLogos = [
  {
    src: "/logoallmember/circle_scale/BCEL.png",
    alt: "Space AI",
  },
  {
    src: "/logoallmember/circle_scale/LDB.PNG",
    alt: "Partner A",
  },
  {
     src: "/logoallmember/circle_scale/APBB.PNG",
    alt: "Partner B",
  },
  {
    src: "/logoallmember/circle_scale/JDB.png",
    alt: "Client X",
  },
  {
     src: "/logoallmember/circle_scale/Maruhan.png",
    alt: "Client Y",
  },
  {
     src: "/logoallmember/circle_scale/lvb.PNG",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/ICBC.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/BOC.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/VTB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/IB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/ACLB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/BIC.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/SACOM.PNG",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/STB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/Kasikorn.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/BFL.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/PSVB.png",
    alt: "Client Z",
  },
  {
     src: "/logoallmember/circle_scale/mb.png",
    alt: "Client Z",
  },
  // ...continue until you have 16 logos, all with their own paths
];
</script>

<template>
  <navbar
    title="ຜະລິດຕະພັນ ແລະ ການບໍລິການ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຜະລິດຕະພັນ ແລະ ການບໍລິການ',
      'ການຊໍາລະເງິນຂ້າມທະນາຄານຜ່ານ QR'
    ]"
    background-image="/overlaynav/product/navigatorcontent-bg.png"
  />
  <div class="productdiscription">
    <hero_sectionproduct5/>
  </div>
     <div class="benetfix">
         <product5tech/>
     </div>
<div class="footermemberproduct1">

  <product5_footerlogomember :subtitle="`   ການຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານ Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ໃຫ້ສາມາດນຳໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳຊໍາລະຜ່ານ QR ຂອງທະນາຄານອື່ນໄດ້.`" :features="[
         '  ການຊໍາລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS',
    
      ]" :logos="memberLogos" />
   </div>
  <secondfooter/>
</template>


<style scoped>

.footermemberproduct1{ 
   width: 100%;
  
   height: auto;


}
.condition p{
      width: 100%;
   padding-top: 40px;
   
   width: 80%;
   font-size: var(--fs-base);
   text-align: center;

}
.condition h1{
  
   text-align: center;

   width: 100%;
   font-size: var(--fs-xxl);
   font-weight: bold;
}
.condition{
   width: 100%;
   height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
   color: #fff;
}
.benetfitcontent p{
   width: 100%;
   padding-top: 40px;

   width: 80%;
  
   font-size: var(--fs-base);
   text-align: center;
}
.benetfitcontent h1{

   text-align: center;

   width: 100%;
   font-size: var(--fs-xxl);
   font-weight: bold;
   
}
.benetfitcontent{
   width: 100%;
   color: #fff;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 40%;
 


}
.benetfitcontainer{
   width: 80%;
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   height: 100%;

}
.benetfix{
   width: 100%;
   height: auto;


}

.productdiscription{
   width: 100%;
   height: auto;
  
}
</style>
