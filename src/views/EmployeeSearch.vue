<template>
  <div class="flex flex-col flex-1 bg-netural-netural-200">
    <div class="container flex flex-col flex-1">
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
      <div class="flex flex-col flex-1">
        <div class="flex flex-wrap gap-6 py-10">
          <EmployeeItem
            v-for="item in paginationData.data"
            :key="item.id"
            :employee-data="item"
            @click="toggleCollect(item.id)"
          />
        </div>
      </div>
      <div class="mt-auto">
        <PaginationComponent :pages="paginationData" @change-page="changePage" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { employeeDataStore } from "@/stores/employeeDataStore.js";
import { useCollectStore } from "@/stores/collectStore.js";

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
    return {
    };
  },
  methods: {
    ...mapActions(employeeDataStore, ["changePage"]),
    ...mapActions(useCollectStore, ["toggleCollect"]),
  },
  computed: {
    ...mapWritableState(employeeDataStore, ["paginationData"]),
    ...mapWritableState(useCollectStore, ["collectData"]),
  },
};
</script>
