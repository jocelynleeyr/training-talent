<template>
  <div
    v-if="ifShow"
    class="modal group"
    :class="{ '-show': transtionShow }"
    @input="$emit('update:modelValue', transtionShow)"
  >
    <div
      class="fixed z-[1000] inset-0 m-auto overflow-y-auto flex items-center justify-center p-4 invisible opacity-0 group-[.-show]:opacity-100 group-[.-show]:visible"
    >
      <div class="overflow-hidden relative w-full h-full flex rounded-xl">
        <slot></slot>
      </div>
    </div>
    <div
      class="fixed z-40 inset-0 bg-black-black-05 transition-all backdrop-blur-[8px] invisible opacity-0 group-[.-show]:opacity-100 group-[.-show]:visible"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      ifShow: false,
      transtionShow: false,
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
};
</script>
