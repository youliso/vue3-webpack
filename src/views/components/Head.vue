<template>
  <div class="head">
    <div class="title">
      test
    </div>
    <div class="events">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Head",
  setup() {

    return {}
  }
});
</script>

<style lang="scss">
.head {
  position: absolute;
  top: 4px;
  left: 5px;
  right: 5px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font: bolder 13px sans-serif;

    span {
      margin-left: 4px;
    }
  }

  .events {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
