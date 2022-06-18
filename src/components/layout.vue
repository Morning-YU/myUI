<template>
  <div class="myLayout">
    <header>
      <common-header />
    </header>
    <section>
      <el-row>
        <el-col :xs="0" :sm="7" :md="6" :lg="5" :xl="5">
          <div>
            <aside class="navMenu">
              <nav-menu></nav-menu>
            </aside>
          </div>
        </el-col>
        <el-col :xs="24" :sm="17" :md="12" :lg="14" :xl="14">
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

<style lang="" scoped>
header {
  position: fixed;
  top: 10px;
  right: 0;
  left: 0;
  z-index: 9999;
}
.navMenu {
  /* position: relative;
  right: 0;
  left: 0;
  z-index: 9999; */
  /* display: inline-block; */
  width: 300px;
}
</style>