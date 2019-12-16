<!--用户列表-->
<template>
  <div class="user-list-wrap-index">
    <el-collapse v-model="activeNames" @change="handleChange">
      <div class="wrap-inde">
        <div class="wrap-1">
          <div
            class="wrap-1-1"
            :class="{ 'wrap-active': set == 1 ? true : false }"
          >
            <!-- 我的对话 -->
            <el-collapse-item name="1">
              <template slot="title">
                <div class="wddh">
                  <div class="wddh-word">
                    我的对话（{{ hh_numbers }}/{{ specifications }}）
                  </div>
                </div>
              </template>
              <div class="wddh-content">
                <template v-if="user_list.length > 0">
                  <div class="wddh-cz">
                    <el-select
                      v-model="indexCur"
                      placeholder="请选择"
                      size="mini"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                    <el-button type="text" @click="open" class="qb-btn"
                      >全部</el-button
                    >
                  </div>
                  <div class="user-list-wrap">
                    <template v-for="(item, index) of user_list">
                      <div v-show="!item.isRead" :key="index" class="user">
                        <div class="user-info">
                          <div class="img">
                            <el-badge is-dot class="item">
                              <img :src="item.imgUrl" width="100%" alt />
                            </el-badge>
                          </div>
                          <div class="username">{{ item.username }}</div>
                        </div>
                        <div class="time">{{ item.time }}</div>
                      </div>
                      <div class="user" v-show="item.isRead" :key="index">
                        <div class="user-info user-info-read">
                          <div class="img">
                            <img :src="item.imgUrl" width="100%" alt />
                          </div>
                          <div class="username">{{ item.username }}</div>
                        </div>
                        <div class="time">{{ item.time }}</div>
                      </div>
                    </template>
                  </div>
                </template>
                <template v-else>
                  <div class="kong">
                    <div class="iconfont">&#xe708;</div>
                    <div class="kong-word">暂无对话</div>
                  </div>
                </template>
              </div>
            </el-collapse-item>
          </div>
          <div
            class="wrap-1-2"
            :class="{ 'wrap-active': set == 2 ? true : false }"
          >
            <!-- 同事对话 -->
            <el-collapse-item name="2">
              <template slot="title">
                <div class="wddh">
                  <div class="wddh-word">同事的对话（{{ tsdh }}）</div>
                </div>
              </template>
              <div class="wddh-content">
                <template v-if="tsdh_list.length < 10">
                  <div class="wddh-cz">
                    <el-select
                      v-model="indexCur"
                      placeholder="请选择"
                      size="mini"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.label"
                        :label="item.value"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                    <el-button type="text" @click="open" class="qb-btn"
                      >全部</el-button
                    >
                  </div>
                  <div class="user-list-wrap">
                    <template
                      v-for="(item, index) of user_list"
                      class="table-wrap"
                    >
                      <div v-show="!item.isRead" :key="index" class="user">
                        <div class="user-info">
                          <div class="img">
                            <el-badge is-dot class="item">
                              <img :src="item.imgUrl" width="100%" alt />
                            </el-badge>
                          </div>
                          <div class="username">{{ item.username }}</div>
                        </div>
                        <div class="time">{{ item.time }}</div>
                      </div>
                      <div class="user" v-show="item.isRead" :key="index">
                        <div class="user-info">
                          <div class="img">
                            <img :src="item.imgUrl" width="100%" alt />
                          </div>
                          <div class="username">{{ item.username }}</div>
                        </div>
                        <div class="time">{{ item.time }}</div>
                      </div>
                    </template>
                  </div>
                </template>
                <template v-else>
                  <div class="kong">
                    <div class="iconfont">&#xe708;</div>
                    <div class="kong-word">暂无对话</div>
                  </div>
                </template>
              </div>
            </el-collapse-item>
          </div>
        </div>
        <div class="wrap-2">
          <!-- 排队中 -->
          <el-collapse-item name="3" class="pdz">
            <template slot="title">
              <div class="wddh">
                <div class="wddh-word">排队中（{{ pdz }}）</div>
              </div>
            </template>
            <div class="wddh-content-pdz">
              <template v-if="pdz_list.length > 0">
                <div class="wddh-cz">
                  <el-select
                    v-model="indexCur"
                    placeholder="请选择"
                    size="mini"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.label"
                      :label="item.value"
                      :value="item.label"
                    ></el-option>
                  </el-select>
                  <el-button type="text" @click="open" class="qb-btn"
                    >全部</el-button
                  >
                </div>
                <div class="user-list-wrap">
                  <template v-for="(item, index) of user_list">
                    <div v-show="!item.isRead" :key="index" class="user">
                      <div class="user-info">
                        <div class="img">
                          <el-badge is-dot class="item">
                            <img :src="item.imgUrl" width="100%" alt />
                          </el-badge>
                        </div>
                        <div class="username">{{ item.username }}</div>
                      </div>
                      <div class="time">{{ item.time }}</div>
                    </div>
                    <div class="user" v-show="item.isRead" :key="index">
                      <div class="user-info">
                        <div class="img">
                          <img :src="item.imgUrl" width="100%" alt />
                        </div>
                        <div class="username">{{ item.username }}</div>
                      </div>
                      <div class="time">{{ item.time }}</div>
                    </div>
                  </template>
                </div>
              </template>
              <template v-else>
                <div class="kong">
                  <div class="iconfont">&#xe708;</div>
                  <div class="kong-word">暂无对话</div>
                </div>
              </template>
            </div>
          </el-collapse-item>
        </div>
      </div>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"], //当前打开的第几个选项卡 1、我的对话 2、同事的对话 3、排队中
      specifications: 20, //当前能显示的会话总数
      hh_numbers: 2, //我开启的会话总数
      indexCur: 1,
      pdz: 23, //排队中的会话总数
      tsdh: 2, //同事对话
      tsdh_list: [],
      pdz_list: [],
      options: [
        { label: 1, value: "全部" },
        { label: 2, value: "只看单聊" },
        { label: 3, value: "只看群聊" },
        { label: 4, value: "超过48小时的接待" }
      ],
      set: 1,
      user_list: [
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art2.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art2.jpg"),
          time: "16:42:53",
          isRead: true
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: true
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art2.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art2.jpg"),
          time: "16:42:53",
          isRead: true
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: true
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art2.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art2.jpg"),
          time: "16:42:53",
          isRead: true
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: true
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art2.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: false
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art2.jpg"),
          time: "16:42:53",
          isRead: true
        },
        {
          username: "MLXGzzz",
          imgUrl: require("../..//assets/image/user/art1.jpg"),
          time: "16:42:53",
          isRead: true
        }
      ]
    };
  },
  methods: {
    handleChange(val) {
      // eslint-disable-next-line no-console
      console.log(val);
    },
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
.user-list-wrap-index {
  height: 100%;
}
.wdhh .ionconft {
  font-size: 16px;
}
.kong .iconfont {
  font-size: 40px;
  color: #9a9a9a;
}
.kong-word {
  color: #9a9a9a;
  font-size: 14px;
}
.wddh-cz {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.qb-btn {
  cursor: pointer;
  padding: 6px 14px;
  border: 1px solid #eee;
}
.user {
  padding: 5px 15px 0px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.el-collapse-item__header {
  padding: 0px 10px;
}
.el-collapse-item {
  height: 100%;
  padding: 0px 15px;
}
.user-info-read .img {
  width: 35px;
}
.user-info-read .username {
  margin-left: 20px;
  margin-top: -10px;
}
.user-info-read .time {
  margin-top: -10px;
}
.user:hover {
  background: rgb(204, 235, 250);
  cursor: pointer;
}
.user-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.el-collapse-item__header {
  height: 38px;
}
.username {
  padding-top: 10px;
  align-self: flex-start;
  margin-left: 10px;
}
.img {
  width: 45px;
}
.time {
  padding-top: 10px;
  color: #9a9a9a;
}
.item {
  margin-top: 10px;
  margin-right: 10px;
  font-size: 20px;
}
.user-list-wrap {
  height: calc(100% - 140px);
  margin-top: 10px;
  overflow: auto;
}
.el-collapse {
  height: 100%;
  display: flex;
}
.wrap-inde {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
.wrap-1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.wrap-active {
  flex: 1;
}
.wddh-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow: auto;
  height: calc(100% - 100px);
}
.wrap-active .el-collapse-item__content {
  height: 100%;
  overflow: auto;
}
.wrap-1-1 {
  height: 100%;
  overflow: auto;
}
</style>
