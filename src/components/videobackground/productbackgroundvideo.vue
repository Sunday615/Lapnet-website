<template>
  <section class="video-bg">
    <!-- Background video -->
    <video
      class="video-bg__video"
      :src="src"
      :poster="poster"
      autoplay
      muted
      loop
      playsinline
    ></video>

    <!-- Blue tech overlay -->
    <div class="video-bg__overlay"></div>

    <!-- Your content goes here -->
    <div class="video-bg__content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  src: string
  poster?: string
}

defineProps<Props>()
</script>

<style scoped>
.video-bg {
  position: relative;
  width: 100%;
  min-height: 100%;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: #020617; /* fallback */
}

/* responsive full-bleed video */
.video-bg__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.2) contrast(1.05);
  transform: scale(1.02);
}

/* blue gradient overlay */
.video-bg__overlay {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background:
    radial-gradient(circle at 10% 10%, rgba(56, 189, 248, 0.25), transparent 55%),
    radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.4), transparent 55%),
    linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95));
  mix-blend-mode: multiply;
}

/* layer where you put your container */
.video-bg__content {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* optional: make children responsive */
.video-bg__content > * {
  max-width: 1500px;
  width: 100%;
}
</style>
