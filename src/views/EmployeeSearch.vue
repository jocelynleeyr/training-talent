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
      <div class="flex items-center text-base pb-4">
        <div class="flex items-end whitespace-nowrap space-x-3">
          共
          <span class="block px-2 font-bold text-xl text-primary-primary-100">{{
            modifyData.length
          }}</span>
          筆資料
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <Loading v-if="isLoading" />
        <div v-if="!isLoading" class="flex flex-wrap gap-6 py-10">
          <EmployeeItem
            v-for="item in paginationData.data"
            :key="item.id"
            :employee-data="item"
          />
        </div>
        <p
          v-if="!modifyData.length && !isLoading"
          class="text-center text-lg font-bold"
        >
          沒有符合的資料，請使用其他條件重新搜尋
        </p>
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

import EmployeeItem from "@/components/EmployeeItem.vue";
import PageHeader from "@/components/PageHeader.vue";
import PaginationComponent from "@/components/Pagination.vue";
import Loading from "@/components/Loading.vue";

export default {
  components: {
    EmployeeItem,
    PageHeader,
    PaginationComponent,
    Loading
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(employeeDataStore, ["changePage"]),
    searchBtn() {
      this.isLoading = true
      const searchText = this.searchKeyword.toLowerCase();
      this.modifyData = this.originData.filter((item) => {
        if (
          this.selectTag !== "all" &&
          (!item["標籤"] || !item["標籤"].includes(this.selectTag))
        )
          return false;
        if (
          searchText !== "" &&
          !(
            this.filterKey(item["學校"], searchText) ||
            this.filterKey(item["科系"], searchText) ||
            this.filterKey(item["專業技能"], searchText)
          )
        ) {
          return false;
        }
        return true;
      });
      setTimeout(() => {
        this.isLoading = false
      }, 700);
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
