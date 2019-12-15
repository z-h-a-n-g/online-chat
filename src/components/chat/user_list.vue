<!--用户列表-->
<template>
  <div class="user-list-wrap">
    <el-collapse v-model="activeNames" @change="handleChange">
      <!-- 我的对话 -->
      <el-collapse-item name="1">
        <template slot="title">
          <div class="wddh">
            <div class="wddh-word">我的对话（{{hh_numbers}}/{{specifications}}）</div>
          </div>
        </template>
        <div class="wddh-content">
          <template v-if="user_list.length>0">
            <div class="wddh-cz">
              <el-select v-model="indexCur" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.label"
                  :label="item.value"
                  :value="item.label"
                ></el-option>
              </el-select>
              <el-button type="text" @click="open" class="qb-btn">全部</el-button>
            </div>
            <div class="user-list-wrap">
              <template v-for="(item,index) of user_list">
                <div v-show="!item.isRead" :key="index" class="user">
                  <div class="user-info">
                    <div class="img">
                      <el-badge is-dot class="item">
                        <img :src="item.imgUrl" width="100%" alt />
                      </el-badge>
                    </div>
                    <div class="username">{{item.username}}</div>
                  </div>
                  <div class="time">{{item.time}}</div>
                </div>
                <div class="user" v-show="item.isRead" :key="index">
                  <div class="user-info">
                    <div class="img">
                      <img :src="item.imgUrl" width="100%" alt />
                    </div>
                    <div class="username">{{item.username}}</div>
                  </div>
                  <div class="time">{{item.time}}</div>
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
      <!-- 同事对话 -->
      <el-collapse-item name="2">
        <template slot="title">
          <div class="wddh">
            <div class="wddh-word">同事的对话（{{tsdh}}）</div>
          </div>
        </template>
        <div class="wddh-content">
          <template v-if="tsdh_list.length<10">
            <div class="wddh-cz">
              <el-select v-model="indexCur" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.label"
                  :label="item.value"
                  :value="item.label"
                ></el-option>
              </el-select>
              <el-button type="text" @click="open" class="qb-btn">全部</el-button>
            </div>
            <div class="user-list-wrap">
              <template v-for="(item,index) of user_list">
                <div v-show="!item.isRead" :key="index" class="user">
                  <div class="user-info">
                    <div class="img">
                      <el-badge is-dot class="item">
                        <img :src="item.imgUrl" width="100%" alt />
                      </el-badge>
                    </div>
                    <div class="username">{{item.username}}</div>
                  </div>
                  <div class="time">{{item.time}}</div>
                </div>
                <div class="user" v-show="item.isRead" :key="index">
                  <div class="user-info">
                    <div class="img">
                      <img :src="item.imgUrl" width="100%" alt />
                    </div>
                    <div class="username">{{item.username}}</div>
                  </div>
                  <div class="time">{{item.time}}</div>
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
      <!-- 排队中 -->
      <el-collapse-item name="3">
        <template slot="title">
          <div class="wddh">
            <div class="wddh-word">排队中（{{pdz}}）</div>
          </div>
        </template>
        <div class="wddh-content">
          <template v-if="pdz_list.length<10">
            <div class="wddh-cz">
              <el-select v-model="indexCur" placeholder="请选择" size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.label"
                  :label="item.value"
                  :value="item.label"
                ></el-option>
              </el-select>
              <el-button type="text" @click="open" class="qb-btn">全部</el-button>
            </div>
            <div class="user-list-wrap">
              <template v-for="(item,index) of user_list">
                <div v-show="!item.isRead" :key="index" class="user">
                  <div class="user-info">
                    <div class="img">
                      <el-badge is-dot class="item">
                        <img :src="item.imgUrl" width="100%" alt />
                      </el-badge>
                    </div>
                    <div class="username">{{item.username}}</div>
                  </div>
                  <div class="time">{{item.time}}</div>
                </div>
                <div class="user" v-show="item.isRead" :key="index">
                  <div class="user-info">
                    <div class="img">
                      <img :src="item.imgUrl" width="100%" alt />
                    </div>
                    <div class="username">{{item.username}}</div>
                  </div>
                  <div class="time">{{item.time}}</div>
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
    </el-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1'],//当前打开的第几个选项卡 1、我的对话 2、同事的对话 3、排队中
      specifications: 20,//当前能显示的会话总数
      hh_numbers: 2,//我开启的会话总数
      indexCur: 1,
      pdz: 23,//排队中的会话总数
      tsdh: 2,//同事对话
      tsdh_list: [],
      pdz_list: [],
      options: [{ label: 1, value: '全部' }, { label: 2, value: '只看单聊' }, { label: 3, value: '只看群聊' }, { label: 4, value: '超过48小时的接待' }],
      user_list: [{ username: "程序员阿森", imgUrl: require("../..//assets/image/user/art1.jpg"), time: '16:42:53', isRead: false }, { username: "程序员阿森", imgUrl: require("../..//assets/image/user/art2.jpg"), time: '16:42:53', isRead: false }, { username: "程序员阿森", imgUrl: require("../..//assets/image/user/art1.jpg"), time: '16:42:53', isRead: false }, { username: "程序员阿森", imgUrl: require("../..//assets/image/user/art2.jpg"), time: '16:42:53', isRead: true }, { username: "程序员阿森", imgUrl: require("../..//assets/image/user/art1.jpg"), time: '16:42:53', isRead: true }]
    };
  },
  methods: {
    handleChange (val) {
      // eslint-disable-next-line no-console
      console.log(val);
    },
    open () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
};
</script>

<style scoped>
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
  margin-top: 5px;
  padding: 5px 15px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.el-collapse-item__header {
  padding: 0px 10px;
}
.el-collapse-item {
  padding: 0px 15px;
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
  height: 100%;
  overflow: auto;
}
</style>
