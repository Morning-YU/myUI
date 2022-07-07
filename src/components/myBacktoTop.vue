<template>
  <div class="block">
    <div class="backtoTop">
      <div class="backTop" name="back-top" @click="backTop" v-if="showBtn">
        <i class="el-icon-upload2"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBtn: false,
    };
  },

  mounted() {
    // 绑定事件 (事件，方法，是否冒泡)
    window.addEventListener("scroll", this.myThrottle(), true);
  },

  methods: {
    // 节流，一定时间内重复触发只运行一次
    throttle(fn, delay = 1000) {
      let timer = null;
      return function () {
        let context = this;
        let args = arguments;
        // timer为null，则新执行一个定时器，执行完定时器设置为null；否则不操作
        if (!timer) {
          timer = setTimeout(() => {
            fn.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    },

    // 监听滚动的距离，滚动距离大于900显示回到顶部按钮
    showbtn() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      // console.log(that.scrollTop);
      if (scrollTop > 900) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
    },

    myThrottle() {
      return this.throttle(this.showbtn);
    },

    backTop() {
      var timer = setInterval(function () {
        // 获取距离顶部的距离
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;

        // 瞬移
        // document.documentElement.scrollTop = document.body.scrollTop = 0;
        // this.isTop = true;

        // 缓慢移动，通过定时调用来控制
        let ispeed = Math.floor(-osTop / 10);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;

        // 到顶部后清除定时器
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
  },
};
</script>

<style scoped>
.backTop {
  height: 35px;
  width: 35px;
  position: fixed;
  right: 3%;
  bottom: 5%;
  text-align: center;
  line-height: 35px;
  font-size: 35px;
  background-color: #fff;
  color: #409eff;
  z-index: 999;
  cursor: pointer;
}
</style>

