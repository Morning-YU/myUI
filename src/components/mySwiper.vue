<template>
  <div class="block">
    <div class="swiperWrapper" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img
            :style="{ width: imgWidth + 'px' }"
            :src="imgList[imgList.length - 1]"
            alt=""
          />
        </li>
        <li v-for="(item, index) in imgList" :key="index">
          <img :style="{ width: imgWidth + 'px' }" :src="item" alt="" />
        </li>
        <li>
          <img :style="{ width: imgWidth + 'px' }" :src="imgList[0]" alt="" />
        </li>
      </ul>

      <!--两侧的箭头-->
      <ul class="direction">
        <li class="left" @click="move(imgWidth, 1, speed)">
          <svg
            class="icon"
            width="1.7vw"
            height="1.7vw"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
            />
          </svg>
        </li>
        <li class="right" @click="move(imgWidth, -1, speed)">
          <svg
            class="icon"
            width="1.7vw"
            height="1.7vw"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
            />
          </svg>
        </li>
      </ul>
      <!--底部小圆点-->
      <ul class="dots">
        <li
          v-for="(dot, i) in imgList"
          :key="i"
          :class="{ dotted: i === currentIndex - 1 }"
          @click="jump(i + 1)"
        ></li>
      </ul>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "mySwiper",
  props: {
    initialSpeed: {
      type: Number,
      default: 10,
    },
    initialInterval: {
      type: Number,
      default: 3,
    },
    imgList: {
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 1,
      distance: -600,
      imgWidth: 600,
      transitionEnd: true,
      speed: this.initialSpeed,
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`,
      };
    },
  },

  methods: {
    play() {
      this.timer = window.setInterval(() => {
        this.move(600, -1, this.speed);
      }, this.initialInterval);
    },
    // 停止计时器
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
    init() {
      this.play();
    },
    move(offset, direction, speed) {
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / this.imgWidth)
        : (this.currentIndex -= offset / this.imgWidth);
      // 临界情况
      if (this.currentIndex > this.imgList.length) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = this.imgList.length;

      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -this.imgList.length * this.imgWidth)
            this.distance = -this.imgWidth;
          if (des > -this.imgWidth)
            this.distance = -this.imgList.length * this.imgWidth;
        }
      }, 10);
    },

    jump(index) {
      // 确定移动方向
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      // 确定移动距离
      const offset = Math.abs(index - this.currentIndex) * this.imgWidth;

      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
  },

  mounted() {
    this.init();
  },
};
</script>
 
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.swiperWrapper {
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
}
.container {
  display: flex;
  position: absolute;
}
/*左右方向箭头*/
.left,
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  cursor: pointer;
}
/*左箭头*/
.left {
  left: 3%;
  padding-left: 12px;
  padding-top: 10px;
}
/*右箭头*/
.right {
  right: 3%;
  padding-right: 12px;
  padding-top: 10px;
}
.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 3px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: #333;
  cursor: pointer;
}
/* 当前原点 */
.dots .dotted {
  background-color: orange;
}
</style>