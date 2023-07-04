const { VITE_API_URL } = import.meta.env;
// import axios from "axios";
import { defineStore } from "pinia";
// import { useLoadingState } from "@/stores/common.js";
import { useCollectStore } from "@/stores/collectStore.js";
// import toast from "@/utils/toast";
import router from "../router";
import { read, utils } from "xlsx";
export const employeeDataStore = defineStore("employeetData", {
  state: () => {
    return {
      headers: [],
      employeeData: [],
      pagination: {
        per_page: 10,
        totalResult: 0,
        total_pages: 0,
        current_page: 1,
        data: [],
      },
    };
  },
  actions: {
    changePage(num) {
      this.pagination.current_page = num;
      this.paginationData.current_page = num;
    },
    pageNum() {
      this.pagination.totalResult = this.modifyData.length;
      this.pagination.total_pages = Math.ceil(
        this.pagination.totalResult / this.pagination.per_page
      );
      if (this.pagination.current_page > this.pagination.total_pages) {
        this.pagination.current_page = this.pagination.total_pages;
      }
      if (this.pagination.current_page <= 1) {
        this.pagination.current_page = 1;
      }
    },
    async fetchExcelData() {
      try {
        const response = await fetch(VITE_API_URL);
        const data = await response.arrayBuffer();
        const workbook = read(data);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = utils.sheet_to_json(worksheet, { header: 1 });
        this.headers = this.excelData.shift();
        const trimArray = Object.values(this.headers).map((item) =>
          item.trim()
        );

        // 取出 Excel A欄位  //篩選出Excel A開頭 欄位的資料，然後分割字串，移除A字，取得數字資料
        const worksheetRow = Object.keys(worksheet)
          .filter((worksheet, index) => /^A[^A-Za-z]/.test(worksheet))
          .map((item) => +item.split("A")[1]);
        const worksheetRowNum = [...worksheetRow];
        const result = this.excelData.map((row, rowIndex) => {
          return trimArray.reduce((obj, header, index) => {
            // 將worksheetRowNum 數字塞入
            obj.id = worksheetRowNum[rowIndex];
            obj[header] = row[index];
            if (typeof obj[header] === "string") {
              obj[header] = obj[header];
            }
            return obj;
          }, {});
        });

        // const filterNoneEmptyData = result.filter((item) => {
        //   return !Object.keys(item)
        //     .map((key) => {
        //       if (key === "id") return;
        //       console.log('item',item);
        //       return item[key];
        //     })
        //     .every((content) => !content);
        // });
        this.employeeData = result;
      } catch (error) {
        console.error("Error fetching and parsing workbook:", error);
      }
    },
  },
  getters: {
    paginationData() {
      this.pageNum();
      const minItem =
        this.pagination.current_page * this.pagination.per_page -
        this.pagination.per_page +
        1;
      const maxItem = this.pagination.current_page * this.pagination.per_page;
      let data = [];
      this.modifyData.forEach((item, i) => {
        let itemNum = i + 1;
        if (itemNum >= minItem && itemNum <= maxItem) {
          data.push(item);
        }
      });
      return {
        ...this.pagination,
        data,
      };
    },
    modifyData() {
      return this.employeeData.map((item) => {
        return {
          ...item,
          collected: false,
        };
      });
    },
  },
});
