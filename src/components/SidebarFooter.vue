<script setup>
import SidebarItem from "./SidebarItem.vue";

const props = defineProps({
  isCollapsed: Boolean,
});

</script>

<template>
  <div class="sidebar-footer">
   
    <div class="workspace">
      <i class="bi bi-person"></i>
      <span v-if="!isCollapsed">Workspace Name</span>
    </div>
    <div class="logout">
      <i class="bi bi-box-arrow-right"></i>
      <span v-if="!isCollapsed">Log Out</span>
    </div>
  </div>
</template>

<style scoped>
.sidebar-footer {
  display: flex;
  flex-direction: column;
}
.workspace,
.logout {
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  color: #6c757d;
}
.workspace i,
.logout i {
  margin-right: 10px;
}
.workspace:hover,
.logout:hover {
  color: #ff6666;
}
</style>
