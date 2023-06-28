<template>
  <div class="overflow-hidden flex flex-col flex-1">
    <div
      class="relative flex items-center justify-center flex-none bg-netural-netural-100"
    >
      <div class="overflow-hidden flex flex-col justify-center h-16 p-3">
        <p class="text-sm leading-5 text-primary-primary-300">{{ headerTitle }}</p>
      </div>
      <div
        class="absolute right-0 flex items-center h-full p-4 cursor-pointer"
        @click="close"
      >
      </div>
    </div>
    <div class="lightbox-modal__body">
      <div class="lightbox-modal__wrap" @click="close">
        <img :src="imageUrl" alt="" class="lightbox-modal__wrap__img" />
      </div>
    </div>
  </div>
</template>

<script>
import useGlobalDialogStore from "@/stores/globalDialog.js";

export default {
  props: {
    imageUrl: {
      type: String,
      default: "",
    },
    headerTitle: {
      type: String,
      default: "標題",
    },
  },
  methods: {
    close() {
    },
  },
};
</script>

