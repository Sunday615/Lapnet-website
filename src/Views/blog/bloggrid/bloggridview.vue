<script setup>

import main_navbar from '../../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';
import bloggridsection from './bloggridsection.vue';
</script>
<template>

    <main_navbar title="ຂ່າວສານ ແລະ ກິດຈະກຳ" :breadcrumb="[
        'ໜ້າຫຼັກ',
        'ຂ່າວສານ ແລະ ກິດຈະກຳ',

    ]" background-image="/blog/bgnewsgrid.png" />
    <div class="boxmargin" style="width: 100%; height:10vh;"></div>
    <div class="titleblog">
        <h1>ຂ່າວສານ ແລະ ກິດຈະກຳ</h1>
    </div>
    <bloggridsection />
    <div class="boxmargin" style="width: 100%; height:10vh; "></div>
    <mainfooter />
</template>


<style scoped>
.titleblog h1 {
    text-align: center;
    font-size: var(--fs-hero);
    font-weight: bold;
    background: #5BBDFF;
    background: linear-gradient(to right, #5BBDFF 0%, #1500CF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.titleblog {
    width: 100%;
    height: 20vh;

    margin: 0 auto;
    background: linear-gradient(180deg, #f5f7ff 0%, #ffffff 40%, #f7f9ff 100%);

}

.boxmargin {
    background: linear-gradient(180deg, #f5f7ff 0%, #ffffff 40%, #f7f9ff 100%);
}
</style>