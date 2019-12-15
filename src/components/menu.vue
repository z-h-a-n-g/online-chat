<template>
  <div class="menu-wrap">
    <div class="btn-wrap">
      <div class="title-1">
        <div class="img">
          <img src="../assets/image/menu/user.png" height="100%" alt />
        </div>
        <div class="online state" v-show="isOnlie" @click="isOnlie = !isOnlie">
          在线
        </div>
        <div
          class="un-online state"
          v-show="!isOnlie"
          @click="isOnlie = !isOnlie"
        >
          隐身
        </div>
      </div>
      <div class="title-2">
        <template v-for="(item, index) of btns">
          <div class="btn-wrap" :key="index">
            <router-link :to="item.path" tag="div" class="btn">
              <div class="iconfont" v-html="item.icon"></div>
              <div class="word">{{ item.word }}</div>
            </router-link>
          </div>
        </template>
      </div>
    </div>
    <div class="label-wrap">
      <div class="label-btn">
        <el-tooltip class="item" effect="dark" placement="right-start">
          <div slot="content">
            网络正常
            <br />171ms
          </div>
          <el-button>
            <div class="iconfont wifi">&#xe610;</div>
          </el-button>
        </el-tooltip>
      </div>
      <div class="label-btn">
        <el-tooltip
          class="item"
          effect="dark"
          content="系统通知"
          placement="right-start"
        >
          <el-button>
            <div class="iconfont">&#xe600;</div>
          </el-button>
        </el-tooltip>
      </div>
      <div class="label-btn">
        <el-tooltip
          class="item"
          effect="light"
          content="小程序"
          placement="right-start"
        >
          <div slot="content">
            <div class="xcx-wrap">
              <div class="xcx-img">
                <img src="../assets/image/menu/xcx.png" width="100%" />
              </div>
              <div class="xcx-word">微信扫码 联系我们</div>
            </div>
          </div>
          <el-button>
            <div class="iconfont">&#xe72c;</div>
          </el-button>
        </el-tooltip>
      </div>
      <div class="label-btn">
        <el-tooltip
          class="item"
          effect="dark"
          content="帮助"
          placement="right-start"
        >
          <el-button>
            <div class="iconfont">&#xe61e;</div>
          </el-button>
        </el-tooltip>
      </div>
      <div class="label-btn">
        <el-tooltip
          class="item"
          effect="dark"
          content="帮助"
          placement="right-start"
        >
          <el-button>
            <div class="iconfont">&#xe618;</div>
          </el-button>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btns: [
        {
          icon: "&#xe616;",
          word: "对话",
          path: "/main/chat"
        },
        {
          icon: "&#xe695;",
          word: "历史",
          path: "/main/history"
        },
        {
          icon: "&#xe64a;",
          word: "统计",
          path: "/main/statistics"
        },
        {
          icon: "&#xe66f;",
          word: "客户",
          path: "/main/customer"
        },
        {
          icon: "&#xe771;",
          word: "设置",
          path: "/main/settings"
        }
      ],
      isOnlie: true
    };
  }
};
</script>

<style scoped>
a:link {
  text-decoration: none;
}
a {
  color: #9a9a9a;
}
.menu-wrap {
  width: 70px;
  background-color: #28282e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.img {
  height: 36px;
}
.state {
  position: relative;
  margin-top: 10px;
  font-size: 14px;
  color: #9a9a9a;
  height: 28px;
  cursor: pointer;
  line-height: 28px;
}
.state:hover {
  background: #28282e;
}
.un-online::before,
.online::before {
  position: absolute;
  content: "";
  height: 6px;
  width: 6px;
  border-radius: 50%;
  left: 0px;
  top: 50%;
  margin-left: 10px;
  margin-top: -2px;
}
.un-online::before {
  background: #f25d5d;
}
.iconfont {
  font-size: 22px;
}
.online::before {
  background-color: #00c880;
}
.btn-wrap {
  width: 100%;
  color: #9a9a9a;
  margin-top: 18px;
}
.btn {
  padding: 5px 0px;
  widows: 100%;
  border-right: 4px solid transparent;
}
.title-2 {
  width: 100%;
}
.btn:hover {
  cursor: pointer;
}
.title-2 {
  margin-top: 5px;
}
.word {
  font-size: 12px;
  margin-top: 3px;
}
.router-link-active {
  background: #28282e;
}
.router-link-active .iconfont {
  color: #009de7;
}
.router-link-active {
  border-right: 4px solid #009de7;
  background: #212121;
}
.el-button {
  border: none;
  background: rgb(37, 37, 42);
  padding: 10px 20px;
}
.label-btn .iconfont {
  background: rgb(37, 37, 42);
}
.wifi {
  color: rgb(41, 121, 45);
}
.xcx-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
}
.xcx-img {
  width: 130px;
}
.xcx-word {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
