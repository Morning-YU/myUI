<template>
  <div class="block">
    <my-selector class="select"
      :selectData="selectData"
      :selValue="selValue"
      @getValue="getValue"
    ></my-selector>
  </div>
</template>

<script>
import mySelector from "../components/mySelector.vue";
export default {
  name: "selectView",
  components: {
    mySelector,
  },
  data() {
    return {
      selectData: [
        {
          name: "北京",
          value: 11,
        },
        {
          name: "浙江",
          value: 12,
        },
        {
          name: "江苏",
          value: 13,
        },
        {
          name: "上海",
          value: 14,
        },
      ],
      selValue: "",
    };
  },
  created() {
    // 初始化下拉框
    this.selValue = this.selectData[0].value;
  },
  methods: {
    getValue(name, value, index) {
      console.log("item:", name, value, index);
    },
  },
};
</script>

<style lang="" scoped>
.block {
  position: relative;
  height: 100px;
}
.select{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>