<template>
  <div class="flex flex-col flex-1 bg-netural-netural-200">
    <div class="container">
      <PageHeader page-title="Employee Search" sub-title="視圖搜尋" />
      <div class="py-4 bg-netural-netural-200">
        <div class="flex items-center w-1/2 space-x-4">
          <div class="flex items-center w-full">
            <div class="input-group">
              <input
                type="text"
                class="form-input"
                placeholder="搜尋 編號/學校/科系/專業技能/經歷"
              />
            </div>
          </div>
          <button type="button" class="btn-base">搜尋</button>
        </div>
      </div>
      <div class="flex flex-wrap gap-6 py-10">
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
import PageHeader from "@/components/PageHeader.vue";
export default {
  components: {
    EmployeeItem,
    PageHeader,
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
        {
          id: "3",
          number: "A000004",
          employeeName: "田僑仔",
          school: "國立台北大學",
          department: "不動產與城鄉環境學系",
          skills: "不動產估價師、多益800",
          experience: "102年oo人壽實習生",
          collected: false,
        },
        {
          id: "4",
          number: "A000005",
          employeeName: "田僑仔",
          school: "國立台灣大學",
          department: "不動產與城鄉環境學系",
          skills: "不動產估價師、多益990",
          experience: "103年oo人壽實習生",
          collected: false,
        },
        {
          id: "5",
          number: "A000006",
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
