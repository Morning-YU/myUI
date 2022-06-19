<template>
  <div class="block">
    <my-swiper class="swiperBlock" :imgList="imgList" :initialInterval="3000">
    </my-swiper>
  </div>
</template>

<script>
import mySwiper from "../components/mySwiper.vue";

export default {
  name: "swiperView",
  components: {
    mySwiper,
  },
  data() {
    return {
      imgList: [
        require("../assets/img/1.jpg"),
        require("../assets/img/2.jpg"),
        require("../assets/img/3.jpg"),
        require("../assets/img/4.jpg"),
        require("../assets/img/5.jpg"),
        require("../assets/img/6.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
</style>