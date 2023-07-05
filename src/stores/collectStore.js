const { VITE_URL, VITE_PATH } = import.meta.env;
// import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";
import { employeeDataStore } from "@/stores/employeeDataStore.js";
// import toast from "@/utils/toast";
// import Swal from "sweetalert2";

function defineStorage(key) {
  return {
    get(key) {
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
export const compareStorage = defineStorage("compareStorage");
export const useCollectStore = defineStore("collectStore", {
  state: () => ({
    collectData: [],
    compareData: [],
    collectIds: [],
    compareIds: [],
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
      const collectId = this.collectIds.indexOf(id);
      // 要抓相同 ID  
      // const compareId = this.compareIds.indexOf(id);
      console.log(compareId, collectId);
      if (collectId === -1) {
        this.collectIds.push(id);
      } else {
        this.collectIds.splice(collectId, 1);
        // this.compareIds.splice(compareId, 1);
      }
      collectStorage.set(this.collectIds);
      compareStorage.set(this.compareIds);
      this.getCollects();
    },

    getCompare() {
      this.compareData = [];
      employeeDataStore().modifyData.forEach((item) => {
        if (this.compareIds.includes(item.id)) {
          this.compareData.push(item);          
        }
      });
    },
    toggleCompare(id) {
      const compareId = this.compareIds.indexOf(id);
      if (compareId === -1) {
        this.compareIds.push(id);
      } else {
        this.compareIds.splice(compareId, 1);
      }
      compareStorage.set(this.compareIds);
      this.getCompare();
    },
  },
  getters: {},
});
