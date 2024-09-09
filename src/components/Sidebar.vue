<script setup>
import { ref } from "vue";
import SidebarHeader from "./SidebarHeader.vue";
import SidebarItem from "./SidebarItem.vue";

const isCollapsed = ref(false);
const activeMenus = ref({
  plan: false,
  accounts: false,
  data: false,
  settings: false,
  help: false,
  workspace: false,
  logout: false,
});
const activeSubmenu = ref(null);

// Function to toggle the sidebar
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

// Function to toggle menus, ensuring only one menu is active at a time
const toggleMenu = (menu) => {
  // Deactivate all other menus
  for (const key in activeMenus.value) {
    if (key !== menu) {
      activeMenus.value[key] = false;
    }
  }
  // Toggle the selected menu
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
        :isActive="activeMenus.accounts"
        icon="bi bi-people"
        title="Accounts"
        :hasSubmenu="false"
        @toggle="toggleMenu('accounts')"
      />
      <hr style="margin: 0.5rem 0" />

      <SidebarItem
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
        :isActive="activeMenus.settings"
        icon="bi bi-gear"
        title="Settings"
        :hasSubmenu="false"
        @toggle="toggleMenu('settings')"
      />

      <SidebarItem
        :isActive="activeMenus.help"
        icon="bi bi-question-circle"
        title="Need Help?"
        :hasSubmenu="false"
        @toggle="toggleMenu('help')"
      />
    </ul>

    <!-- Space  -->
    <div style="height: 100%"></div>

    <!-- Sidebar footer -->
    <ul class="nav flex-column">
      <SidebarItem
        :isActive="activeMenus.workspace"
        icon="bi bi-person"
        title="Workspace Name"
        :hasSubmenu="false"
        @toggle="toggleMenu('workspace')"
      />
      <hr style="margin: 0.5rem 0" />

      <SidebarItem
        :isActive="activeMenus.logout"
        icon="bi bi-box-arrow-right"
        title="Log Out"
        :hasSubmenu="false"
        @toggle="toggleMenu('logout')"
      />
    </ul>
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
