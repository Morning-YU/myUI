<template>
  <div class="block">
    <my-date-picker class="datePicker" @input="input"></my-date-picker>
  </div>
</template>
<script>
import myDatePicker from "../components/myDatePicker.vue";
export default {
  components: {
    myDatePicker,
  },
  data() {
    return {};
  },
  methods: {
    input(day) {
      console.log(day);
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