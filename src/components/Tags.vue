<template>
  <ul
    class="flex flex-wrap flex-grow-0 flex-shrink text-lg break-words leading-6 text-netural-netural-400"
  >
    <li v-for="tag in tags" :key="`tag-${tag}`"
      class="flex flex-row items-center justify-center px-2 py-1 max-w-max mb-4 mr-4 rounded-lg border border-primary-primary-200"
    >
      <p class="text-primary-primary-200 text-sm font-bold break-all">
        {{ tag }}
      </p>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
