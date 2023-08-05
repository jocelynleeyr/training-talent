<template>
  <HeaderNav />
  <div class="layout-content">
    <RouterView />
  </div>
  <FooterNav />
  <LoadingOverlay v-model="isLoading" />
</template>

<script>
import { mapState } from "pinia";
import { useLoadingState } from "@/stores/common.js";

import { RouterView } from "vue-router";
import tshukathon from "@/assets/images/tshukathon.jpg";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";
import LoadingOverlay from "@/components/LoadingOverlay.vue";
export default {
  components: {
    RouterView,
    HeaderNav,
    FooterNav,
    tshukathon,
    LoadingOverlay,
  },
  data() {
    return {
      infoData: {
        imageUrl: tshukathon,
      },
    };
  },
  computed: {
    ...mapState(useLoadingState, ["isLoading"]),
  },
};
</script>
