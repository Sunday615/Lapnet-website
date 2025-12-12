<script setup>
import navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import homepagebutton from '../../components/button/homepagebutton.vue';
import videobackgroundhomepage from '../../components/videobackground/productbackgroundvideo.vue'
import tagproduct from '../../components/tagproduct/tagproduct.vue';
import product1_footerlogomember from '../../components/footer/logomemberfooter/product1_footerlogomember.vue';
import hero_sectionproduct1 from './product_herosection/hero_sectionproduct1.vue';
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
  <navbar
    title="ຜະລິດຕະພັນ ແລະ ການບໍລິການ"
    :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຜະລິດຕະພັນ ແລະ ການບໍລິການ',
      'ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM'
    ]"
    background-image="/overlaynav/product/navigatorcontent-bg.png"
  />
  <div class="productdiscription">
      <hero_sectionproduct1/>
  </div>
     <div class="benetfix">
       <videobackgroundhomepage :src="heroVideo" poster="/images/tech-poster.jpg">
           <div class="benetfitcontainer">
               <div class="benetfitcontent">
                  <h1>ຜົນປະໂຫຍດທີ່ໄດ້ຮັບ</h1>
                  <p>ປະຢັດ​ເວລາ, ສະດວກ ໂດຍລູກຄ້າບໍ່ຕ້ອງລໍຖ້າການໃຊ້ບໍລິການ ຫຼື ຊອກຫາຕູ້​ເອທີ​ເອັມຂອງທະນາຄານຜູ້ອອກບັດ
                    ກໍ່ສາມາດ
                    ກວດຍອດເງິນຜ່ານຕູ້​ເອທີ​ເອັມຂອງບັນດາທະນາຄານທຸກລະກິດທີ່ເຊື່ອມຕໍ່ກັບລະບົບແລັບ.</p>
               </div>
               <div class="condition">
                        <h1>ເງື່ອນໄຂການໃຊ້ບໍລິການ</h1>
                  <p>ລູກຄ້າ​ທີ່ມີ​ບັດ​ເອທີເອັມຂອງ​ທະນາຄານ​ທີ່​ເປັນ​ສະມາຊິກ​ຂອງ ແລັບເນັດ, ໂດຍສາມາດສັງເກດໄດ້ຈາກ
                    ສັນຍາ​ລັກແລັບເນັດທີ່
                    ຕິດຕາມຕູ້ເອທີເອັມ
                    ກໍສາມາດໃຊ້ຮ່ວມກັນໄດ້. ເຊິ່ງການກວດຍອດເງິນຂ້າມຕູ້ເອທີເອັມນີ້ແມ່ນບໍ່ເສຍຄ່າທຳນຽມໃດໆທັງນັ້ນ.</p>
               </div>
           </div>
      </videobackgroundhomepage>
     </div>
<div class="footermemberproduct1">

<product1_footerlogomember :logos="memberLogos"/>
   </div>
  <secondfooter/>
</template>


<style scoped>

.footermemberproduct1{ 
   width: 100%;
  
   height: 100vh;


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
   height: 80vh;

}
.atmmockup img{
   width: 80%;
   position: relative;
   z-index: 1;
   left: -100px;
   bottom: -50px;
}
.description_right_container{
   width: 50%;
   height: 100%;
}
.topimg img {
      width: 30%;
   right: 40px;
   height:auto;
   object-fit: cover;
   border-radius: 10px;
   position: absolute;
   z-index: 0;

}
.description_left_container p{
   font-size: var(--fs-base);
}
.description_left_container h1{
   font-size:   var( --fs-xxxl);
   font-weight: bold;
   line-height: 1.2;
}
.description_left_container h3 {
   color: var(--color-second);
   font-weight: bold;
   font-size: var(--fs-md);
}
.description_right_container{

   width: 50%;
   height: 100%;
 
}
.description_left_container{
   width: 50%;
   display: flex;
   align-items: start;
   justify-content: space-evenly;
   flex-direction: column;
   
   height: 100%;

 }
.productdiscription{
   width: 100%;
   height: auto;
 
 
}
</style>