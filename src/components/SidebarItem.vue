<template>
  <li class="nav-item">
    <a
      href="#"
      class="nav-link"
      @click="toggleMenu"
      :class="{ active: isActive }"
    >
      <i :class="icon"></i>
      <span v-if="!isCollapsed">{{ title }}</span>
      <i
        v-if="!isCollapsed && hasSubmenu"
        class="bi"
        :class="isActive ? 'bi-chevron-up' : 'bi-chevron-down'"
      ></i>
    </a>
    <ul v-if="isActive && hasSubmenu" class="submenu">
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

<script>
export default {
  props: {
    isCollapsed: Boolean,
    isActive: Boolean,
    icon: String,
    title: String,
    hasSubmenu: Boolean,
    submenu: Array,
    activeSubmenu: String,
  },
  emits: ['toggle', 'setActiveSubmenu'],
  setup(props, { emit }) {
    const toggleMenu = () => {
      emit('toggle');
    };

    const setActiveSubmenu = (submenu) => {
      emit('setActiveSubmenu', submenu);
    };

    return {
      toggleMenu,
      setActiveSubmenu,
    };
  },
};
</script>

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
  padding-left: 15px; /* Create space for vertical line */
  width: 100%;
  text-align: left;
}
.submenu-link::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 0;
  height: 100%;
  width: 2px;
  background-color: #d3d3d3; /* Grey for inactive state */
  transition: background-color 0.3s ease;
}
.submenu-link::before:hover {
  background-color: #ff6666;
}
.submenu-active .submenu-link::before {
  background-color: #ff6666; /* Red for active state */
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
