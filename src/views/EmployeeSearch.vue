<template>
  <div class="flex flex-col flex-1 bg-netural-netural-200">
    <div class="container flex flex-col flex-1">
      <PageHeader page-title="Employee Search" sub-title="視圖搜尋" />

      <div class="py-4 bg-netural-netural-200">
        <div class="flex items-center space-x-4">
          <div class="flex items-center w-full">
            <div class="input-group">
              <input
                type="text"
                class="form-input"
                placeholder="搜尋 學校/科系/專業技能"
                v-model.trim="searchKeyword"
              />
            </div>
          </div>
          <div class="form-select flex-grow flex-shrink-0">
            <select name="" id="" v-model="selectTag">
              <option value="all">全部部門</option>
              <option :value="item" v-for="item in employeeTags" :key="item">
                {{ item }}
              </option>
            </select>
          </div>
          <button type="button" class="btn-base" @click="searchBtn">
            搜尋
          </button>
        </div>
      </div>
      <div class="flex items-center text-base">
        <div class="flex items-center whitespace-nowrap space-x-3"></div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="flex flex-wrap gap-6 py-10">
          <EmployeeItem
            v-for="item in paginationData.data"
            :key="item.id"
            :employee-data="item"
          />
        </div>
      </div>
      <div class="mt-auto">
        <PaginationComponent
          :pages="paginationData"
          @change-page="changePage"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { employeeDataStore } from "@/stores/employeeDataStore.js";
// import { useCollectStore } from "@/stores/collectStore.js";

import EmployeeItem from "@/components/EmployeeItem.vue";
import PageHeader from "@/components/PageHeader.vue";
import PaginationComponent from "@/components/Pagination.vue";

export default {
  components: {
    EmployeeItem,
    PageHeader,
    PaginationComponent,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(employeeDataStore, ["changePage"]),
    searchBtn() {
      let filterData1 = [];
      let filterData2 = [];
      // 搜尋條件 1
      filterData1 =
        this.searchKeyword === ""
          ? this.originData
          : this.originData.filter(
              (item) =>
                this.filterKey(item["學校"], this.searchKeyword) ||
                this.filterKey(item["科系"], this.searchKeyword) ||
                this.filterKey(item["專業技能"], this.searchKeyword)
            );

      // 篩選條件 2
      filterData2 =
        this.selectTag === "all"
          ? this.originData
          : this.originData.filter((item) =>
              item["標籤"].includes(this.selectTag)
            );

            // 多條件
      // if (this.searchKeyword !== "" && this.selectTag) {
      //   this.modifyData = filterData1
      //     .filter(
      //       (item) =>
      //         this.filterKey(item["學校"], this.searchKeyword) ||
      //         this.filterKey(item["科系"], this.searchKeyword) ||
      //         this.filterKey(item["專業技能"], this.searchKeyword)
      //     )
      //     .filter((item) => item["標籤"].includes(this.selectTag));
      // }
      // console.log("filterData1", filterData1);
      this.modifyData = filterData1;
    },
    filterKey(content, searchTarget) {
      if (content)
        return content.toLowerCase().includes(searchTarget.toLowerCase());
    },
  },
  computed: {
    ...mapWritableState(employeeDataStore, [
      "paginationData",
      "selectTag",
      "searchKeyword",
      "modifyData",
      "selectFilter",
    ]),
    // ...mapWritableState(useCollectStore, ["collectData"]),
    ...mapState(employeeDataStore, ["employeeTags", "originData"]),
  },
};
</script>
