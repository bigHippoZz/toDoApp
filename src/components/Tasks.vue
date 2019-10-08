<template>
  <transition name="fade">
    <div class="task" v-if="!task.deleted">
      <input :id="id" type="checkbox" v-model="task.done" />
      <label :for="id">{{ task.title }}</label>
      <transition name="fade">
        <span class="task_delete" v-show="task.done" @click="deleteTask">
          <i class="fa fa-trash"></i>
        </span>
      </transition>
    </div>
  </transition>
</template>
<script>
import { mapMutations } from "vuex";
let GID = 1;

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: `task-${GID}`
    };
  }
};
</script>
<style lang="less" scoped>
</style>