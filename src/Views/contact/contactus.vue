<script setup>
import main_navbar from '../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../components/footer/mainfooter/mainfooter.vue';
import secondfooter from '../../components/footer/mainfooter/secondfooter.vue';
const openMap = () => {
    const mapUrl = 'https://maps.app.goo.gl/TzSSbm5NQWCWNsrx7'
    window.open(mapUrl, '_blank')
}
</script>

<template>
   
     <main_navbar title="ຕິດຕໍ່ພວກເຮົາ" :breadcrumb="[
      'ໜ້າຫຼັກ',
      'ຕິດຕໍ່ພວກເຮົາ',
  
   ]" background-image="/contact/contactnav.webp" />

   

    <div class="containercontact">
        <div class="boxcontainer">
            <div data-aos="fade-right" data-aos-duration="1300" class="col-left">
                <div class="leftboxcontainer">
                    <div class="logo-title">
                        <img src="/logolapnet/fullcircle.png" alt="LAPNet Logo" />
                        <p>Contact Us</p>
                    </div>

                    <div class="headercontact">
                        <h1>
                            Anywhere Anytime <br />
                            Any Payment Chanel
                        </h1>
                    </div>

                    <div class="infoboxcontainer">
                        <div data-aos="fade-down" data-aos-duration="1200" data-aos-delay="500" data-aos-once="true">
                            <div class="box box1" @click="openMap">
                                <div class="flexboxcontainer">
                                    <div class="icon">
                                        <i class="fa-solid fa-location-dot" />
                                    </div>
                                    <div class="infotitle">
                                        <h2>Our Office Address</h2>
                                        <p>XJHH+FFM, Vientiane</p>
                                        <p>LAOS</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="1300" data-aos-delay="500" data-aos-once="true">
                            <div class="box box2">
                                <div class="flexboxcontainer">
                                    <div class="icon">
                                        <i class="fa-solid fa-phone" />
                                    </div>
                                    <div class="infotitle">
                                        <h2>Call Us</h2>
                                        <p>021 417915</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="1300" data-aos-delay="500" data-aos-once="true">
                            <div class="box box3">
                                <div class="flexboxcontainer">
                                    <div id="emailicon" class="icon">
                                        <i class="fa-solid fa-inbox" />
                                    </div>
                                    <div class="infotitle">
                                        <h2>Our Email</h2>
                                        <p>info@lapnet.com.la</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1300" class="col-right">
                <div class="rightboxcontainer">
                    <div class="boxsendemail">
                        <div class="titlesendmail">
                            <h1>Make an Appointment</h1>
                            <p>Feel free to contact with us, we don't spam your email</p>
                        </div>

                        <div class="boxinputname">
                            <input type="text" placeholder="Full Name *" />
                        </div>

                        <div class="boxinputemail">
                            <input type="email" placeholder="Email Here *" />
                        </div>

                        <div class="boxinputmessage">
                            <textarea placeholder="Your Message *"></textarea>
                        </div>

                        <div class="btnsubmit">
                            <button type="button">
                                Submit Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="maps">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.0006600873685!2d102.62610377608371!3d17.97870628301288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312467f0b486944f%3A0x84af2329498cb982!2sLao%20National%20Payment%20Network%20.%2C%20CO!5e0!3m2!1sth!2sla!4v1760583737341!5m2!1sth!2sla"
            width="100%" height="100%" style="border: 0" allowfullscreen loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" />
    </div>

    <secondfooter/>
</template>

<style scoped>
/* Hero / navigator section */
.navigatorcontact {
    width: 100%;
    min-height: 320px;
    height: auto;
    padding: 40px 0;
    background-image: linear-gradient(135deg,
            rgba(5, 5, 70, 0.85),
            rgba(0, 0, 0, 0.6)),
        url(../../assets/Contact/contactnav.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
}

.titlenavigator {
    width: min(1100px, 100% - 40px);
    margin: 0 auto;
    text-align: right;
    color: #fff;
}

.bigheader {
    width: 100%;
}

.bigheader h1 {
    padding-top: 10px;
    font-size: clamp(42px, 6vw, 110px);
    font-weight: 900;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    letter-spacing: 0.08em;
}

.titleinfowebsite {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-top: 10px;
}

.leftbox {
    flex: 1 1 auto;
}

.leftbox p {
    font-size: clamp(16px, 2.1vw, 23px);
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    color: #fff;
    font-weight: 300;
    margin-top: 20px;
    text-align: left;
}

.rightbox {
    flex: 0 0 30%;
    border-bottom: 2px solid #fff;
    height: 36px;
}

.descriptionlapnet {
    width: 100%;
    margin-top: 20px;
}

.descriptionlapnet p {
    font-size: clamp(22px, 3.5vw, 40px);
    font-weight: 500;
    line-height: 1.3;
}

/* Main container */
.containercontact {
    width: min(1200px, 100% - 32px);
    margin: 0 auto;
    padding: 60px 0 40px;
}

.boxcontainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    border-radius: 40px;
    padding: 40px 24px;
    gap: 40px;
    background: #ffffff;
    box-shadow:
        rgba(0, 0, 0, 0.08) 0 14px 45px,
        rgba(0, 0, 0, 0.08) 0 10px 18px;
    position: relative;
    overflow: hidden;
}

/* subtle gradient overlay behind content */
.boxcontainer::before {
    content: '';
    position: absolute;
    inset: -30%;
    background: radial-gradient(circle at top left, #0d00ff20, transparent 60%);
    z-index: -1;
}

.col-left,
.col-right {
    flex: 1 1 320px;
    display: flex;
    justify-content: center;
}

/* Left content */
.leftboxcontainer {
    width: 100%;
    max-width: 600px;
    padding: 10px;
}

.logo-title {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
}

.logo-title img {
    width: 50px;
    height: 50px;
}

.logo-title p {
    font-size: 24px;
    padding-left: 10px;
    font-weight: 600;
}

.headercontact {
    width: 100%;
    margin-top: 24px;
}

.headercontact h1 {
    font-size: clamp(28px, 3.6vw, 40px);
    font-weight: 800;
    line-height: 1.25;
}

.infoboxcontainer {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

/* Cards */
.box {
    width: 100%;
    border-radius: 18px;
    display: flex;
    background-color: #fff;
    cursor: pointer;
    box-shadow: rgba(15, 23, 42, 0.06) 0 15px 30px;
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        background 0.25s ease;
    overflow: hidden;
}

.box:hover {
    transform: translateY(-6px);
    box-shadow: rgba(15, 23, 42, 0.12) 0 22px 45px;
    background: linear-gradient(135deg, #f7f7ff, #ffffff);
}

.flexboxcontainer {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 18px 22px;
}

.icon {
    flex-shrink: 0;
}

.icon i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #ffffff;
    background: linear-gradient(135deg, #453bff, #0d00ff);
    padding: 20px 38px;
    border-radius: 14px;
    box-shadow:
        rgba(20, 0, 235, 0.35) 0 10px 20px,
        rgba(18, 0, 219, 0.15) 0 5px 10px;
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.box:hover .icon i {
    transform: translateY(-3px) scale(1.02);
    box-shadow:
        rgba(20, 0, 235, 0.45) 0 16px 30px,
        rgba(18, 0, 219, 0.25) 0 8px 16px;
}

.infotitle {
    width: 100%;
}

.infotitle h2 {
    font-size: 20px;
    font-weight: 700;
}

.infotitle p {
    font-size: 16px;
    line-height: 1.3;
    margin-top: 4px;
}

/* Right form */
.rightboxcontainer {
    width: 100%;
    max-width: 520px;
}

.boxsendemail {
    width: 100%;
    background: linear-gradient(145deg, #0d00ff, #02006d);
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    padding-bottom: 40px;
    position: relative;
    overflow: hidden;
}

/* Glow decoration */
.boxsendemail::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, #ffffff30, transparent 70%);
    top: -40px;
    right: -80px;
    opacity: 0.7;
    pointer-events: none;
}

.titlesendmail {
    width: 100%;
    padding: 40px 40px 10px;
}

.titlesendmail h1 {
    font-size: clamp(26px, 3vw, 32px);
    color: #fff;
}

.titlesendmail p {
    font-size: 16px;
    color: #ececff;
    margin-top: 6px;
}

.boxinputname,
.boxinputemail,
.boxinputmessage,
.btnsubmit {
    width: 100%;
    padding-inline: 40px;
    margin-top: 20px;
}

.boxinputname input,
.boxinputemail input,
.boxinputmessage textarea {
    width: 100%;
    background-color: #fff;
    border-radius: 16px 0 16px 0;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 16px 18px;
    font-family: inherit;
    box-shadow:
        rgba(15, 23, 42, 0.15) 0 10px 22px,
        rgba(15, 23, 42, 0.05) 0 4px 6px;
    transition:
        box-shadow 0.2s ease,
        transform 0.15s ease;
}

.boxinputname input::placeholder,
.boxinputemail input::placeholder,
.boxinputmessage textarea::placeholder {
    font-size: 16px;
    color: #9ca3af;
}

.boxinputmessage textarea {
    min-height: 160px;
    resize: vertical;
}

.boxinputname input:focus,
.boxinputemail input:focus,
.boxinputmessage textarea:focus {
    box-shadow:
        rgba(129, 140, 248, 0.7) 0 0 0 1px,
        rgba(79, 70, 229, 0.45) 0 10px 22px;
    transform: translateY(-1px);
}

/* Button */
.btnsubmit {
    margin-bottom: 20px;
}

.btnsubmit button {
    width: 100%;
    height: 56px;
    background: linear-gradient(135deg, #ffffff, #e0e7ff);
    color: #02006d;
    font-size: 18px;
    font-weight: 600;
    border-radius: 18px 0 18px 0;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    box-shadow:
        rgba(15, 23, 42, 0.15) 0 14px 28px,
        rgba(15, 23, 42, 0.06) 0 10px 10px;
    transition:
        transform 0.18s ease,
        box-shadow 0.18s ease,
        background 0.18s ease;
}

.btnsubmit button::after {
    content: '↗';
    font-size: 18px;
    transform: translateY(1px);
}

.btnsubmit button:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
    box-shadow:
        rgba(59, 130, 246, 0.45) 0 18px 40px,
        rgba(37, 99, 235, 0.2) 0 10px 18px;
}

.btnsubmit button:active {
    transform: translateY(0);
    box-shadow:
        rgba(15, 23, 42, 0.2) 0 8px 16px,
        rgba(15, 23, 42, 0.1) 0 4px 6px;
}

/* Map */
.maps {
    margin-top: 60px;
    width: 100%;
    height: 560px;
    overflow: hidden;
    border-radius: 26px;
    box-shadow:
        rgba(15, 23, 42, 0.12) 0 18px 40px,
        rgba(15, 23, 42, 0.08) 0 10px 18px;
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.maps:hover {
    transform: translateY(-4px);
    box-shadow:
        rgba(15, 23, 42, 0.2) 0 22px 55px,
        rgba(15, 23, 42, 0.12) 0 12px 22px;
}

/* Responsive breakpoints */
@media (max-width: 1024px) {
    .boxcontainer {
        padding: 32px 20px;
        border-radius: 30px;
    }

    .descriptionlapnet p {
        text-align: right;
    }
}

@media (max-width: 768px) {
    .navigatorcontact {
        text-align: left;
        padding: 30px 0;
    }

    .titlenavigator {
        text-align: left;
    }

    .titleinfowebsite {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .rightbox {
        width: 60%;
    }

    .containercontact {
        padding-top: 40px;
    }

    .boxcontainer {
        padding: 28px 18px;
        border-radius: 24px;
    }

    .logo-title p {
        font-size: 20px;
    }

    .flexboxcontainer {
        align-items: flex-start;
    }

    .icon i {
        padding: 16px 32px;
    }

    .titlesendmail {
        padding-inline: 24px;
    }

    .boxinputname,
    .boxinputemail,
    .boxinputmessage,
    .btnsubmit {
        padding-inline: 24px;
    }

    .boxsendemail {
        border-top-left-radius: 32px;
        border-bottom-right-radius: 32px;
    }

    .maps {
        margin-top: 40px;
        height: 420px;
        border-radius: 20px;
    }
}

@media (max-width: 480px) {
    .navigatorcontact {
        min-height: 260px;
    }

    .descriptionlapnet p {
        font-size: 20px;
    }

    .flexboxcontainer {
        flex-direction: row;
        gap: 12px;
    }

    .icon i {
        font-size: 26px;
             padding: 16px 32px;
    }

    .infotitle h2 {
        font-size: 18px;
    }

    .infotitle p {
        font-size: 14px;
    }

    .btnsubmit button {
        height: 52px;
        font-size: 16px;
    }
}
</style>
