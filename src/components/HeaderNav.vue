<template>
  <header
    class="sticky top-0 inset-x-0 z-20 lg:h-auto bg-netural-netural-100 shadow-md"
  >
    <div class="container">
      <div class="flex items-center justify-between h-20">
        <router-link to="/" class="flex flex-row items-center space-x-1">
          <h1
            class="whitespace-nowrap leading-none text-2xl font-bold text-primary-primary-200"
          >
            {{ webTitle }}
          </h1>
          <!-- <div
            class="logo w-[108px] h-[28px] bg-primary-primary-100"
            alt=""
          ></div> -->
        </router-link>
        <div class="flex items-center md:space-x-6 lg:space-x-24">
          <nav class="hidden md:block">
            <ul class="flex items-center space-x-10">
              <router-link
                v-for="item in navList"
                custom
                v-slot="{ href, isExactActive }"
                :to="item.path"
                :key="item.path"
              >
                <template v-if="item.path === '/collect'">
                  <li class="group" :class="{ 'nav-active': isExactActive }">
                    <a
                      class="relative flex items-center justify-center px-4 py-2 min-w-[130px] text-base text-center text-netural-netural-100 bg-primary-primary-200 hover:bg-primary-primary-100 rounded-full group-[.nav-active]:text-netural-netural-100 group-[.nav-active]:bg-primary-primary-100 group-[.nav-active]:font-bold"
                      :href="href"
                      >{{ item.meta.title }}
                      <!-- <span
                        class="material-icons-round relative ml-1 leading-[0]"
                      >
                        star
                      </span> -->
                      <div
                        class="absolute right-0 top-0 min-w-[22px] h-[22px] py-0.5 px-1 scale-90 rounded-full bg-netural-netural-100 text-primary-primary-100 leading-none text-center font-bold"
                      >
                        {{ collectIds.length }}
                      </div>
                    </a>
                  </li>
                </template>
                <template v-else>
                  <li class="group" :class="{ 'nav-active': isExactActive }">
                    <a
                      class="block p-3 text-base text-netural-netural-400 hover:text-primary-primary-200 group-[.nav-active]:text-primary-primary-200 group-[.nav-active]:font-bold"
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
import { mapActions, mapState } from "pinia";
import useNavListMenu from "@/stores/navList.js";
import { useCollectStore, collectStorage } from "@/stores/collectStore.js";
export default {
  computed: {
    ...mapState(useNavListMenu, ["navList", "webTitle"]),
    ...mapState(useCollectStore, ["collectIds"]),
  },
};
</script>

<style></style>
