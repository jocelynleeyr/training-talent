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
      // 依加入先後順序排序
      this.collectIds.forEach((id) => {
        const findItem = employeeDataStore().originData.find(
          (obj) => obj.id === id
        );
        if (findItem) {
          this.collectData.push(findItem);
        }
      });

      // 依原始陣列順序排序
      // employeeDataStore().originData.forEach((item) => {
      //   if (this.collectIds.includes(item.id)) {

      //     this.collectData.push(item)

      //   }

      // });
    },
    toggleCollect(id) {
      const collectId = this.collectIds.indexOf(id);
      const compareId = this.compareIds.indexOf(id);
      // 要抓相同 ID
      if (collectId === -1) {
        this.collectIds.push(id);
      } else {
        // 移除 collectId
        this.collectIds.splice(collectId, 1);
        // 同時移除與 compareId 相同的資料
        this.compareIds.splice(compareId, 1);
      }
      collectStorage.set(this.collectIds);
      compareStorage.set(this.compareIds);
      this.getCollects(id);
      // 更新localStorage
      this.getCompare();
    },

    getCompare() {
      
      this.compareData = [];
      // 依加入先後順序排序
      this.compareIds.forEach((id) => {
        const findItem = employeeDataStore().originData.find(
          (obj) => obj.id === id
        );
        if (findItem) {
          this.compareData.push(findItem);
        }
      });

      // 依原始陣列順序排序
      // employeeDataStore().originData.forEach((item) => {
      //   if (this.compareIds.includes(item.id)) {
      //     this.compareData.push(item);
      //   }
      // });
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
