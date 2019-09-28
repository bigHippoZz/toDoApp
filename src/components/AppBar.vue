<template>
  <div class="app-bar">
    <span class="app-bar_l" @click="$emit('left')">
      <i :class="['fa',`fa-${left}`]"></i>
    </span>
    <h1>{{ title }}</h1>
    <span class="app-bar_r" @click="$emit('rigth')">
      <i :class="['fa',`fa-${right}`]"></i>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    left: {
      type: String,
      default: "cheron-left"
    },
    right: {
      type: String,
      default: "ellipsis-v"
    }
  }
};
</script>
<style lang="less" scoped>
.app-bar {
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 15px;
  z-index: 1;
  h1 {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  span {
    padding: 0 20px;
  }
}
</style>