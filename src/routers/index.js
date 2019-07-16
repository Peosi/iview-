import Vue from "vue";
import Router from "vue-router";
import homeRouter from "./home-page";
import allmangeRouter from "./all-management";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [homeRouter, allmangeRouter]
});
