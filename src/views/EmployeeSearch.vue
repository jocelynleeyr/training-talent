<template>
  <div class="flex flex-col flex-1 pt-14 pb-10 bg-netural-netural-200">
    <div class="container">
      <div class="flex flex-wrap gap-6 p-10">
        <template v-for="(item, index) in 16" :key="index">
          <EmployeeItem />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import EmployeeItem from "@/components/EmployeeItem.vue";
export default {
  components: {
    EmployeeItem,
  },
};
</script>
