<template>
  <div class="block">
    <my-date-picker
      :date="date"

    ></my-date-picker>
  </div>
</template>
<script>
import myDatePicker from "../components/myDatePicker.vue";
export default {
  components: {
    myDatePicker,
  },
  data() {
    return {
      date: new Date().format("yyyy-MM-dd"),
    };
  },
};
</script>
<style lang="" scoped>
</style>