import { createRouter, createWebHistory, RouterOptions } from "vue-router";
import BillingPanel from "./pages/BillingPanel.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import Layout from "./components/Layout.vue";

const routes: RouterOptions["routes"] = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "products", component: ProductsPage },
      { path: "", component: BillingPanel },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
