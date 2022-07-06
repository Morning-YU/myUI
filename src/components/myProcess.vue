<template>
  <div class="block">
    <div class="process">
      <!-- 底部的灰色区域 -->
      <div class="processMain">
        <!-- 动态绑定style -->
        <!-- 蓝色的进度区域 -->
        <div
          class="processChange"
          v-bind:style="{ width: initWidth + '%' }"
        ></div>
      </div>
      <!-- 显示进度条数据 -->
      <div class="numShow">{{ initWidth }}%</div>
    </div>
    <div class="controlBox">
      <div @click="sub"><i class="el-icon-minus"></i></div>
      <div @click="plus"><i class="el-icon-plus"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initWidth: 100,
    };
  },
  methods: {
    // 进度在0-100之间，不能越界
    plus() {
      this.initWidth += 10;
      if (this.initWidth >= 100) {
        this.initWidth = 100;
      }
    },
    sub() {
      this.initWidth -= 10;
      if (this.initWidth <= 0) {
        this.initWidth = 0;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: content-box;
}
.process {
  display: flex;
  align-items: center;
  justify-content: center;
}
.processMain {
  width: 250px;
  height: 10px;
  background: #ebeef5;
  border-radius: 4px;
}
.processChange {
  width: 250px;
  height: 10px;
  background: #409eff;
  border-radius: 4px;
}
.numShow {
  width: 40px;
  font-size: 10px;
}

.controlBox {
  width: 250px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.controlBox div {
  margin: 0 20px;
  cursor: pointer;
}
</style>