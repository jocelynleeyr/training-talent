<template>
  <div
    class="w-10 h-10 flex items-center justify-center cursor-pointer select-none"
    title="加入收藏"
    @click.stop.prevent="toggleCollect(employeeData.id)"
  >
    <span
      v-if="collectIds.indexOf(employeeData.id) === -1"
      class="material-icons-round text-3xl text-neutral-300"
    >
      star_border
    </span>
    <span v-else class="material-icons-round text-3xl text-yellow-400">
      star
    </span>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCollectStore } from "@/stores/collectStore.js";
export default {
  props: {
    employeeData: {
      type: Object,
      default: () => {},
    },
    className: {
      type: Object,
      default: () => {},
        // position: 'static',
        // top: '0',
        // bottom: '0'
    }
  },
  data(){
    return {
      
    }
  },
  methods: {
    ...mapActions(useCollectStore, ["toggleCollect"]),
  },
  computed: {
    ...mapState(useCollectStore, ["collectIds"]),
  },
};
</script>