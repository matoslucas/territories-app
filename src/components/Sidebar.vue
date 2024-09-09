<script setup>
import { ref } from "vue";
import SidebarHeader from "./SidebarHeader.vue";
import SidebarItem from "./SidebarItem.vue";
import SidebarFooter from "./SidebarFooter.vue";

// Import components directly without the need for an export default block
const isCollapsed = ref(false);
const activeMenus = ref({
  plan: false,
  accounts: false,
  data: false,
  settings: false,
  help: false,
});
const activeSubmenu = ref(null);

// Function to toggle the sidebar
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

// Function to toggle menus
const toggleMenu = (menu) => {
  activeMenus.value[menu] = !activeMenus.value[menu];
};

// Function to set the active submenu
const setActiveSubmenu = (submenu) => {
  activeSubmenu.value = submenu;
};
</script>
<template>
  <aside :class="['sidebar', isCollapsed ? 'collapsed' : '']">
    <!-- Sidebar header -->
    <SidebarHeader :isCollapsed="isCollapsed" @toggleSidebar="toggleSidebar" />

    <!-- Navigation items -->
    <ul class="nav flex-column">
      <SidebarItem
        :isCollapsed="isCollapsed"
        :isActive="activeMenus.plan"
        icon="bi bi-clipboard"
        title="Plan"
        :hasSubmenu="true"
        :submenu="[
          { name: 'plans', label: 'Plans' },
          { name: 'scoring', label: 'Scoring' },
          { name: 'capacity', label: 'Capacity' },
          { name: 'territories', label: 'Territories' },
        ]"
        :activeSubmenu="activeSubmenu"
        @toggle="toggleMenu('plan')"
        @setActiveSubmenu="setActiveSubmenu"
      />

      <SidebarItem
        :isCollapsed="isCollapsed"
        :isActive="activeMenus.accounts"
        icon="bi bi-people"
        title="Accounts"
        :hasSubmenu="false"
        @toggle="toggleMenu('accounts')"
      />

      <SidebarItem
        :isCollapsed="isCollapsed"
        :isActive="activeMenus.data"
        icon="bi bi-database"
        title="Data"
        :hasSubmenu="true"
        :submenu="[
          { name: 'option1', label: 'Option 1' },
          { name: 'option2', label: 'Option 2' },
        ]"
        :activeSubmenu="activeSubmenu"
        @toggle="toggleMenu('data')"
        @setActiveSubmenu="setActiveSubmenu"
      />

      <SidebarItem
        :isCollapsed="isCollapsed"
        :isActive="activeMenus.settings"
        icon="bi bi-gear"
        title="Settings"
        :hasSubmenu="false"
        @toggle="toggleMenu('settings')"
      />

      <SidebarItem
        :isCollapsed="isCollapsed"
        :isActive="activeMenus.help"
        icon="bi bi-question-circle"
        title="Need Help?"
        :hasSubmenu="false"
        @toggle="toggleMenu('help')"
      />
    </ul>
    <!-- Space  -->
    <div style="display: flex; height: 100%"></div>

    <!-- Sidebar footer -->
    <SidebarFooter :isCollapsed="isCollapsed" />
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #ffffff;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
}
.sidebar.collapsed {
  width: 80px;
}
</style>
