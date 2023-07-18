<template>
  <div
    class="relative flex flex-col w-[220px] p-6 mb-8 space-y-2 rounded-xl bg-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] cursor-pointer group"
    :class="{ '-active': employeeData.collected }" @click="$emit('open')"
  >
    <EmployeeFaceIcon  class="mx-auto mt-[calc(-112px/2)]" />
    <ToggleCollectIcon v-if="this.$route.path === '/employeesearch'" :employee-data="employeeData" class="absolute right-0 top-0"/>
    <div
      v-if="this.$route.path === '/collect'"
      class="absolute right-0 top-0 w-10 h-10 cursor-pointer"
      title="移除"
      @click.stop.prevent="toggleCollect(employeeData.id)"
    >
      <span
        class="absolute top-0 left-0 material-icons-round text-3xl text-neutral-300"
      >
        close
      </span>
    </div>
    <div
      v-if="employeeData.hasOwnProperty('isCompare')"
      class="absolute top-2 left-6 flex flex-col el-checkbox"
    >
      <input
        :id="employeeData.id"
        class="el-checkbox-input"
        type="checkbox"
        v-model="compareIds"
        :value="employeeData.id"
        :checked="employeeData.isCompare"
        @input="toggleCompare(employeeData.id)"
        :disabled="isCheckboxDisabled(employeeData.id)"
      />
      <label :for="employeeData.id" class="el-checkbox-style">
        <span class="material-icons-round"> check </span>
      </label>
    </div>
    
    <!-- <div
      v-if="employeeData.hasOwnProperty('isCompare')"
      class="absolute top-2 left-6 flex flex-col el-checkbox"
    >
      <input
        :id="employeeData.id"
        class="el-checkbox-input"
        type="checkbox"
        v-model="compareData"
        :value="employeeData"
        :checked="employeeData.isCompare"
        @input="insertItem(compareData)"
      />
      <label :for="employeeData.id" class="el-checkbox-style">
        <span class="material-icons-round"> check </span>
      </label>
    </div> -->
    <div class="flex flex-col">
      <ul class="flex flex-col space-y-3">
        <li
          class="overflow-hidden flex flex-wrap items-center flex-shrink-0 space-x-2"
        >
          <span
            class="flex-grow-0 flex-shrink whitespace-nowrap text-base leading-5 text-netural-netural-300"
            >{{ employeeData["編號"] }}</span
          >
          <h3
            class="truncate text-xl leading-6 font-semibold text-primary-primary-100 [&:not(:last-child)]:pr-2"
          >
            {{ employeeData["姓名"] }}
          </h3>
        </li>
        <li class="relative flex items-center flex-shrink-0 min-h-[20px]">
          <p
            class="pl-3 text-base leading-5 break-words before:content-[''] before:absolute before:inset-y-0 before:left-0 before:block before:w-1 before:h-1 before:pr-1 before:my-auto before:rounded-full before:bg-primary-primary-100"
          >
            {{ employeeData["學校"] }}
          </p>
        </li>
        <li class="relative flex items-center flex-shrink-0 min-h-[20px]">
          <p
            class="pl-3 text-base leading-5 break-words before:content-[''] before:absolute before:inset-y-0 before:left-0 before:block before:w-1 before:h-1 before:pr-1 before:my-auto before:rounded-full before:bg-primary-primary-100"
          >
            {{ employeeData["科系"] }}
          </p>
        </li>
        <li class="relative flex items-center flex-shrink-0 min-h-[20px]">
          <p
            class="pl-3 text-base leading-5 break-words before:content-[''] before:absolute before:inset-y-0 before:left-0 before:block before:w-1 before:h-1 before:pr-1 before:my-auto before:rounded-full before:bg-primary-primary-100"
          >
            {{ employeeData["學歷"] }}
          </p>
        </li>
        <li class="relative flex items-center flex-shrink-0 min-h-[20px]">
          <p
            class="pl-3 text-base leading-5 break-words before:content-[''] before:absolute before:inset-y-0 before:left-0 before:block before:w-1 before:h-1 before:pr-1 before:my-auto before:rounded-full before:bg-primary-primary-100"
          >
            {{ employeeData["花椰菜經歷"] }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCollectStore } from "@/stores/collectStore.js";

import ToggleCollectIcon from '@/components/ToggleCollectIcon.vue'
import EmployeeFaceIcon from '@/components/EmployeeFaceIcon.vue'
export default {
  props: {
    employeeData: {
      type: Object,
      default: {},
    },
    // openModal: {
    //   type: Function,
    //   default: () => {},
    // }
  },
  components: {
    ToggleCollectIcon,
    EmployeeFaceIcon
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useCollectStore, [
      "toggleCollect",
      "toggleCompare",
      "getCompare",
    ]),
    insertItem(item) {
      this.$emit("insert", item);
    },
    isCheckboxDisabled(item) {
      return this.compareIds.length >= 3 && !this.compareIds.includes(item);
    },
  },
  computed: {
    ...mapState(useCollectStore, ["collectIds", "compareIds", "compareData"]),
  },
  mounted() {
  },
};
</script>
