<script setup>
import navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import homepagebutton from '../../components/button/homepagebutton.vue';
import videobackgroundhomepage from '../../components/videobackground/productbackgroundvideo.vue'
import tagproduct from '../../components/tagproduct/tagproduct.vue';
import product1_footerlogomember from '../../components/footer/logomemberfooter/product1_footerlogomember.vue';
import cardscrolling from './cardscrolling/cardscrolling.vue';
import hero_sectionproduct2 from '../../Views/products/product_herosection/hero_sectionproduct2.vue'
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
      src: "/logoallmember/circle_scale/lvb.PNG",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/JDB.png",
      alt: "Client X",
   },
  {
      src: "/logoallmember/circle_scale/STB.png",
      alt: "Client Z",
   },
    {
      src: "/logoallmember/circle_scale/BIC.png",
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
      src: "/logoallmember/circle_scale/Maruhan.png",
      alt: "Client Y",
   },
   {
      src: "/logoallmember/circle_scale/SACOM.PNG",
      alt: "Client Z",
   },
   
   {
      src: "/logoallmember/circle_scale/Kasikorn.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/PUB.png",
      alt: "Client Z",
   },
   // ...continue until you have 16 logos, all with their own paths
];
</script>

<template>
   <navbar title="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຜະລິດຕະພັນ ແລະ ການບໍລິການ',
      'ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM'
   ]" background-image="/overlaynav/product/navigatorcontent-bg.png" />

   <herosection />
   <div class="productdiscription">
      <hero_sectionproduct2/>
   </div>
   <div class="benetfix">
      <videobackgroundhomepage :src="heroVideo" poster="/images/tech-poster.jpg">
         <div class="benetfitcontainer">
            <div class="benetfitcontent">
               <h1>ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ</h1>
               <h2>ດ້ານທະນາຄານສະມາຊິກ</h2>
               <p>ປະຢັດຄ່າໃຊ້ຈ່າຍໃນການລົງທຶນເຊັ່ນ: ຫຼດຜ່ອນຄ່າໃຊ້ຈ່າຍໃນການຂະຫຍາຍຕູ້ ATM ແລະ ຄ່າບຳລຸງຮັກສາທີ່ຕິດພັນກັບການ
                  ຂະຫຍາຍຕູ້ ATM; ເພີ່ມຈຸດບໍລິການຕູ້ ATM ແກ່ລູກຄ້າຂອງທະນາຄານທີ່ເຂົ້າເປັນສະມາຊິກ
                  ຊຶ່ງສາມາດບໍລິການລູກຄ້າໄດ້ທົ່ວປະເທດ
                  ດ້ວຍຄ່າໃຊ້ຈ່າຍໃນການລົງທຶນຕໍ່າ.</p>
            </div>
            <div class="condition">
               <h1>ເງື່ອນໄຂການໃຊ້ບໍລິການ</h1>
               <h2>ດ້ານລູກຄ້າຂອງທະນາຄານ</h2>
               <p>ລູກຄ້າສາມາດນໍາໃຊ້ຕູ້ ATM ຂອງທຸກທະນາຄານທີ່ເປັນສະມາຊິກ ຂອງລະບົບ LAPS ຊຶ່ງປັດຈຸບັນມີທະນາຄານສະມາຊິກທັງໝົດ
                  16 ທະນາຄານ ເປັນການອຳນວຍຄວາມສະດວກ ແລະ ປະຢັດເວລາ ໂດຍລູກຄ້າບໍ່ຈໍາເປັນຕ້ອງລໍຖ້າການໃຊ້ບໍລິການ ຫຼື
                  ຊອກຫາຕູ້ເອທີເອັມ
                  ຂອງທະນາຄານຜູ້ອອກບັດເທົ່ານັ້ນ.</p>
            </div>
         </div>
      </videobackgroundhomepage>
   </div>
   <div class="cardscrolling">

      <cardscrolling title="ເງື່ອນໄຂການບໍລິການ" :subtitle="` ການຖອນເງິນສົດຜ່ານຕູ້ເອທີເອັມ ແມ່ນນຳໃຊ້ລະບົບແລັບໃນການ
            ເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງ
            ບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການຖອນ
            ເງິນຂ້າມທະນາຄານໄດ້.`" :features="[
               ' ເຊິ່ງການຖອນເງິນສົດຂ້າມຕູ້ເອທີເອັມນີ້ແມ່ນຈະຕ້ອງໄດ້ເສຍຄ່າທຳນຽມ 2,000 ກີບ ຕໍ່ ຄັ້ງ.',

            ]" badge-label="ATM Cash Withdraw"
         badge-description="ທະນາຄານສະມາຊິກທັງຫມົດທີເຂົ້າຮ່ວມ : 16 ທະນາຄານ" />
   </div>
   <div class="footermemberproduct1">

      <product1_footerlogomember :subtitle="` ການຖອນເງິນສົດຜ່ານຕູ້ເອທີເອັມ ແມ່ນນຳໃຊ້ລະບົບແລັບໃນການ
            ເຊື່ອມໂຍງຕູ້ເອທີເອັມຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງ
            ບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການຖອນ
            ເງິນຂ້າມທະນາຄານໄດ້.`" :features="[
         'ເຊິ່ງການຖອນເງິນສົດຂ້າມຕູ້ເອທີເອັມນີ້ແມ່ນຈະຕ້ອງໄດ້ເສຍຄ່າທຳນຽມ 2,000 ກີບ ຕໍ່ ຄັ້ງ.',
    
      ]" :logos="memberLogos" />
   </div>

   <secondfooter />

</template>


<style scoped>
.cardscrolling {
   width: 100%;
   height: auto;


}

.benetfitcontent h2 {
   font-size: var(--fs-md);
   font-weight: bold;
}

.footermemberproduct1 {
   width: 100%;

   height: 100vh;


}

.condition h2 {
   font-size: var(--fs-md);
   font-weight: bold;
}

.condition p {
   width: 100%;
   padding-top: 40px;


   font-size: var(--fs-base);
   text-align: center;

}

.condition h1 {

   text-align: center;

   width: 100%;
   font-size: var(--fs-xxl);
   font-weight: bold;
}

.condition {
   width: 100%;
   height: 40%;

   display: flex;
   flex-direction: column;
   align-items: center;
   color: #fff;
}

.benetfitcontent p {
   width: 100%;
   padding-top: 40px;



   font-size: var(--fs-base);
   text-align: center;
}

.benetfitcontent h1 {

   text-align: center;

   width: 100%;
   font-size: var(--fs-xxl);
   font-weight: bold;

}

.benetfitcontent {
   width: 100%;
   color: #fff;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 40%;



}

.benetfitcontainer {
   width: 80%;
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   height: 100%;

}

.benetfix {
   width: 100%;
   height: 80vh;

}

.atmmockup img {
   width: 80%;
   position: relative;
   z-index: 1;
   left: -100px;
   bottom: -50px;
}

.description_right_container {
   width: 50%;
   height: 100%;
}

.topimg img {
   width: 30%;
   right: 40px;
   height: auto;
   object-fit: cover;
   border-radius: 10px;
   position: absolute;
   z-index: 0;

}



.productdiscription {
   width: 100%;
   height: auto;
 
}
</style>