<template>
  <router-view v-slot="{ Component }">
    <keep-alive
      :include="keepAliveData.include"
      :exclude="keepAliveData.exclude"
      :max="keepAliveData.max"
    >
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script lang="ts">
import { keepAliveData } from './store';

export default {
  setup() {
    return { keepAliveData };
  }
};
</script>
<style lang="scss">
@import 'views/scss/color';
@import 'views/scss/main';
</style>
