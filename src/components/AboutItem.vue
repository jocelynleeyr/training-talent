<template>
  <div
    class="flex items-start flex-row flex-shrink-0 w-full space-x-8 [&:nth-child(2)]:flex-row-reverse [&:nth-child(2)]:space-x-0 group"
  >
    <div class="w-1/2">
      <p class="pb-4 text-primary-primary-100 font-semibold text-2xl">
        {{ title }}
      </p>
      <div v-html="description" class="pb-4 text-sm leading-6"></div>
      <div class="text-right">
        <p class="text-sm leading-6">{{ jobName }}</p>
        <p class="text-xl leading-8">{{ name }}</p>
      </div>
    </div>
    <div class="w-1/2 group-[:nth-child(2)]:!mr-8">
      <img class="w-full h-full object-cover" :src="imageUrl" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    jobName: {
      type: String,
    },
    name: {
      type: String,
    },
    itemIndex: {
      type: Number,
    },
    imageUrl: {
      type: String,
    },
  },
};
</script>
