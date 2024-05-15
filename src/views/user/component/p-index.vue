<template>
  <div class="user">
    <div class="user-box">
      <div class="search-box">
        <div class="search-item">
          <div class="search-item-name">用户名</div>
          <el-input @input="upFrom()" v-model="from.name" class="search-item-input" placeholder="请输入用户名" />
        </div>
        <div class="search-item">
          <div class="search-item-name">岗位</div>
          <el-input v-model="from.post" class="search-item-input" placeholder="请输入岗位" />
        </div>
        <div class="search-item">
          <div class="search-item-name">组织</div>
          <el-input v-model="from.organize" class="search-item-input" placeholder="请输入组织" />
        </div>
        <div class="search-item">
          <div class="search-item-name">手机号</div>
          <el-input v-model="from.phone" class="search-item-input" placeholder="请输入手机号" />
        </div>
        <div class=" search-item-content">
          <input @input="upFrom()" v-model="from.content" class="search-item-input-content" placeholder="请输入内容" />
        </div>
        <el-button class="search-btn">
          <img class="search-icon" src="@/assets/user/p_search.png">
          <div class="search-btn-text">搜索</div>
        </el-button>
        <el-button @click="openAdd" class="add-btn">
          <img class="add-icon" src="@/assets/user/add.png">
          <div class="add-btn-text">新增</div>
        </el-button>
      </div>
      <div class="table-box">
        <div class='table-content'>
          <el-table header-row-class-name="header-row-class-name" header-cell-class-name="header-row-class-name"
            row-class-name="row-class-name" :data="table_data" :cell-style="{ 'text-align': 'center' }"
            style="width: 100%;table-layout:fixed;" :header-cell-style="{ 'text-align': 'center' }">
            <el-table-column v-for="(item, index) in table_columns" :key="'table' + index" :prop="item.id"
              :label="item.label" :width="item.width" />

            <el-table-column label="操作">
              <template #default="scope">
                <div class="operation-box">
                  <div class="operation-text" @click="openEdit(scope.$index)">编辑</div>
                  <div class="operation-text" @click="openPower(scope.$index)">权限设置</div>
                  <el-switch @change="switchBtn(scope.$index, true)" v-model="scope.row.enable" size="small"
                    :loading="switch_loading" />

                </div>
              </template>

            </el-table-column>
          </el-table>
        </div>

        <div class="pagination-box">

          <el-pagination v-model:current-page="current_page" v-model:page-size="page_size"
            :page-sizes="[16, 32, 48, 64, 80]" small="small" layout="total,sizes, prev, pager, next,jumper" :total="400"
            @size-change="handleSizeChange" @current-change="handleCurrentChange">

          </el-pagination>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue';
const from = inject<any>("from")



const current_page = inject<any>("current_page")
const page_size = inject<any>("page_size")
const handleSizeChange = inject<any>("handleSizeChange")
const handleCurrentChange = inject<any>("handleCurrentChange")
const table_data = inject<any>("table_data")
const table_columns = inject<any>("table_columns")
const switch_loading = inject<any>("switch_loading")
const switchBtn = inject<any>("switchBtn")
const openPower = inject<any>("openPower")
const openAdd = inject<any>("openAdd")
const openEdit = inject<any>("openEdit")
const emit = defineEmits(['upFrom'])
const upFrom = () => {
  emit('upFrom', from)
}

</script>
<style lang="scss">
/*鼠标移入某行时的背景色*/
.el-table--enable-row-hover .el-table__body tr:hover>td {
  color: #f00;
  background: rgba(rgba(255, 0, 0, 0.099), 0.1) !important;
}

.table-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.row-class-name {
  height: 60px;
}

.header-row-class-name {
  height: 60px;
  background-color: #f1f1f1 !important;
}

.el-table {
  position: absolute;
}

.table-content {
  flex-grow: 1;
  position: relative;
}

.table-content:deep(.el-table) 
.el-table .row-class {
  background: #000;
}

.header-class {
  background: #000;
}

.search-item-content .el-input__wrapper {
  background-color: #FFF4F4 !important;
}
</style>
<style scoped>
.search-item-content {
  display: flex;
  align-items: center;
}

.pagination-box {
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  align-items: center;
  height: 68px;
}

.operation-text {
  opacity: 0.7;
  font-family: Source Han Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  font-variation-settings: "opsz" auto;
  /* margin-right: 48px; */
  color: #FF3F2F;
}

.operation-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-icon {
  width: 14px;
  height: 14px;
  margin-right: 8px;
}

.add-btn-text {
  font-family: Source Han Sans;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0px;

  font-variation-settings: "opsz" auto;
  color: #FFFFFF;
}

.add-btn {
  width: 102px;
  height: 42px;
  border-radius: 4px;
  margin: 0 0 0 21px;
  opacity: 1;
  background: linear-gradient(140deg, #FF8B37 14%, #FF2D2D 110%);
}

.search-btn-text {
  font-family: Source Han Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0px;
  font-variation-settings: "opsz" auto;
  color: #FF312E;
}

.search-icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

.search-btn {
  width: 98px;
  height: 42px;
  border-radius: 4px;
  opacity: 1;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid #FF312E;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-item-input {
  width: 245px;
  height: 42px;
  border-radius: 4px;
  opacity: 1;

  background: #FDFEFF;

  box-sizing: border-box;
  border: 1px solid #E6E6E6;
}


.search-item-input-content {
  padding: 1px 11px;
  width: 275px;
  outline: none;
  height: 42px;
  border-radius: 4px;
  opacity: 1;
  margin-right: 8px;
  background-color: #FFF4F4;
  box-sizing: border-box;
  border: 1px solid #FFD8D8;
}

.search-item-name {
  flex-shrink: 0;
  margin-right: 12px;
  font-family: Source Han Sans;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0px;
  font-variation-settings: "opsz" auto;
  color: #3D3D3D;
}

.search-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.search-box {
  flex-shrink: 0;
  width: 100%;
  display: flex;
  margin-bottom: 24px;
  flex-wrap: wrap;
  align-items: center;
}

.user-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  background: #fff;
  width: 100%;
  height: 100%;
}

.user {

  background: #F3F3F3;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
}
</style>