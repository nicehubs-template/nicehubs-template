/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 环境变量 Ts 类型提示
// 当前环境判断使用 import.meta.env.MODE， MODE 对应 package.json scripts 中 --mode 选项
interface ImportMetaEnv {
  // 服务配置
  readonly VITE_SERVICE_HOST: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
