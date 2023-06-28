<template>
  <footer class="bg-primary-primary-300">
    <div class="container">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between py-20 md:py-[54px]"
      >
        <p class="pb-[26px] md:pb-0 whitespace-nowrap text-netural-netural-100  text-2xl">{{ webTitle }}</p>
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
