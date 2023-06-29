<template>
  <h2 class="flex flex-col py-8">
    <div
      class="flex-shrink-0 text-[70px] font-normal whitespace-nowrap text-primary-primary-200"
    >
      {{ pageTitle }}
    </div>
    <div class="flex-shrink-0  text-xl font-normal leading-6">{{ subTitle }}</div>
  </h2>
</template>
<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
};
</script>
