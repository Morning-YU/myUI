<template>
  <div class="block">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu> -->
          <el-menu-item index="2">
            <router-link to="/selectView">
              <i class="el-icon-menu"></i>
              选择器
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/dialogView">
              <i class="el-icon-document"></i>
              弹窗
            </router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link to="/swiperView">
              <i class="el-icon-setting"></i>
              轮播图
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
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