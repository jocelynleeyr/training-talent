<template>
  <div
    class="relative flex flex-col flex-grow-0 w-1/3 py-6 mb-8 space-y-2 rounded-xl bg-white group"
    :class="{ 'opacity-60': compareItem.isCompare }"
  >
    <ul class="flex flex-col divide-y">
      <template v-for="item in headers" :key="item">
        <li
          v-if="item === '姓名'"
          class="sticky top-[80px] inset-x-0 z-10 flex flex-col flex-shrink-0 space-y-2 px-6 pt-4 pb-4 border-b-2 first:pt-0 last:mb-0 bg-netural-netural-100"
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
          v-else-if="
            item === '標籤' && checkContentEmpty(compareItem[item]) !== '-'
          "
          class="overflow-hidden flex flex-col flex-shrink-0 space-y-2 px-6 pt-4 mb-4 first:pt-0 last:mb-0"
        >
          <h4 class="text-base text-primary-primary-100 font-bold">
            {{ item }}
          </h4>
          <Tags :tags="checkContentEmpty(compareItem[item])"/>
        </li>
        <li
          v-else-if="item !== 'collected'"
          class="overflow-hidden flex flex-col flex-shrink-0 space-y-2 px-6 pt-4 mb-4 first:pt-0 last:mb-0"
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
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCollectStore } from "@/stores/collectStore.js";
import { employeeDataStore } from "@/stores/employeeDataStore.js";
import { checkContentEmpty } from "@/utils/common.js";
import Tags from "@/components/Tags.vue";
export default {
  props: {
    compareItem: {
      type: Object,
      default: {},
    },
  },
  components: {
    Tags
  },
  data() {
    return {};
  },
  methods: {
    // checkContentEmpty(data) {
    //   return checkContentEmpty(data);
    // },
    checkContentEmpty,
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
  mounted() {},
};
</script>
