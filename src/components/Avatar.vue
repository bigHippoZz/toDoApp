<template>
  <div class="avatar" :class="{avatar__selected:!!selected }">
    <div class="avatar_face">
      <img src="../assets/logo.png" />
    </div>
<<<<<<< HEAD
    <h2 class="avatar_name">Hello, Hippo</h2>
    <p class="avatar_tips">
      Look Like Feed Good.
      <br />
      You have {{ todayTasks.length }} tasks to do today
=======
    <h2>Hello,Hippo</h2>
    <p>
      Looks like feed good.
      <br />
      You have {{ todayTasks.length }} tasks to do
      today.
>>>>>>> eccfb485f7792c6b2a54efa6dafeaded97ed427e
    </p>
    <p class="avatar_date">TODAY : {{ today | dateString }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      today: new Date()
    };
  },
  methods: {},
  computed: {
    ...mapState({
      selected: state => state["selected"]
    }),
    ...mapGetters({
      todayTasks: "todayTasks"
    })
  },
  filters: {
    dateString(val) {
      return val
        .toDateString()
        .toUpperCase()
        .replace(/(\s\d{4})$/, ", $1");
    }
  }
};
</script>
<style lang="less" scoped>
</style>