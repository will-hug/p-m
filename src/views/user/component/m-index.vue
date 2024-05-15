<template>
  <div class="user">
    <div class="header-box">
      <div class="header-title">
        <img class="back-icon" src="@/assets/user/back.png">
        <div class="header-title-text">账号管理</div>
      </div>
      <div class="search-box">
        <div class="search-input-box">
          <input v-model="from.content" class="search-input" @input="upFrom()" placeholder="请输入你要搜索得内容" />
          <img class="screen-icon" src="@/assets/user/m_search.png">
        </div>
        <div class="search-screen">
          <img class="screen-icon" src="@/assets/user/screen.png">
          <div class="screen-text">筛选</div>
        </div>
      </div>
    </div>
    <div class="main-box">
      <div class="list">
        <el-scrollbar :height="windowHeight" :always="false" @scroll="scroll">
          <div v-for="(item, index) in table_data" :key="'list' + index" class="list-item">
            <div class="list-item-title">
              <img class="title-icon" src="@/assets/user/m_user1.png">
              <div class="title-name">{{ item.company }}</div>
            </div>
            <div class="list-item-content">
              <div class="content-item content-item-m32">
                <div class="content-item-key">所属组织</div>
                <div class="content-item-value">{{ item.organize }}</div>
              </div>
              <div class="content-item content-item-m32">
                <div class="content-item-key">上级</div>
                <div class="content-item-value">{{ item.superior }}</div>
              </div>
              <div class="content-item">
                <div class="content-item-key">岗位</div>
                <div class="content-item-value">{{ item.post }}</div>
              </div>
              <div class="content-item">
                <div class="content-item-key">手机号</div>
                <div class="content-item-value">{{ item.phone }}</div>
              </div>
            </div>
            <div class="btn-box">
              <div @click="switchBtn(index)" class="btn-switch">{{ item.enable ? '禁用' : '启用' }}</div>
              <div @click="openEdit(index)" class="btn-edit">编辑</div>
            </div>
          </div>
          <div ref="scrollBottomRef"></div>
        </el-scrollbar>
      </div>
    </div>
    <div class="footer footer-box">
      <div @click="openAdd" class="add-btn">新增</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject, ref, onMounted } from 'vue';

const scrollBottomRef = ref<HTMLDivElement | null>(null)
let windowHeight = ref<number>(document.body.clientHeight)

// onMounted(()=>{
//   windowHeight.value=document.body.clientHeight
//   console.log("windowHeight",windowHeight.value)
// })
const scroll = ({ scrollTop }) => {
  let offsetTop=ref<number>(scrollBottomRef.value?.offsetTop || windowHeight.value)
  let threshold: number = offsetTop - scrollTop - windowHeight.value
  if (threshold <= 300) {
    console.log('setScrollLeft', scrollTop, offsetTop)
  }
}


const from = inject<any>("from")
const table_data = inject<any>("table_data")
const switchBtn = inject<any>("switchBtn")
const openAdd = inject<any>("openAdd")
const openEdit = inject<any>("openEdit")
const emit = defineEmits(['upFrom'])
const upFrom = () => {
  console.log('from', from)
  emit('upFrom', from)
}

</script>
<style scoped>
.btn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-switch {
  width: 306px;
  height: 76px;
  border-radius: 12px;
  opacity: 1;

  box-sizing: border-box;
  border: 2px solid #868686;
  font-family: Source Han Sans;
  font-size: 28px;
  font-weight: 500;
  line-height: 76px;
  letter-spacing: 1px;
  text-align: center;
  color: #535353;
}

.btn-edit {
  text-align: center;
  width: 306px;
  height: 76px;
  border-radius: 12px;
  opacity: 1;

  background: #FFE3E3;

  box-sizing: border-box;
  border: 2px solid #FF2D2D;

  font-family: Source Han Sans;
  font-size: 28px;
  font-weight: 500;
  line-height: 76px;
  letter-spacing: 1px;

  color: #FF2D2D;
}

.content-item-m32 {
  margin-bottom: 32px;
}

.list-item-content {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.content-item-value {
  font-family: Source Han Sans;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 1px;

  color: #474747;
}

.content-item-key {
  margin-bottom: 18px;
  font-family: Source Han Sans;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 1px;

  color: #9F9F9F;
}

.content-item {
  width: 50%;
}

.list-item-content {

  padding: 24px;
  box-sizing: border-box;
  background: #F6F6F6;
}

.list-item-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.title-icon {
  width: 12px;
  height: 20px;
  opacity: 1;
  margin-right: 22px;
}

.title-name {
  font-family: Source Han Sans;
  font-size: 32px;
  font-weight: 350;
  line-height: 36px;
  letter-spacing: 1px;

  color: #180901;
}

.list-item {
  margin: 32px 32px 0 32px;
  background: #FFFFFF;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 26px;
}

.main-box {
  flex-grow: 1;
  background: #F3F3F3;
  padding-bottom: 130px;
  padding-top: 328px;
}

.add-btn {
  width: 694px;
  height: 86px;
  border-radius: 12px;
  opacity: 1;
  margin-bottom: 20px;
  background: linear-gradient(157deg, #FF8B37 41%, #FF2D2D 82%);
  font-family: Source Han Sans;
  font-size: 32px;
  font-weight: 350;
  line-height: 86px;
  letter-spacing: 1px;
  text-align: center;


  color: #FFFFFF;
}

.footer-box {
  background: #FFFFFF;
  position: fixed;
  bottom: 0;
  padding-top: 6px;
  padding-left: 28px;
  padding-right: 28px;
  flex-shrink: 0;
}

.user {
  display: flex;
  height: 100%;
  flex-direction: column;

}

.back-icon {
  width: 40px;
  height: 40px;
  opacity: 1;
  position: absolute;
  left: 32px;
  /* top: 50%;
  transform: translateY(-50%); */
}

.header-title-text {
  font-family: Source Han Sans;
  font-size: 32px;
  font-weight: 500;
  line-height: 42.12px;
  text-align: center;
  letter-spacing: 0.42px;
  margin-bottom: 61px;
  font-feature-settings: "kern" on;
  color: #FFFFFF;
  position: relative;
}

.search-input {
  outline: none;
  flex-grow: 1;
  margin-right: 30px;
  width: 264px;
  height: 43px;
  opacity: 0.3;
  border: none;
  font-family: Source Han Sans;
  font-size: 26px;
  font-weight: 500;
  line-height: 42.12px;

  letter-spacing: 0.42px;

  font-feature-settings: "kern" on;
  color: #000000;
}

.search-screen {
  display: flex;
  flex-direction: column;
}

.search-box {
  display: flex;
  align-items: center;
}

.search-input-box {
  width: 592px;
  height: 88px;
  border-radius: 396px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
  align-items: center;
  box-sizing: border-box;
  background: #FFFFFF;
  margin-right: 42px;
}

.screen-text {
  font-family: Source Han Sans;
  font-size: 20px;
  font-weight: 350;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.42px;

  font-feature-settings: "kern" on;
  color: #FFFFFF;
  margin-top: 6px;
}

.screen-icon {
  width: 42px;
  height: 42px;
}

.header-box {
  width: 750px;
  z-index: 2;
  height: 328px;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 32px;
  flex-direction: column;
  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;
  background: linear-gradient(142deg, #FF8B37 12%, #FF2D2D 111%);
}
</style>