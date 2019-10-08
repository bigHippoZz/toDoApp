<template>
  <div class="gradient">
    <GradientColor
      v-for="(todo, index) in todos"
      :key="todo['name']"
      :colors="todo['colors']"
      :active="index <= currentIndex"
    />
  </div>
</template>
<script>
import GradientColor from "./GradientColor";
import { mapState } from "vuex";
export default {
  components: {
    GradientColor
  },
  computed: {
    ...mapState({
      todos: state => state["todos"],
      currentIndex: state => state["currentIndex"]
    })
  }
};
</script>
<style lang="less" scoped>
.gradient {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
</style>