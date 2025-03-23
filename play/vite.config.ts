import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Macros from "unplugin-vue-macros/vite";
import Inspect from "vite-plugin-inspect";
// import { JonUIResolver } from "./resolver";
// import Components from "unplugin-vue-components/vite";

export default defineConfig(() => {
  return {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "/styles/custom.scss" as *;`,
          silenceDeprecations: ["legacy-js-api"] as any,
        },
      },
    },
    server: {
      port: 3000,
      host: true,
    },
    build: {
      sourcemap: true,
    },
    esbuild: {
      target: "chrome64",
    },
    plugins: [
      Macros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue(),
          vueJsx: vueJsx(),
        },
      }),
      // Components({
      //   include: `${__dirname}/**`,
      //   resolvers: JonUIResolver(),
      //   dts: false,
      // }),
      Inspect(),
    ],
  };
});
