<template>
  <div class="chat-cont-wrap">
    <div class="chat-banner">
      <div class="userinfo">
        西子（远离百度
        <span class="ly">微信号</span>）
      </div>
      <div class="banner-btn-wrap">
        <div class="banner-btn">
          <div class="iconfont icon">&#xe630;</div>
          <div class="word">置顶对话</div>
        </div>
        <div class="banner-btn">
          <div class="iconfont icon">&#xe675;</div>
          <div class="word">转接</div>
        </div>
        <div class="banner-btn">
          <div class="iconfont icon">&#xe617;</div>
          <div class="word">结束</div>
        </div>
      </div>
    </div>
    <div class="chat-content">
      <div class="chat-content-line-wrap">
        <div class="chat-cont-notice line-chat">
          <div class="chat-cont-word">2012-12-23 系统将对话分配给了 管理员</div>
        </div>
        <div class="line-chat" v-for="(item, index) of news" :key="index">
          <template v-if="item.info === 1">
            <div class="push-news">
              <div class="user-head">
                <img :src="item.headImgUrl" alt width="100%" />
              </div>
              <div class="news-content-wrap">
                <div class="user-name-wrap">
                  <div class="time">{{ item.time }}</div>
                  <div class="username">{{ item.username }}</div>
                </div>
                <div class="new-content">{{ item.desc }}</div>
              </div>
            </div>
            <div></div>
          </template>
          <template v-else>
            <div class="get-news">
              <div class="user-head">
                <img :src="item.headImgUrl" alt width="100%" />
              </div>
              <div class="news-content-wrap">
                <div class="user-name-wrap">
                  <div class="username">{{ item.username }}</div>
                  <div class="time">{{ item.time }}</div>
                </div>
                <div class="new-content">{{ item.desc }}</div>
              </div>
            </div>
          </template>
        </div>
        <div class="chat-cont-notice line-chat">
          <div class="chat-cont-word">2012-12-23 系统将对话分配给了 管理员</div>
        </div>
        <div class="chat-cont-notice line-chat">
          <div class="chat-cont-word">2012-12-23 结束对话</div>
        </div>
      </div>
    </div>
    <div class="chat-bottom-cont" :class="{ neibu: checked }">
      <div class="bottom-banner">
        <div class="bottom-right">
          <div class="btn">
            <div class="iconfont bot-icon">&#xe624;</div>
          </div>
          <div class="btn">
            <div class="iconfont bot-icon">&#xe63b;</div>
          </div>
          <div class="btn">
            <div class="iconfont bot-icon">&#xe643;</div>
          </div>
          <div class="btn">
            <div class="iconfont bot-icon">&#xe78e;</div>
          </div>
          <div class="btn">
            <div class="iconfont bot-icon">&#xe65a;</div>
          </div>
        </div>
        <div class="bottom-right">
          <el-checkbox v-model="checked">内部消息</el-checkbox>
          <div class="bot-left-btn-wrap">
            <div class="iconfont icon-left-bot">&#xe70c;</div>
            <div class="word">更多功能</div>
          </div>
        </div>
      </div>
      <div class="area-wrap">
        <input type="textarea" :placeholder="notice" v-model="textarea" class="area" />
      </div>
      <div class="submit" onclick="sumbit">发送</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false,
      notice: "开始对话，输入#可快速使用快捷回复",
      textarea: "",
      news: [
        {
          id: 1,
          info: 1,
          username: "程序员阿森1号",
          desc: "晚上开发灵感无限啊",
          headImgUrl: require("../../assets/image/user/art1.jpg"),
          time: "2019-12-15"
        },
        {
          id: 2,
          info: 2,
          username: "程序员阿森2号",
          desc: "是啊",
          headImgUrl: require("../../assets/image/user/art2.jpg"),
          time: "2019-12-15"
        }
      ]
    };
  },
  methods: {
    changeCheck () {
      if (this.checked) {
        this.notice = "内部消息仅同事可见，输入@可提醒同事查看";
      } else {
        this.notice = "开始对话，输入#可快速使用快捷回复";
      }
    },
    submit () {
      // eslint-disable-next-line no-console
      console.log("发送信息：", this.textarea);
    }
  }
};
</script>

<style scoped>
input,
button,
select,
textarea {
  outline: none;
}
textarea {
  resize: none;
}
input,
button,
select,
textarea {
  outline: none;
}
textarea {
  resize: none;
}
.area-wrap {
  height: 100px;
  overflow: auto;
}
.area {
  border-color: transparent;
  background: rgba(1, 1, 1, 0);
  text-align: left;
  height: 90%;
  width: 98%;
  /* border: 1px solid red; */
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  word-wrap: break-word;
}
.chat-cont-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid #ccc;
}
.userinfo {
  font-size: 14px;
}
span.ly {
  padding: 1px 3px;
  display: inline-block;
  background: rgb(34, 155, 54);
  color: white;
  border-radius: 3px;
}
.userinfo {
  padding-left: 10px;
}
.chat-banner {
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.banner-btn-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.banner-btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
}
.icon {
  color: #009de7;
  font-size: 14px;
  cursor: pointer;
}
.word {
  margin-left: 4px;
  font-size: 14px;
}
.chat-bottom-cont {
  position: relative;
  border-top: 1px solid #ccc;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.bottom-banner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.neibu {
  background: #fef0c7;
}
.btn {
  margin: 5px 4px;
}
.bot-icon {
  font-size: 22px;
  color: #9a9a9a;
  cursor: pointer;
}
.bottom-right,
.bottom-left {
  padding-left: 10px;
  padding-top: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.bottom-right {
  padding-right: 20px;
}
.bot-left-btn-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
}
.submit {
  position: absolute;
  padding: 4px 15px;
  color: white;
  font-size: 14px;
  background: rgb(0, 157, 231);
  border-radius: 3px;
  bottom: 15px;
  right: 20px;
  cursor: pointer;
}
.chat-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
}
.chat-cont-word {
  background: #f5f5f5;
  border-radius: 4px;
  color: #9a9a9a;
  padding: 4px 10px;
  display: inline-block;
  font-size: 14px;
}
.chat-cont-notice {
  margin-top: 13px;
}
.user-head {
  width: 34px;
}
.line-chat {
  text-align: center;
  margin-top: 15px;
}
.push-news {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 15px;
}
.get-news {
  padding-left: 15px;
  display: flex;
  flex-direction: row;
}
.user-name-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
  color: #9a9a9a;
}
.new-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  max-width: 800px;
  padding: 8px 10px;
  background: rgb(204, 235, 250);
  border-radius: 5px;
  margin-top: 8px;
  font-size: 14px;
}
.news-content-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.get-news .new-content {
  margin-left: 8px;
  align-self: flex-start;
}
.push-news .new-content {
  margin-right: 8px;
  align-self: flex-end;
}
.get-news .username {
  margin-left: 8px;
  margin-right: 4px;
}
.push-news .username {
  margin-right: 8px;
  margin-left: 4px;
}
.time {
  margin: 3px 4px 4px;
}
</style>
