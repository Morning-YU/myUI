<template>
  <div class="block">
    <div class="selectorWrapper">
      <input
        class="selectInput"
        type="text"
        readonly
        @click="showOptions"
        @blur="hiddenOptions"
        v-model="selectedName"
      />
      <div :class="['triangle', { rotate: isRotate }]"></div>
      <div
        :class="['optionsPanel', isShow ? 'show' : 'hidden']"
        :style="`height: ${selectData.length * 40}px;`"
      >
        <div
          class="option"
          @mousedown="getValue(item.name, item.value, index)"
          v-for="(item, index) in selectData"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mySelector",
  // 接收父组件传入的初始值和选择列表
  props: {
    selectData: {
      type: Array,
      default: [],
    },
    initName: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      // selectValue: this.initValue,
      selectedName: this.initName,
      isShow: false,
      isRotate: false,
    };
  },
  watch: {
    // 计算属性，v-model双向绑定，修改页面展示数据
    selectedName() {
      for (const item of this.selectData) {
        if (item.name === this.selectedName) {
          return item.name;
        }
      }
      return "";
    },
  },
  methods: {
    showOptions() {
      this.isShow = !this.isShow;
      this.isRotate = !this.isRotate;
    },
    hiddenOptions() {
      this.isShow = false;
      this.isRotate = false;
    },
    // 选中新数据，selectedName改变，触发父组件定义的事件
    getValue(name, value, index) {
      // this.selectValue = value;
      this.selectedName = name;
      this.$emit("getValue", name, value, index);
    },
  },
};
</script>

<style lang="" scoped>
.selectorWrapper {
  position: relative;
  width: 133px;
  height: 40px;
  line-height: 40px;
}
.selectInput {
  width: 105px;
  height: 38px;
  line-height: 38px;
  background: white;
  color: black;
  border-radius: 20px;
  border: 1px solid #409eff;
  padding: 0 15px;
  cursor: pointer;
}
.triangle {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #409eff;
  position: absolute;
  top: 17px;
  right: 12px;
  transition: transform 0.5s ease-in-out;
}
.rotate {
  transform: rotate(180deg);
}
.show {
  display: block;
}
.hidden {
  display: none;
}
.optionsPanel {
  position: absolute;
  background: white;
  border-radius: 8px;
  width: 135px;
  border: 1px solid #e3e3e3;
  top: 46px;
  left: 0;
}
.option {
  cursor: pointer;
  border-top: 1px solid #eef1fa;
}
.option:hover {
  color: #409eff;
  background: #eef1fa;
}
</style>