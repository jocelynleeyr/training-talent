<template>
  <div
    class="relative flex flex-col flex-1 p-6 mb-8 space-y-2 rounded-xl bg-white group"
    :class="{ 'opacity-60': compareItem.isCompare }"
  >
    <div class="flex flex-col">
      <ul class="flex flex-col divide-y">
        <template v-for="item in headers" :key="item">
          <li
            v-if="item === '姓名'"
            class="sticky top-[80px] inset-x-0 z-10 flex flex-col flex-shrink-0 space-y-2 pt-4 mb-4 first:pt-0 last:mb-0 bg-netural-netural-100"
          >
            <h4 class="text-base text-primary-primary-100 font-bold">
              {{ item }}
            </h4>
            <p
              class="flex-grow-0 flex-shrink whitespace-nowrap text-lg break-words leading-5 text-netural-netural-400"
            >
              {{ checkContentEmpty(compareItem[item]) }}
            </p>
          </li>
          <li
            v-else-if="item === '標籤' && checkContentEmpty(compareItem[item]) !== '-'"
            class="overflow-hidden flex flex-col flex-shrink-0 space-y-2 pt-4 mb-4 first:pt-0 last:mb-0"
          >
            <h4 class="text-base text-primary-primary-100 font-bold">
              {{ item }}
            </h4>
            <ul
              class="flex-grow-0 flex-shrink space-y-3 whitespace-nowrap text-lg break-words leading-5 text-netural-netural-400"
            > 
              <li v-for="tag in checkContentEmpty(compareItem[item])">
                {{ tag }}
              </li>
            </ul>
          </li>
          <li
            v-else
            class="overflow-hidden flex flex-col flex-shrink-0 space-y-2 pt-4 mb-4 first:pt-0 last:mb-0"
          >
            <h4 class="text-base text-primary-primary-100 font-bold">
              {{ item }}
            </h4>
            <p
              class="flex-grow-0 flex-shrink whitespace-nowrap text-lg break-words leading-5 text-netural-netural-400"
            >
              {{ checkContentEmpty(compareItem[item]) }}
            </p>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCollectStore } from "@/stores/collectStore.js";
import { employeeDataStore } from "@/stores/employeeDataStore.js";
import { checkContentEmpty } from "@/utils/common.js";
export default {
  props: {
    compareItem: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  methods: {
    checkContentEmpty(data) {
      return checkContentEmpty(data);
    },
    // modifyCompare(data) {
    //   const compareArr = ["臉書帳號","Line帳號","手機","Mail"]
    //   console.log(compareArr.includes[data]);
    // }
  },
  computed: {
    ...mapState(useCollectStore, ["collectData"]),
    ...mapState(employeeDataStore, ["headers"]),
    ...mapWritableState(useCollectStore, ["compareData"]),
 
  },
  mounted() {
    
  },
};
</script>
