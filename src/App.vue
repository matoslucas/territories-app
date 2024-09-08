<template>
  <div class="d-flex">
    <!-- Sidebar Component -->
    <Sidebar />

    <!-- Main content -->
    <main class="main-content">
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Plans</span>
          <button class="btn btn-primary">Start New Plan</button>
        </div>
      </nav>
      <div class="container">
        <!-- Display the table only if the plans are loaded -->
        <PlanTable v-if="plans.length > 0" :plans="plans" />
        <!-- Loading indicator -->
        <Spinner v-else />
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Sidebar from './components/Sidebar.vue';
import PlanTable from './components/PlanTable.vue';
import Spinner from './components/Spinner.vue';

export default {
  components: {
    Sidebar,
    PlanTable,
    Spinner,
  },
  setup() {
    const plans = ref([]);

    const fetchPlans = async () => {
      try {
        // Simulate a 2-second delay before fetching data
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch('/plans.json');
        if (!response.ok) {
          throw new Error('Failed to load plans');
        }
        const data = await response.json();
        plans.value = data;
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch the plans when the component is mounted
    onMounted(() => {
      fetchPlans();
    });

    return {
      plans,
    };
  },
};
</script>

<style scoped>
.main-content {
  flex-grow: 1;
  padding: 0;
  background-color: #f9f9fb;
}
</style>
