<script setup>
import { ref, watch } from "vue";

// Define props excluding isCollapsed
const props = defineProps({
  isActive: Boolean,
  icon: String,
  title: String,
  hasSubmenu: Boolean,
  submenu: Array,
  activeSubmenu: String,
});

const emit = defineEmits(["toggle", "setActiveSubmenu"]);

// Define internal isCollapsed state
const isCollapsed = ref(true); // Initially collapsed

// Function to toggle isCollapsed state
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

// Watch for changes in isActive prop to auto-expand when active
watch(
  () => props.isActive,
  (newValue, oldValue) => {

   
    if (newValue) {
      isCollapsed.value = false; // Expand when active
    }
    if (oldValue) {
      isCollapsed.value = false; // keep Expanded
    }
    // Do nothing when inactive (keep the current collapsed/expanded state)
  }
);

const toggleMenu = () => {
  emit("toggle");
};

const setActiveSubmenu = (submenu) => {
  emit("setActiveSubmenu", submenu);
};
</script>

<template>
  <li class="nav-item">
    <a href="#" class="nav-link" :class="{ active: isActive }">
      <i @click="toggleMenu" :class="icon"></i>
      <span @click="toggleMenu">{{ title }}</span>
      <i
        @click="toggleCollapse"
        v-if="hasSubmenu"
        class="bi"
        :class="!isCollapsed ? 'bi-chevron-up' : 'bi-chevron-down'"
      ></i>
    </a>
    <ul v-if="!isCollapsed && hasSubmenu" class="submenu">
      <li
        v-for="item in submenu"
        :key="item.name"
        :class="{ 'submenu-active': activeSubmenu === item.name }"
      >
        <a href="#" class="submenu-link" @click="setActiveSubmenu(item.name)">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </li>
</template>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  padding: 10px 10px;
  font-weight: 500;
  color: #6c757d;
  transition: padding 0.3s ease, color 0.3s ease;
}

.nav-link i {
  margin-right: 10px;
}

.nav-link span {
  width: 100%;
  text-align: left;
  transition: opacity 0.3s ease;
}

.nav-link.active {
  color: #ff6666;
  font-weight: bold;
  background-color: #f9f9fb;
  border-radius: 2px;
}

.nav-link:hover {
  color: #ff6666;
  font-weight: bold;
  background-color: #f9f9fb;
  border-radius: 2px;
}

.submenu {
  padding-left: 2.3rem;
  list-style: none;
  margin-top: 0.5rem;
}

.submenu-link {
  display: block;
  padding: 5px 0;
  color: #6c757d;
  text-decoration: none;
  position: relative;
  font-weight: 400;
  padding-left: 15px;
  width: 100%;
  text-align: left;
}

.submenu-link::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 0;
  height: 100%;
  width: 2px;
  background-color: #d3d3d3;
  transition: background-color 0.3s ease;
}

.submenu-link::before:hover {
  background-color: #ff6666;
}

.submenu-active .submenu-link::before {
  background-color: #ff6666;
}

.submenu-active .submenu-link {
  color: #ff6666;
}

.submenu-link:hover::before {
  background-color: #ff6666;
}

.submenu-link:hover {
  color: #ff6666;
}
</style>
