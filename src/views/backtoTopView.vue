<template>
  <div class="block">
    <my-backto-top> </my-backto-top>
    <div class="content" v-for="val in 100" :key="val">{{ val }}</div>
  </div>
</template>
<script>
import myBacktoTop from "../components/myBacktoTop.vue";
export default {
  components: {
    myBacktoTop,
  },
};
</script>

<style lang="" scoped>
.content {
  height: 50px;
}
</style>