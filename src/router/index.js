import { createRouter, createWebHashHistory } from "vue-router";
import { useCollectStore, collectStorage } from "@/stores/collectStore.js";
import { employeeDataStore } from "@/stores/employeeDataStore.js";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FrontLayout",
      component: () => import("@/views/FrontLayout.vue"),
      async beforeEnter(to, from) {
        const collectStore = useCollectStore();
        
        collectStore.collectIds = collectStorage.get("collectStorage");
        collectStore.compareIds = collectStorage.get("compareStorage");

        const employeeData = employeeDataStore();
        await employeeData.fetchExcelData();
      },
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/Home.vue"),
          meta: {
            title: `首頁`,
          },
        },
        {
          path: "employeesearch",
          name: "EmployeeSearch",
          component: () => import("@/views/EmployeeSearch.vue"),
          meta: {
            title: `視圖搜尋`,
          },
        },
        {
          path: "collect",
          name: "Collect",
          component: () => import("@/views/Collect.vue"),
          meta: {
            title: `收藏`,
          },
        },
      ],
    },
  ],
  linkExactActiveClass: "nav-active",
});

// router.beforeEach(async (to, from, next) => {
//   const loadingState = useLoadingState();
//   loadingState.isLoading = true;
//   // console.log("讀取中 beforeEach", to, from);
//   await animateWithDelay(1000).then(() => {
//     next();
//   });
// });
// router.afterEach(async (to, from) => {
//   const loadingState = useLoadingState();
//   await animateWithDelay(2000).then(() => {
//     loadingState.isLoading = false;
//     // console.log("讀取完 afterEach");
//   });
// });
export default router;
