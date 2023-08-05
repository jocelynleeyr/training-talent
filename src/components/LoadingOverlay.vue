<template>
  <div
    v-if="ifShow"
    class="fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full text-neutral-900 group"
    :class="{ '-show': transtionShow }"
    @input="$emit('update:modelValue', transtionShow)"
  >
    <div
      class="absolute top-0 left-0 z-30 bg-netural-netural-100 w-full h-full transition-all delay-[1.5s] duration-1000 ease translate-x-[0%] group-[.-show]:-translate-x-[100%]"
    ></div>
    <div
      class="absolute top-0 left-0 z-20 bg-neutral-100 w-full h-full transition-all delay-[2s] duration-1000 ease translate-x-[0%] group-[.-show]:-translate-x-[100%]"
    ></div>
    <div
      class="relative z-30 flex flex-col items-center w-full max-w-[332px] h-10 font-bold text-primary-primary-200 transition-all  delay-[2s] duration-700 opacity-100 visible group-[.-show]:opacity-0 group-[.-show]:invisible"
    >
      <div
        class="absolute top-0 left-0 z-20 flex flex-row items-center flex-none w-full h-10 bg-netural-netural-100 transition-all delay-[1s] duration-500 ease-in translate-x-[0%] opacity-70 group-[.-show]:translate-x-[100%] group-[.-show]:opacity-0"
      ></div>
      <div
        class="absolute top-0 left-0 flex flex-row items-center flex-none space-x-1 w-full h-10 font-bold text-primary-primary-200"
      >
        <h1 :before="webTitle" class="whitespace-nowrap text-2xl">
          <span>{{ webTitle }}</span>
        </h1>
        <p class="w-5 text-center text-lg">X</p>
        <div
          class="logo w-[120px] h-[40px] bg-primary-primary-200"
          alt=""
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import useNavListMenu from "@/stores/navList.js";
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      transtionShow: this.modelValue,
      ifShow: false,
    };
  },
  watch: {
    modelValue(val) {
      if (val) {
        this.ifShow = true;
        window.setTimeout(() => {
          this.transtionShow = true;
        }, 0);
      } else {
        this.transtionShow = false;
        window.setTimeout(() => {
          this.ifShow = false;
        }, 0);
      }
    },
    ifShow(val) {
      if (val) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
  computed: {
    ...mapState(useNavListMenu, ["navList", "webTitle"]),
  },
};
</script>
