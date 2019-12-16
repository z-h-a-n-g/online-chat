<template>
  <div class="table-content-wrap">
    <div class="table-btn-top">
      <div class="table-number">客户信息（共614条）</div>
      <div class="table-btn-wrap">
        <div class="btn-wrap">
          <div class="iconfont">&#xe61c;</div>
          <div class="word">批量打标签</div>
        </div>
        <div class="btn-wrap">
          <div class="iconfont">&#xe628;</div>
          <div class="word">批量开启对话</div>
        </div>
        <div class="btn-wrap">
          <div class="iconfont">&#xebc9;</div>
          <div class="word">微信群发</div>
        </div>
        <div class="btn-wrap">
          <div class="iconfont">&#xe668;</div>
          <div class="word">同步微信信息</div>
        </div>
        <div class="btn-wrap">
          <div class="iconfont">&#xe604;</div>
          <div class="word">设置展示字段</div>
        </div>
      </div>
    </div>
    <div class="table-content-wrap-table">
      <div class="table-table">
        <el-table
          stripe
          border
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="cz" label="操作" width="105">
            <div class="cz-wrap">
              <div class="iconfont">&#xe72c;</div>
              <div class="word-column">发起会话</div>
            </div>
          </el-table-column>
          <el-table-column prop="imgUrl" label="头像" width="60">
            <template slot-scope="scope">
              <img :src="scope.row.imgUrl" alt width="100%" />
            </template>
          </el-table-column>
          <el-table-column prop="bz" label="备注" width="120"></el-table-column>
          <el-table-column prop="qd" label="渠道" width="150">
            <template slot-scope="scoped">
              <div class="qd">
                <div class="word-1">{{ scoped.row.qd }}</div>
                <div class="word-2">{{ scoped.row.qd_info }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="wx" label="微信" width="120"></el-table-column>
          <el-table-column
            prop="phone"
            label="电话"
            width="120"
          ></el-table-column>
          <el-table-column prop="bq" label="标签" width="230"></el-table-column>
          <el-table-column
            prop="fzr"
            label="负责人"
            width="120"
          ></el-table-column>
          <el-table-column prop="xb" label="性别" width="60"></el-table-column>
          <el-table-column prop="dq" label="地区" width="150"></el-table-column>
          <el-table-column prop="gs" label="公司" width="150"></el-table-column>
          <el-table-column
            prop="add_time"
            label="添加时间"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="zjlx_time"
            label="最后联系时间"
            width="130"
          ></el-table-column>
          <el-table-column prop="ms" label="描述" width="165"></el-table-column>
          <el-table-column
            prop="jdkf"
            label="接待客服"
            width="100"
          ></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="block">
      <span class="block-word">导出客户信息 (416)</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      // eslint-disable-next-line no-console
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // eslint-disable-next-line no-console
      console.log(`当前页: ${val}`);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        },
        {
          ms: "--", //描述
          jdkf: "--", //接待客服
          zjlx_time: "--", //最近联系时间
          gs: "--", //公司
          add_time: "--", //添加时间
          xb: "男", //性别
          fzr: "--", //负责人
          dq: "中国", //地区
          bq: "--", //标签
          phone: "--", //电话
          wx: "zyb17595", //微信
          qd: "【在线】远离百度", //渠道
          qd_info: "微信号", //渠道标签
          bzm: "--",
          nc: "MLXGzzz",
          imgUrl: require("../../assets/image/user/art1.jpg")
        }
      ],
      multipleSelection: []
    };
  }
};
</script>

<style scoped>
.table-content-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-left: 1px solid #ccc;
  width: 100%;
}
.table-btn-top {
  border-bottom: 1px solid #ccc;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
}
.el-table {
  height: 100%;
  overflow-y: scroll;
}
.table-table {
  height: 100%;
  width: 100%;
  overflow: auto;
}
.table-btn-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-right: 15px;
  padding: 5px 10px 5px 0px;
}
.btn-wrap {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 10px;
  color: #009de7;
  cursor: pointer;
}
.iconfont {
  color: #009de7;
}
.word {
  margin-left: 4px;
}
.table-content-wrap-table {
  position: relative;
  height: 100%;
}
.has-gutter {
  text-align: center;
}
.block {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  border-top: 1px solid #ccc;
}
.el-table td {
  padding: 10px 0px;
}
.block-word {
  padding-left: 15px;
}
.el-pagination {
  padding-right: 15px;
}
.qd {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.word-2 {
  padding: 1px 4px;
  color: white;
  background: rgb(34, 155, 54);
  border-radius: 3px;
}
.cz-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #009de7;
  cursor: pointer;
}
</style>
