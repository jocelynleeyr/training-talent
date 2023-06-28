<template>
  <HeaderNav />
  <div class="layout-content">
    <RouterView />
  </div>
  <FooterNav />
</template>

<script>
import { RouterView } from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";
export default {
  data() {
    return {};
  },
  components: {
    RouterView,
    HeaderNav,
    FooterNav,
  },
};
</script>
