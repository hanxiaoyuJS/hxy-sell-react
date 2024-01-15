import { defineConfig } from "umi";
import  routes from "./config/routers"

export default defineConfig({
  routes,
  npmClient: 'yarn',
  history: { type: 'hash' },
});
