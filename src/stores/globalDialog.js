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
      this.show = false;
    },
    openModal() {
      this.show = true;
    },
  },
});
