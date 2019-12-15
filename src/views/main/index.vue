<template>
  <div class="main">
    <div class="main-wrap">
      <v-menu />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import vMenu from "../../components/menu.vue";
export default {
  name: "main",
  components: {
    vMenu
  }
};
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
}
.main-wrap {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.menu-wrap {
  height: 100%;
}
.content {
  height: 100%;
  flex: 1;
  overflow: auto;
}
</style>
