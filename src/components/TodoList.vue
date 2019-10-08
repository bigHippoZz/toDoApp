<template>
  <div class="todo-list" :class="{'todo-list__selected':selected}">
    <ul :style="{width:`${todos.length *100}%`}">
      <li
        v-for="(todo, index) in todos"
        :key="todo['name']"
        :style="{transform:`translate3d(-${currentIndex*100}%,0,0)`}"
      >
        <Todo :todo="todo" :selected="selected&&selected['todo']===todo" @select="selectTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Todo
  },
  computed: {
    ...mapState({
      todos: state => state["todos"],
      currentIndex: state => state["currentIndex"],
      selected: state => state["selected"]
    })
  },
  methods: {
    ...mapMutations({
      selectTodo: "selectTodo",
      nextTodo: "nextTodo",
      prevTodo: "prevTodo"
    })
  },
  mounted() {
    let touch = {};
    this.$el.addEventListener("touchstart", event => {
      touch.startX = event.touches[0].clientX;
      touch.endX = 0;
    });
    this.$el.addEventListener("touchmove", event => {
      touch.endX = event.touches[0].clientX;
    });
    this.$el.addEventListener("touchend", event => {
      if (!touch.endX || Math.abs(touch.startX - touch.endX) < 10) return;
      touch.startX > touch.endX ? this.nextTodo() : this.prevTodo();
    });
  }
};
</script>
<style lang="less" scoped>
.todo-list {
  padding: 0 32px;
  height: 400px;
  transition: all 0.5s ease;
  > ul,
  > ul > li {
    display: flex;
    height: 100%;
  }
  > ul > li {
    flex: 1;
    transition: transform 0.5s ease;
  }
  .todo {
    border-radius: 8px;
    background-color: #fff;
  }
}
.todo-list__selected {
  transform: scale(1.25);
}
</style>