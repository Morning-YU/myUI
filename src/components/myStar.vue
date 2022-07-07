<template>
  <div>
    <span
      v-for="(item, index) in starArr"
      :key="index"
      :class="item"
      @click="changeScore(index)"
    >
      <i class="el-icon-star-on"></i
    ></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      starScore: 4,
    };
  },
  computed: {
    starArr() {
      // 存储星星的样式
      var starClass = [];
      // 选中之前的星星
      for (let i = 0; i < this.starScore; i++) {
        starClass.push("on_star");
      }
      // 未选中的
      while (starClass.length < 5) {
        starClass.push("off_star");
      }
      return starClass;
    },
  },
  methods: {
    // 获取点击的星星的序号
    changeScore(index) {
      this.starScore = index + 1;
    },
  },
};
</script>
<style scoped>
span {
  display: inline-block;
  font-size: 30px;
}
.on_star {
  color: #409eff;
}
.off_star {
  color: gray;
}
</style>