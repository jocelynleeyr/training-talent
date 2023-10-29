<template>
  <div class="space-y-6">
    <div
      :id="`accordion-${accordionData.id}`"
      class="group"
      :ref="`accordion-${accordionData.id}`"
      :class="{ active: accordionData.active }"
      :key="accordionData.id"
    >
      <h2
        class="bg-netural-netural-100 transition-all group-[.active]:bg-netural-netural-100"
      >
        <button
          @click="toggle(accordionData.active)"
          class="relative flex items-center w-full pl-4 pr-0 py-1 text-netural-netural-300 cursor-pointer"
          type="button"
        >
          <p class="flex-1 pr-10 text-left font-bold">
            {{ accordionData.title }}
          </p>
          <div
            class="flex justify-center items-center w-10 h-10 ml-auto group-[.active]:rotate-x-180 transition-all duration-300"
          >
            <span class="material-icons-round text-3xl"> expand_more </span>
          </div>
        </button>
      </h2>
      <transition
        name="accordion-item"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition"
      >
        <div v-if="accordionData.active" class="overflow-hidden-y">
          <div class="py-3">
            <slot>accordion content</slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    accordionData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    toggle(content) {
      content = !content;
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },

    endTransition(el) {
      el.style.height = "";
    },
  },
};
</script>
<style lang="scss">
.accordion-item-enter-active,
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.3s ease;
}
.accordion-item-enter-from,
.accordion-item-leave-to {
  @apply h-0 #{!important};
}
</style>
