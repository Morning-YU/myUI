<template>
  <div class="block">
    <my-backto-top> </my-backto-top>
    <div v-for="s in 100" class="background-color" :key="s">{{ s }}</div>
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