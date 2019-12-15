<!--用户信息组件-->
<template>
  <div class="user-info-wrap">
    <div class="userinfo">
      <div class="title">
        用户标签
        <span class="iconfont"></span>
      </div>
      <div class="info">暂无标签</div>
    </div>
    <div class="duihua">
      <div>对话来源</div>
      <div>
        渠道：远离百度
        <span class="laiyuan">微信号</span>
      </div>
    </div>
    <div class="user-infos">
      <div class="nichen">昵称：.</div>
      <div class="xm">
        姓名：
        <span class="xm">无</span>
      </div>
      <div class="bzm">备注名：西子</div>
      <div class="pyq">
        朋友圈：
        <span class="btn">查看详情</span>
      </div>
      <div class="wx">微信：imy4360</div>
      <div class="phone">
        电话：
        <span class="phone">无</span>
      </div>
      <div class="xb">性别：女</div>
      <div class="address">地区：中国 重庆</div>
      <div class="gs">
        公司：
        <span class="gs">无</span>
      </div>
      <div class="add-time">添加时间：2019-12-15</div>
      <div class="describe">
        描述：
        <span class="describe">添加更多备注信息</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-info-wrap {
  margin-top: 8px;
  width: 100%;
  text-align: left;
}
.title {
  font-size: 14px;
}
.info {
  font-size: 14px;
  margin-top: 10px;
  color: #9a9a9a;
}
.is-top {
  color: #9a9a9a;
}
.duihua {
  margin-top: 20px;
}
.duihua div {
  margin-top: 8px;
  font-size: 14px;
}
.laiyuan {
  padding: 1px 4px;
  color: white;
  background: rgb(34, 155, 54);
}
.user-infos {
  margin-top: 20px;
}
.user-infos div {
  margin-top: 8px;
  font-size: 14px;
}
span.xm,
span.gs,
span.describe,
span.phone {
  color: #9a9a9a;
}
span.describe:hover {
  cursor: pointer;
}
span.btn {
  color: #009de7;
  cursor: pointer;
}
</style>
