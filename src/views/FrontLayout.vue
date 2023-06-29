<template>
  <HeaderNav />
  <div class="layout-content">
    <RouterView />
  </div>
  <FooterNav />
  <Modal v-model="show">
    <LightBox
      :image-url="infoData.imageUrl"
      v-model="modalShow"
      header-title="OPEN MIND!"
    />
  </Modal>
</template>

<script>
import { mapActions, mapState } from "pinia";
import useGlobalDialogStore from "@/stores/globalDialog.js";
import { RouterView } from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
import FooterNav from "@/components/FooterNav.vue";
import LightBox from "@/components/LightBox.vue";
import Modal from "@/components/Modal.vue";

import tshukathon from "@/assets/images/tshukathon.jpg";
export default {
  components: {
    RouterView,
    HeaderNav,
    FooterNav,
    LightBox,
    Modal,
    tshukathon,
  },
  data() {
    return {
      modalShow: false,
      infoData: {
        imageUrl: tshukathon,
      },
    };
  },
  methods: {
    openModal() {
      this.modalShow = !this.modalShow;
    },
  },
  computed: {
    ...mapState(useGlobalDialogStore, ["show"]),
  }
};
</script>
