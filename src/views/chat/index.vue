<template>
  <div class="chat">
    <div class="left-cont">
      <user-list></user-list>
    </div>
    <div class="mid-cont">
      <chat-content @more="more"></chat-content>
    </div>
    <div class="right-cont" v-show="isShow">
      <information @exit="exit"></information>
    </div>
  </div>
</template>

<script>
import userList from "../../components/chat/user_list.vue";
import chatContent from "../../components/chat/chat_content.vue";
import information from "../../components/chat/right_cont.vue";
export default {
  name: "chat",
  data() {
    return {
      isShow: false
    };
  },
  components: {
    userList,
    chatContent,
    information
  },
  methods: {
    exit() {
      this.isShow = false;
    },
    more() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped>
.chat {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: hidden;
}
.left-cont {
  width: 292px;
  height: 100%;
}
.mid-cont {
  height: 100%;
  flex: 1;
}
.right-cont {
  width: 238px;
  height: 100%;
}
.el-collapse-item__wrap {
  height: 100%;
}
</style>
