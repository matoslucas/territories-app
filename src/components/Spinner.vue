<template>
  <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
};
</script>

<style scoped>
.spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.3rem;
}
</style>
