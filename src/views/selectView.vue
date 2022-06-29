<template>
  <div class="block">
    <my-selector
      class="selector"
      :selectData="selectData"
      :initName="initName"
      @getValue="getValue"
    >
    </my-selector>
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
      initValue: "",
    };
  },
  created() {
    this.initName = this.selectData[0].name;
  },
  methods: {
    getValue(name, value, index) {
      console.log("select city:", name);
    },
  },
};
</script>
<style lang="" scoped>
.block {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>