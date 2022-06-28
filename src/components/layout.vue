<template>
  <div class="myLayout">
    <header>
      <common-header />
    </header>
    <section>
      <el-row>
        <el-col>
          <div>
            <aside class="navMenu">
              <nav-menu></nav-menu>
            </aside>
          </div>
        </el-col>
        <el-col>
          <div class="box">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import commonHeader from "./commonHeader.vue";
import navMenu from "./nevMenu.vue";

export default {
  name: "commonLayout",
  components: {
    commonHeader,
    navMenu,
  },
};
</script>

<style lang="" scoped>
.myLayout {
  position: relative;
}
header {
  position: fixed;
  top: 10px;
  right: 0;
  left: 0;
  z-index: 9999;
}
.navMenu {
  position: fixed;
  width: 200px;
}
/* .box {
  position: absolute;
  left: 200px;
  width: calc(100% - 200px);
} */
</style>