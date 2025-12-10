<template>
  <nav class="tabs-nav">
    <ul class="tabs-list">
      <li
        v-for="tab in tabs"
        :key="tab.key"
        :class="['tab-item', { 'is-active': tab.key === activeTab }]"
        @click="selectTab(tab.key)"
      >
        {{ tab.label }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()


const tabs = [
  { key: 'board_of_director', label: 'ຄະນະສະພາຜູ້ບໍລິຫານ' },
  { key: 'boarddirector_audit', label: 'ຄະນະກຳມະການກວດກາ' },
  { key: 'policy', label: 'ຄະນະກຳມະການຄົ້ນຄວ້ານະໂຍບາຍ' },
  { key: 'risk', label: 'ຄະນະກຳມະການຄຸ້ມຄອງຄວາມສ່ຽງ' },
  { key: 'develop', label: 'ຄະນະກຳມະການຕິດຕາມພັດທະນາລະບົບ' },

]


const tabRouteMap = {
  board_of_director: '/aboutus/board_director',
  'boarddirector_audit': '/board_of_director/audit_committee',
  policy: '/board_of_director/policy_research_committee',
  risk: '/board_of_director/riskmanagemen_committee',
  develop: '/board_of_director/develop_committee',

}


const activeTab = ref(
  Object.keys(tabRouteMap).find(
    (key) => tabRouteMap[key] === route.path
  ) || tabs[0].key
)


const selectTab = (key) => {
  activeTab.value = key
  const path = tabRouteMap[key]
  if (path && path !== route.path) {
    router.push(path)
  }
}


watch(
  () => route.path,
  (newPath) => {
    const foundKey = Object.keys(tabRouteMap).find(
      (key) => tabRouteMap[key] === newPath
    )
    if (foundKey) {
      activeTab.value = foundKey
    }
  }
)
</script>

<style scoped>

.tabs-nav {
  width: 90%;
  background: #f5f7fb;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  display: flex;
  justify-content: center;
}

.tabs-list {
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 0 24px;
  margin: 0;
  list-style: none;
  overflow-x: auto;
}

.tabs-list::-webkit-scrollbar {
  height: 3px;
}
.tabs-list::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.7);
  border-radius: 999px;
}

.tab-item {
  position: relative;
  padding: 14px 4px 12px;
  font-size: var(--fs-sm);
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
}

.tab-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  border-radius: 999px;
  background: linear-gradient(
    95deg,
    rgba(0, 238, 255, 1) 0%,
    rgba(0, 51, 171, 1) 76%
  );
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease-out;
}

.tab-item:hover {
  color: #0f172a;
  transform: translateY(-1px);
}

.tab-item:hover::after {
  transform: scaleX(1);
}

.tab-item.is-active {
  color: #0f172a;
  font-weight: 600;
}

.tab-item.is-active::after {
  transform: scaleX(1);
}

@media (max-width: 768px) {
  .tabs-list {
    gap: 20px;
    padding-inline: 16px;
  }

  .tab-item {
    font-size: 14px;
    padding: 12px 2px 10px;
  }
}
</style>
