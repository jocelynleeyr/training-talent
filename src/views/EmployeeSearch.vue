<template>
  <div class="flex flex-col flex-1 pt-14 pb-10 bg-netural-netural-200">
    <div class="container">
      視圖搜尋
      <div class="p-4 md:p-6 bg-netural-netural-200">
        <div class="flex items-center">
          <div class="input-group">
            <input type="text" class="form-input" placeholder="姓名" />
            <button
              type="button"
              class="flex-shrink-0 p-4 whitespace-nowrap bg-primary-primary-200 text-netural-netural-100"
            >
              搜尋
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-6 p-10">
        <template v-for="item in employeeData" :key="item.id">
          <EmployeeItem
            :employee-data="item"
            @add-item="addCollect"
            @remove-item="removeCollect"
          />
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
  data() {
    return {
      collectData: [],
      employeeData: [
        {
          id: "0",
          number: "A000001",
          employeeName: "田僑仔",
          school: "國立台北大學",
          department: "不動產與城鄉環境學系",
          skills: "不動產估價師、多益800",
          experience: "102年oo人壽實習生",
          collected: false,
        },
        {
          id: "1",
          number: "A000002",
          employeeName: "田僑仔",
          school: "國立台灣大學",
          department: "不動產與城鄉環境學系",
          skills: "不動產估價師、多益990",
          experience: "103年oo人壽實習生",
          collected: false,
        },
        {
          id: "2",
          number: "A000003",
          employeeName: "田僑仔",
          school: "國立台北大學",
          department: "不動產與城鄉環境學系",
          skills: "不動產估價師、多益850",
          experience: "101年oo人壽實習生",
          collected: false,
        },
      ],
    };
  },
  methods: {
    addCollect(item) {
      console.log("addCollect", item);
      this.collectData.push(item);
    },
    removeCollect(item) {
      console.log("removeCollect", item);
      const find = this.collectData.findIndex(
        (findItem) => findItem.id === item.id
      );
      console.log("find", find);
      this.collectData.splice(find, 1);
    },
  },
};
</script>
