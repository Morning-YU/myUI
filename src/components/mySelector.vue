<template>
  <div class="m-select-wrap">
    <input
      :class="['u-select-input']"
      type="text"
      readonly
      @click="openSelect"
      @blur="onBlur"
      v-model="selectName"
    />
    <div
      :class="['triangle-down', { rotate: rotate }]"
      @click="openSelect"
    ></div>
    <div
      :class="['m-options-panel', showOptions ? 'show' : 'hidden']"
      :style="`height: ${selectData.length * 60}px;`"
    >
      <p
        class="u-option"
        @mousedown="getValue(item.name, item.value, index)"
        v-for="(item, index) in selectData"
        :key="index"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "mySelector",
  props: {
    selectData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    selValue: {
      // 将该prop值作为selV的初始值
      type: [Number, String],
      default: null,
    },
  },
  data() {
    return {
      selectValue: this.selValue,
      rotate: false,
      showOptions: false,
    };
  },
  computed: {
    selectName() {
      for (const item of this.selectData) {
        if (item.value === this.selectValue) {
          return item.name;
        }
      }
      return "";
    },
  },
  methods: {
    openSelect() {
      this.showOptions = !this.showOptions;
      this.rotate = !this.rotate;
    },
    onBlur() {
      this.showOptions = false;
      this.rotate = false;
    },

    getValue(name, value, index) {
      this.selectValue = value;
      this.$emit("getValue", name, value, index);
    },
  },
};
</script>
<style scoped>
.m-select-wrap {
  position: relative;
  width: 133px;
  height: 40px;
  line-height: 40px;
}
.u-select-input {
  width: 105px;
  background: #ffffff;
  color: black;
  border-radius: 20px;
  border: 1px solid #3a79ee;
  height: 38px;
  line-height: 38px;
  padding: 0 15px;
  cursor: pointer;
  /* border: none; */
}
/* 右侧三角样式 */
.triangle-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #3a79ee;
  position: absolute;
  top: 17px;
  right: 12px;
  transition: transform 0.5s ease-in-out;
}
.rotate {
  transform: rotate(180deg);
}
.m-options-panel {
  position: absolute;
  background: #ffffff;
  border-radius: 8px;
  width: 135px;
  border: 1px solid #e3e3e3;
  top: 46px;
  left: 0;
}
.u-option {
  cursor: pointer;
  border-top: 1px solid #eef1fa;
  border-bottom: 1px solid #eef1fa;
  
}
.u-option:hover {
  color: #3a79ee;
  background: #eef1fa;
}
.show {
  display: block;
}
.hidden {
  display: none;
}
</style>