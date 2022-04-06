/// <reference types="vitest" />

import { defineConfig } from 'vite';
import * as path from 'path';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      // 自动导入声明文件,
      // 注意导出 eslintnore 和 添加 tsconfig 声明
      include: [/\.vue$/],
      imports: ['vue', 'vue-router', 'vue-i18n'],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        // 输出 eslintnore 文件
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: './auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 国际化
    VueI18n({
      runtimeOnly: true,
      compositionOnly: false,
      include: [path.resolve(__dirname, 'src/i18n/locales/**')],
    }),
  ],
  // 别名相关配置，需与 tsconfig文件 同步
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // css module 相关配置
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // vitest 相关配置
  test: {},
  envDir: path.resolve(__dirname, 'src/config'),
});
