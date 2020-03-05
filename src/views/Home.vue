<template>
  <div class="container">
    <app-bar />
    <Avatar />
    <Gradient />
    <TodoList />
    <TodoDetail />
  </div>
</template>
<script>
import AppBar from "../components/AppBar";
import Avatar from "../components/Avatar";
import Gradient from "../components/Gradient";
import TodoList from "../components/TodoList";
import TodoDetail from "../components/TodoDetail";
export default {
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
    TodoDetail
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
}
</style>