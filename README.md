基于 vite2 搭建的 Vue3 前端项目，支持 TS, sass, css-modules, 热更新，通过 husky，eslint 和 stylelint 来约束提交和开发规范。

## 技术栈

- [pinia](https://pinia.vuejs.org/)
- [vite2](https://vitejs.cn/)
- [vue3](https://v3.cn.vuejs.org/)
- [sass](https://www.sass.hk/)


- [vue-router](https://router.vuejs.org/zh/installation.html)
- [element-plus](https://element-plus.gitee.io/zh-CN/)

## 安装

### 安装包管理器 [pnpm](https://pnpm.io/zh/installation)

```
  npm install pnpm -g
```

### VsCode 插件

- ESLint
- Prettier
- StyleLint
- Vue Language Features 
- TypeScript Vue Plugin [VsCode开启托管模式](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669)
- Vue Volar extension Pack (按需)
### 安装项目依赖

```bash
  pnpm install
```

## 使用

### 开发

```javascript
  // 开发环境
  pnpm dev
  // 测试环境
  pnpm dev:staging
  // 生产环境
  pnpm dev:prod
```

默认启动是 8080，代理可以在`config`目录下进行修改，字段`PROXY`

### 构建

```javascript
  // 开发环境
  pnpm build:dev
  // 测试环境
  pnpm build:staging
  // 生产环境
  pnpm build:prod
```

### 启动

```javascript
  pnpm dev
```

### 预览

> 构建完成后执行

```
  pnpm preview
```

## 规范

### css module 规范

> Example.module.sass
```css
.class-name {
  color: red;
}
```
> Example.vue
```html
<script setup lang='ts'></script>

<template>
  <span :class="style.className" > Example </span>
</template>

<style lang='scss' module>
@import './example.module.scss';
</style>
```

### 代码提交规范

`[feat]: 描述`

- 'feat', // 新功能 feature
- 'fix', // 修复 bug
- 'docs', // 文档注释
- 'ui', // UI样式
- 'style', // 代码格式(不影响代码运行的变动)
- 'refactor', // 重构(既不增加新功能，也不是修复 bug)
- 'perf', // 性能优化
- 'test', // 增加测试
- 'chore', // 构建过程或辅助工具的变动
- 'revert', // 回退
- 'build' // 打包

### 注意事项

`git add`时 `lint-stage`会执行`vue-tsc`，`eslint`和`stylelint`，所以请务必保证代码规范。