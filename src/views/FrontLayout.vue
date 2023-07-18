<template>
  <HeaderNav />
  <div class="layout-content">
    <RouterView />
  </div>
  <FooterNav />
  
</template>

<script>
import { mapActions, mapState } from "pinia";
import useGlobalDialogStore from "@/stores/globalDialog.js";

import { RouterView } from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";
import tshukathon from "@/assets/images/tshukathon.jpg";
export default {
  components: {
    RouterView,
    HeaderNav,
    FooterNav,
    tshukathon,
  },
  data() {
    return {
      infoData: {
        imageUrl: tshukathon,
      },
      
    };
  },
  methods: {
    // ...mapActions(useGlobalDialogStore, ["closeDialog"]),
  },
  computed: {
    // ...mapState(useGlobalDialogStore, ["show"]),
  },

};
</script>
