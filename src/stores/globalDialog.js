import { defineStore } from "pinia";
export default defineStore("globalDialog", {
  state: () => ({
    show: false,
    active: "",
    config: {},
  }),
  getters: {},
  actions: {
    closeDialog() {
      console.log("close");
      // this.config = {};
      this.show = false;
    },
    openModal() {
      console.log("open");
      this.show = true;
    },
  },
});
