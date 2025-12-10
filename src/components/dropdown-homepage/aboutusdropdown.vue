<template>
  <div
    class="dropdown-wrapper"
    :class="{ open: isOpen }"
    ref="dropdown"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
  >
    <!-- Trigger -->
    <div class="dropdown-trigger">
      <span class="label" id="mainmenudropdown">ກ່ຽວກັບເຮົາ</span>
      <span class="chevron">⌄</span>
    </div>

    <!-- Dropdown Panel (container for items) -->
    <div class="dropdown-panel" ref="panel">
      <div class="dropdown-container">
        <div class="dropdown-item">
          <router-link to="/aboutus/vision"><span>ວິໄສທັດ ແລະ ພາລະກິດ</span></router-link>
          
        
        </div>
                <div class="dropdown-divider"></div>
        <div class="dropdown-item">
          <router-link to="/aboutus/role">
          <span>ພາລະບົດບາດ</span></router-link>
      
        </div>
                <div class="dropdown-divider"></div>
        <div class="dropdown-item">
          <router-link to="/aboutus/history">
          <span>ຄວາມເປັນມາ </span></router-link>
         
        </div>

        <div class="dropdown-divider"></div>

        <div class="dropdown-item">
          <router-link to="/aboutus/board_director">
          <span>ສະພາຜູ້ບໍລິຫານ</span></router-link>
        
        </div>
         <div class="dropdown-divider"></div>

        <div class="dropdown-item">
          <router-link to="/aboutus/companystructureimage">
          <span>ໂຄງຮ່າງການຈັດຕັ້ງ</span></router-link>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";

const dropdown = ref(null);
const panel = ref(null);
const isOpen = ref(false);
let hideTimeout = null;

const openDropdown = () => {
  if (isOpen.value) return;
  isOpen.value = true;

  const panelEl = panel.value;
  if (!panelEl) return;

  const items = panelEl.querySelectorAll(".dropdown-item");

  clearTimeout(hideTimeout);
  gsap.killTweensOf(panelEl);
  gsap.killTweensOf(items);

  gsap.fromTo(
    panelEl,
    { opacity: 0, y: -6 },
    {
      opacity: 1,
      y: 0,
      duration: 0.25,
      ease: "power2.out",
      onStart: () => {
        panelEl.style.pointerEvents = "auto";
      }
    }
  );

  gsap.fromTo(
    items,
    { opacity: 0, y: 6 },
    {
      opacity: 1,
      y: 0,
      duration: 0.25,
      ease: "power2.out",
      stagger: 0.04
    }
  );
};

const closeDropdown = () => {
  if (!isOpen.value) return;
  isOpen.value = false;

  const panelEl = panel.value;
  if (!panelEl) return;

  const items = panelEl.querySelectorAll(".dropdown-item");

  gsap.killTweensOf(panelEl);
  gsap.killTweensOf(items);

  gsap.to(panelEl, {
    opacity: 0,
    y: -6,
    duration: 0.2,
    ease: "power2.in",
    onComplete: () => {
      panelEl.style.pointerEvents = "none";
    }
  });

  gsap.to(items, {
    opacity: 0,
    y: 4,
    duration: 0.18,
    ease: "power2.in"
  });
};

const handleEnter = () => {
  clearTimeout(hideTimeout);
  openDropdown();
};

const handleLeave = () => {
  hideTimeout = setTimeout(closeDropdown, 120);
};
</script>

<style scoped>
.dropdown-wrapper {
  position: relative;
  display: inline-block;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    sans-serif;
}

/* Trigger */
.dropdown-trigger {
  padding: 12px 20px;
  border-radius: 999px;


  cursor: pointer;
  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 8px;
  transition: border-color 0.2s ease, background 0.2s ease,
    transform 0.15s ease;
  color: #fff;
}

.dropdown-trigger:hover {

  transform: translateY(-1px);
}

.dropdown-trigger span.label {

 font-weight: 500;
  font-size: 1.2rem;
     font-family: "Noto Sans Lao", sans-serif;
}

.dropdown-trigger span.chevron {
  font-size: 14px;
  transition: transform 0.25s ease;
  display: inline-block;
}

.dropdown-wrapper.open .dropdown-trigger span.chevron {
  transform: rotate(180deg);
}

/* Panel */
.dropdown-panel {
  position: absolute;
  top: 110%;
  left: 0;
  min-width: 320px;
  padding: 10px;
  border-radius: 18px;
  margin-top: 8px;

  background: rgba(15, 23, 42, 0.98);
  border: 1px solid rgba(148, 163, 184, 0.4);
  box-shadow:
    0 18px 45px rgba(15, 23, 42, 0.7),
    0 0 0 1px rgba(15, 23, 42, 0.7);

  opacity: 0;
  pointer-events: none;
  transform: translateY(-6px);
}

.dropdown-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dropdown-item {
  padding: 10px 10px;
  border-radius: 12px;
  font-size: 1.2rem;
     font-family: "Noto Sans Lao", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #e5e7eb;
  transition: background 0.15s ease, transform 0.15s ease, color 0.15s ease;
}

.dropdown-item span.secondary {
  font-size: 12px;
  opacity: 0.65;
}

.dropdown-item:hover {
  background: rgba(55, 65, 81, 0.8);
  transform: translateY(-1px);
  color: #f9fafb;
}

.dropdown-divider {
  margin: 6px 4px;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(148, 163, 184, 0),
    rgba(148, 163, 184, 0.7),
    rgba(148, 163, 184, 0)
  );
}
@media (max-width : 1350px) {
    #mainmenudropdown{
      font-size: 1rem;
    }
}

</style>
