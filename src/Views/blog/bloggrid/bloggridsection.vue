<template>
  <section class="blog-page">
    <!-- Header -->
    <header class="blog-header">
      <div class="headline">
        <h1 style="font-weight: bold;">ຂ່າວສານ ແລະ ກິດຈະກຳ</h1>
      </div>
      <div class="badge-counter">
        <span class="count">{{ filteredPosts.length }}</span>
        <span class="label">News Posts</span>
      </div>
    </header>

    <!-- Controls: Search + Year + Month -->
    <div class="blog-controls">
      <!-- Search -->
      <div class="control search-control">
        <span class="control-label">Search</span>
        <div class="search-input-wrap">
          <span class="search-icon">🔍</span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by title, category, date, month, or year..."
            class="search-input"
          />
        </div>
      </div>

      <!-- Year Filter -->
      <div class="control">
        <span class="control-label">Year</span>
        <div class="select-wrap">
          <select v-model="selectedYear" class="select-input">
            <option value="all">All years</option>
            <option
              v-for="year in availableYears"
              :key="year"
              :value="year"
            >
              {{ year }}
            </option>
          </select>
        </div>
      </div>

      <!-- Month Filter -->
      <div class="control">
        <span class="control-label">Month</span>
        <div class="select-wrap">
          <select v-model="selectedMonth" class="select-input">
            <option value="all">All months</option>
            <option
              v-for="month in months"
              :key="month.value"
              :value="month.value"
            >
              {{ month.label }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- 3x3 Grid -->
    <div class="blog-grid" ref="blogGrid">
      <!-- router-link wraps each card, dynamic path blogdetail/:id -->
      <router-link
        v-for="post in paginatedPosts"
        :key="post.id"
        class="blog-link"
        :to="{
          name: 'BlogDetail',
          params: { id: post.id },
          query: { ...$route.query, page: currentPage }
        }"
      >
        <article class="blog-card">
          <div class="blog-card-gradient"></div>

          <!-- Image at top of card -->
          <div class="blog-media">
            <img :src="post.image" :alt="post.title" loading="lazy" />
            <div class="media-overlay"></div>
          </div>

          <div class="blog-card-content">
            <div class="blog-meta-top">
              <span class="chip"> <i class="fa-solid fa-tags"></i>{{ post.category }}</span>
              <span class="date">
                {{ post.date }} · {{ post.readTime }} 
              </span>
            </div>

            <h2 class="blog-title">
              {{ post.title }}
            </h2>

            <p class="blog-excerpt">
              {{ post.excerpt }}
            </p>

            <div class="blog-footer">
              <button class="read-more" type="button">
                ອ່ານເພີ່ມເຕີ່ມ
                <span class="arrow">➜</span>
              </button>
            </div>
          </div>
        </article>
      </router-link>

      <!-- Empty state -->
      <p
        v-if="!paginatedPosts.length"
        class="empty-state"
      >
        ບໍ່ພົບ ຂ່າວສານ ແລະ ກິດຈະກຳ ທີ່ຄົ້ນຫາ
      </p>
    </div>

    <!-- Pagination -->
    <div class="paginationcontainer" v-if="totalPages > 1">
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
  </section>
</template>

<script>
import { gsap } from "gsap";
import mainfooter from "../../../components/footer/mainfooter/mainfooter.vue";

export default {
  name: "BlogGrid",

  components: {
    mainfooter
  },

  data() {
    return {
      currentPage: 1,
      pageSize: 9, // 3 columns x 3 rows
      searchQuery: "",
      selectedYear: "all",
      selectedMonth: "all", // 1–12 or "all"
      months: [
        { value: 1, label: "January" },
        { value: 2, label: "February" },
        { value: 3, label: "March" },
        { value: 4, label: "April" },
        { value: 5, label: "May" },
        { value: 6, label: "June" },
        { value: 7, label: "July" },
        { value: 8, label: "August" },
        { value: 9, label: "September" },
        { value: 10, label: "October" },
        { value: 11, label: "November" },
        { value: 12, label: "December" }
      ],
      posts: [
        {
          id: 1,
          title: " ພິທີລົງນາມເຊັນສັນຍາໂຄງການຊຳລະຂ້າມແດນລາວ-ຈີນ ຜ່ານ QR CODE",
          category: "Contract",
          date: " 25 December 2024",
          readTime: "ໂພສເມື່ອ 8 month ago",
          excerpt:
            " ພິທີລົງນາມເຊັນສັນຍາໂຄງການຊຳລະຂ້າມແດນລາວ-ຈີນ ຜ່ານ QR CODE ລະຫວ່າງບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນເນັດເວີກ ຈຳກັດ (LAPNET) ແລະ ບໍລິສັດ ຢູນຽນເພ ສາກົນ (UPI) ທີ່ນະຄອນຊຽງໄຮ້, ສປ ຈີນ....",
          image: "/blog/1.jpg"
        },
        {
          id: 2,
          title: " ແຈ້ງເຊີນເຂົ້າຮ່ວມປະມູນຍື່ນຊອງລາຄາ ການບຳລຸງຮັກສາອຸປະກອນເຄືອຂ່າຍ.",
          category: "Notification",
          date: "12 August 2024",
          readTime: "ໂພສເມື່ອ 1 Year ago",
          excerpt:
            "ແຈ້ງເຊີນເຂົ້າຮ່ວມປະມູນການບຳລຸງຮັກສາອຸປະກອນເຄືອຂ່າຍ....",
          image: "/blog/2/2.png"
        },
        {
          id: 3,
          title: "ແຈ້ງເຊີນປະມູນ ອຸປະກອນ HARDWARE ເພ່ືອສ້າງສູນສຳຮອງຂໍ້ມູນຂອງບໍລິສັດ LAPNET.",
          category: "Notification",
          date: "16 May 2024",
          readTime: "ໂພສເມື່ອ 1 Year ago",
          excerpt:
            "ແຈ້ງເຊີນປະມູນ ອຸປະກອນ HARDWARE ເພ່ືອສ້າງສູນສຳຮອງຂໍ້ມູນຂອງບໍລິສັດ LAPNET....",
          image: "/blog/3/3.jpg"
        },
        {
          id: 4,
          title: "ພິທີເປີດໂຕການນຳໃຊ້ລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງ ລາວ - ໄທ.",
          category: "Grand Openning",
          date: "03 April 2024",
          readTime: "ໂພສເມື່ອ 1 Year ago",
          excerpt:
            "ພິທີເປີດໂຕການນຳໃຊ້ລະບົບຊຳລະຂ້າມແດນໃນຮູບແບບ QR CODE ລະຫວ່າງ ລາວ - ໄທ....",
          image: "/blog/4.png"
        },

        // 2023
        {
          id: 5,
          title: "ພິທີ ເຊັນສັນຍາວ່າດ້ວຍການຮ່ວມມືທາງດ້ານການເຊື່ອມຕໍ່ລະບົບຊຳລະຂ້າມແດນ QR CODE ລະຫວ່າງ ສປປລາວ ແລະ ປະເທດໄທ ໂດຍການຮ່ວມມືກັນລະຫວ່າງ ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ(LAPNET) ແລະ ບໍລິສັດ NATIONAL ITMX (ITMX).",
          category: "Contract",
          date: "03 April 2024",
          readTime: "ໂພສເມື່ອ 1 Year ago",
          excerpt: "",
          image: "blog/5.jpg"
        },
        {
          id: 6,
          title: "ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ເດີນທາງໄປແລກປ່ຽນບົດຮຽນທາງດ້ານການໃຫ້ບໍລິການເງິນທີ່ປະເທດສິງກະໂປ.",
          category: "Meetings",
          date: "01 April 2024",
          readTime: "ໂພສເມື່ອ 1 Year ago",
          excerpt:
            "ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ເດີນທາງໄປແລກປ່ຽນບົດຮຽນທາງດ້ານການໃຫ້ບໍລິການເງິນທີ່ປະເທດສິງກະໂປ....",
          image: "/blog/6.jpg"
        },
        {
          id: 7,
          title: "ກອງປະຊຸມ ປຶກສາຫາລືຄວາມເປັນໄປໄດ້ ໃນການເກັບລາຍຮັບຈາກການຊໍາລະຄ່າໄຟຟ້າ ຜ່ານລະບົບສູນກາງ ການຊຳລະທຸລະກຳຍ່ອຍ (RETAILS PAYMENT OPERATOR) ຂອງ ບໍລິສັດ LAPNET.",
          category: "Meetings",
          date: "15 September 2023",
          readTime: "ໂພສເມື່ອ 2 Year ago",
          excerpt: "",
          image: "/blog/7/F 1 -01.jpg"
        },
        {
          id: 8,
          title: "ກອງປະຊຸມ ທາບທາມການນຳສະເຫນີ ຂອງທະນາຄານທີ່ມີຄວາມພ້ອມ ແລະ ສະເໜີເປັນທະນາຄານຮັບຊຳລະໃນການ ເຊື່ອມຕໍ່ລະບົບຊຳລະຂ້າມແດນລະຫວ່າງ ສປປ ລາວ ແລະ ສສ.ຫວຽດນາມ.",
          category: "Meetings",
          date: "30 August 2023",
          readTime: " ໂພສເມື່ອ 2 Year ago",
          excerpt: "",
          image: "/blog/8/1.jpg"
        },

        // 2022
        {
          id: 9,
          title: " ເດີນທາງໄປແລກປ່ຽນບົດຮຽນຮ່ວມກັບ ທະນາຄານແຫ່ງລັດຫວຽດນາມ, ບໍລິສັດ ຫຸ້ນສ່ວນຊໍາລະແຫ່ງຊາດຫວຽດນາມ (NATIONAL PAYMENT CORPORATION OF VIETNAM ຫຼື NAPAS).",
          category: "Meetings",
          date: "22 August 2023",
          readTime: " ໂພສເມື່ອ 2 Year ago",
          excerpt: "",
          image: "/blog/9/1.jpg"
        },
        {
          id: 10,
          title: "ພິທີມອບ-ຮັບ ຕຳແໜ່ງ ປະທານສະພາບໍລິຫານ ແລະ ຜູ້ອຳນວຍການ ບໍລິສັດ ລາວເນເຊີນນໍ ເມັ້ນ ເນັດເວີກ ຈຳກັດ ລະຫວ່າງ ຜູ້ເກົ່າ ແລະ ຜູ້ໃໝ່.",
          category: "Meetings",
          date: "21 August 2023",
          readTime: "ໂພສເມື່ອ 2 Year ago",
          excerpt:
            "ພິທີມອບ-ຮັບ ຕຳແໜ່ງ ປະທານສະພາບໍລິຫານ ແລະ ຜູ້ອຳນວຍການ ບໍລິສັດ ລາວເນເຊີນນໍ ເມັ້ນ ເນັດເວີກ ຈຳກັດ ລະຫວ່າງ ຜູ້ເກົ່າ ແລະ ຜູ້ໃໝ່....",
          image: "/blog/10/1.jpg"
        },
        {
          id: 11,
          title: "LAPNET ໄດ້ສຳເລັດການຈັດກອງປະຊຸມສະພາບໍລິຫານສະໄໝສາມັນ ປະຈຳໄຕມາດ I ປະຈຳປີ 2023.",
          category: "Meetings",
          date: "28 April 2023",
          readTime: " ໂພສເມື່ອ 2 Year ago",
          excerpt:
            "LAPNET ໄດ້ສຳເລັດການຈັດກອງປະຊຸມສະພາບໍລິຫານສະໄໝສາມັນ ປະຈຳໄຕມາດ I ປະຈຳປີ 2023...",
          image: "/blog/11/1.jpg"
        },
        {
          id: 12,
          title: "ພິທີມອບຮັບໃບຍ້ອງຍໍ ຈາກລັດຖະມົນຕີກະຊວງການເງິນ.",
          category: "Meetings",
          date: "05 April 2023",
          readTime: "ໂພສເມື່ອ 2 Year ago",
          excerpt:
            "ພິທີມອບຮັບໃບຍ້ອງຍໍ ຈາກລັດຖະມົນຕີກະຊວງການເງິນ.....",
          image: "/blog/12/1.jpeg"
        },

        // 2021
        {
          id: 13,
          title: "LAPNET TRIP 11-12 MARCH 2023 AT VANGVIENG.",
          category: "Meetings",
          date: "11 March 2023",
          readTime: "ໂພສເມື່ອ 2 Year ago",
          excerpt:
            "LAPNET TRIP 11-12 MARCH 2023 AT VANGVIENG....",
          image: "/blog/13/1.jpg"
        },
        {
          id: 14,
          title: "ບໍລິສັດ LAPNET ໄດ້ເຂົ້າຮ່ວມງານ ສັບປະດາດິຈິຕ໋ອນລາວ ປະຈຳປີ 2022.",
          category: "Events",
          date: "21 December 2022",
          readTime: "ໂພສເມື່ອ 3 Year ago",
          excerpt:
            "ບໍລິສັດ LAPNET ໄດ້ເຂົ້າຮ່ວມງານ ສັບປະດາດິຈິຕ໋ອນລາວ ປະຈຳປີ 2022....",
          image: "/blog/14/1.jpg"
        },
        {
          id: 15,
          title: "ພິທີລົງນາມສັນຍາວ່າດ້ວຍການເປັນຄູ່ຮ່ວມມື ແລະ ພິທີເປີດໂຕການຊຳລະຂ້າມທະນາຄານຜ່ານ LAPNET QR PAY ໃນວັນທີ 06 ຕຸລາ 2022 ທີ່ຜ່ານມາ.",
          category: "Contract",
          date: "21 December 2022",
          readTime: "ໂພສເມື່ອ 3 Year ago",
          excerpt:
            "ພິທີລົງນາມສັນຍາວ່າດ້ວຍການເປັນຄູ່ຮ່ວມມື ແລະ ພິທີເປີດໂຕການຊຳລະຂ້າມທະນາຄານຜ່ານ LAPNET QR PAY ໃນວັນທີ 06 ຕຸລາ 2022 ທີ່ຜ່ານມາ....",
          image: "/blog/15/1.jpg"
        },
        {
          id: 16,
          title: "ເທດສະການສະຕາດອັບລາວ ບໍລິສັດ LAPNET ກໍໄດ້ຮັບກຽດໃຫ້ເຂົ້າຮ່ວມບັນຍາຍເພື່ອນຳສະເໜີກ່ຽວກັບ ບໍລິສັດ LAPNET.",
          category: "Meetings",
          date: "18 December 2021",
          readTime: "ໂພສເມື່ອ 4 Year ago",
          excerpt:
            "ເທດສະການສະຕາດອັບລາວ ບໍລິສັດ LAPNET ກໍໄດ້ຮັບກຽດໃຫ້ເຂົ້າຮ່ວມບັນຍາຍເພື່ອນຳສະເໜີກ່ຽວກັບ ບໍລິສັດ LAPNET....",
          image: "/blog/16/1.jpg"
        },

        // 2020
        {
          id: 17,
          title: "ພິທີເຊັນສັນຍາແຕ່ງຕັ້ງທີ່ປຶກສາດ້ານການເງິນ ລະຫວ່າງ ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ແລະ ບໍລິສັດ ຫຼັກຊັບ ລ້ານຊ້າງ ມະຫາຊົນ.",
          category: "Contract",
          date: "14 July 2021",
          readTime: "ໂພສເມື່ອ 4 Year ago",
          excerpt:
            "ພິທີເຊັນສັນຍາແຕ່ງຕັ້ງທີ່ປຶກສາດ້ານການເງິນ ລະຫວ່າງ ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ແລະ ບໍລິສັດ ຫຼັກຊັບ ລ້ານຊ້າງ ມະຫາຊົນ....",
          image: "/blog/17/1.jpeg"
        },
        {
          id: 18,
          title: "ບໍລິສັດ LAPNET ໄດ້ຈັດພິທີມອບ-ຮັບໜ້າທີ່ປະທານສະພາບໍລິຫານຄົນໃຫມ່.",
          category: "Contract",
          date: "30 June 2021",
          readTime: "ໂພສເມື່ອ 4 Year ago",
          excerpt:
            "ບໍລິສັດ LAPNET ໄດ້ຈັດພິທີມອບ-ຮັບໜ້າທີ່ປະທານສະພາບໍລິຫານຄົນໃຫມ່....",
          image: "/blog/18/1.jpg"
        },
        {
          id: 19,
          title: "ລາຍຊື່ ຜູ້ຄວບຄຸມລະບົບການຊໍາລະທຸລະກຳຍ່ອຍ ຜູ້ໃຫ້ບໍລິການຊໍາລະ ທີ່ໄດ້ຮັບອະນຸຍາດ ຈາກ ທະນາຄານແຫ່ງ ສປປ ລາວ.",
          category: "Notification",
          date: "17 June 2021",
          readTime: "ໂພສເມື່ອ 4 Year ago",
          excerpt:
            "ລາຍຊື່ ຜູ້ຄວບຄຸມລະບົບການຊໍາລະທຸລະກຳຍ່ອຍ ຜູ້ໃຫ້ບໍລິການຊໍາລະ ທີ່ໄດ້ຮັບອະນຸຍາດ ຈາກ ທະນາຄານແຫ່ງ ສປປ ລາວ....",
          image: "/blog/19/1.png"
        },
        {
          id: 20,
          title: "ບໍລິສັດ LAPNET ໄດ້ຮັບມອບຜ້າປິດປາກ ຈາກບໍລິສັດ VIET CARD INTERNATIONAL TECHNOLOGYCORPORATION.",
          category: "Meetings",
          date: "30 April 2021",
          readTime: "ໂພສເມື່ອ 4 Year ago",
          excerpt: "",
          image: "/blog/20/1.jpeg"
        },

        // 2019
        {
          id: 21,
          title: "LAPNET ຈັດກອງປະຊຸມສະພາບໍລິຫານ ສະໄໝສາມັນ ແລະ ກອງປະຊຸມຜູ້ຖືຮຸ້ນ ສະໄໝສາມັນ ຄັ້ງທີ I ປະຈໍາປີ 2021.",
          category: "Contract",
          date: "12 March 2021",
          readTime: "ໂພສເມື່ອ 4 Year ago",
          excerpt:
            "LAPNET ຈັດກອງປະຊຸມສະພາບໍລິຫານ ສະໄໝສາມັນ ແລະ ກອງປະຊຸມຜູ້ຖືຮຸ້ນ ສະໄໝສາມັນ ຄັ້ງທີ I ປະຈໍາປີ 2021....",
          image: "/blog/21/1.jpg"
        },
        {
          id: 22,
          title: "ພິທີເປີດໂຕຜະລິດຕະພັນ ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື.",
          category: "Grand Openning",
          date: "08 December 2020",
          readTime: "ໂພສເມື່ອ 5 Year ago",
          excerpt:
            "ພິທີເປີດໂຕຜະລິດຕະພັນ ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື...",
          image: "/blog/22/22.jpg"
        },
        {
          id: 23,
          title: "ກິດຈະກຳກິລາບານເຕະມິດຕະພາບ ລະຫວ່າງບໍລິສັດ LAPNET ຮ່ວມກັບ ກົມຄຸ້ມຄອງລະບົບຊຳລະສະສາງ.",
          category: "Activity",
          date: "22 October 2020",
          readTime: "ໂພສເມື່ອ 5 Year ago",
          excerpt:
            "ກິດຈະກຳກິລາບານເຕະມິດຕະພາບ ລະຫວ່າງບໍລິສັດ LAPNET ຮ່ວມກັບ ກົມຄຸ້ມຄອງລະບົບຊຳລະສະສາງ.",
          image: "/blog/23.png"
        },
        {
          id: 24,
          title: "ກິດຈະກຳກິລາບານເຕະມິດຕະພາບ ລະຫວ່າງບໍລິສັດ LAPNET ຮ່ວມກັບ ທະນາຄານ JDB.",
          category: "Activity",
          date: "11 September 2020",
          readTime: "ໂພສເມື່ອ 5 Year ago",
          excerpt:
            "ກິດຈະກຳກິລາບານເຕະມິດຕະພາບ ລະຫວ່າງບໍລິສັດ LAPNET ຮ່ວມກັບ ທະນາຄານ JDB....",
          image: "/blog/24/24.jpg"
        },
        {
          id: 25,
          title: "ບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ ຕ້ອນຮັບຄະນະນັກສຶກສາ ຈາກວິທະຍາໄລສຸດສະກະ.",
          category: "Meetings",
          date: "11 June 2020",
          readTime: "ໂພສເມື່ອ 5 Year ago",
          excerpt: "",
          image: "/blog/25/25.jpg"
        },

        // 2019
        {
          id: 26,
          title: "ແຈ້ງການປະມູນ.",
          category: "Notification",
          date: "11 June 2020",
          readTime: "ໂພສເມື່ອ 5 Year ago",
          excerpt:
            "ແຈ້ງການປະມູນ.....",
          image: "/blog/26/26.1.png"
        },
        {
          id: 27,
          title: "ພິທີເປີດບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ.",
          category: "Grand Openning",
          date: "25 November 2019",
          readTime: "ໂພສເມື່ອ 6 Year ago",
          excerpt:
            "ພິທີເປີດບໍລິສັດ ລາວເນເຊີນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ....",
          image: "/blog/27/27.1.jpg"
        },
        {
          id: 28,
          title: "ພິທີລົງນາມໃນສັນຍາການຮ່ວມທຶນຂອງ ບໍລິສັດ ລາວ ເນເຊິນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ.",
          category: "Contract",
          date: "22 November 2019",
          readTime: "ໂພສເມື່ອ 6 Year ago",
          excerpt:
            "ພິທີລົງນາມໃນສັນຍາການຮ່ວມທຶນຂອງ ບໍລິສັດ ລາວ ເນເຊິນນໍ ເພເມັ້ນ ເນັດເວີກ ຈຳກັດ....",
          image: "/blog/28/28.3.jpeg"
        }
      ]
    };
  },

  created() {
    const pageFromQuery = Number(this.$route?.query?.page);
    if (pageFromQuery && pageFromQuery > 0) {
      this.currentPage = pageFromQuery;
    }
  },

  computed: {
    // Unique years available in posts
    availableYears() {
      const years = this.posts.map((post) => this.getPostYear(post));
      return [...new Set(years)].sort((a, b) => b - a); // newest first
    },

    // All filters + sort by date (newest first)
    filteredPosts() {
      const query = this.searchQuery.trim().toLowerCase();

      return this.posts
        .filter((post) => {
          const dateObj = this.parsePostDate(post);
          const year = dateObj.getFullYear();
          const month = dateObj.getMonth() + 1;

          // Filter by year
          if (this.selectedYear !== "all" && year !== Number(this.selectedYear)) {
            return false;
          }

          // Filter by month
          if (
            this.selectedMonth !== "all" &&
            month !== Number(this.selectedMonth)
          ) {
            return false;
          }

          // Search filter
          if (!query) return true;

          const monthLabel =
            this.months.find((m) => m.value === month)?.label || "";

          // Build a big searchable string
          const haystack = [
            post.title,
            post.category,
            post.excerpt,
            post.date,               // full date as text
            post.readTime,           // "ໂພສເມື່ອ 1 Year ago"
            year,                    // numeric year
            month,                   // numeric month
            monthLabel,              // month name (English)
            "ຂ່າວສານ ແລະ ກິດຈະກຳ"  // header text
          ]
            .join(" ")
            .toLowerCase();

          return haystack.includes(query);
        })
        .sort((a, b) => {
          // Newest first
          return this.parsePostDate(b) - this.parsePostDate(a);
        });
    },

    totalPages() {
      return Math.max(1, Math.ceil(this.filteredPosts.length / this.pageSize));
    },

    paginatedPosts() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredPosts.slice(start, start + this.pageSize);
    }
  },

  watch: {
    // only sync query param, no scroll here
    currentPage(newVal) {
      if (this.$router) {
        const q = { ...this.$route.query, page: newVal };
        this.$router.replace({
          name: this.$route.name,
          params: this.$route.params,
          query: q
        });
      }
    },
    // when search/filter changes: reset to page 1 + animate, but DON'T scroll to top
    searchQuery() {
      this.currentPage = 1;
      this.$nextTick(() => {
        this.animateCards();
      });
    },
    selectedYear() {
      this.currentPage = 1;
      this.$nextTick(() => {
        this.animateCards();
      });
    },
    selectedMonth() {
      this.currentPage = 1;
      this.$nextTick(() => {
        this.animateCards();
      });
    }
  },

  mounted() {
    // On first load, just animate (no auto scroll to top)
    this.animateCards();
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    parsePostDate(post) {
      // Works with date strings like "25 December 2024"
      return new Date(String(post.date).trim());
    },
    getPostYear(post) {
      return this.parsePostDate(post).getFullYear();
    },
    // Scroll to top ONLY when pagination is clicked
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
        this.$nextTick(() => {
          this.scrollToTop();
          this.animateCards();
        });
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.$nextTick(() => {
          this.scrollToTop();
          this.animateCards();
        });
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.currentPage = page;
        this.$nextTick(() => {
          this.scrollToTop();
          this.animateCards();
        });
      }
    },
    animateCards() {
      const grid = this.$refs.blogGrid;
      if (!grid) return;

      const cards = grid.querySelectorAll(".blog-card");
      if (!cards.length) return;

      gsap.killTweensOf(cards);

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 30,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.06
        }
      );
    }
  }
};
</script>

<style scoped>
/* --- Page Layout (Light Theme) --- */
.blog-page {
  min-height: 100vh;
  padding: 60px 5vw 40px;
  background: linear-gradient(180deg, #f5f7ff 0%, #ffffff 40%, #f7f9ff 100%);
  color: #0b1020;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
}

/* Make router-link behave like a normal grid item */
.blog-link {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

/* --- Header --- */
.blog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.headline h1 {
  font-size: 2.4rem;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
  color: #020617;
}

.headline p {
  opacity: 0.8;
  font-size: 0.98rem;
  color: #4b5563;
}

.badge-counter {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 16px;
  border-radius: 999px;
  background: linear-gradient(
    95deg,
    rgba(0, 3, 41, 1) 0%,
    rgba(0, 51, 171, 1) 46%
  );
  border: 1px solid rgba(191, 211, 255, 0.9);
  box-shadow:
    0 12px 26px rgba(15, 23, 42, 0.28),
    0 0 0 1px rgba(255, 255, 255, 0.4);
  color: #f9fbff;
}

.badge-counter .count {
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1;
}

.badge-counter .label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  opacity: 0.9;
}

/* --- Controls --- */
.blog-controls {
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) repeat(2, minmax(0, 1fr));
  gap: 16px;
  align-items: flex-end;

}

.control {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.control-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #6b7280;
}

/* Search */
.search-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
  background: #f9fafb;
  border-radius: 999px;
  padding: 2px 14px 2px 12px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  box-shadow: 0 10px 20px rgba(148, 163, 184, 0.25);
}

.search-icon {
  font-size: 0.92rem;
  margin-right: 6px;
  opacity: 0.8;
}

.search-input {
  border: none;
  outline: none;
  background: transparent;
  padding: 13px 4px 7px 6px;
  font-size: 0.9rem;
  width: 100%;
  color: #020617;
}

.search-input::placeholder {
  color: #9ca3af;
}

/* Selects */
.select-wrap {
  position: relative;
  border-radius: 999px;
  overflow: hidden;
  background: #f9fafb;
  border: 1px solid rgba(148, 163, 184, 0.7);
  box-shadow: 0 8px 18px rgba(148, 163, 184, 0.22);
}

.select-input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 16px 32px 7px 20px;
  font-size: 0.9rem;
  color: #020617;
  appearance: none;
}

/* Custom select arrow */
.select-wrap::after {
  content: "▾";
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-52%);
  font-size: 0.76rem;
  color: #6b7280;
  pointer-events: none;
}

/* --- Grid --- */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  gap: 22px;
}

/* --- Card --- */
.blog-card {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow:
    0 16px 30px rgba(15, 23, 42, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  transform-origin: center;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;
}

.blog-card-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top left,
    rgba(51, 119, 255, 0.1),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}

/* Image area at top of card */
.blog-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 1px solid rgba(226, 232, 240, 0.9);
}

.blog-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.03);
  transition:
    transform 0.35s ease,
    filter 0.35s ease;
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05),
    rgba(15, 23, 42, 0.15)
  );
  opacity: 0;
  transition: opacity 0.35s ease;
}

/* Card content */
.blog-card-content {
  position: relative;
  padding: 16px 20px 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* Card hover */
.blog-card:hover {
  transform: translateY(-6px) scale(1.01);
  border-color: rgba(96, 165, 250, 0.9);
  box-shadow:
    0 20px 45px rgba(15, 23, 42, 0.18),
    0 0 0 1px rgba(219, 234, 254, 0.85);
  background: #ffffff;
}

.blog-card:hover .blog-card-gradient {
  opacity: 1;
}

/* Hover effects for image */
.blog-card:hover .blog-media img {
  transform: scale(1.08);
  filter: saturate(1.1);
}

.blog-card:hover .media-overlay {
  opacity: 1;
}

/* Meta */
.blog-meta-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 0.82rem;
}
.chip i {
  margin-right: 3px;
  font-size: 19px;
  color: #0e00aa;
}
.chip {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  border: 1px solid rgba(0, 0, 0, 0.239);
  text-transform: uppercase;

  color: #000;
  font-weight: 600;
  
}

.date {
  opacity: 0.7;
  white-space: nowrap;
  color: #6b7280;
}

/* Title / Excerpt */
.blog-title {
  font-size: 1.05rem;
  line-height: 1.32;
  letter-spacing: 0.01em;
  color: #020617;
}

.blog-excerpt {
  font-size: 0.9rem;
  opacity: 0.9;
  color: #4b5563;
}

/* Footer */
.blog-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.read-more {
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 14px 8px 12px;
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 500;
  background: linear-gradient(
    95deg,
    rgba(0, 3, 41, 1) 0%,
    rgba(0, 51, 171, 1) 46%
  );
  color: #f9fbff;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow:
    0 10px 26px rgba(15, 23, 42, 0.35),
    0 0 0 1px rgba(226, 232, 240, 0.8);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease;
}

.read-more .arrow {
  font-size: 1rem;
  transform: translateX(0);
  transition: transform 0.2s ease;
}

.read-more:hover {
  transform: translateY(-1px);
  box-shadow:
    0 16px 32px rgba(15, 23, 42, 0.4),
    0 0 0 1px rgba(191, 219, 254, 0.9);
}

.read-more:hover .arrow {
  transform: translateX(3px);
}

/* Empty state */
.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 32px 16px;
  border-radius: 20px;
  background: #f9fafb;
  border: 1px dashed rgba(148, 163, 184, 0.7);
  color: #6b7280;
  font-size: 0.9rem;
}

/* --- Pagination --- */
.paginationcontainer {
  width: 100%;
  max-width: 520px;
  margin: 10px auto 0;
  height: auto;
  border: none;
}

.pagerWrap {
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 10px 14px;
  border-radius: 999px;

  background: linear-gradient(
    95deg,
    rgba(0, 3, 41, 1) 0%,
    rgba(0, 51, 171, 1) 46%
  );
  border: 1px solid rgba(191, 211, 255, 0.95);
  box-shadow:
    0 10px 24px rgba(15, 23, 42, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.45);
}

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

  color: #e5edff;
  background: rgba(15, 23, 42, 0.2);
  border: 1px solid rgba(209, 213, 219, 0.7);

  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(6px);
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background 0.16s ease,
    opacity 0.16s ease;
}

.pagerBtn:hover:not(:disabled) {
  transform: translateY(-1px);
  background: rgba(15, 23, 42, 0.35);
  box-shadow: 0 7px 16px rgba(15, 23, 42, 0.5);
}

.pagerBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.chev {
  font-size: 16px;
  line-height: 1;
}

.pagerPills {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 6px;
  border-radius: 999px;

  background: rgba(15, 23, 42, 0.25);
  border: 1px solid rgba(191, 219, 254, 0.8);
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.5);
}

.pagePill {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  cursor: pointer;

  font-size: 13px;
  font-weight: 500;

  color: #e5edff;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(209, 213, 219, 0.7);

  box-shadow: 0 3px 8px rgba(15, 23, 42, 0.5);
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    background 0.16s ease,
    color 0.16s ease,
    border-color 0.16s ease;
}

.pagePill:hover {
  transform: translateY(-1px);
  background: rgba(248, 250, 252, 0.9);
  color: #020617;
  border-color: #bfdbfe;
  box-shadow: 0 5px 12px rgba(15, 23, 42, 0.6);
}

.pagePill.active {
  background: #ffffff;
  color: #0b1120;
  border-color: #ffffff;
  box-shadow:
    0 8px 20px rgba(15, 23, 42, 0.8),
    0 0 0 3px rgba(147, 197, 253, 0.95);
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .blog-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .badge-counter {
    align-self: flex-start;
  }

  .blog-controls {
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    grid-auto-rows: auto;
  }
}

@media (max-width: 768px) {
  .blog-page {
    padding: 32px 20px 28px;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }

  .headline h1 {
    font-size: 1.8rem;
  }

  .blog-controls {
    grid-template-columns: 1fr;
  }

  .paginationcontainer {
    margin-top: 18px;
  }

  .pagerWrap {
    transform: scale(0.96);
  }
}
</style>
