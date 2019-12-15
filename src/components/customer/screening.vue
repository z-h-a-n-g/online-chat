<template>
  <div class="screen-wrap">
    <div class="screen-title">客户赛选</div>
    <div class="v-form-wrap">
      <div class="from-item-wrap">
        <div class="from-title">用户名</div>
        <el-input class="form-item-input" v-model="sereen.username" placeholder="请输入内容" size="mini"></el-input>
      </div>
    </div>
    <div class="from-item-wrap">
      <div class="from-title">手机号</div>
      <el-input class="form-item-input" v-model="sereen.phone" placeholder="请输入内容" size="mini"></el-input>
    </div>
    <div class="from-item-wrap">
      <div class="from-title">微信号</div>
      <el-input class="form-item-input" v-model="sereen.wx" placeholder="请输入内容" size="mini"></el-input>
    </div>
    <div class="from-item-wrap">
      <div class="from-title">接待客服</div>
      <el-select v-model="sereen.jdkf" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="from-item-wrap">
      <div class="from-title">负责人</div>
      <el-select v-model="sereen.fzr" placeholder="请选择" size="mini">
        <el-option
          size="mini"
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="from-item-wrap">
      <div class="from-title">渠道</div>
      <el-select v-model="sereen.qd" placeholder="请选择" size="mini">
        <el-option
          size="mini"
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="from-item-wrap">
      <div class="from-title">类型</div>
      <el-select v-model="sereen.lx" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="from-item-wrap">
      <div class="from-title">标签</div>
      <el-select v-model="sereen.bq" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="from-item-wrap">
      <div class="from-title">添加时间</div>
      <el-time-picker
        size="mini"
        is-range
        v-model="sereen.time[0]"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      ></el-time-picker>
    </div>
    <div class="from-item-wrap">
      <div class="from-title">性别</div>
      <el-select v-model="sereen.xb" placeholder="请选择" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="btn-submit">
      <div class="btn clear">清除筛选</div>
      <div class="btn start">开始筛选</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [],
      sereen: {
        username: "", //用户名
        phone: "", //手机号
        wx: "", //微信号
        jdkf: "", //接待客服
        fzr: "", //负责人
        qd: "", //渠道
        lx: "", //类型
        bq: "", //标签
        time: ["", ""], //时间
        xb: "" //性别
      }
    };
  }
};
</script>

<style scoped>
.screen-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15px;
}
.screen-title {
  font-size: 14px;
  align-self: flex-start;
  margin-top: 15px;
}
.btn-submit {
  margin-top: 40px;
  width: 100%;
  padding: 0px;
  padding-left: -15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.form-item-input {
  width: 200px;
}
.from-item-wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 4px;
  margin-top: 18px;
  font-size: 14px;
}
.from-title {
  color: #9a9a9a;
  text-align: left;
}
.form-item-input {
  margin-top: 5px;
  width: 90%;
}
.el-input--mini {
  margin-top: 8px;
  width: 250px;
}
.el-select--mini {
  width: 250px;
  margin-top: 8px;
}
.el-date-editor--timerange {
  margin-top: 8px;
  width: 250px;
}
.btn-submit .btn {
  padding: 4px 15px;
  border-radius: 3px;
  cursor: pointer;
}
.clear {
  background: rgb(231, 229, 229);
  border: 1px solid #9a9a9a;
}
.start {
  background: #009de7;
  margin-left: -40px;
  border: 1px solid #009de7;
  color: white;
}
</style>
