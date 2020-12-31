<template>
  <div class="main">
    <Head></Head>
    <div class="info">
      <h5>This is an about page</h5>
      <button @click="toHome">首页</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter} from "vue-router";
import Head from "@/views/components/Head.vue";

export default defineComponent({
  name: "About",
  components: {Head},
  setup() {
    const router = useRouter();

    function toHome() {
      router.push("/");
    }

    return {
      toHome
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
