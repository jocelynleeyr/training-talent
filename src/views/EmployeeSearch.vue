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
      <transition-group name="fade">
        <template v-if="!isLoading">
          <div class="flex items-center text-base pb-4">
            <div class="flex items-end whitespace-nowrap space-x-3">
              共
              <span
                class="block px-2 font-bold text-xl text-primary-primary-100"
                >{{ modifyData.length }}</span
              >
              筆資料
            </div>
          </div>
          <div class="flex flex-col flex-1">
            <div v-if="!isLoading" class="flex flex-wrap gap-6 py-10">
              <EmployeeItem
                v-for="(item, index) in paginationData.data"
                :key="item.id"
                :employee-data="item"
                @open="showDetails(index, item)"
              />
            </div>
            <p
              v-if="!modifyData.length && !isLoading"
              class="text-center text-lg font-bold"
            >
              沒有符合的資料，請使用其他條件重新搜尋
            </p>
          </div>
        </template>
      </transition-group>
      <Loading v-if="isLoading" />
      <div class="mt-auto">
        <PaginationComponent
          :pages="paginationData"
          @change-page="changePage"
        />
      </div>
    </div>
    <Modal v-model="employeeModal.show">
      <EmployeeDetail
        @close="employeeModal.show = false"
        :employee-data="tempDetail"
        :pages="paginationData"
        :current-index="countIndex"
        @prev-item="navigate(-1)"
        @next-item="navigate(1)"
      />
    </Modal>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { employeeDataStore } from "@/stores/employeeDataStore.js";

import EmployeeItem from "@/components/EmployeeItem.vue";
import PageHeader from "@/components/PageHeader.vue";
import PaginationComponent from "@/components/Pagination.vue";
import Loading from "@/components/Loading.vue";
import Modal from "@/components/Modal.vue";
import EmployeeDetail from "@/components/EmployeeDetail.vue";

export default {
  components: {
    EmployeeItem,
    PageHeader,
    PaginationComponent,
    Loading,
    Modal,
    EmployeeDetail,
  },
  data() {
    return {
      isLoading: false,
      employeeModal: {
        show: false,
      },
      tempDetail: {},
      currentPageNum: 1,
      currentIndex: 0,
      countIndex: 1,
      currentItemIndex: 1,
      minValue: 0,
      maxValue: 0,
      selectTag: "all",
    };
  },
  methods: {
    ...mapActions(employeeDataStore, ["changePage"]),
    searchBtn() {
      this.isLoading = true;
      const searchText = this.searchKeyword.toLowerCase();
      this.modifyData = this.originData.filter((item) => {
        if (
          this.selectTag !== "all" &&
          (!item["標籤"] || !item["標籤"].includes(this.selectTag))
        ) return false;
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
        this.isLoading = false;
      }, 700);
    },
    filterKey(content, searchTarget) {
      if (content)
        return content.toLowerCase().includes(searchTarget.toLowerCase());
    },
    showDetails(index, item) {
      // 開啟詳細內容 取得總筆數的當下位置
      this.countIndex = this.modifyData.indexOf(item) + 1;
      this.currentPageNum = this.paginationData.current_page;

      this.employeeModal.show = true;

      this.tempDetail = Object.assign({}, item);
    },
    navigate(direction) {
      this.countIndex += direction;
      if (this.countIndex <= 1) this.countIndex = 1;
      if (this.countIndex >= this.paginationData.totalResult)
        this.countIndex = this.paginationData.totalResult;
      const minItem =
        this.currentPageNum * this.paginationData.per_page -
        this.paginationData.per_page +
        1;
      const maxItem = this.currentPageNum * this.paginationData.per_page;
      // 根據 countIndex，判斷是否需要切換分頁
      if (
        this.countIndex > maxItem &&
        this.currentPageNum < this.paginationData.total_pages
      ) {
        // 切換到下一頁
        this.currentPageNum++;
      } else if (this.countIndex < minItem && this.currentPageNum > 1) {
        // 切換到上一頁
        this.currentPageNum--;
      }

      this.changePage(this.currentPageNum);
      // this.tempDetail = Object.assign({}, this.modifyData[this.countIndex - 1]);
      this.tempDetail = JSON.parse(JSON.stringify(this.modifyData[this.countIndex - 1]))
    },
  },
  computed: {
    ...mapWritableState(employeeDataStore, [
      "paginationData",
      // "selectTag",
      "searchKeyword",
      "modifyData",
      "selectFilter",
    ]),
    ...mapState(employeeDataStore, ["employeeTags", "originData"]),
  },
};
</script>
<style lang="scss">
.slide-leave-active,
.slide-enter-active {
  transition: 0.5s ease-in;
}
.slide-enter-from {
  transform: translateY(-100%);
}
.slide-leave-to {
  transform: translateY(100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
