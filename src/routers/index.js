import Vue from "vue";
import Router from "vue-router";
import homeRouter from "./home-page";
import allmangeRouter from "./all-management";
import Main from "@/components/Main";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/home',
      component: Main,
      children: [ 
        homeRouter, 
        allmangeRouter
      ]
    }
  ]
});
