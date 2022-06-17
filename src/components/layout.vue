<template>
  <div class="myLayout">
    <header>
      <common-header />
    </header>
    <section>
      <el-row>
        <el-col>
          <aside class="navMenu">
            <nav-menu></nav-menu>
          </aside>
        </el-col>
        <el-col>
          <div>
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

<style lang="">
.navMenu {
  position: fixed;
  /* top: 0; */
  right: 0;
  left: 0;
  z-index: 9999;
  width: 300px;
}
</style>