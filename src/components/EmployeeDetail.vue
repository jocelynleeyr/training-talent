<template>
  <div
    class="relative flex flex-col items-center w-[calc(100%-theme(space.12)*2-theme(space.10))] max-w-[calc(1200px+(theme(space.12)*2)+theme(space.10))] max-h-[80%] m-auto"
  >
    <div
      @click="$emit('prevItem')"
      class="absolute -left-16 inset-y-0 z-10 my-auto flex items-center justify-center w-12 h-12 rounded-xl bg-netural-netural-100 text-primary-primary-100 cursor-pointer select-none group-[.disabled]:opacity-30 group-[.disabled]:text-neutral-300 group-[.disabled]:cursor-not-allowed font-semibold group"
      :class="{ disabled: currentIndex <= 1 }"
    >
      <span class="material-icons-round text-4xl"> chevron_left </span>
    </div>
    <div
      class="relative overflow-hidden flex flex-col flex-1 w-full m-auto rounded-xl bg-netural-netural-100"
    >
      <div
        class="relative flex items-center justify-end pt-4 pr-4 flex-none bg-netural-netural-100"
      >
        <div
          class="w-10 h-10 flex justify-center items-center p-4 cursor-pointer"
          @click="$emit('close')"
        >
          <div class="w-10 h-10">
            <div
              class="material-icons-round text-[40px] text-netural-netural-400"
            >
              close
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-y-auto flex flex-col px-6">
        <div class="overflow-y-auto flex flex-col justify-center items-center">
          <div
            class="relative flex flex-col flex-shrink-0 w-full items-center pb-4 border-b border-neutral-400"
          >
            <div class="flex flex-1 items-end -mr-10">
              <EmployeeFaceIcon />
              <ToggleCollectIcon :employee-data="employeeData" />
            </div>
          </div>
          <div class="overflow-y-auto flex flex-col flex-1 w-full">
            <ul class="grid md:grid-cols-3 w-full pb-4">
              <template v-for="item in headers" :key="item">
                <li
                  v-if="
                    item === '標籤' &&
                    checkContentEmpty(employeeData[item]) !== '-'
                  "
                  class="overflow-hidden flex flex-col flex-shrink-0 space-y-2 pl-4 pt-3 pb-3 md:[&:nth-child(6n+4)]:bg-netural-netural-200 md:[&:nth-child(6n+5)]:bg-netural-netural-200 md:[&:nth-child(6n+6)]:bg-netural-netural-200"
                >
                  <h4 class="text-base text-primary-primary-100 font-bold">
                    {{ item }}
                  </h4>
                  <!-- <ul
                    class="flex flex-wrap flex-grow-0 flex-shrink text-lg break-words leading-6 text-netural-netural-400"
                  >
                    <li
                      v-for="tag in checkContentEmpty(employeeData[item])"
                      class="flex flex-row items-center justify-center px-2 py-1 max-w-max mb-4 mr-4 rounded-lg border border-primary-primary-200"
                    >
                      <p
                        class="text-primary-primary-200 text-sm font-bold break-all"
                      >
                        {{ tag }}
                      </p>
                    </li>
                  </ul> -->
                  <Tags :tags="checkContentEmpty(employeeData[item])" />
                </li>
                <li
                  v-else-if="item !== 'collected'"
                  class="overflow-hidden flex flex-col flex-shrink-0 space-y-2 pl-4 pt-3 pb-3 md:[&:nth-child(6n+4)]:bg-netural-netural-200 md:[&:nth-child(6n+5)]:bg-netural-netural-200 md:[&:nth-child(6n+6)]:bg-netural-netural-200"
                >
                  <h4 class="text-base text-primary-primary-100 font-bold">
                    {{ item }}
                  </h4>
                  <p
                    class="flex-grow-0 flex-shrink text-lg break-words leading-6 text-netural-netural-400"
                  >
                    {{ checkContentEmpty(employeeData[item]) }}
                  </p>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      @click="$emit('nextItem')"
      class="absolute -right-16 inset-y-0 my-auto flex items-center justify-center w-12 h-12 rounded-xl bg-netural-netural-100 text-primary-primary-100 cursor-pointer select-none :hidden font-semibold "
      :class="{ 'disabled': currentIndex >= pages.totalResult }"
    >
      <span class="material-icons-round text-4xl"> navigate_next </span>
    </div>
  </div>
</template>
<script>
import { mapState, mapWritableState } from "pinia";
import { employeeDataStore } from "@/stores/employeeDataStore.js";
import { useCollectStore } from "@/stores/collectStore.js";
import { checkContentEmpty } from "@/utils/common.js";
import ToggleCollectIcon from "@/components/ToggleCollectIcon.vue";
import EmployeeFaceIcon from "@/components/EmployeeFaceIcon.vue";
import Tags from "@/components/Tags.vue";
export default {
  props: {
    employeeData: {
      type: Object,
      default: () => {},
    },
    pages: {
      type: Object,
      default: () => {},
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  components: {
    ToggleCollectIcon,
    EmployeeFaceIcon,
    Tags,
  },
  methods: {
    checkContentEmpty,
  },
  computed: {
    ...mapState(employeeDataStore, ["headers"]),
    ...mapState(useCollectStore, ["collectIds"]),
    ...mapWritableState(employeeDataStore, ["pagination"]),
  },
};
</script>
<style lang="scss">
  .disabled {
    @apply opacity-0 pointer-events-none;
  }
</style>