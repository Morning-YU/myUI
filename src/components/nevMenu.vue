<template>
  <div class="block">
    <el-menu
      class="el-menu-vertical-demo"
      mode="vertical"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <router-link to="/testView">
          <i class="el-icon-picture-outline"></i>
          测试
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/selectView">
          <i class="el-icon-setting"></i>
          选择器
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/datepickerView">
          <i class="el-icon-date"></i>
          时间选择器
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/dialogView">
          <i class="el-icon-postcard"></i>
          弹窗
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/swiperView">
          <i class="el-icon-picture-outline"></i>
          轮播图
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/backtoTopView">
          <i class="el-icon-upload2"></i>
          回到顶部
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/processView">
          <i class="el-icon-s-data"></i>
          进度条
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>
