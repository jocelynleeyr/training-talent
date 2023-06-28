<template>
  <header
    class="sticky top-0 inset-x-0 z-50 lg:h-auto bg-netural-netural-100 shadow-md"
  >
    <div class="container">
      <div class="flex items-center justify-between h-20">
        <router-link to="/" class="whitespace-nowrap text-2xl">{{
          webTitle
        }}</router-link>
        <div class="flex items-center md:space-x-6 lg:space-x-24">
          <nav class="hidden md:block">
            <ul class="flex items-center space-x-10">
              <router-link
                v-for="item in navList"
                custom
                v-slot="{ href, isActive }"
                :to="item.path"
              >
                <template v-if="item.path === '/collect'">
                  <li class="group" :class="{ 'nav-active': isActive }">
                    <a
                      class="block px-4 py-2 min-w-[130px] text-base text-center text-netural-netural-100 bg-primary-primary-200 hover:bg-primary-primary-100 rounded-full group-[.nav-active]:text-primary-primary-200"
                      :href="href"
                      >{{ item.meta.title }} icon</a
                    >
                  </li>
                </template>
                <template v-else>
                  <li class="group" :class="{ 'nav-active': isActive }">
                    <a
                      class="block p-3 text-base text-netural-netural-400 hover:text-primary-primary-200 group-[.nav-active]:text-primary-primary-200"
                      :href="href"
                      >{{ item.meta.title }}</a
                    >
                  </li>
                </template>
              </router-link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import useNavListMenu from "@/stores/navList.js";
import { mapActions, mapState } from "pinia";
export default {
  computed: {
    ...mapState(useNavListMenu, ["navList", "webTitle"]),
  },
  mounted() {
    console.log("useNavListMenu", this.navList);
  },
};
</script>

<style></style>
