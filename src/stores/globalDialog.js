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
      this.config = {};
      this.show = false;
    },
  },
});
