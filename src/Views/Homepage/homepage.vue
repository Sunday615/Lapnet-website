<script setup>
import { ref } from 'vue'  // ✅ add this

import topnavbar from '../../components/topnavbar/topnavbar.vue';
import aboutusdropdown from '../../components/dropdown-homepage/aboutusdropdown.vue';
import memberdropdown from '../../components/dropdown-homepage/memberdropdown.vue';
import productDropdown from '../../components/dropdown-homepage/product-dropdown.vue';
import search from '../../components/search/search.vue';
import homepagebutton from '../../components/button/homepagebutton.vue';
import sidebar from '../../components/sidebar/sidebar.vue';
import videobackgroundhomepage from '../../components/videobackground/homepagecrossbordervideo.vue'
import TechPhoneMockup from '../../components/mobile/homepage_crossborder_mobilemockup.vue';
import allproductswiper from '../../components/swiper/homepageswiper/allproductswiper.vue';
import homepage_mobiletransfer_cardview from '../../components/mobile/homepage_mobiletransfer_cardview.vue';
import techbox from '../../components/button/techbox.vue';
import allmemberscrolling from '../../components/swiper/memberscrolling/allmemberscrolling.vue';
import bloghomepage from '../../components/blog/hompage/bloghomepage.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import secondfooter from '../../components/footer/mainfooter/secondfooter.vue';




const heroVideo = '/videos/homepagecrossborder.mp4'
const mobile_transfer = '/videos/mobiletransfer.mp4'
const sidebarRef = ref(null)

const mockupPath = ref('/mobilemockup/homepagecrossborder/crossborder.png')

const openSidebarFromNavbar = () => {
    if (sidebarRef.value && sidebarRef.value.openSidebar) {
        sidebarRef.value.openSidebar()
    }
}
</script>

<template>

    <topnavbar />
    <div class="homepage-laddingpagecontainer">
        <div class="mainhomepagecontainer">
            <div class="item navbar">
                <div class="homepagelogolapnet">
                    <img src="/logolapnet/logolapnet.PNG" alt="">
                </div>
                <sidebar class="sidebar-lapnet" ref="sidebarRef" />


                <navbar class="navbar-list">
                    <div class="hamberger" @click="openSidebarFromNavbar">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <ul>
                        <li>
                            <productDropdown />
                        </li>
                        <li>
                            <memberdropdown />
                        </li>
                        <router-link to="/bloggrid"> <li style="padding-right: 20px;">ຂ່າວ ແລະ ກີດຈະກຳ</li></router-link>
                       
                        <router-link to="/joinus">
                            <li>ຮ່ວມງານກັບເຮົາ</li>
                        </router-link>
                        <li>
                            <aboutusdropdown />
                        </li>
                        <router-link to="/contactus">
                        <li>ຕິດຕໍ່ພວກເຮົາ</li></router-link>
                    </ul>
                </navbar>

                <div class="search">
                    <a href="#">EN /</a>

                    <a href="#" style="margin-right: 20px;"> LA </a>
                    <search class="searchbtn" />
                </div>

            </div>
        </div>
        <div class="item homecontainer">
            <div class="homepagemaintitle">
                <div class="titleproduct5">
                    <h1>ການຊຳລະເງິນຂ້າມ<br>ທະນາຄານຜ່ານ QR</h1>
                </div>
                <div class="descriptionproduct5">
                    <p>ການຊຳລະຂ້າມທະນາຄານຜ່ານ LAPNet QRPay ໂດຍນຳໃຊ້ລະບົບ LMPS ໃນການເຊື່ອມໂຍງຜ່ານApplications
                        ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດ LAPNet ໃຫ້ສາມາດນຳໃຊ້ຟັງຊັ້ນການດຳເນີນທຸລະກຳຊຳລະຜ່ານ QR
                        ຂອງທະນາຄານອື່ນໄດ.
                    </p>
                </div>
                <div class="buttonhomepage">
                    <router-link to="/products_service/qr-payment">
                    <homepagebutton label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" />
                    </router-link>
                </div>
            </div>


        </div>
    </div>
    <div class="visioncontainer">
        <div class="contentvision">
            <div class="itemvisionimg">
                <img src="/homepage/newmission-2.png" alt="">
            </div>
            <div class="itemvision-title">
                <h1>
                    ວິໄສທັດຂອງພວກເຮົາ
                </h1>
                <div class="visioncontentbox1">
                    <div class="number">
                        <h2>01</h2>
                    </div>
                    <div class="description-vision">
                        <p>ພັດທະນາລະບົບການຊໍາລະທຸລະກຳຍ່ອຍໃຫ້ເປັນສູນກາງການຊໍາລະຂອງບັນດາຜູ້ໃຫ້ບໍລິການ
                            ຊໍາລະ ທັງພາຍໃນ ແລະ ສາກົນ, ແນໃສ່ໃຫ້ປະຊາຊົນລາງໄດ້ໃຊ້ບໍລິການຊໍາລະທີ່ສະດວກວ່ອງໄວ,
                            ທັນສະໄໝ, ປອດໄພ, ຕົ້ນທືນຕໍາ ແລະ ເພື່ອໃຫ້ບໍລິສັດການເປັນໂຄງຮ່າງພື້ນຖານໃຫ້ແກ່ການ
                            ຊໍາລະໃນ ສປປ ລາວ.</p>
                    </div>
                </div>
                <div class="visioncontentbox2">
                    <div class="number">
                        <h2>02</h2>
                    </div>
                    <div class="description-vision">
                        <p>ພັດທະນາລະບົບການຊໍາລະໃຫ້ມີຄວາມຫຼາກຫຼາຍ, ທັນສະໄໝ, ຕອບຮັບໄດ້ທຸກຊ່ອງທາງ
                            ການຊໍາລະທີ່ເກີດຂື້ນ, ເຕົ້າໂຮມເອົາບັນດາທະນາຄານທຸລະກິດ, ສະຖາບັນການເງິນ ແລະ ບໍລິສັດ
                            Fintech ທີ່ເປັນຜູ້ໃຫ້ບໍລິການຊໍາລະ ໃຫ້ເຂົ້າມາເປັນສະມາຊີກຂອງບໍລິສັດ ເພື່ອພ້ອມກັນໃຫ້
                            ບໍລິການລະບົບການຊໍາລະແກ່ສັງຄົມ, ຫັນເອົາການເຊື່ອມຕໍ່ສາກົນທີ່ມີລັກສະນະກະແຈກກະຈາຍ
                            ລວມສູນເຂົ້າມາເຊື່ອມຕໍ່ເປັນຮູບແບບລະບົບປະຕູດຽວເພື່ອຫຼຸດຜ່ອນຕົ້ນທືນລວມຂອງທົ່ວ
                            ລະບົບ, ເສີມຂະຫຍາຍຄວາມຮູ້-ເຂົ້າໃຈໃຫ້ແກ່ມວນຊົນໄດ້ຮັບຮູ້ເຖິງຄວາມສຳຄັນ ແລະ ປະໂຫຍກ
                            ຂອງການນຳໃຊ້ລະບົບການຊໍາລະເອເລັກໂຕຣນິກຢ່າງຖ່ອງແທ້ ເພື່ອເຮັດໃຫ້ມວນຊົນໄດ້ນຳໃຊ້ລະ
                            ບົບການຊໍາລະຢ່າງຖືກຕ້ອງ ແລະ ປອດໄພ ເປັນການເສີມສ້າງຄວາມໝັ້ນໃຈໃຫ້ແກ່ມວນຊົນ.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="videocrossborder">
        <videobackgroundhomepage :src="heroVideo" poster="/images/tech-poster.jpg">
            <div class="crossborderhomepage">
                <div class="titlecrossborder">
                    <div class="titlecrossborderproduct">
                        <h1>ການຊຳລະເງິນຂ້າມແດນ<br>ໃນຮູບ QR CODE <br>ລະຫວ່າງປະເທດ</h1>
                    </div>
                    <div class="countrycrossborder">
                        <techbox label="Cambodia" sub-label="Bakong" country-code="kh" />
                        <techbox label="Thailand" sub-label="Thai QR Payment" country-code="th" />
                        <techbox label="Vietnam" sub-label="NAPAS" country-code="vn" />
                        <techbox label="China" sub-label="Unoipay" country-code="cn" />

                    </div>
                    <div class="buttoncrossborder">
                        <router-link to="/products_service/crossborder">
                        <homepagebutton label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" />
                        </router-link>
                    </div>
                </div>

                <div class="imagecrossborder">
                    <TechPhoneMockup image-src="/mobilemockup/homepagecrossborder/crossborder.png" />
                </div>
            </div>
        </videobackgroundhomepage>
    </div>
    <div class="allproductswiper">
        <allproductswiper />
    </div>
    <div class="mobile_transfer_homepage">
        <videobackgroundhomepage :src="mobile_transfer" poster="/images/tech-poster.jpg">
            <div class="mobiletransfercontainer">
                <div class="mobile_transfer_mockup">
                    <homepage_mobiletransfer_cardview
                        image-src="/mobilemockup/homepagemobiletransfer/mobile_tranafer.jpeg" />
                </div>
                <div class="mobiletransfer_title">
                    <div class="subtitle">
                        <h1>ໂອນເງິນຂ້າມທະນາຄານ<br>ເທິງມືຖືຜ່ານແອັບ</h1>
                    </div>
                    <div class="subtext">
                        <p>ການໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື (Fund Transfer via Mobile Application) ໂດຍນຳໃຊ້ລະບົບ LMPS
                            ໃນການເຊື່ອມໂຍງຜ່ານ
                            Applications ຂອງແຕ່ລະທະນາຄານທີ່ເປັນສະມາຊິກຂອງບໍລິສັດລາວ ເນເຊີນນໍເພເມັ້ນ ເນັດເວີກ
                            ໃຫ້ສາມາດໃຊ້ຟັງຊັ່ນການດຳເນີນທຸລະກຳໂອນເງິນຂ້າມທະນາຄານໄດ້.</p>
                    </div>
                    <div class="subbutton">
                        <router-link to="/products_service/mobile-transfer">
                        <homepagebutton label="ຜະລິດຕະພັນ ແລະ ການບໍລິການ" />
                        </router-link>
                    </div>

                </div>
            </div>


        </videobackgroundhomepage>
    </div>
    <div class="allmemberscrolling">
        <allmemberscrolling />
    </div>
    <div class="blogcontainer">
        <bloghomepage />
    </div>

    <secondfooter style="margin-top: 100px;" />

</template>


<style scoped>
.blogcontainer {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;

}

.allmemberscrolling {
    width: 100%;
    height: 60vh;


}

.countrycrossborder {
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}

.subtext {
    display: grid;
    align-items: center;
}

.subtext p {
    font-size: 1.2rem;
    color: #fff
}

.subtitle h1 {
    color: #fff;
    line-height: 1.4;
    font-weight: 700;
    font-size: clamp(2rem, 5.5vw, 5rem);
}

.mobiletransfer_title {
    display: grid;

    grid-template-rows: auto 1fr 1fr;
}

.mobile_transfer_mockup img {
    width: 100%;
    height: auto;
}

.mobiletransfer_title {
    width: 60%;
    height: 100%;

}

.mobile_transfer_mockup {
    width: 50%;
    height: 100%;

}

.mobiletransfercontainer {
    width: 90%;
    height: 90%;
    display: flex;

}

.mobile_transfer_homepage {
    width: 100%;
    height: 90vh;

}

.allproductswiper {
    width: 100%;
    height: 85vh;

}

.buttoncrossborder {
    width: 100%;
    height: auto;

}

.titlecrossborderproduct {
    width: 100%;
    height: 65%;


}

.titlecrossborder h1 {
    font-size: 5.5rem;
    color: #fff;
    line-height: 1.3;
    font-weight: 700;
}

.imagecrossborder {
    width: 40%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.titlecrossborder {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

}

.crossborderhomepage {
    width: 100%;
    height: 100%;
    display: flex;


}

.videocrossborder {
    width: 100%;
    height: 80vh;

}

.hamberger i {
    font-size: 3.5rem;
    color: #fff;
}

.description-vision p {
    font-size: 1rem;
}

.description-vision {
    width: 83%;
    height: 100%;

}

.number h2 {
    text-align: center;
    font-weight: 700;
    padding: 25px 0px;
    font-size: 2rem;
    color: #fff;
    background: #000080;
    background: linear-gradient(0deg, rgba(0, 0, 128, 1) 0%, rgba(0, 15, 219, 1) 100%);
}

.number {
    width: 13%;
    height: 100%;

}

.visioncontentbox2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 40%;

}

.visioncontentbox1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 30%;


}

.itemvision-title h1 {
    font-size: 4rem;
    font-weight: 700;
    color: #0D02D4;
    background-image: linear-gradient(45deg, #372cff, #00beed 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;

}

.itemvision-title {
    width: 60%;
    height: 85%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;


}

.itemvisionimg img {
    width: 90%;
    height: auto;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.itemvisionimg {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

}

.contentvision {
    height: 90%;
    width: 100%;
    display: flex;
    align-items: center;


}

.visioncontainer {
    width: 90%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    height: 90vh;

}

.buttonhomepage {
    width: 100%;
    height: 20%;

}

.descriptionproduct5 p {
    font-size: var(--fs-base);
    color: #fff;

}

.descriptionproduct5 {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;


}

.titleproduct5 h1 {
    font-size: var(--fs-heroxl);
    font-weight: 700;
    color: #fff;
    font-family: "Noto Sans Lao", sans-serif;
}

.titleproduct5 {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    line-height: 1.3;



}

.homepagemaintitle {
    width: 70%;
    height: 80%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-direction: column;


}

.homecontainer {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;



}

.search {
    display: flex;
    justify-content: center;
    align-items: center;

}

.search a {
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
    font-family: "Inter";


}

.navbar-list ul li {
    font-size: 1.2rem;
    font-weight: 500;
}

.navbar-list ul {
    list-style: none;
    font-family: "Noto Sans Lao", sans-serif;
    display: flex;
    padding-left: 15px;
    color: #fff;
    width: 93%;
    align-items: center;
    justify-content: space-between;


}

.homepagelogolapnet img {
    width: 90%;
    height: auto;
}

.mainhomepagecontainer {
    width: 90%;

    margin: 0 auto;
}

.navbar {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 7% 5fr 1fr;
    align-items: center;

}

.homepage-laddingpagecontainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 8fr;
    height: 100vh;

    gap: 0.5px;
    width: 100%;
    background-image: url(/homepage/mainhomepage.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}



@media (min-width:1100px) {

    .hamberger i {
        display: none;
    }

    .sidebar-lapnet {
        display: none;
    }
}

@media (min-width:200px) {
    .sidebar {
        display: none;
    }
}

@media (max-width : 1750px) {
    .navbar {
        grid-template-columns: 90px 8fr 1fr;
    }
}

@media (max-width : 1350px) {
    .navbar-list ul li {
        font-size: 1rem;
    }

    .search a {
        font-size: 1rem;
    }
}

@media (max-width : 1276px) {
    .titleproduct5 h1 {
        font-size: 5.5rem;
    }

    .titlecrossborderproduct h1 {
        font-size: 4.5rem;
    }
}

@media (max-width : 1065px) {

    .titlecrossborderproduct h1 {
        font-size: 3.5rem;
    }
}


@media (max-width : 1579px) {
    .search a {
        display: none;
    }

}

@media (max-width : 1130px) {
    .titleproduct5 h1 {
        font-size: 4.5rem;
    }

    .titlecrossborder {

        height: 90%;

    }

    .crossborderhomepage {
        align-items: center;
    }


    .titleproduct5 {
        align-items: end;
    }

}

@media (max-width: 1025px) {
    .itemvision-title h1 {
        font-size: 3.1rem;
    }

}

@media (max-width: 897px) {
    .description-vision p {
        font-size: 0.9rem;
    }

    .imagecrossborder {
        display: none;
    }

    .titlecrossborder {
        width: 100%;
        height: 70%;
    }

    .titlecrossborderproduct h1 {
        font-size: 3.1rem;
    }

    .crossborderhomepage {
        align-items: center;
    }




}

@media (max-width: 778px) {
    .subtitle h1 {
        font-size: 3.5rem;
    }

    .mobiletransfer_title {
        width: 100%;
    }

    .mobile_transfer_mockup {
        display: none;
    }

    .itemvisionimg {
        display: none;
    }

    .description-vision p {
        font-size: 1rem;
    }

    .itemvision-title {
        width: 100%;
    }

    .itemvision-title h1 {
        font-size: 3.5rem;
    }
}

@media (max-width : 1100px) {

    .navbar-list ul {
        display: none;

    }

    .navbar-list {
        display: flex;
        justify-content: end;
    }

    .search a {
        display: none;
    }

}

@media (max-width : 1010px) {

    .navbar-list ul {
        display: none;
    }


}

@media (max-width : 920px) {
    .titleproduct5 h1 {
        font-size: 4rem;
    }
}

@media (max-width : 990px) {
    .search a {
        display: none;
    }
}

@media (max-width : 760px) {

    .homecontainer {
        align-items: start;
    }

    .titleproduct5 h1 {
        font-size: 3.5rem;
    }

    .homepage-laddingpagecontainer {
        background-image: url(/homepage/mobileside.webp);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left;



    }
}


@media (max-width : 826px) {
    .descriptionproduct5 p {
        font-size: 1.1rem;
    }


}

@media (max-width : 664px) {
    .titleproduct5 h1 {
        font-size: 3rem;
        text-align: start;
    }

}

@media (max-width : 617px) {
    .titleproduct5 h1 {
        font-size: 2.5rem;

    }

}

@media (max-width: 502px) {
    .titleproduct5 h1 {
        font-size: 2rem;
        text-align: center;
    }

}

@media (max-width: 462px) {
    .titlecrossborderproduct h1 {
        font-size: 2.5rem;
    }

    .countrycrossborder {
        margin-bottom: 100px;
    }

}

@media (max-width: 447px) {

    .countrycrossborder {
        margin-bottom: 100px;
    }

}


@media (max-width : 375px) {
    .titleproduct5 h1 {
        font-size: 3rem;
    }
}
</style>