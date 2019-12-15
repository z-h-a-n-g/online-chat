<!--最左边信息组件-->
<template>
  <div class="right-cont-wrap">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户信息" name="first">
        <user-info></user-info>
      </el-tab-pane>
      <el-tab-pane label="快捷回复" name="second">
        <fast-reply></fast-reply>
      </el-tab-pane>
    </el-tabs>
    <div class="iconfont exit" @click="exit">&#xe61a;</div>
  </div>
</template>

<script>
import userInfo from "./user_info.vue";
import fastReply from "./fast_reply.vue";
export default {
  name: "right-cont",
  components: {
    userInfo,
    fastReply
  },
  data() {
    return {
      isShow: true,
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      // eslint-disable-next-line no-console
      console.log(tab, event);
    },
    exit() {
      this.$emit("exit");
    }
  }
};
</script>

<style scoped>
.right-cont-wrap {
  background: rgb(245, 245, 245);
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px 10px 0px 20px;
}
.exit {
  position: absolute;
  top: 12px;
  right: 38px;
  font-size: 14px;
}
.exit:hover {
  cursor: pointer;
  color: #e00;
}
</style>
