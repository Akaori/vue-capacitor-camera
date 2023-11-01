import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import AttachPhotos from "@/pages/AttachPhotos.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "AttachPhotos",
    component: AttachPhotos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
