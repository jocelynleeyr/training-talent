const { VITE_URL, VITE_PATH } = import.meta.env;
// import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";
import { employeeDataStore } from "@/stores/employeeDataStore.js";
// import toast from "@/utils/toast";
// import Swal from "sweetalert2";

function defineStorage(key) {
  return {
    get() {
      return JSON.parse(localStorage.getItem(key)) || [];
    },
    set(data) {
      return localStorage.setItem(key, JSON.stringify(data));
    },
    remove(index) {
      return localStorage.removeItem(index);
    },
  };
}

export const collectStorage = defineStorage("collectStorage");
export const useCollectStore = defineStore("collectStore", {
  state: () => ({
    collectData: [],
    compareData: [],
    collectIds: [],
  }),
  actions: {
    // TODO 參考六腳專題 11th_street_cafe 的 followsStore.js
    getCollects() {
      collectStorage.get();

      console.log(collectStorage.get());
    },
    // addCollect(item) {
    //   console.log("item", item);
    //   this.collectData.push(item);
    //   this.collectIds.push(item.id);
    //   collectStorage.set(this.collectIds);
    // },
    // removeCollect(item) {
    //   const findItem = this.collectData.findIndex(
    //     (content) => content.id === item.id
    //   );
    //   console.log("findItem", findItem);
    //   this.collectData.splice(findItem, 1);
    //   this.collectIds.splice(findItem, 1);
    //   collectStorage.set(this.collectIds);
    // },
    toggleCollect(id) {
      this.getCollects();
      const collectId = this.collectIds.indexOf(id);
      if (collectId === -1) {
        this.collectIds.push(id);
      } else {
        this.collectIds.splice(collectId, 1);
      }
      collectStorage.set(this.collectIds);
    },
  },
  getters: {},
});
