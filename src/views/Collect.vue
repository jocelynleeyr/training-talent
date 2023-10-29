<template>
  <div class="flex flex-col flex-1 bg-netural-netural-200">
    <div class="container flex flex-col flex-1">
      <PageHeader page-title="Collect" sub-title="收藏" />
      <!-- <AccordionItems :accordion-data="accordionData[0]">
      </AccordionItems> -->
      <div class="flex flex-col flex-1">
        <div class="flex flex-wrap gap-6 py-10">
          <EmployeeItem
            v-for="item in modifyCollectData"
            :key="item.id"
            :employee-data="item"
          />
        </div>
      </div>
      <!-- <AccordionItems :accordion-data="accordionData[1]">
      </AccordionItems> -->
      <div
        class="flex flex-row pt-10 group"
        ref="compareWrap"
        :class="{ '-sticky': isSticky }"
      >
        <CompareItem
          v-for="item in compareData"
          :key="item.id"
          :compare-item="item"
        />
      </div>
      <!-- <div class="space-y-6">
        <div
          v-for="item in accordionData"
          :id="`accordion-${item.id}`"
          class="group"
          :ref="`accordion-${item.id}`"
          :class="{ active: item.active }"
          :key="item.id"
        >
          <h2
            class="bg-netural-netural-100 transition-all group-[.active]:bg-netural-netural-100"
          >
            <button
              @click="toggle(item)"
              class="relative flex items-center w-full pl-4 pr-0 py-1 text-netural-netural-300 cursor-pointer"
              type="button"
            >
              <p class="flex-1 pr-10 text-left font-bold">
                {{ item.title }}
              </p>
              <div
                class="flex justify-center items-center w-10 h-10 ml-auto group-[.active]:rotate-x-180 transition-all duration-300"
              >
                <span class="material-icons-round text-3xl"> expand_more </span>
              </div>
            </button>
          </h2>
          <transition
            name="accordion-item"
            @enter="startTransition"
            @after-enter="endTransition"
            @before-leave="startTransition"
            @after-leave="endTransition"
          >
            <div v-if="item.active" class="overflow-hidden">
              <div class="px-4 py-3 text-body">
                <div class="flex flex-col flex-1">
                  <div class="flex flex-wrap gap-6 py-10">
                    <EmployeeItem
                      v-for="item in modifyCollectData"
                      :key="item.id"
                      :employee-data="item"
                      @remove-item="removeCollect(item, collectData)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="py-6">
        <div
          class="relative flex flex-row items-center pl-3 text-lg bg-netural-netural-100"
        >
          <p class="flex-1">可勾選比較</p>
          <div
            class="flex items-center justify-center w-10 h-10 cursor-pointer"
          >
            <span class="material-icons-round text-3xl"> expand_more </span>
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <div class="flex flex-wrap gap-6 py-10">
            <EmployeeItem
              v-for="item in modifyCollectData"
              :key="item.id"
              :employee-data="item"
              @remove-item="removeCollect(item, collectData)"
            />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCollectStore, compareStorage } from "@/stores/collectStore.js";
import { employeeDataStore } from "@/stores/employeeDataStore.js";

import PageHeader from "@/components/PageHeader.vue";
import AccordionItems from "@/components/AccordionItems.vue";
import EmployeeItem from "@/components/EmployeeItem.vue";
import CompareItem from "@/components/CompareItem.vue";

export default {
  data() {
    return {
      accordionData: [
        {
          id: 1,
          active: true,
          title: "可勾選比較",
        },
        {
          id: 2,
          active: true,
          title: "比較",
        },
      ],
      compareList: [
        {
          id: 1,
          
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],

      countCompareIndex: 0,
      isSticky: false,
      compareWrap: null,
    };
  },
  components: {
    PageHeader,
    EmployeeItem,
    AccordionItems,
    CompareItem,
  },
  methods: {
    ...mapActions(employeeDataStore, ["changePage"]),
    // ...mapActions(useCollectStore, ["addCollect", "removeCollect"]),
    ...mapActions(useCollectStore, ["getCollects", "getCompare"]),
    // addCompareItem(content) {
    //   this.countCompareIndex += 1;
    //   if (this.countCompareIndex >= this.compareList.length) {
    //     this.countCompareIndex = this.compareList.length;
    //   }
    //   this.compareList[this.countCompareIndex - 1] = {
    //     ...content,
    //     id: this.countCompareIndex,
    //   };
    //   compareStorage.set(this.compareList);
    // },

    // removeCompareItem() {},
  },
  computed: {
    ...mapState(useCollectStore, ["collectData", "compareData"]),
    // 整理 收藏資料
    modifyCollectData() {
      // console.log('this.collectData',this.collectData);
      return this.collectData.map((item) => {
        return {
          ...item,
          isCompare: false,
        };
      });
    },
    
  },
  updated() {
    
    // console.log(this.compareWrap);
    // const observer = new IntersectionObserver(
    //   (entries, owner) => {
    //     console.log(owner); // IntersectionObserver 實體
    //     entries.forEach((entry) => {
    //       console.log(entry); // IntersectionObserverEntry 物件
    //     });
    //   },
    //   { threshold: [1] }
    // );
    // observer.observe(this.compareWrap);
  },
  mounted() {
    // 取得 收藏 與 比較 完整資料內容
    this.getCollects();
    this.getCompare();
    // console.log(this.$refs);
    // this.compareWrap = this.$refs.compareWrap;
    
    // const observer = new IntersectionObserver(
    //   ([e]) => e.target.classList.toggle("-sticky", e.intersectionRatio < 1), { threshold: [1] }
    // );
    
  },
};
</script>
