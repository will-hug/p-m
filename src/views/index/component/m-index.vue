<template>
  <div>
    <div class="header">
      <div class="header-name">您好！杜国志</div>
      <img src="../../../assets/index/m_index_1.png">
    </div>
    <div class="tab-box">
      <div class="tab-item" v-for="(item, index) in tab_list" @click="toPath(item.path)" :key="'tab-item' + index">
        <img :src="item.icon" class="tab-item-icon" />
        <div class="tab-item-name">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue';
const tab_list = inject<any>("tab_list")
const toPath = inject<any>("toPath")
</script>
<style scoped>
.tab-item-name {
  font-family: Source Han Sans;
  font-size: 32px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0em;
  margin-top: 20px;
  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: #181818;
}

.tab-item-icon {
  width: 200px;
  height: 200px;


  background: rgba(255, 255, 255, 0);
}

.tab-item {
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 333px;
  height: 396px;
  border-radius: 12px;
  opacity: 1;
  background: #FFFFFF;
  box-sizing: border-box;
  border: 1px solid #E7E7E7;
}

.tab-item:nth-child(2n) {
  margin-right: 0px;
}

.tab-box {
  display: flex;
  flex-wrap: wrap;
  padding: 32px;
  box-sizing: border-box;
}

.header {
  width: 750px;
  height: 92px;
  background: linear-gradient(109deg, #FF8B37 35%, #FF2D2D 99%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 42px 0 38px;
  box-sizing: border-box;
}

.header-name {
  font-family: Source Han Sans;
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0em;

  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: #FFFFFF;
}
</style>
