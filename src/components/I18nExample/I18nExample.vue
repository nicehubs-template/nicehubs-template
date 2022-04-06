<script lang="ts" setup>
import i18n from '@/i18n';

const fnI18n = ref('');
const { t } = useI18n();

// 全局 i18n 用法1
const { t: gt } = useI18n({ useScope: 'global' });

onMounted(() => {
  // 函数中使用全局Scope i18n
  fnI18n.value = i18n.global.t('globalHi');
});
</script>

<template>
  <!-- 组件Scope i18n 用法1 -->
  <div>组件Scope i18n：{{ t('hi') }}</div>
  <div>全局Scope i18n 用法1：{{ gt('globalHi') }}</div>
  <div>全局Scope i18n 用法2：{{ $t('globalHi') }}</div>
  <div>函数中使用全局Scope i18n：{{ fnI18n }}</div>
</template>

<i18n>
{
  "en" : {
    "hi": "Hi, Nicehubs",
  },
  "zh" : {
    "hi": "你好，好家伙！",
  }
}
</i18n>
