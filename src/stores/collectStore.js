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
    getCollects() {
      this.collectData = [];
      employeeDataStore().modifyData.forEach((item) => {
        if (this.collectIds.includes(item.id)) {
          this.collectData.push(item);
        }
      });
    },
    toggleCollect(id) {
      console.log("toggle");
      const collectId = this.collectIds.indexOf(id);
      if (collectId === -1) {
        this.collectIds.push(id);
      } else {
        this.collectIds.splice(collectId, 1);
      }
      collectStorage.set(this.collectIds);
      this.getCollects();
    },
  },
  getters: {},
});
