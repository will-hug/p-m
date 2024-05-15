<template>
  <div class="tab">
    <div class="tab-box">
      <div class="tab-item-box" v-for="(item, index) in tab_list" @click="toPath(item.path)" :key="'tab-item' + index">
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
.tab{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}
.tab-box {
  display: flex;
  flex-wrap: wrap;
  /* margin: 76px auto; */
  width: 1210px;
}


.tab-item-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 68px;
  margin-bottom: 68px;
  padding: 18px 0;
  width: 356px;
  height: 222px;
  border-radius: 28px;
  opacity: 1;
  background: #FFFFFF;
  box-sizing: border-box;

  border: 1px solid #E7E7E7;

  font-weight: normal;
  line-height: 38px;
}

.tab-item-box:nth-child(3n) {
  margin-right: 0px;
}

.tab-item-icon {
  width: 138px;
  height: 138px;
  background: rgba(255, 255, 255, 0);
}

.tab-item-name {
  font-size: 24px;
  margin-top: 10px;
  letter-spacing: 0em;
  font-variation-settings: "opsz" auto;
  font-feature-settings: "kern" on;
  font-family: 思源黑体;
  color: #181818;
}

.tab-item-box:hover {
  transition: all 0.5s;
  border: 1px solid #FF4D32;
  box-shadow: 0px 16px 36px 0px rgba(223, 113, 113, 0.13);
  font-weight: bold;
  line-height: normal;
}

;
</style>
