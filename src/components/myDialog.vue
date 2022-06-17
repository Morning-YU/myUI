<template>
  <div class="diaContainer" v-show="show">
    <div class="diaHeader">
      {{ title }}
    </div>
    <div class="diaMain">
      <slot></slot>
    </div>
    <div class="diaFooter">
      <button @click="confirmDialog">确定</button>
      <button @click="hideDialog">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "myDialog",
  //   父传子
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    //   子传父，触发父的事件
    confirmDialog() {
      this.$emit("confirmDialog");
    },
    hideDialog() {
      this.$emit("hideDialog");
    },
  },
};
</script>

<style lang="" scoped>
.diaContainer {
  position: fixed;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ddd;
}
.diaHeader {
  height: 50px;
  background: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
}
.diaFooter {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-top: 1px solid #ddd;
}
.diaFooter button {
  width: 80px;
  margin: 0px 10px;
}
.diaMain {
  padding: 20px 40px;
}
</style>
