import{d as V,r as b,m as f,_,u as N,a as u,o as s,c as a,b as e,e as p,w,t as r,F as y,f as L,g as k,n as h,h as T,i as z,R as F}from"./index-27d8646d.js";import{t as $,u as R}from"./tshukathon-8ca5a732.js";const g=V("navListMenu",{state:()=>({webTitle:"iMatch 人才招募"}),actions:{},getters:{navList(){return b.getRoutes().filter(t=>t.name==="FrontLayout"?b.getRoutes().children:[])}}}),B={computed:{...f(g,["navList","webTitle"]),...f(N,["collectIds"])}},C={class:"sticky top-0 inset-x-0 z-20 lg:h-auto bg-netural-netural-100 shadow-md"},j={class:"container"},H={class:"flex items-center justify-between h-20"},I={class:"whitespace-nowrap leading-none text-2xl font-bold text-primary-primary-200"},M={class:"flex items-center md:space-x-6 lg:space-x-24"},O={class:"hidden md:block"},D={class:"flex items-center space-x-10"},U=["href"],X={class:"absolute right-0 top-0 min-w-[22px] h-[22px] py-0.5 px-1 scale-90 rounded-full bg-netural-netural-100 text-primary-primary-100 leading-none text-center font-bold"},q=["href"];function E(t,n,m,x,i,v){const l=u("router-link");return s(),a("header",C,[e("div",j,[e("div",H,[p(l,{to:"/",class:"flex flex-row items-center space-x-1"},{default:w(()=>[e("h1",I,r(t.webTitle),1)]),_:1}),e("div",M,[e("nav",O,[e("ul",D,[(s(!0),a(y,null,L(t.navList,o=>(s(),k(l,{custom:"",to:o.path,key:o.path},{default:w(({href:c,isExactActive:d})=>[o.path==="/collect"?(s(),a("li",{key:0,class:h(["group",{"nav-active":d}])},[e("a",{class:"relative flex items-center justify-center px-4 py-2 min-w-[130px] text-base text-center text-netural-netural-100 bg-primary-primary-200 hover:bg-primary-primary-100 rounded-full group-[.nav-active]:text-netural-netural-100 group-[.nav-active]:bg-primary-primary-100 group-[.nav-active]:font-bold",href:c},[T(r(o.meta.title)+" ",1),e("div",X,r(t.collectIds.length),1)],8,U)],2)):(s(),a("li",{key:1,class:h(["group",{"nav-active":d}])},[e("a",{class:"block p-3 text-base text-netural-netural-400 hover:text-primary-primary-200 group-[.nav-active]:text-primary-primary-200 group-[.nav-active]:font-bold",href:c},r(o.meta.title),9,q)],2))]),_:2},1032,["to"]))),128))])])])])])])}const G=_(B,[["render",E]]),J={computed:{...f(g,["navList","webTitle"])}},K={class:"bg-primary-primary-300"},P={class:"container"},Q={class:"flex flex-col md:flex-row md:items-center md:justify-between py-20 md:py-[54px]"},W={class:"flex flex-row items-center space-x-1 font-bold"},Y={class:"whitespace-nowrap text-2xl text-netural-netural-100"},Z=e("p",{class:"w-5 text-center text-lg text-netural-netural-100"},"X",-1),A=e("div",{class:"logo w-[120px] h-[40px] bg-netural-netural-100",alt:""},null,-1),ee={class:"hidden md:block"},te={class:"flex items-center space-x-10"},oe=["href"];function se(t,n,m,x,i,v){const l=u("router-link");return s(),a("footer",K,[e("div",P,[e("div",Q,[e("div",W,[e("h1",Y,r(t.webTitle),1),Z,A]),e("nav",ee,[e("ul",te,[(s(!0),a(y,null,L(t.navList,o=>(s(),k(l,{custom:"",to:o.path},{default:w(({href:c,isActive:d})=>[e("li",{class:h(["group",{"nav-active":d}])},[e("a",{class:"block p-3 font-bold text-base text-netural-netural-100 hover:text-secondary-secondary-200 group-[.nav-active]:text-secondary-secondary-200",href:c},r(o.meta.title),9,oe)],2)]),_:2},1032,["to"]))),256))])])])])])}const ae=_(J,[["render",se]]),ne={props:{modelValue:{type:Boolean,default:!1}},data(){return{transtionShow:this.modelValue,ifShow:!1}},watch:{modelValue(t){t?(this.ifShow=!0,window.setTimeout(()=>{this.transtionShow=!0},0)):(this.transtionShow=!1,window.setTimeout(()=>{this.ifShow=!1},0))},ifShow(t){t?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}},computed:{...f(g,["navList","webTitle"])}},le=e("div",{class:"absolute top-0 left-0 z-30 bg-netural-netural-100 w-full h-full transition-all delay-[1.5s] duration-1000 ease translate-x-[0%] group-[.-show]:-translate-x-[100%]"},null,-1),re=e("div",{class:"absolute top-0 left-0 z-20 bg-neutral-100 w-full h-full transition-all delay-[2s] duration-1000 ease translate-x-[0%] group-[.-show]:-translate-x-[100%]"},null,-1),ie={class:"relative z-30 flex flex-col items-center w-full max-w-[332px] h-10 font-bold text-primary-primary-200 transition-all delay-[2s] duration-700 opacity-100 visible group-[.-show]:opacity-0 group-[.-show]:invisible"},ce=e("div",{class:"absolute top-0 left-0 z-20 flex flex-row items-center flex-none w-full h-10 bg-netural-netural-100 transition-all delay-[1s] duration-500 ease-in translate-x-[0%] opacity-70 group-[.-show]:translate-x-[100%] group-[.-show]:opacity-0"},null,-1),de={class:"absolute top-0 left-0 flex flex-row items-center flex-none space-x-1 w-full h-10 font-bold text-primary-primary-200"},ue=["before"],pe=e("p",{class:"w-5 text-center text-lg"},"X",-1),fe=e("div",{class:"logo w-[120px] h-[40px] bg-primary-primary-200",alt:""},null,-1);function he(t,n,m,x,i,v){return i.ifShow?(s(),a("div",{key:0,class:h(["fixed top-0 left-0 z-50 flex justify-center items-center w-full h-full text-neutral-900 group",{"-show":i.transtionShow}]),onInput:n[0]||(n[0]=l=>t.$emit("update:modelValue",i.transtionShow))},[le,re,e("div",ie,[ce,e("div",de,[e("h1",{before:t.webTitle,class:"whitespace-nowrap text-2xl"},[e("span",null,r(t.webTitle),1)],8,ue),pe,fe])])],34)):z("",!0)}const _e=_(ne,[["render",he]]),me={components:{RouterView:F,HeaderNav:G,FooterNav:ae,tshukathon:$,LoadingOverlay:_e},data(){return{infoData:{imageUrl:$}}},computed:{...f(R,["isLoading"])}},xe={class:"layout-content"};function ve(t,n,m,x,i,v){const l=u("HeaderNav"),o=u("RouterView"),c=u("FooterNav"),d=u("LoadingOverlay");return s(),a(y,null,[p(l),e("div",xe,[p(o)]),p(c),p(d,{modelValue:t.isLoading,"onUpdate:modelValue":n[0]||(n[0]=S=>t.isLoading=S)},null,8,["modelValue"])],64)}const ge=_(me,[["render",ve]]);export{ge as default};