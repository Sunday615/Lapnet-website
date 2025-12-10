<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

import main_navbar from '../../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';
import membercard from '../../../components/membercard/membercard.vue';
import footermembercrossborder from '../../../components/footer/logomemberfooter/logofootermembercrossborder.vue';



onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

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
      src: "/logoallmember/circle_scale/PSVB.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/mb.png",
      alt: "Client Z",
   },
];

const itemsPerPage = 5;
const currentPage = ref(1);

// --- Aside state (search + checkboxes) ---
const searchQuery = ref('');
const selectedFilters = ref([]);

// filter options with flags
const filterOptions = [
  {
    label: 'ເລືອກທັງໝົດ',
    value: 'all',
    flags: [],
  },
  {
    label: 'ກຳປູເຈຍ ສະແກນຊຳລະ ລາວ ',
    value: 'kh-la',        // Cambodia -> Laos
    flags: [
      { code: 'kh', alt: 'Cambodia flag' },
      { code: 'la', alt: 'Laos flag' },
    ],
  },
  {
    label: 'ລາວ ສະແກນຊຳລະ ກຳປູເຈຍ ',
    value: 'la-kh',        // Laos -> Cambodia
    flags: [
      { code: 'la', alt: 'Laos flag' },
      { code: 'kh', alt: 'Cambodia flag' },
    ],
  },
  {
    label: 'ໄທ ສະແກນຊຳລະ ລາວ ',
    value: 'th-la',        // Thailand -> Laos
    flags: [
      { code: 'th', alt: 'Thailand flag' },
      { code: 'la', alt: 'Laos flag' },
    ],
  },
  {
    label: 'ລາວ ສະແກນຊຳລະ ໄທ ',
    value: 'la-th',        // Laos -> Thailand
    flags: [
      { code: 'la', alt: 'Laos flag' },
      { code: 'th', alt: 'Thailand flag' },
    ],
  },
  {
    label: 'ຫວຽດນາມ ສະແກນຊຳລະ ລາວ ',
    value: 'vn-la',        // Vietnam -> Laos
    flags: [
      { code: 'vn', alt: 'Vietnam flag' },
      { code: 'la', alt: 'Laos flag' },
    ],
  },
  {
    label: 'ຈີນ ສະແກນຊຳລະ ລາວ ',
    value: 'cn-la',        // China -> Laos
    flags: [
      { code: 'cn', alt: 'China flag' },
      { code: 'la', alt: 'Laos flag' },
    ],
  },
];

// banks (add filters for cross–border directions each supports)
// NOTE: adjust filters to match real connections.
const members = ref([
    {
        image: "/logoallmember/circle_scale/BCEL.png",
        title: "ທະນາຄານ ການຄ້າຕ່າງປະເທດລາວ ມະຫາຊົນ",
        subtitle: "Banque Pour Le Commerce Exterieur Lao Public",
        link1: "https://www.facebook.com/BCEL.Bank",
        link2: "https://www.bcel.com.la",
        layer1: "linear-gradient(#cb0202, #a71f33) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la', 'la-kh' ,'th-la' , 'la-th' , 'vn-la' ,'cn-la'],
    },
    {
        image: "/logoallmember/circle_scale/LDB.PNG",
        title: "ທະນາຄານ ພັດທະນາລາວ ຈຳກັດ",
        subtitle: "Lao Development Bank",
        link1: "https://www.facebook.com/ldblao",
        link2: "https://www.ldblao.la/",
        layer1: "linear-gradient(#233f73, #1c335f) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la' ,'th-la' ,'la-th' , 'vn-la' ,'cn-la'],
    },
    {
        image: "/logoallmember/circle_scale/APBB.PNG",
        title: "ທະນາຄານ ສົ່ງເສີມກະສິກໍາ ຈຳກັດ ",
        subtitle: "Agricultural Promotion Bank",
        link1: "https://www.facebook.com/APB.Bank/?locale=th_TH",
        link2: "https://www.apb.com.la",
        layer1: "linear-gradient(#379685, #215a50) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la' , 'la-kh' , 'th-la' ,'la-th' , 'vn-la' ,'cn-la'],
    },
    {
        image: "/logoallmember/circle_scale/JDB.png",
        title: "ທະນາຄານ ຮ່ວມພັດທະນາ ",
        subtitle: "Joint Development Bank",
        link1: "https://www.facebook.com/jdbbanklaos",
        link2: "https://www.jdbbank.com.la/",
        layer1: "linear-gradient(#2b83df, #0953a0) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la', 'th-la' ,'la-th' , 'vn-la' ,'cn-la'],
    },
    {
        image: "/logoallmember/circle_scale/Maruhan.png",
        title: "ທະນາຄານ ມາຣູຮານ ເຈແປນ ລາວ ຈຳກັດ  ",
        subtitle: "MARUHAN Japan Bank Lao",
        link1: "https://www.facebook.com/MaruhanJapanBankLao/",
        link2: "https://maruhanjapanbanklao.com",
        layer1: "linear-gradient(#eb1c24, #6d0302) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['th-la' , 'la-th' ,'vn-la' ,'cn-la'],
    },
    {
        image: "/logoallmember/circle_scale/lvb.PNG",
        title: "ທະນາຄານ ຮ່ວມທຸລະກິດ ລາວ-ຫວຽດ  ",
        subtitle: "Laos - Vietnam Joint Venture Bank",
        link1: "https://www.facebook.com/LaoVietBank",
        link2: "https://www.laovietbank.com.la/la/",
        layer1: "linear-gradient(#18479e, #232299) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la' ,'th-la' ,'la-th' ,'vn-la','cn-la'],
    },
    {
        image: "/logoallmember/retangle_scale/VTB.jpg",
        title: " ທະນາຄານ ຫວຽດຕິນ ລາວ ຈຳກັດ  ",
        subtitle: "VietinBank",
        link1: "https://www.facebook.com/vtblao",
        link2: "https://laoefast.vietinbank.com.la",
        layer1: "linear-gradient(#0086e7, #0c51d1) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['th-la','vn-la'],
    },
    {
        image: "/logoallmember/circle_scale/IB.png",
        title: " ທະນາຄານ ອິນໂດຈີນ ຈຳກັດ  ",
        subtitle: "Indochina Bank",
        link1: "https://www.facebook.com/indochina.bank.page",
        link2: "https://iblaos.com",
        layer1: "linear-gradient(#8828d1, #430076) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la', 'th-la' , 'vn-la'],
    },
    {
        image: "/logoallmember/retangle_scale/ACL-bg.png",
        title: "ທະນາຄານ ເອຊີລີດາລາວ ຈໍາກັດ   ",
        subtitle: "ACLEDA BANK",
        link1: "https://www.facebook.com/acledabanklao",
        link2: "https://www.acledabank.com.la/la/lao/",
        layer1: "linear-gradient(#006DBD, #183A67) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la', 'la-kh' ,'th-la' ,'la-th' ,'vn-la','cn-la'],
    },
    {
        image: "/logoallmember/retangle_scale/BICnew.jpeg",
        title: "ທະນາຄານ ບີໄອຊີ ລາວ ຈໍາກັດ    ",
        subtitle: "BIC Bank Lao",
        link1: "https://www.facebook.com/BICBANKLAO",
        link2: "https://www.biclaos.com",
        layer1: "linear-gradient(#344872, #213051) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la' ,'vn-la'],
    },
    {
        image: "/logoallmember/retangle_scale/sacom.png",
        title: "ທະນາຄານ ໄຊງ່ອນເທືອງຕິ່ນ ລາວ   ",
        subtitle: "Saigon Thuong Tin Commercial Joint Stock Bank",
        link1: "https://www.facebook.com/SacombankLao",
        link2: "https://www.sacombank.com.la",
        layer1: "linear-gradient(#18479e, #232299) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la' ,'la-kh' ,'th-la' ,'la-th' ,'vn-la'],
    },
    {
        image: "/logoallmember/retangle_scale/STB.jpg",
        title: "ທະນາຄານ ເອັສທີ ຈຳກັດ  ",
        subtitle: "ST Bank Limited",
        link1: "https://www.facebook.com/STBankLaos",
        link2: "https://www.stbanklaos.la",
        layer1: "linear-gradient(#0903ff, #010098) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la', 'la-kh' ,'th-la','la-th' ,'vn-la' ,'cn-la'],
    },
    {
        image: "/logoallmember/circle_scale/Kasikorn.png",
        title: "ທະນາຄານ ກະສິກອນໄທ ຈຳກັດ ",
        subtitle: "KASIKORNBANK Public Company Limited",
        link1: "https://www.facebook.com/KBankLaos/",
        link2: "https://www.kasikornbank.com.la",
        layer1: "linear-gradient(#00a850, #006530) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['kh-la' ,'th-la'],
    },
    {
        image: "/logoallmember/circle_scale/PSVB.png",
        title: "ທະນາຄານ ພົງສະຫວັນ ຈໍາກັດ",
        subtitle: "Phongsavanh Bank",
        link1: "https://www.facebook.com/phongsavanhbankltd",
        link2: "https://www.phongsavanhbank.com",
        layer1: "linear-gradient(#04ca63, #0b9444) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['th-la' , 'la-th' , 'vn-la', 'cn-la'],
    },
    {
        image: "/logoallmember/retangle_scale/MB.png",
        title: "ທະນາຄານ ຫຸ້ນສ່ວນການຄ້າທະຫານ ສາຂາລາວ",
        subtitle: "Military Commercial Joint Stock Bank",
        link1: "https://www.facebook.com/MBBANKLAOS",
        link2: "https://mbbank.com.la",
        layer1: "linear-gradient(#3b46fb, #141fd3) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
        filters: ['la-kh' , 'vn-la','cn-la'],
    },
]);

// --------- select-all helpers ----------
const realFilterValues = computed(() =>
  filterOptions
    .filter(o => o.value !== 'all')
    .map(o => o.value)
);

const isAllChecked = computed({
  get() {
    return (
      realFilterValues.value.length > 0 &&
      realFilterValues.value.every(v =>
        selectedFilters.value.includes(v)
      )
    );
  },
  set(checked) {
    if (checked) {
      selectedFilters.value = [...realFilterValues.value];
    } else {
      selectedFilters.value = [];
    }
  },
});

// --- Filtered list (search + flags -> pagination) ---
const filteredMembers = computed(() => {
    const q = searchQuery.value.trim().toLowerCase();
    const activeFilters = selectedFilters.value;

    return members.value.filter((m) => {
        const title = (m.title || '').toLowerCase();
        const subtitle = (m.subtitle || '').toLowerCase();

        // search by text
        const matchesSearch =
            !q || title.includes(q) || subtitle.includes(q);

        if (!matchesSearch) return false;

        // no cross-border filter selected => show everything that matches search
        if (!activeFilters.length) return true;

        const memberFilters = m.filters || [];

        // at least one selected filter must match member.filters
        const matchesFilter = activeFilters.some(f =>
            memberFilters.includes(f)
        );

        return matchesFilter;
    });
});

const totalPages = computed(() =>
    Math.max(1, Math.ceil(filteredMembers.value.length / itemsPerPage))
);

const paginatedMembers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredMembers.value.slice(start, start + itemsPerPage);
});

// --- GSAP animation setup ---
const cardsGridEl = ref(null);

const animateCards = () => {
    const grid = cardsGridEl.value;
    if (!grid) return;

    const cards = grid.children;
    if (!cards || !cards.length) return;

    gsap.killTweensOf(cards);

    gsap.fromTo(
        cards,
        {
            autoAlpha: 0,
            y: 24,
            scale: 0.96,
        },
        {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: 'power2.out',
            stagger: 0.06,
        }
    );
};

function goToPage(p) {
    const next = Math.min(Math.max(1, p), totalPages.value);
    if (next === currentPage.value) return;
    currentPage.value = next;
}

function prevPage() {
    goToPage(currentPage.value - 1);
}

function nextPage() {
    goToPage(currentPage.value + 1);
}

// keep currentPage valid
watch(totalPages, (tp) => {
    if (currentPage.value > tp) currentPage.value = tp;
});

// reset to first page when searching
watch(searchQuery, () => {
    currentPage.value = 1;
});

// reset to first page when changing filters
watch(selectedFilters, () => {
    currentPage.value = 1;
});

// Animate on mount
onMounted(async () => {
    await nextTick();
    animateCards();
});

// Animate whenever page changes
watch(currentPage, async () => {
    await nextTick();
    animateCards();
});

// Animate when filtered list changes (search/filter)
watch(filteredMembers, async () => {
    await nextTick();
    animateCards();
});
</script>

<template>
    <main_navbar
        title="ສະມາຊິກລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ"
        :breadcrumb="[
            'ໜ້າຫຼັກ',
            'ສະມາຊິກ',
            'ສະມາຊິກລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ'
        ]"
        background-image="/member/membercard/membercrd-2.png"
    />
    <div class="boxmargin" style="width: 100%; height:20vh"></div>
    <div class="membercardcontainer">
        <div class="leftsection">
            <div class="cardsgrid" ref="cardsGridEl">
                <membercard
                    v-for="(m, idx) in paginatedMembers"
                    :key="`${m.title}-${idx}`"
                    :image="m.image"
                    :title="m.title"
                    :subtitle="m.subtitle"
                    :link1="m.link1"
                    :link2="m.link2"
                    :layer1="m.layer1"
                    :layer2="m.layer2"
                    :layer3="m.layer3"
                    :layer4="m.layer4"
                    :layer5="m.layer5"
                />
            </div>
        </div>

        <aside class="rightcontainer">
            <div class="filterPanel">
                <div class="filterHeader">
                    <div>
                        <h2 class="filterTitle">ຄົ້ນຫາທະນາຄານສະມາຊິກ</h2>
                        <p class="filterSubtitle">
                           ສະມາຊິກລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ
                        </p>
                    </div>
                    <span class="filterBadge">LAPNet</span>
                </div>

                <!-- Search box -->
                <div class="searchBox">
                    <span class="searchIcon">🔍</span>
                    <input
                        v-model="searchQuery"
                        type="text"
                        class="searchInput"
                        placeholder="ຄົ້ນຫາທະນາຄານສະມາຊິກ..."
                    />
                </div>

                <div class="filterDivider"></div>

                <!-- Checkbox filters -->
                <div class="filterGroup">
                    <div class="filterGroupHeader">
                        <span class="filterGroupTitle">ຄົ້ນໝວດໝູ່ທະນາຄານສະມາຊິກ</span>
                        <span class="filterGroupHint">7 ຕົວເລືອກ</span>
                    </div>

                    <div class="filterChecks">
                        <label
                            v-for="opt in filterOptions"
                            :key="opt.value"
                            class="filterCheck"
                        >
                            <!-- select all -->
                            <input
                                v-if="opt.value === 'all'"
                                type="checkbox"
                                :checked="isAllChecked"
                                @change="isAllChecked = $event.target.checked"
                            />
                            <!-- normal filters -->
                            <input
                                v-else
                                type="checkbox"
                                :value="opt.value"
                                v-model="selectedFilters"
                            />

                            <span class="checkFake">
                                <span class="checkTick">✓</span>
                            </span>

                            <span class="checkLabel">
                                <!-- flags + arrow (from -> to) -->
                                <span
                                    v-if="opt.flags && opt.flags.length === 2"
                                    class="flagWrap"
                                >
                                    <!-- from -->
                                    <img
                                        class="flagIcon"
                                        :src="`https://flagcdn.com/w20/${opt.flags[0].code}.png`"
                                        :srcset="`https://flagcdn.com/w40/${opt.flags[0].code}.png 2x`"
                                        :alt="opt.flags[0].alt"
                                        loading="lazy"
                                    />
                                    <!-- arrow -->
                                    <i class="fa-solid fa-arrow-right flagArrow"></i>
                                    <!-- to -->
                                    <img
                                        class="flagIcon"
                                        :src="`https://flagcdn.com/w20/${opt.flags[1].code}.png`"
                                        :srcset="`https://flagcdn.com/w40/${opt.flags[1].code}.png 2x`"
                                        :alt="opt.flags[1].alt"
                                        loading="lazy"
                                    />
                                </span>

                                <!-- no flags (e.g. select all) -->
                                <span
                                    v-else
                                    class="flagWrap"
                                ></span>

                                {{ opt.label }}
                            </span>
                        </label>
                    </div>
                </div>

                <div class="filterFooter">
                    <p class="filterFooterText">
                        ຄົ້ນຫາພົບ :
                        <span class="filterFooterHighlight">
                            {{ filteredMembers.length }}
                        </span>
                        ສະມາຊິກລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR Code ລະຫວ່າງປະເທດ
                    </p>
                </div>
            </div>
        </aside>
    </div>

    <div class="paginationcontainer">
        <div class="pagerWrap" aria-label="Pagination">
            <button
                class="pagerBtn"
                :disabled="currentPage === 1"
                @click="prevPage"
                aria-label="Previous page"
            >
                <span class="chev">‹</span>
                <span class="txt">Prev</span>
            </button>

            <div class="pagerPills" role="navigation" aria-label="Page numbers">
                <button
                    v-for="p in totalPages"
                    :key="p"
                    class="pagePill"
                    :class="{ active: p === currentPage }"
                    @click="goToPage(p)"
                    :aria-current="p === currentPage ? 'page' : undefined"
                    :aria-label="`Go to page ${p}`"
                >
                    {{ p }}
                </button>
            </div>

            <button
                class="pagerBtn"
                :disabled="currentPage === totalPages"
                @click="nextPage"
                aria-label="Next page"
            >
                <span class="txt">Next</span>
                <span class="chev">›</span>
            </button>
        </div>
    </div>

    <div class="boxmargin" style="width: 100%; height: 15vh"></div>
    <footermembercrossborder :logos="memberLogos" />
    <mainfooter />
</template>

<style scoped>
.flagArrow {
    font-size: 12px;
    margin: 0 4px;
    opacity: 0.85;
}
.flagWrap {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-right: 8px;
}
.flagIcon {
    width: 25px;
    height: 20px;
    border-radius: 3px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
    object-fit: cover;
}

.membercardcontainer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    height: auto;
}

/* Left section (cards) */
.leftsection {
    width: 55%;
    height: auto;
}

/* Right aside container (42% of parent, full height) */
.rightcontainer {
    width: 42%;
    height: 750px;
    display: flex;
    align-items: stretch;
}

/* Tech-style panel */
.filterPanel {
    width: 100%;
    height: 100%;
    padding: 18px 20px;
    border-radius: 20px;

    background: linear-gradient(145deg, #ffffff 0%, #e7f0ff 35%, #f6fbff 100%);
    border: 1px solid rgba(58, 123, 255, 0.5);
    box-shadow:
        0 14px 40px rgba(10, 32, 94, 0.28),
        0 0 0 1px rgba(255, 255, 255, 0.7);

    display: flex;
    flex-direction: column;
    gap: 18px;
}

/* Header */
.filterHeader {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
}

.filterTitle {
    font-size: var(--fs-lg);
    font-weight: 700;
    color: #0a1f55;
    margin: 0;
}

.filterSubtitle {
    margin: 3px 0 0;
    font-size: var(--fs-sm);
    color: #5a6f9f;
}

.filterBadge img {
    width: 30px;
    height: auto;
}
.filterBadge {
    font-size: 11px;
    padding: 6px 10px;
    border-radius: 999px;
    background: linear-gradient(120deg, #1b5cff, #46a9ff);
    color: #ffffff;
    display: flex;
    align-items: center;
    font-weight: 600;
    letter-spacing: 0.3px;
    box-shadow: 0 0 12px rgba(58, 123, 255, 0.75);
    align-self: center;
}

/* Search box */
.searchBox {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 20px 32px;
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(102, 153, 255, 0.7);
    box-shadow:
        0 6px 16px rgba(9, 30, 66, 0.18),
        inset 0 0 0 1px rgba(255, 255, 255, 0.9);

    backdrop-filter: blur(10px);
}

.searchIcon {
    font-size: var(--fs-md);
}

.searchInput {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: var(--fs-xs);
    color: #10275b;
}

.searchInput::placeholder {
    color: #9aaad9;
}

/* Divider line */
.filterDivider {
    height: 1px;
    width: 100%;
    border-radius: 999px;
    background: linear-gradient(
        90deg,
        rgba(46, 94, 255, 0) 0%,
        rgba(46, 94, 255, 0.7) 35%,
        rgba(46, 94, 255, 0.7) 65%,
        rgba(46, 94, 255, 0) 100%
    );
}

/* Checkbox group */
.filterGroup {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.filterGroupHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filterGroupTitle {
    font-size: var(--fs-md);
    font-weight: 600;
    color: #12306a;
}

.filterGroupHint {
    font-size: 11px;
    color: #7d90c7;
}

.filterChecks {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 30px;
}

/* Checkbox item */
.filterCheck {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 13px;
    color: #21345f;
    user-select: none;
}

/* hide default checkbox */
.filterCheck input {
    display: none;
}

.checkFake {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1px solid rgba(102, 155, 255, 0.9);
    background: radial-gradient(circle at 30% 0%, #ffffff, #dfe9ff);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.9),
        0 4px 10px rgba(44, 93, 255, 0.35);
    transition:
        background 0.16s ease,
        border-color 0.16s ease,
        box-shadow 0.16s ease,
        transform 0.12s ease;
}

.checkTick {
    font-size: 12px;
    opacity: 0;
    transform: scale(0.3);
    transition:
        opacity 0.12s ease,
        transform 0.12s ease;
}

/* checked state */
.filterCheck input:checked + .checkFake {
    background: linear-gradient(135deg, #1a57ff, #47b3ff);
    border-color: #ffffff;
    box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.7),
        0 6px 14px rgba(43, 100, 255, 0.5);
    transform: translateY(-1px);
}

.filterCheck input:checked + .checkFake .checkTick {
    opacity: 1;
    transform: scale(1);
    color: #ffffff;
}

.checkLabel {
    font-size: var(--fs-base);
    display: inline-flex;
    align-items: center;
}

/* Footer info */
.filterFooter {
    margin-top: auto;
    padding-top: 4px;
    border-top: 1px dashed rgba(148, 179, 255, 0.7);
}

.filterFooterText {
    font-size: var(--fs-sm);
    color: #1e3567;
    margin: 6px 0 0;
}

.filterFooterHighlight {
    font-weight: 700;
    color: #275eff;
}

.filterFooterSub {
    font-size: 11px;
    color: #8090c2;
    margin: 2px 0 0;
}

/* Grid membercard */
.cardsgrid {
    display: grid;
    gap: 18px;
    grid-template-columns: 1fr;
    align-items: stretch;
    overflow: hidden;
}

/* Pagination */
.paginationcontainer {
    width: 40%;
    margin: 0 auto;
    height: auto;
    border: none;
}

/* Blue Gradient Pagination */
.pagerWrap {
    margin-top: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    padding: 10px 14px;
    border-radius: 999px;

    background: #00123d;
    background: linear-gradient(
        95deg,
        rgba(0, 18, 61, 1) 0%,
        rgba(0, 51, 171, 1) 35%,
        rgba(6, 0, 120, 1) 100%
    );
    border: 1px solid rgba(152, 189, 255, 0.8);
    box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.45),
        0 0 0 1px rgba(255, 255, 255, 0.06);
}

/* Prev / Next buttons */
.pagerBtn {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    border-radius: 999px;
    cursor: pointer;
    user-select: none;

    font-size: 13px;
    letter-spacing: 0.2px;

    color: #e9f3ff;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(184, 210, 255, 0.7);

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(6px);
    transition:
        transform 0.16s ease,
        box-shadow 0.16s ease,
        background 0.16s ease,
        opacity 0.16s ease;
}

.pagerBtn:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 7px 16px rgba(0, 0, 0, 0.35);
}

.pagerBtn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.chev {
    font-size: 16px;
    line-height: 1;
}

/* Pills container */
.pagerPills {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 6px;
    border-radius: 999px;

    background: rgba(1, 8, 30, 0.55);
    border: 1px solid rgba(167, 199, 255, 0.6);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35);
}

/* Page pills */
.pagePill {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    cursor: pointer;

    font-size: 13px;
    font-weight: 500;

    color: #dbe8ff;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(179, 204, 255, 0.7);

    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    transition:
        transform 0.16s ease,
        box-shadow 0.16s ease,
        background 0.16s ease,
        color 0.16s ease,
        border-color 0.16s ease;
}

.pagePill:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.18);
    border-color: #c4d6ff;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.45);
}

.pagePill.active {
    background: #ffffff;
    color: #0b2e7e;
    border-color: #ffffff;
    box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.5),
        0 0 0 3px rgba(116, 170, 255, 0.6);
}

/* Responsive tweak */
@media (max-width: 900px) {
   .membercardcontainer {
        flex-direction: column;
        width: 95%;
    }

    .rightcontainer {
        width: 100%;
        height: auto;
        order: 1;
    }

    .leftsection {
        width: 100%;
        order: 2;
    }

    .paginationcontainer {
        width: 100%;
    }

    .pagerWrap {
        flex-wrap: wrap;
        padding: 10px 10px;
        gap: 8px;
    }
}
</style>
