<template>
  <div class="sidebar-header">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Logo" class="logo" />
      <span class="logo-text" v-if="!isCollapsed">Territories.ai</span>
    </div>
    <button class="btn-toggle" @click="toggleSidebar">
      <i
        :class="
          isCollapsed
            ? 'bi bi-chevron-double-right'
            : 'bi bi-chevron-double-left'
        "
      ></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['toggleSidebar'],
  setup(props, { emit }) {
    const toggleSidebar = () => {
      emit('toggleSidebar');
    };

    return {
      toggleSidebar,
    };
  },
};
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.logo {
  width: 30px;
  height: 30px;
}
.logo-text {
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 10px;
}
.btn-toggle {
  background: none;
  border: none;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  width: 100%;
  margin-bottom: 1rem;
}
</style>
