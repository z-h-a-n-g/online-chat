<!--客户界面-->
<template>
  <div class="customer">
    <div class="customer-wrap">
      <div class="screen">
        <v-screening></v-screening>
      </div>
      <div class="v-table">
        <v-table></v-table>
      </div>
    </div>
  </div>
</template>

<script>
import vScreening from "../../components/customer/screening.vue";
import vTable from "../../components/customer/v_table.vue";
export default {
  name: "customer",
  components: {
    vScreening,
    vTable
  }
};
</script>

<style scoped>
.customer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.customer-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.screen {
  width: 280px;
  font-size: 14px;
}
.v-table {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
</style>
