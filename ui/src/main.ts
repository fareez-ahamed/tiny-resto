import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { router } from "./router";
import { FakeBackendService } from "./services/backend";
import { Store } from "./providers";

createApp(App)
  .use(VueQueryPlugin)
  .use(router)
  .provide(Store, new FakeBackendService())
  .mount("#app");
