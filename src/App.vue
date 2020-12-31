<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="include" :exclude="exclude" :max="max">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>
<script lang="ts">
import {toRefs} from "vue";
import {keepAliveOpt} from "./store";

export default {
  setup() {
    return {...toRefs(keepAliveOpt)};
  }
}
</script>
<style>
@import "assets/main.css";
</style>
