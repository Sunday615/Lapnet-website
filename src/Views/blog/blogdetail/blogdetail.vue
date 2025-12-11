<template>
  <div class="detail-wrapper">
    <!-- NAVBAR -->
    <main_navbar
      title="ຂ່າວສານ ແລະ ກິດຈະກຳ"
      :breadcrumb="[
        'ໜ້າຫຼັກ',
        'ຂ່າວສານ ແລະ ກິດຈະກຳ',
        'ລາຍລະອຽດ ຂ່າວສານ ແລະ ກິດຈະກຳ'
      ]"
      background-image="/blog/bgnewsgrid.png"
    />

    <div class="boxmargin" style="width: 100%; height: 10vh"></div>

    <!-- MAIN CONTENT -->
    <section class="detail-page">
      <!-- Header -->
      <header class="detail-header">
        <div class="headline-left">
          <button class="back-btn" @click="goBack">
            <span class="back-icon">←</span>
            <span class="back-text">Back to news</span>
          </button>

          <div class="headline">
            <h1 style="font-weight: bold">
              ລາຍລະອຽດ ຂ່າວສານ ແລະ ກິດຈະກຳ
            </h1>
            <p>ອ່ານລາຍລະອຽດຂ່າວສານ ແລະ ກິດຈະກຳ.</p>
          </div>
        </div>

        <div class="badge-counter">
          <span class="count">{{ latestPosts.length }}</span>
          <span class="label">Latest News</span>
        </div>
      </header>

      <div v-if="!activePost" class="not-found">
        <p>ບໍ່ພົບຂ່າວສານ ແລະ ກີດຈະກຳ</p>
        <button class="back-btn" @click="goBack">
          <span class="back-icon">←</span>
          <span class="back-text">Back to news</span>
        </button>
      </div>

      <!-- Layout: Left Detail / Right Sidebar -->
      <div v-else class="detail-layout">
        <!-- LEFT: Blog Detail -->
        <main class="detail-main" ref="detailMain">
          <!-- Category + Meta -->
          <div class="post-meta">
            <span class="chip"> <i class="fa-solid fa-tags"></i>{{ activePost.category }}</span>
            <span class="meta-text">
              {{ activePost.date }} · {{ activePost.readTime }}
            </span>
          </div>

          <!-- Title -->
          <h2 class="post-title">
            {{ activePost.title }}
          </h2>

          <!-- Tags for this post -->
          <div
            class="post-tags"
            v-if="activePost.tags && activePost.tags.length"
          >
            <span
              v-for="tag in activePost.tags"
              :key="tag"
              class="tag-pill"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- Hero Image -->
          <div class="hero-image" v-if="activePost.heroImage">
            <img :src="activePost.heroImage" :alt="activePost.title" />
          </div>

          <!-- Gallery (1–5+ images) -->
          <div
            class="image-grid"
            v-if="activePost.gallery && activePost.gallery.length"
            ref="imageGrid"
          >
            <figure
              v-for="(img, idx) in activePost.gallery"
              :key="idx"
              class="image-item"
              @click="openLightbox(idx)"
            >
              <img :src="img.src" :alt="img.alt || activePost.title" />
            </figure>
          </div>

          <!-- Content -->
          <article class="post-body">
            <p
              v-for="(paragraph, index) in activePost.content"
              :key="index"
              class="post-paragraph"
            >
              {{ paragraph }}
            </p>
          </article>
        </main>

        <!-- RIGHT: Sidebar -->
        <aside class="detail-sidebar" ref="detailSidebar">
          <!-- Search + Tags -->
          <div class="sidebar-card filters-card">
            <h3 class="sidebar-title">Search & Tags</h3>

            <!-- Search -->
            <div class="sidebar-block">
              <span class="control-label">Search</span>
              <div class="search-input-wrap">
                <span class="search-icon">🔍</span>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search latest news..."
                  class="search-input"
                />
              </div>
            </div>

            <!-- Tag Checkboxes -->
            <div class="sidebar-block">
              <span class="control-label">Filter by tag</span>
              <div class="tags-checkboxes">
                <label
                  v-for="tag in tagFilters"
                  :key="tag.id"
                  class="tag-checkbox"
                >
                  <input
                    type="checkbox"
                    :value="tag.id"
                    v-model="selectedTags"
                  />
                  <span class="checkmark"></span>
                  <span class="label-text">{{ tag.label }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Latest News -->
          <div class="sidebar-card latest-card">
            <h3 class="sidebar-title">Latest news</h3>
            <div class="latest-list" ref="latestList">
              <!-- CLICKABLE → go to BlogDetail by id -->
              <router-link
                v-for="post in filteredLatestPosts"
                :key="post.id"
                class="latest-link"
                :to="{ name: 'BlogDetail', params: { id: post.id } }"
              >
                <article class="latest-item">
                  <div class="latest-thumb">
                    <img :src="post.image" :alt="post.title" />
                  </div>
                  <div class="latest-content">
                    <p class="latest-date">{{ post.date }}</p>
                    <h4 class="latest-title">
                      {{ post.title }}
                    </h4>
                    <p class="latest-tag">
                      {{ post.category }}
                    </p>
                  </div>
                </article>
              </router-link>

              <p
                v-if="!filteredLatestPosts.length"
                class="latest-empty"
              >
                ບໍ່ພົບຂ່າວສານທີ່ຄົ້ນຫາ!
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Lightbox Overlay -->
    <div
      v-if="isLightboxOpen && currentLightboxImage"
      class="lightbox-overlay"
      ref="lightboxOverlay"
      @click.self="closeLightbox"
    >
      <button class="lightbox-close" @click="closeLightbox">
        ✕
      </button>

      <div
        class="lightbox-inner"
        :class="{ 'vertical-scroll': isVerticalImage }"
      >
        <img
          :src="currentLightboxImage.src"
          :alt="currentLightboxImage.alt || activePost.title"
          ref="lightboxImg"
        />
      </div>
    </div>

    <div class="boxmargin" style="width: 100%; height: 10vh"></div>
    <!-- FOOTER -->
    <mainfooter />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { getPostById, getLatestPosts } from "../../../data/blogDetailsDummy.js";

import main_navbar from "../../../components/miannavbar/main_navbar.vue";
import mainfooter from "../../../components/footer/mainfooter/secondfooter.vue";

export default {
  name: "BlogDetail",

  components: {
    main_navbar,
    mainfooter
  },

  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },

  data() {
    return {
      // Sidebar search + tag filters
      searchQuery: "",
      tagFilters: [
        { id: "Meetings", label: "Meetings" },
        { id: "Contract", label: "Contract" },
        { id: "Notification", label: "Notification" },
        { id: "Activity", label: "Activity" },
        { id: "Grand opening", label: "Grand Opening" },
        { id: "Events", label: "Events" }
      ],
      selectedTags: [],

      // Lightbox state
      isLightboxOpen: false,
      activeImageIndex: null,
      isVerticalImage: false
    };
  },

  computed: {
    // main detail by id
    activePost() {
      return getPostById(this.id);
    },

    // latest from same dummy data
    latestPosts() {
      return getLatestPosts(5);
    },

    filteredLatestPosts() {
      const q = this.searchQuery.trim().toLowerCase();
      const hasTagFilter = this.selectedTags.length > 0;

      return this.latestPosts.filter((post) => {
        // Tag filter
        if (hasTagFilter) {
          const matchTag = post.tags?.some((t) =>
            this.selectedTags.includes(t)
          );
          if (!matchTag) return false;
        }

        // Search filter
        if (!q) return true;
        const haystack = (
          post.title +
          " " +
          post.category +
          " " +
          (post.tags || []).join(" ")
        ).toLowerCase();
        return haystack.includes(q);
      });
    },

    // current lightbox image
    currentLightboxImage() {
      if (!this.activePost || !this.activePost.gallery) return null;
      return this.activePost.gallery[this.activeImageIndex] || null;
    }
  },

  watch: {
    searchQuery() {
      this.$nextTick(() => this.animateLatest());
    },
    selectedTags() {
      this.$nextTick(() => this.animateLatest());
    }
    // ❌ removed `id()` watcher to avoid double refresh
  },

  mounted() {
    // Scroll to top on first load
    this.scrollToTop();
    this.animateIntro();
  },

  // For Vue 2 + vue-router: handle param change (click latest news)
  beforeRouteUpdate(to, from, next) {
    next();
    this.scrollToTop();
    this.$nextTick(() => {
      this.animateIntro();
    });
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },

    goBack() {
      const page =
        this.$route && this.$route.query ? this.$route.query.page : null;

      // If we know which page we came from, go directly there
      if (this.$router && page) {
        this.$router.push({
          name: "BlogGrid",
          query: { page }
        });
        return;
      }

      // Fallback: normal history behavior
      if (window.history.length > 1 && this.$router) {
        this.$router.back();
      } else if (this.$router) {
        this.$router.push({ name: "BlogGrid" });
      }
    },

    // Intro animation for header + layout + gallery + latest list
    animateIntro() {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      tl.from(".detail-header", {
        opacity: 0,
        y: -24,
        duration: 0.6
      })
        .from(
          this.$refs.detailMain,
          {
            opacity: 0,
            x: -24,
            duration: 0.55
          },
          "-=0.25"
        )
        .from(
          this.$refs.detailSidebar,
          {
            opacity: 0,
            x: 24,
            duration: 0.55
          },
          "-=0.4"
        )
        .add(() => {
          this.animateGallery();
          this.animateLatest();
        }, "-=0.2");
    },

    // Animate gallery images
    animateGallery() {
      const grid = this.$refs.imageGrid;
      if (!grid || !this.activePost?.gallery?.length) return;

      const items = grid.querySelectorAll(".image-item");
      if (!items.length) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 18,
          scale: 0.96
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08
        }
      );
    },

    // Animate latest news items when filter/search changes
    animateLatest() {
      const list = this.$refs.latestList;
      if (!list) return;

      const items = list.querySelectorAll(".latest-item");
      if (!items.length) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 14
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.05
        }
      );
    },

    // Open lightbox with GSAP animation + vertical image detection
    openLightbox(index) {
      if (!this.activePost?.gallery || !this.activePost.gallery[index]) return;

      this.activeImageIndex = index;
      this.isLightboxOpen = true;
      this.isVerticalImage = false; // reset

      this.$nextTick(() => {
        const overlay = this.$refs.lightboxOverlay;
        const img = this.$refs.lightboxImg;
        if (!overlay || !img) return;

        const runAnimation = () => {
          // Decide if image is "vertical / tall" compared to viewport
          const naturalW = img.naturalWidth || 1;
          const naturalH = img.naturalHeight || 1;
          const imgRatio = naturalH / naturalW;
          const viewportRatio = window.innerHeight / window.innerWidth;

          // If image ratio is taller than viewport, enable scroll mode
          this.isVerticalImage = imgRatio > viewportRatio;

          // Lightbox animation
          gsap.set(overlay, { autoAlpha: 0 });
          gsap.set(img, { autoAlpha: 0, scale: 0.96, y: 20 });

          const tl = gsap.timeline();
          tl.to(overlay, {
            autoAlpha: 1,
            duration: 0.2,
            ease: "power2.out"
          }).to(
            img,
            {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              duration: 0.35,
              ease: "power3.out"
            },
            "-=0.05"
          );
        };

        // If already loaded (from cache), no load event
        if (img.complete) {
          runAnimation();
        } else {
          img.addEventListener("load", runAnimation, { once: true });
        }
      });
    },

    // Close lightbox with reverse animation
    closeLightbox() {
      const overlay = this.$refs.lightboxOverlay;
      const img = this.$refs.lightboxImg;

      if (!overlay || !img) {
        this.isLightboxOpen = false;
        this.activeImageIndex = null;
        this.isVerticalImage = false;
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          this.isLightboxOpen = false;
          this.activeImageIndex = null;
          this.isVerticalImage = false;
        }
      });

      tl.to(img, {
        autoAlpha: 0,
        scale: 0.96,
        y: 10,
        duration: 0.2,
        ease: "power2.inOut"
      }).to(
        overlay,
        {
          autoAlpha: 0,
          duration: 0.25,
          ease: "power2.inOut"
        },
        "-=0.1"
      );
    }
  }
};
</script>

<style scoped>
/* your original styles, plus lightbox */
.boxmargin {
  background: linear-gradient(180deg, #f5f7ff 0%, #ffffff 40%, #f7f9ff 100%);
}
.detail-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.detail-page {
  flex: 1;
  padding: 60px 5vw 40px;
  background: linear-gradient(180deg, #f5f7ff 0%, #ffffff 40%, #f7f9ff 100%);
  color: #0b1020;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.headline-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Modern back button */
.back-btn {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 7px;
  border-radius: 999px;
  border: 1px solid rgba(191, 211, 255, 0.9);
  background: linear-gradient(
    95deg,
    rgba(0, 3, 41, 1) 0%,
    rgba(0, 51, 171, 1) 46%
  );
  color: #e5edff;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow:
    0 10px 22px rgba(15, 23, 42, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;
}

.back-icon {
  font-size: 1rem;
  transform: translateX(0);
  transition: transform 0.2s ease;
}

.back-btn:hover {
  transform: translateY(-1px);
  border-color: #bfdbfe;
  box-shadow:
    0 16px 30px rgba(15, 23, 42, 0.45),
    0 0 0 1px rgba(219, 234, 254, 0.9);
}

.back-btn:hover .back-icon {
  transform: translateX(-2px);
}

.headline h1 {
  font-size: 2.2rem;
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

/* Not found */
.not-found {
  margin-top: 32px;
  max-width: 480px;
  padding: 20px;
  border-radius: 18px;
  background: #f9fafb;
  border: 1px dashed rgba(148, 163, 184, 0.8);
  color: #4b5563;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Layout */
.detail-layout {
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(280px, 1fr);
  gap: 28px;
  align-items: flex-start;
}

/* LEFT */
.detail-main {
  background: #ffffff;
  border-radius: 24px;
  padding: 22px 24px 26px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow:
    0 16px 32px rgba(15, 23, 42, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.9);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
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

.meta-text {
  font-size: 0.82rem;
  color: #6b7280;
}

.post-title {
  font-size: 1.6rem;
  line-height: 1.4;
  margin-bottom: 8px;
  color: #020617;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.tag-pill {
  font-size: 0.78rem;
  padding: 4px 9px;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid rgba(129, 140, 248, 0.5);
}

.hero-image {
  margin-bottom: 18px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(209, 213, 219, 0.8);
  box-shadow: 0 16px 26px rgba(15, 23, 42, 0.15);
}

.hero-image img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}

.image-item {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(209, 213, 219, 0.8);
  cursor: pointer;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.03);
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

.image-item:hover img {
  transform: scale(1.08);
  filter: saturate(1.1);
}

.post-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post-paragraph {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #374151;
}

/* RIGHT */
.detail-sidebar {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.sidebar-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 16px 16px 18px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow:
    0 14px 30px rgba(15, 23, 42, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.sidebar-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #020617;
}

.control-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #6b7280;
}

.sidebar-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
}

.search-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
  background: #f9fafb;
  border-radius: 999px;
  padding: 2px 14px 2px 12px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  box-shadow: 0 8px 18px rgba(148, 163, 184, 0.2);
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
  padding: 7px 4px 7px 0;
  font-size: 0.9rem;
  width: 100%;
  color: #020617;
}

.search-input::placeholder {
  color: #9ca3af;
}

.tags-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tag-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.86rem;
  cursor: pointer;
  color: #374151;
}

.tag-checkbox input {
  display: none;
}

.checkmark {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid rgba(148, 163, 184, 0.9);
  background: #f9fafb;
  position: relative;
  flex-shrink: 0;
}

.tag-checkbox input:checked + .checkmark {
  background: linear-gradient(
    95deg,
    rgba(0, 3, 41, 1) 0%,
    rgba(0, 51, 171, 1) 46%
  );
  border-color: transparent;
}

.tag-checkbox input:checked + .checkmark::after {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  font-size: 0.7rem;
  color: #eff6ff;
}

.label-text {
  font-size: 0.86rem;
}

.latest-list {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* router-link wrapper for latest items */
.latest-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.latest-item {
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  gap: 10px;
  padding: 8px;
  border-radius: 14px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.18s ease;
}

.latest-item:hover {
  background: #eff6ff;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
  transform: translateY(-2px);
}

.latest-thumb {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(209, 213, 219, 0.9);
}

.latest-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.latest-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.latest-date {
  font-size: 0.75rem;
  color: #6b7280;
}

.latest-title {
  font-size: 0.9rem;
  color: #020617;
}

.latest-tag {
  font-size: 0.78rem;
  color: #1d4ed8;
}

.latest-empty {
  font-size: 0.86rem;
  color: #6b7280;
  padding: 8px;
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: radial-gradient(
    circle at top,
    rgba(15, 23, 42, 0.95) 0%,
    rgba(15, 23, 42, 0.98) 45%,
    rgba(15, 23, 42, 1) 100%
  );
  backdrop-filter: blur(8px);
}

.lightbox-inner {
  max-width: 1100px;
  width: 100%;
  max-height: 90vh;
  border-radius: 22px;
  overflow: hidden;
  background: #020617;
  box-shadow:
    0 30px 80px rgba(15, 23, 42, 0.9),
    0 0 0 1px rgba(148, 163, 184, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-inner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: radial-gradient(circle at center, #0f172a, #020617);
}

/* When the image is very vertical, allow scrolling inside lightbox */
.lightbox-inner.vertical-scroll {
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px;
}

.lightbox-inner.vertical-scroll img {
  width: auto;
  max-width: 100%;
  height: auto;
}

.lightbox-close {
  position: fixed;
  top: 24px;
  right: 26px;
  z-index: 1000;
  border: none;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 1rem;
  cursor: pointer;
  background: rgba(15, 23, 42, 0.9);
  color: #e5edff;
  box-shadow:
    0 10px 24px rgba(15, 23, 42, 0.8),
    0 0 0 1px rgba(148, 163, 184, 0.6);
  backdrop-filter: blur(6px);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease;
}

.lightbox-close:hover {
  transform: translateY(-1px);
  background: rgba(30, 64, 175, 0.98);
  box-shadow:
    0 18px 40px rgba(15, 23, 42, 0.95),
    0 0 0 1px rgba(219, 234, 254, 0.9);
}

/* Responsive */
@media (max-width: 1024px) {
  .detail-layout {
    grid-template-columns: minmax(0, 1.6fr) minmax(260px, 1fr);
  }

  .detail-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .badge-counter {
    align-self: flex-start;
  }
}


@media (max-width: 900px) {
  .detail-layout {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

 
  .detail-sidebar {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }




  .filters-card {
    order: 1;
  }


  .latest-card {
    order: 2;
  }
}

</style>
