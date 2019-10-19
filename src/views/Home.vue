<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search"></app-bar>
    <Avatar />
  </div>
</template>

<script>
import AppBar from "../components/AppBar";
import Avatar from "../components/Avatar";
export default {
  components: {
    AppBar,
    Avatar
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
