<template>
  <div class="app_bar">
    <span class="app_bar_l" @click="$emit('left')">
      <i :class="['fa',`fa-${left}`]"></i>
    </span>
    <h1>{{ title }}</h1>
    <span class="app_bar_r" @click="$emit('right')">
      <i :class="['fa',`fa-${right}`]"></i>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "VUE APP"
    },
    left: {
      type: String,
      default: "chevron-left"
    },
    right: {
      type: String,
      default: "ellipsis-v"
    }
  }
};
</script>
<style lang="less" scoped>
.app_bar {
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 15px;
  z-index: 1;
  h1 {
    flex: 1;
    // display: flex;
    // justify-content: center;
    text-align: center;
  }
  span {
    padding: 0 20px;
  }
}
</style>