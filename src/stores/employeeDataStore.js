const { VITE_API_URL } = import.meta.env;
// import axios from "axios";
import { defineStore } from "pinia";
// import { useLoadingState } from "@/stores/common.js";
import { useCollectStore } from "@/stores/collectStore.js";
// import toast from "@/utils/toast";
// import xlsxFile from "@/assets/Employee20230704.xlsx";
import router from "../router";
import { read, utils } from "xlsx";
const xlsxFile = new URL("@/assets/Employee20230704.xlsx", import.meta.url)
  .href;
export const employeeDataStore = defineStore("employeetData", {
  state: () => {
    return {
      headers: [],
      employeeData: [],
      excelData:[],
      // employeeTags: [],
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
        // const response = await fetch(
        //   new URL(VITE_API_URL, import.meta.url).href
        // );

        const data = await response.arrayBuffer();
        const workbook = read(data);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = utils.sheet_to_json(worksheet, { header: 1 });
          
        this.headers = this.excelData.shift();
        const excludeKey = ["臉書帳號", "Line帳號", "手機", "Mail"];

        const trimArray = Object.values(this.headers).map((item) =>
          item.trim()
        );
        // console.log("trimArray", trimArray);
        // 取出 Excel A欄位  //篩選出Excel A開頭 欄位的資料，然後分割字串，移除A字，取得數字資料
        const worksheetRow = Object.keys(worksheet)
          .filter((worksheet, index) => /^A[^A-Za-z]/.test(worksheet))
          .map((item) => +item.split("A")[1]);
        const worksheetRowNum = [...worksheetRow];

        const result = this.excelData.map((row, rowIndex) => {
          return trimArray.reduce((obj, header, index) => {
            // const filterHeader = excludeKey.filter(
            //   (item) => excludeKey.includes(header)
            // );
            // console.log("filterHeader", filterHeader);

            // 將worksheetRowNum 數字塞入
            obj.id = worksheetRowNum[rowIndex];
            obj[header] = row[index];
            // if (excludeKey.includes(header)) {
            //   // console.log("row", row);
            // }
            if (header === "標籤") {
              obj[header] = row[index].split("、");
            }
            if (typeof obj[header] === "string") {
              obj[header] = obj[header];
            }
            return obj;
          }, {});
        });

        this.employeeData = result;
      } catch (error) {
        console.error("Error fetching and parsing workbook:", error);
      }
    },
    async fetchData() {
      const f = await (await fetch(VITE_API_URL)).arrayBuffer();
      const wb = read(f);
      const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      
      // const result = this.excelData.map((row, rowIndex) => {
      //   return trimArray.reduce((obj, header, index) => {

      //     // 將worksheetRowNum 數字塞入
      //     obj.id = worksheetRowNum[rowIndex];
      //     obj[header] = row[index];
      //     // if (excludeKey.includes(header)) {
      //     //   // console.log("row", row);
      //     // }
      //     if (header === "標籤") {
      //       obj[header] = row[index].split("、");
      //     }
      //     if (typeof obj[header] === "string") {
      //       obj[header] = obj[header];
      //     }
      //     return obj;
      //   }, {});
      // });
      // this.employeeData = data;
      console.log(data);
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
    employeeTags() {
      const setKey = new Set();
      this.employeeData.forEach((item) => {
        if (item["標籤"]) {
          item["標籤"].forEach((tag) => {
            setKey.add(tag);
          });
        }
      });
      return [...setKey];
    },
  },
});
