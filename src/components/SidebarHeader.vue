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
            ? 'bi-secondary bi-chevron-double-right'
            : 'bi-secondary bi-chevron-double-left'
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
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.logo-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
}
.logo {
  width: 30px;
  height: 30px;
}
.logo-text {
  font-size: 1rem;
  width: 100%;
  min-width: 170px;
}
.btn-toggle {
  background: none;
  border: 1px solid #f7f7f7;
  border-radius: 3px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-bottom: 1rem;
}
</style>
