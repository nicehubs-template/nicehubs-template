<script lang="ts" setup>
const count = ref(0);

const handleAdd = () => {
  count.value += 1;
};

const { t } = useI18n();
</script>

<template>
  <div>{{ t('count') }} ： {{ count }}</div>
  <el-button @click="handleAdd">{{ t('add') }}</el-button>
</template>

<style lang="scss" module="style">
@import './Hello.module.scss';
</style>

<i18n>
{
  "en" : {
    "count": "Count",
    "add": "ADD"
  },
  "zh" : {
    "count": "总数",
    "add": "添加"
  }
}
</i18n>
