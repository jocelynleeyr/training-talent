const { VITE_API_URL } = import.meta.env;
import { defineStore } from "pinia";
import { read, utils } from "xlsx";
const xlsxFile = new URL("@/assets/Employee20230704.xlsx", import.meta.url)
  .href;
import { excelDateToJSDate } from "@/utils/common.js";
export const employeeDataStore = defineStore("employeetData", {
  state: () => {
    return {
      headers: [],
      employeeData: [],
      excelData: [],
      selectTag: "all",
      searchKeyword: "",
      selectFilter: [],
      originData: [],
      modifyData: [],
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
    pageNum() {},
    async fetchExcelData() {
      try {
        const response = await fetch(VITE_API_URL);
        
        const data = await response.arrayBuffer();
        const workbook = read(data);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = utils.sheet_to_json(worksheet, { header: 1 });

        const excludeKey = ["臉書帳號", "Line帳號", "手機", "Mail"];
        const originHeader = this.excelData.shift();
        originHeader.push("collected");

        this.headers = Object.assign([], originHeader).filter(
          (key) => !excludeKey.includes(key)
        );

        const trimArray = Object.values(originHeader).map((item) =>
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

            if (
              header === "到職日" ||
              header === "出生年月日" ||
              header === "離職日"
            ) {
              obj[header] = excelDateToJSDate(row[index]);
            } else if (header === "collected") {
              obj[header] = false;
            } else if (header === "標籤") {
              obj[header] = row[index].split("、");
            } else if (typeof obj[header] === "string") {
              obj[header] = obj[header];
            } else {
              obj[header] = row[index];
            }
            return obj;
          }, {});
        });
        const excludeKeyData = result.map((item) => {
          return Object.keys(item)
            .filter((key) => !excludeKey.includes(key))
            .reduce((acc, key) => {
              acc[key] = item[key];
              return acc;
            }, {});
        });
        this.modifyData = excludeKeyData;
        this.originData = excludeKeyData;
      } catch (error) {
        console.error("Error fetching and parsing workbook:", error);
      }
    },
  },
  getters: {
    paginationData() {
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
    employeeTags() {
      const setKey = new Set();
      this.originData.forEach((item) => {
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
