<template>
  <div>
    <div v-if="config_state.is_pc">
      <p-index></p-index>
    </div>
    <div v-else> <m-index></m-index></div>


  </div>
</template>
<script lang="ts" setup>
import mIndex from "./component/m-index.vue"
import pIndex from "./component/p-index.vue"
import configState from '@/stores/config';
const config_state = configState();
 
import { ref, reactive, provide } from 'vue';
import { useRouter } from 'vue-router';
import icon1 from '@/assets/index/index_1.png';
import icon2 from '@/assets/index/index_2.png';
import icon3 from '@/assets/index/index_3.png';
import icon4 from '@/assets/index/index_4.png';
import icon5 from '@/assets/index/index_5.png';
import icon6 from '@/assets/index/index_6.png';
import icon7 from '@/assets/index/index_7.png';
import icon8 from '@/assets/index/index_8.png';
import icon9 from '@/assets/index/index_9.png';
interface tabItem {
  name: string;
  icon: string;
  path: string;
}
const router = useRouter();
let tab_list = reactive<Array<tabItem>>([
  {
    name: '活动管理',
    icon: icon1,
    path: '',
  },
  {
    name: '报表',
    icon: icon2,
    path: '',
  },
  {
    name: '账号',
    icon: icon3,
    path: '/user',
  },
  {
    name: '经销商管理',
    icon: icon4,
    path: '',
  },
  {
    name: '活动主页',
    icon: icon5,
    path: '',
  },
  {
    name: '客户管理',
    icon: icon6,
    path: '',
  },
  {
    name: '经销商审核',
    icon: icon7,
    path: '',
  },
  {
    name: '品牌管理',
    icon: icon8,
    path: '',
  },
  {
    name: '收付款管理',
    icon: icon9,
    path: '',
  },
]);
const toPath = (path: string): void => {
  router.push({
    path
  });
};
provide('toPath', toPath)
provide('tab_list', tab_list)
</script>
<style scoped></style>
