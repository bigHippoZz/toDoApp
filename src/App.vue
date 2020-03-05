<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    // var foo = {},
    //   F = function() {};
    // Object.prototype.a = "value a";
    // Function.prototype.b = "value b";
    // console.log(foo.a);
    // console.log(foo.b);
    // console.log(F.a);
    // console.log(F.b);
    // Object.defineProperty();
    // Object.defineProperty()
    // Object.defineProperty()
  }
};
</script>
<style lang="less">
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css");
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
