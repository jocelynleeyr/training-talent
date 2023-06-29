<template>
  <div
    class="modal group"
    :class="{ '-show': transtionShow }"
    @input="$emit('update:modelValue', transtionShow)"
  >
    <div
      class="fixed z-50 inset-0 m-auto overflow-y-auto flex items-center justify-center p-4 invisible opacity-0 group-[.-show]:opacity-100 group-[.-show]:visible"
    >
      <div class="relative w-full h-full flex" @click.self="emit('close')">
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
  props: ["modelValue"],
  data() {
    return {
      transtionShow: false,
    };
  },
  watch: {
    modelValue(val) {
      if (val) {
        this.transtionShow = true;
      } else {
        this.transtionShow = false;
      }
    },
  },
};
</script>
