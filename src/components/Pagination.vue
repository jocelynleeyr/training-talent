<template>
  <div
    v-if="pages.total_pages > 1"
    class="flex items-center justify-center py-8 space-x-4"
  >
    <!-- <div class="flex items-center text-base">
      <div class="flex items-center whitespace-nowrap space-x-3">
        <p>每頁顯示</p>
        <div class="form-select">
          <select name="" id="" v-model.number="pagination.per_page">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <span> 筆 </span>
      </div>
      <p>
        ，共
        <span
          class="inline-block px-2 text-primary-primary-100 font-semibold"
          >{{ pages.totalResult }}</span
        >
        筆
      </p>
    </div> -->
    <nav class="">
      <ul class="flex items-center justify-center space-x-2">
        <li class="group" :class="{ disabled: pages.current_page <= 1 }">
          <a
            class="flex items-center justify-center w-12 h-12 rounded-xl bg-netural-netural-100 text-primary-primary-100 group-[.disabled]:opacity-60 group-[.disabled]:text-neutral-300 group-[.disabled]:cursor-not-allowed font-semibold"
            href="#"
            @click.prevent="$emit('change-page', 1)"
          >
            <span class="material-icons-round">
              keyboard_double_arrow_left
            </span>
          </a>
        </li>
        <li class="group" :class="{ disabled: pages.current_page <= 1 }">
          <a
            class="flex items-center justify-center w-12 h-12 rounded-xl bg-netural-netural-100 text-primary-primary-100 group-[.disabled]:opacity-60 group-[.disabled]:text-neutral-300 group-[.disabled]:cursor-not-allowed font-semibold"
            href="#"
            @click.prevent="$emit('change-page', pages.current_page - 1)"
          >
            <span class="material-icons-round"> chevron_left </span>
          </a>
        </li>
        <!-- 傳入的 item 為 頁碼數字 -->
        <li
          class="group"
          :class="{ active: pages.current_page === item }"
          v-for="(item, index) in pages.total_pages"
          :key="index"
        >
          <!-- 當下頁面狀態時 顯示 span標籤元素 -->
          <span
            v-if="pages.current_page === item"
            class="flex items-center justify-center w-12 h-12 rounded-xl bg-netural-netural-100 text-netural-netural-400 group-[.active]:bg-primary-primary-100 group-[.active]:text-netural-netural-100 font-semibold"
            >{{ index + 1 }}</span
          >
          <!-- 否則 顯示 a 標籤元素 + 可切換分頁資料事件 -->
          <a
            v-else
            class="flex items-center justify-center w-12 h-12 rounded-xl bg-netural-netural-100 text-primary-primary-100 font-semibold"
            href="#"
            @click.prevent="$emit('change-page', item)"
            >{{ index + 1 }}</a
          >
        </li>
        <li
          class="group"
          :class="{ disabled: pages.current_page >= pages.total_pages }"
        >
          <a
            class="flex items-center justify-center w-12 h-12 rounded-xl bg-netural-netural-100 text-primary-primary-100 group-[.disabled]:opacity-30 group-[.disabled]:text-neutral-300 group-[.disabled]:cursor-not-allowed font-semibold"
            href="#"
            @click.prevent="$emit('change-page', pages.current_page + 1)"
          >
            <span class="material-icons-round"> navigate_next </span>
          </a>
        </li>
        <li
          class="group"
          :class="{ disabled: pages.current_page >= pages.total_pages }"
        >
          <a
            class="flex items-center justify-center w-12 h-12 rounded-xl bg-netural-netural-100 text-primary-primary-100 group-[.disabled]:opacity-30 group-[.disabled]:text-neutral-300 group-[.disabled]:cursor-not-allowed font-semibold"
            href="#"
            @click.prevent="$emit('change-page', pages.total_pages)"
          >
            <span class="material-icons-round">
              keyboard_double_arrow_right
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// import { mapState, mapWritableState } from "pinia";
// import { employeeDataStore } from "@/stores/employeeDataStore.js";
export default {
  props: {
    pages: {
      type: Object,
      default: () => {},
    },
    getList: {
      type: Function,
      default: () => {},
    },
    category: {
      type: String,
      default: "",
    },
  },
  emits: ["change-page"],
  // computed: {
  //   ...mapWritableState(employeeDataStore, ["pagination"]),
  // },
};
</script>
