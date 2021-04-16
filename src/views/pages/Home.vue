<template>
  <div class='container main'>
    <h2>hello world</h2>
    <button @click='toAbout'>关于</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Head from '../components/Head.vue';

export default defineComponent({
  components: {
    Head
  },
  name: 'Home',
  setup() {
    const router = useRouter();

    function toAbout() {
      router.push('/about');
    }

    return {
      toAbout
    };
  }
});
</script>

<style lang='scss' scoped>
.main {
  text-align: center;
}
</style>
