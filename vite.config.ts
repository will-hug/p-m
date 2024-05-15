/*
 * @Author: will_hug 1447607151@qq.com
 * @Date: 2024-05-11 21:56:35
 * @LastEditors: will_hug 1447607151@qq.com
 * @LastEditTime: 2024-05-12 13:41:40
 * @FilePath: \vue-project\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import postCssPxToRem from 'postcss-pxtorem';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue() {
            return 75;
          },
          propList: ['*'],
        }),
      ],
    },
  },
});
