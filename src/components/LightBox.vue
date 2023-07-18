<template>
  <div class="overflow-hidden flex flex-col flex-1">
    <div
      class="relative flex items-center justify-center flex-none bg-netural-netural-100"
    >
      <!-- <div class="overflow-hidden flex flex-col justify-center h-16 p-3">
        <p class="text-sm leading-5 text-primary-primary-300">
          {{ headerTitle }}
        </p>
      </div> -->
      <div
        class="absolute right-4 top-4 z-10 w-10 h-10 flex justify-center items-center p-4 cursor-pointer"
        @click="$emit('close')"
      >
        <div class="w-10 h-10">
          <div
            class="material-icons-round text-[40px] text-netural-netural-100"
          >
            close
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden h-full">
      <div
        class="overflow-y-auto flex flex-col justify-center items-center h-full w-full"
      >
        <img :src="imageUrl" alt="" class="max-h-full max-w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import useGlobalDialogStore from "@/stores/globalDialog.js";

export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    // headerTitle: {
    //   type: String,
    //   default: "標題",
    // },
  },
  // methods: {
  //   ...mapActions(useGlobalDialogStore, ["closeDialog"]),
  //   close() {
  //     useGlobalDialogStore().closeDialog();
  //   },
  // },
};
</script>
