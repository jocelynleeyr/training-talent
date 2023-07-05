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
        const getCollect = useCollectStore();
        getCollect.collectIds = collectStorage.get("collectStorage");
        const employeeData = employeeDataStore();
        await employeeData.fetchExcelData();
        // await employeeData.fetchData();
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

export default router;
