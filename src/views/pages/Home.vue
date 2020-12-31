<template>
  <div class="main">
    <Head></Head>
    <div class="info">
      <button @click="toAbout">关于</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter} from "vue-router";
import Head from "../components/Head.vue";

export default defineComponent({
  components: {
    Head
  },
  name: "Home",
  setup() {
    const router = useRouter();

    function toAbout() {
      router.push("/about");
    }

    return {
      toAbout
    }
  }
});
</script>

<style lang="scss">
.info {
  width: 100%;
  height: 100%;
  padding: 25px 10px 10px;
}
</style>
