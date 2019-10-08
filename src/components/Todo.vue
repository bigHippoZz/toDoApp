<template>
  <div class="todo" :class="{'todo__selected':selected}">
    <div class="todo_head" @click="handleClick">
      <div class="todo_icon" :style="{ color }">
        <i :class="['fa',`fa-${todo.icon}`]"></i>
      </div>
      <div class="todo_menu">
        <i class="fa fa-ellipsis-v"></i>
      </div>
    </div>
    <div class="todo_body">
      <p class="todo_tips">{{ todo.tasks.length }} Tasks</p>
      <h3 class="todo_title">{{ todo.name }}</h3>
      <div class="todo_progress">
        <span>
          <i :style="{width:progress,backgroundImage:progressColor}"></i>
        </span>
        <span class="todo_progress_num">{{ progress }}</span>
      </div>
      <div class="todo_tasks">
        <h4 class="todo_subtitle" v-if="todayTasks.length">Today</h4>
        <ul>
          <li v-for="(tasks, index) in todayTasks" :key="tasks['id']">
            <tasks :tasks="tasks" />
          </li>
        </ul>
        <h4 class="todo_subtitle" v-if="tomorrowTasks.length">Tomorrow</h4>
        <ul>
          <li v-for="(tasks, index) in tomorrowTasks" :key="tasks['id']">
            <tasks :tasks="tasks" />
          </li>
        </ul>
        <h4 class="todo_subtitle" v-if="outdatedTasks.length">Outdated</h4>
        <ul>
          <li v-for="(tasks, index) in outdatedTasks" :key="tasks['id']">
            <tasks :tasks="tasks" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { today, tomorrow } from "../store";
import Tasks from "./Tasks";
export default {
  components: {
    Tasks
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean
    }
  },
  computed: {
    color() {
      return this.todo["colors"][0];
    },
    progress() {
      const totalCount = this.todo.tasks.filter(t => !t.deleted).length;
      const doneCount = this.todo.tasks.filter(t => !t.deleted && t.done)
        .length;
      return `${Math.round((doneCount / totalCount) * 100)}%`;
    },
    progressColor() {
      const colorBottom = `color-stop(30%,${this.todo.colors[0]})`;
      const colorTop = `to(${this.todo.colors[1]})`;
      return `-webkit-gradient(linear,left bottom,right bottom,${colorBottom},${colorTop})`;
    },
    todayTasks() {
      return this.todo.tasks.filter(tasks => {
        return tasks.date >= today && tasks.date < tomorrow;
      });
    },
    tomorrowTasks() {
      return this.todo.tasks.filter(tasks => {
        return tasks.date >= tomorrow;
      });
    },
    outdatedTasks() {
      return this.todo.tasks.filter(tasks => {
        return tasks.date < today;
      });
    }
  },
  methods: {
    handleClick() {
      const appRect = document.querySelector("#app").getBoundingClientRect();
      const elRect = this.$el.getBoundingClientRect();
      const todo = this.todo;
      const rect = {};
      rect.top = elRect.top - appRect.top;
      rect.left = elRect.left - appRect.left;
      rect.width = elRect.width;
      rect.height = elRect.height;
      rect.appWidth = appRect.width;
      rect.appHeight = appRect.height;

      this.$emit("select", { rect, todo });
    }
  }
};
</script>
<style lang="less" scoped>
.todo {
  flex: 1;
  margin: 0 8px;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #666;
}
.todo__selected {
  visibility: hidden;
}
.todo_head {
  display: flex;
  padding: 20px;
  height: 44px;
  justify-content: space-between;
  align-items: flex-start;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}
.todo_body {
  padding: 0 20px;
  transform: translate3d(0, 189px, 0);
  will-change: transform;
}
.todo_icon {
  display: flex;
  width: 44px;
  height: 44px;
  border: 1px solid #eee;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.todo_menu {
  color: #eee;
}
.todo_tips {
  opacity: 0.6;
  font-size: 13px;
  font-weight: 600;
}
.todo_title {
  margin-top: 6px;
  font-size: 32px;
}
.todo_progress {
  display: flex;
  margin-top: 30px;
  align-items: center;
}
.todo_progress_line {
  margin-right: 10px;
  flex: 1;
  height: 3px;
  background-color: #eee;

  i {
    display: flex;
    height: 100%;
    transition: all 0.3s ease;
  }
}

.todo_progress_num {
  font-size: 12px;
}
.todo_tasks {
  opacity: 0;
  transform: scale3d(1, 0, 1);
}
.todo_subtitle {
  margin-top: 32px;
  margin-bottom: 8px;
  color: #999;
}
</style>