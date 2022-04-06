<script lang="ts" setup>
import Hello from '@/components/Hello/Hello.vue';
import I18nExample from '@/components/I18nExample/I18nExample.vue';
</script>

<template>
  <div :class="style.container">
    <I18nExample></I18nExample>
    <Hello></Hello>
  </div>
</template>

<style lang="scss" module="style">
@import './Home.module.scss';
</style>
