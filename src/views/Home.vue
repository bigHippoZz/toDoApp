<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search"></app-bar>
    <Avatar />
    <Gradient />
    <TodoList />
    <!-- <TodoDetail /> -->
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
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
