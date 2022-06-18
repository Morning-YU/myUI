<template>
  <div class="block">
    <my-dialog
      :show="show"
      :title="title"
      @confirmDialog="confirmDialog"
      @hideDialog="hideDialog"
    >
    弹窗内容
    </my-dialog>
  </div>
</template>

<script>
import myDialog from "../components/myDialog.vue";
export default {
  name: "dialogView",
  components: {
    myDialog,
  },
  data() {
    return {
      title: "弹窗标题",
      show: true,
    };
  },
  methods: {
    confirmDialog() {
      this.show = false;
    },
    hideDialog() {
      this.show = false;
    },
  },
};
</script>
<style lang="" scoped>

</style>