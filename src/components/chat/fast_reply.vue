<!--快捷回复消息界面-->
<template>
  <div class="fast-reply-wrap">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "企业快捷回复",
          children: [
            {
              label: "默认"
            }
          ]
        },
        {
          label: "我的快捷回复",
          children: [
            {
              label: "无"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      // eslint-disable-next-line no-console
      console.log(data);
    }
  }
};
</script>

<style scoped>
.el-tree {
  background: rgb(245, 245, 245);
}
</style>
