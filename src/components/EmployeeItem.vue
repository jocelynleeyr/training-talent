<template>
  <div
    class="relative flex flex-col w-[220px] p-6 mb-8 space-y-2 rounded-xl bg-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group"
    :class="{ '-active': employeeData.collected }"
  >
    <div
      class="relative flex items-center justify-center rounded-full mx-auto mt-[calc(-112px/2)] bg-white text-neutral-400"
    >
      <span class="material-symbols-rounded text-[64px]"> face </span>
    </div>
    <div
      class="absolute right-0 top-0 w-10 h-10 cursor-pointer"
      @click="collectItem(employeeData)"
    >
      <span
        v-if="employeeData.collected"
        class="absolute top-0 left-0 material-icons-round text-3xl text-yellow-400"
      >
        star
      </span>
      <span
        v-else
        class="absolute top-0 left-0 material-icons-round text-3xl text-neutral-300"
      >
        star_border
      </span>
    </div>
    <div class="flex flex-col">
      <ul class="flex flex-col space-y-3">
        <li
          class="overflow-hidden flex flex-wrap items-center flex-shrink-0 space-x-2"
        >
          <span
            class="flex-grow-0 flex-shrink whitespace-nowrap text-base leading-5 text-netural-netural-300"
            >{{ employeeData.number }}</span
          >
          <h3
            class="truncate text-xl leading-6 font-semibold text-primary-primary-100 [&:not(:last-child)]:pr-2"
          >
            {{ employeeData.employeeName }}
          </h3>
        </li>
        <li class="flex items-center flex-shrink-0">
          <p
            class="text-base leading-5 break-words before:content-['school'] before:font-['Material_Icons_Round'] before:pr-1 before:top-0.5 before:relative before:text-primary-primary-100 before:text-base"
          >
            {{ employeeData.school }}
          </p>
        </li>
        <li class="flex items-center flex-shrink-0">
          <p class="flex items-start text-base leading-5 break-words">
            {{ employeeData.department }}
          </p>
        </li>
        <li class="flex items-center flex-shrink-0">
          <p class="flex items-start text-base leading-5 break-words">
            {{ employeeData.skills }}
          </p>
        </li>
        <li class="flex items-center flex-shrink-0">
          <p class="flex items-start text-base leading-5 break-words">
            {{ employeeData.experience }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    employeeData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  methods: {
    collectItem(item) {
      item.collected = !item.collected;
      if (item.collected) {
        this.$emit("addItem", item);
      } else {
        this.$emit("removeItem", item);
      }
    },
  },
};
</script>
