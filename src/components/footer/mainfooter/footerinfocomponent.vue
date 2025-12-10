<!-- ChevronBanner.vue -->
<template>
  <section class="chevron-banner">
    <div class="chevron-banner__content">
      <slot />
    </div>
  </section>
</template>

<script setup>
// purely presentational
</script>

<style scoped>
.chevron-banner {
  position: relative;
  width: 100%;      /* 100% of container width */
  height: 20vh;     /* <== requested height */
  background: #050f2c; /* dark left background */
  overflow: hidden;
}

/* White arrow border */
.chevron-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #ffffff;
  clip-path: polygon(
    40% 0,
    100% 0,
    100% 100%,
    40% 100%,
    52% 50%
  );
}

/* Blue panel with inner chevron */
.chevron-banner::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #0033aa;
  clip-path: polygon(
    42% 0,
    100% 0,
    100% 100%,
    42% 100%,
    54% 50%
  );
}

/* Content area on the blue side */
.chevron-banner__content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* push content into blue part */
  padding: 0 3rem;
  color: #ffffff;

}
</style>
