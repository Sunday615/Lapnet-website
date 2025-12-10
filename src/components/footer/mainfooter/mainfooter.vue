<script setup>
import footerinfocomponent from './footerinfocomponent.vue';
import dropdown_menu from './dropdown_menu.vue';
import menuresponsive from './menuresponsive.vue';
</script>

<template>
    <footer class="mainfootercontianer">
        <div class="infofooter">
            <div class="iteminfofooter logofooter">
                <img src="/logolapnet/logolapnet.PNG" alt="LAPNet Logo">
                <img src="/logolapnet/textlogowhite.PNG" alt="">
            </div>
            <div class="iteminfofooter callus ">
                <div class="iconinfofooter">
                    <i class="fa-solid fa-phone"></i>
                </div>
                <div class="description">
                    <p>021 417915</p>
                </div>
            </div>
            <div class="iteminfofooter email" >
                <div class="iconinfofooter">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="description">
                    <p>info@lapnet.com.la</p>
                </div>
            </div>
            <a href="https://maps.app.goo.gl/cGH9s9ugGzC2zeZF7" target="_blank">
            <div class="iteminfofooter location">
                <div class="iconinfofooter">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="description">
                    <p>
                        Kaysone Phomvihane Avenue, Vientiane, Laos</p>
                </div>
            </div>
            </a>
        </div>
        <div class="maincontentfooter ">
            <div class="adjustcontainer">
                <div class="mainfooterinfoitem box1desciption" style="grid-area: box1;">
                    <div class="titlemainfooter">
                        <h1>ກ່ຽວກັບບໍລິສັດ</h1>
                    </div>
                    <div class="desciptioninfofooter">
                        <p>ບ້ານໂພນສະອາດ, ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ</p>
                        <p>ເບີໂທ: 021 417915</p>
                        <p>ອີເມວ: info@lapnet.com.la</p>
                        <div class="buttonlink">
                            <a href="https://www.facebook.com/laonationalpaymentnetwork" target="_blank">
                                <i class="fa-brands fa-facebook"></i>Lao National Payment Network
                            </a>
                        </div>
                    </div>
                    <div class="facebookbtn">

                    </div>
                </div>
                <div class="mainfooterinfoitem box2desciption" style="grid-area: box2;">
                    <div class="titlemainfooter product_title">
                        <h1>ຜະລິດຕະພັນ ແລະ ການບໍລີການ</h1>
                    </div>
                    <div class="navigatorfooterbox">
                        <router-link to="/products_service/atm-inquiry">
                        <div class="itemnavigatorlink"> <i class="fa-solid fa-chevron-right"></i>
                            <p>ກວດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                        </div>
                        </router-link>
                        <router-link to="/products_service/atm-cash-withdraw">
                        <div class="itemnavigatorlink">
                            <i class="fa-solid fa-chevron-right"></i>
                            <p>ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                        </div>
                        </router-link>
                        <router-link to="/products_service/atm-transfer">
                        <div class="itemnavigatorlink">
                            <i class="fa-solid fa-chevron-right"></i>
                            <p>ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM</p>
                        </div>
                        </router-link>
                        <router-link to="/products_service/mobile-transfer">
                        <div class="itemnavigatorlink">
                            <i class="fa-solid fa-chevron-right"></i>
                            <p>ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື</p>
                        </div>
                        </router-link>
                        <router-link to="/products_service/qr-payment">
                        <div class="itemnavigatorlink">
                            <i class="fa-solid fa-chevron-right"></i>
                            <p>ການຊຳລະເງິນຂ້າມທະນາຄານຜ່ານ QR</p>
                        </div>
                        </router-link>
                        <router-link to="/products_service/crossborder">
                        <div class="itemnavigatorlink" style="border: none;">
                            <i class="fa-solid fa-chevron-right"></i>
                            <p>ຊຳລະເງິນຂ້າມແດນຜ່ານ QR</p>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="mainfooterinfoitem" style="grid-area: box3;">

                    <div class="titlemainfooter">
                        <h1>ເມນູ</h1>
                    </div>
                    <div class="navigatorfooterbox">
                        <!-- Responsive menus -->
                        <menuresponsive class="menu-responsive" />
                        <dropdown_menu class="dropdown-desktop" />
                    </div>
                </div>
                <div class="copyrright" style="grid-area: box4;">

                    <div class="container_copyright">

                        <p>Copright © 2020 LAPNet Co., Ltd.</p>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.itemnavigatorlink:hover {
    background: rgba(255, 255, 255, 0.08);
    transition: 0.5s;

}

.itemnavigatorlink p {
    font-size: 1.2rem;
    padding-left: 20px;
}

.itemnavigatorlink i {
    font-size: 2.5rem;
}


.itemnavigatorlink {

    border-bottom: 1px solid rgba(221, 221, 221, 0.754);
    width: 80%;
    color: #fff;
    height: 100%;
    align-items: center;
    cursor: pointer;


    display: flex;
}

.navigatorfooterbox {

    display: grid;

}

.container_copyright p {
    font-size: 1.1rem;
    margin-top: 30px;
    color: #fff;

}

.container_copyright {
    width: 100%;
    height: 50%;

    display: flex;

    justify-content: center;


    border-top: 1px solid #ffffff43;
}

.itemproduct h1 {
    font-size: 2.5rem;
    color: #fff;
}

.navigatorfooterbox {
    padding-top: 30px;
    display: grid;

    grid-template-rows: repeat(6, 90px);

}


.buttonlink a i {
    font-size: 3rem;
}

.buttonlink {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 80%;
    height: 90px;

}

.desciptioninfofooter a {
    font-size: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 65%;
    border: 1px solid #fff;

    color: white;

    border-radius: 999px;
}

.desciptioninfofooter p {
    font-size: 1.2rem;
    color: #fff;
    padding-bottom: 20px;
}

.desciptioninfofooter {
    padding-top: 70px;
}

.titlemainfooter h1 {

    font-size: clamp(30px, 10vw, 2rem);
    color: #fff;
    font-weight: bold;
}

.box1desciption {

    display: grid;
    grid-template-rows: auto 1fr;

}

.adjustcontainer {
    width: 90%;
    height: 90%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3rem;
    grid-template-rows: 5fr 1fr;

    grid-template-areas:
        "box1 box2 box3"
        "box4 box4 box4"
    ;
    grid-auto-columns: 30%;

    grid-auto-rows: 30%;
}

.copyrright {

    display: flex;
    justify-content: center;
    align-items: end;
}



.description p {
    padding-left: 10px;
    font-size: 1.2rem;
    color: #fff;
}

.iconinfofooter i {
    box-shadow: rgba(0, 0, 0, 0.4) -5px 5px, rgba(32, 14, 26, 0.3) -10px 10px, rgba(38, 21, 32, 0.2) -15px 15px, rgba(27, 12, 22, 0.1) -20px 20px, rgba(13, 6, 10, 0.05) -25px 25px;
    padding: 20px 40px;
    border-radius: 5px;

    font-size: 2.5rem;
    color: #433bff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
}

.maincontentfooter {
    width: 100%;
    height: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/footer/footerbg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}

.logofooter img {
    width: 120px;
    height: auto;

}

.logofooter {
    width: 100%;
    height: 20vh;
    justify-content: center;
    display: flex;
    align-items: center;



}

.iteminfofooter {

    width: 90%;
    height: 70%;
    display: flex;
    align-items: center;



}

.infofooter {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
    height: 100%;
    /* fill footer */
    background-image: url(/footer/footer-info.png);
    background-repeat: no-repeat;
    background-position: center;
    /* key line: stretch image to follow container size */
    background-size: 100% 100%;
}

.mainfootercontianer {
    width: 100%;
    height: 18vh;
}

/* ---- MENU RESPONSIVE / DROPDOWN TOGGLE ---- */
/* Default: desktop view (>706px) */
.menu-responsive {
    display: none;
}

.dropdown-desktop {
    display: block;
}

@media (max-width:866px) {
    .box1desciption {
        display: none;
    }

    .adjustcontainer {
        grid-template-columns: 2fr 1fr;
        grid-column-gap: 3rem;
        grid-template-rows: 5fr 1fr;
        grid-template-areas:
            " box2 box3"
            " box4 box4"
        ;
    }

}

@media (max-width: 1320px) {
    .infofooter {
        grid-template-columns: 2fr 1fr 1fr;
    }

    .location {
        display: none;
    }

}

@media (max-width: 939px) {
    .infofooter {
        grid-template-columns: 2fr 1fr;

    }


    .callus {
        display: none;
    }

    .logofooter {
        justify-content: start;
    }

}

@media (max-width: 706px) {
    .adjustcontainer {
        grid-template-columns: 1fr;
        grid-template-rows: 5fr 1fr;
        grid-auto-columns: 90%;
        grid-template-areas:
            "box3 box3 "
            "box4 box4"
        ;
        overflow: hidden;

    }

    .container_copyright {
        display: none;
    }

    /* On small screens (≤706px): show menuresponsive, hide dropdown_menu */
    .menu-responsive {
        display: block;
    }

    .dropdown-desktop {
        display: none;
    }

    .logofooter img {
        width: 90px;
        height: auto;

    }

    @media (max-width: 573px) {
        .logofooter img {
            width: 70px;
            height: auto;

        }
    }
 
}
</style>
