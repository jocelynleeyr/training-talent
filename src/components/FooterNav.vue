<template>
  <footer class="bg-primary-primary-300">
    <div class="container">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between py-20 md:py-[54px]"
      >
        <div class="flex flex-row items-center space-x-1 font-bold">
          <h1 class="whitespace-nowrap text-2xl text-netural-netural-100">
            {{ webTitle }}
          </h1>
          <p class="w-5 text-center text-lg text-netural-netural-100">X</p>
          <div
            class="logo w-[120px] h-[40px] bg-netural-netural-100"
            alt=""
          ></div>
        </div>
        <nav class="hidden md:block">
          <ul class="flex items-center space-x-10">
            <router-link
              v-for="item in navList"
              custom
              v-slot="{ href, isActive }"
              :to="item.path"
            >
              <li class="group" :class="{ 'nav-active': isActive }">
                <a
                  class="block p-3 font-bold text-base text-netural-netural-100 hover:text-secondary-secondary-200 group-[.nav-active]:text-secondary-secondary-200"
                  :href="href"
                  >{{ item.meta.title }}</a
                >
              </li>
            </router-link>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
import useNavListMenu from "@/stores/navList.js";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useNavListMenu, ["navList", "webTitle"]),
  },
};
</script>
