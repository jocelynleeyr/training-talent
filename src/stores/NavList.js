import { defineStore } from "pinia";
import router from "../router";
export default defineStore("navListMenu", {
  // => 直接回傳的寫法
  state: () => ({
    webTitle: "iMatch 人才招募",
  }),
  actions: {},
  getters: {
    // 給選單用
    navList() {
      return router
        .getRoutes()
        .filter((item) =>
          item.name === "FrontLayout" ? router.getRoutes().children : []
        );
    },
  },
});
