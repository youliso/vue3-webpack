<template>
  <div class='container about'>
    <h2><a href='https://github.com/youliso/vue3-webpack'>https://github.com/youliso/vue3-webpack</a></h2>
    <button @click='toHome'>首页</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Head from '@/views/components/Head.vue';

export default defineComponent({
  name: 'About',
  components: { Head },
  setup() {
    const router = useRouter();

    function toHome() {
      router.push('/');
    }

    return {
      toHome
    };
  }
});
</script>

<style lang='scss' scoped>
.about {
  text-align: center;
}
</style>
