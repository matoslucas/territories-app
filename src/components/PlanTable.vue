<script setup>
defineProps({
  plans: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div>
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th>Name</th>
            <th>Last Edited</th>
            <th>TAM</th>
            <th>Revenue Target</th>
            <th>Precision</th>
            <th>Employees</th>
            <th>Team Cost</th>
            <th>ROI</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(plan, index) in plans" :key="index">
            <td>
              <a href="#">{{ plan.name }}</a>
            </td>
            <td>{{ plan.lastEdited }}</td>
            <td>{{ plan.tam }}</td>
            <td>{{ plan.revenueTarget }}</td>
            <td>
              <div class="d-flex align-items-center">
                <span class="progress-value">{{ plan.precision }}%</span>
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: plan.precision + '%' }"
                  ></div>
                </div>
              </div>
            </td>
            <td>{{ plan.employees }}</td>
            <td>{{ plan.teamCost }}</td>
            <td>{{ plan.roi }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table {
  margin-top: 20px;
}
.progress {
  width: 80px;
  height: 8px;
  background-color: #e9ecef;
  margin-left: 10px;
  border-radius: 5px;
}
.progress-bar {
  background-color: #f03e3e;
}
.progress-value {
  font-size: 14px;
}
</style>
