<script lang="ts" setup>
import Hello from '@/components/Hello/Hello.vue';
</script>

<template>
  <div :class="style.container">
    <Hello></Hello>
  </div>
</template>

<style lang="scss" module="style">
@import './Home.module.scss';
</style>
