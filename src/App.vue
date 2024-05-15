<!--
 * @Author: will_hug 1447607151@qq.com
 * @Date: 2024-05-11 21:56:35
 * @LastEditors: will_hug 1447607151@qq.com
 * @LastEditTime: 2024-05-13 15:46:40
 * @FilePath: \vue-project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import configState from './stores/config';
import { ref } from "vue"
import index_icon from "@/assets/index/index_icon.png"

const config_state = configState();
config_state.upIsPc()
interface aside {
  path: string,
  icon: string,
  name: string
}
const asideList = ref<[aside]>([{
  path: "/",
  name: "首页",
  icon: index_icon
}])
const toPath = (p: string): void => {

}
</script>



<template>
  <div>
    <div class="container" v-if="config_state.is_pc">
      <div class="pc-container">
        <div class="pc-header">
          <div class="pc-header-left">
            <img class="pc-header-icon" src="./assets/index/left_icon.png" />
            <div class="pc-header-title">贵和永润有限公司后台管理系统</div>
          </div>
          <div class="pc-header-right">
            <div class="pc-header-name">
              <div class="pc-header-name-text">杜国志</div>
              <img class="pc-header-name-icon" src="./assets/index/p_index_icon.png" />
            </div>
            <img class="pc-header-right-icon" src="./assets/index/user_icon.png" />
          </div>
        </div>
        <div class="pc-container-bottom">
          <div class="pc-aside">
            <div v-for="(item, index) in asideList" :key="'aside' + index" class="pc-aside-item">
              <img class="pc-aside-item-icon" :src="item.icon" />
              <RouterLink :to="item.path" class="pc-aside-item-name">{{ item.name }}</RouterLink>
            </div>
          </div>
          <div class="pc-main">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.pc-header {
  width: 100%;
  height: 62px;
  flex-flow: 0;
  background: linear-gradient(95deg, #FF8B37 38%, #FF2D2D 98%);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 24px;
  box-sizing: border-box;
}

.pc-header-left {
  display: flex;
  height: 100%;
  align-items: center;
}

.pc-header-icon {
  width: 48px;
  height: 48px;
  margin-right: 16px;
}

.pc-header-title {
  font-family: Source Han Sans;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0em;
  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: #FFFFFF;
}

.pc-header-right {
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
}

.pc-header-right-icon {
  width: 42px;
  height: 42px;
}

.pc-header-name {
  display: flex;
  align-items: center;
}

.pc-header-name-text {

  font-family: 思源黑体;
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: 0em;

  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  color: #FFFFFF;
}

.pc-header-name-icon {
  width: 12px;
  height: 6px;
  border-radius: 1px;
  margin: 0 14px 0 6px;
}

.pc-aside {
  width: 88px;
  box-shadow: 0px 16px 36px 0px rgba(223, 113, 113, 0.13);
  height: 100%;
  flex-flow: 0;
}

.pc-aside-item {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pc-aside-item-icon {
  width: 28px;
  height: 28px;
}

.pc-aside-item-name {
  color: #3D3D3D;
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
}

.pc-main {
  flex-grow: 1;
}

.pc-container-bottom {
  display: flex;
  flex-grow: 1;
}

.pc-container {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
}

.container {
  width: 100vw;
  height: 100vh;
  /* width: 100%;
  height: 100%; */
}
</style>
<style lang="scss">
body,
html {
  padding: 0;
  margin: 0 !important;
  /* width: 100vw;
  height: 100vh; */

}

el-table {
  width: 100%;

  .el-table__header-wrapper table,
  .el-table__body-wrapper table {
    width: 100% !important;
  }

  .el-table__body,
  .el-table__footer,
  .el-table__header {
    table-layout: auto;
  }
}

.m-c {
  width: 100%;
  height: 100%;
}

@supports (bottom: env(safe-area-inset-bottom)) {

  body,
  .footer {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
