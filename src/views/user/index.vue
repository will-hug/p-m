<template>
  <div class="m-c">
    <div class="m-c" v-if="config_state.is_pc">
      <p-index @upFrom="upFrom"></p-index>
    </div>
    <div class="m-c" v-else>
      <m-index></m-index>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, provide } from 'vue';
import type { tableDataItem, tableColumns } from "./type"
import { deepClone } from "@/utils/index"
import mIndex from "./component/m-index.vue"
import pIndex from "./component/p-index.vue"
import configState from '@/stores/config';
const config_state = configState();
let from = reactive<tableDataItem>({
  id: null,
  name: null,
  superior: null,
  post: null,
  organize: null,
  phone: null,
  power: [],
  enable: false,
  company: null,
});
let table_item = reactive<tableDataItem>({
  id: 1,
  name: '杜国志',
  superior: '技术主管',
  post: '技术',
  organize: '技术部门',
  phone: 14754475584,
  company: '广州汽车有限公司',
  power: [],
  enable: true,
})
let table_data = reactive<Array<tableDataItem>>([]);
const addData = (): void => {
  for (let i = 0; i < 10; i++) {
    let item = deepClone(table_item)
    item.id = i
    item.enable = (i % 2 == 0)
    table_data.push(item)
  }
}
addData()
const table_columns = reactive<Array<tableColumns>>([
  {
    id: 'name',
    label: '用户名',
    width: 'auto',
    sortable: false,
  },
  {
    id: 'organize',
    label: '所属组织',
    width: 'auto',
    sortable: false,
  },
  {
    id: 'superior',
    label: '上级',
    width: 'auto',
    sortable: false,
  },
  {
    id: 'post',
    label: '岗位',
    width: 'auto',
    sortable: false,
  },
  {
    id: 'phone',
    label: '手机号',
    width: 'auto',
    sortable: false,
  },
]);
const switchBtn = (i: number, pc: boolean = false): void => {
  if (!pc) {
    table_data[i].enable = !table_data[i].enable;
  }

  console.log('switchBtn', i)
};
const openAdd = () => {

  // isAddOpen.value = true
};
const switch_loading = ref<boolean>(false)
const openPower = function (i: number): void {
  console.log('openPower', i)
}
const openEdit = function (i: number): void {
  console.log('openEdit', i)
}
const upFrom = (v: tableDataItem) => {

  from = v
  console.log('v', from)
  provide("from", from)
}
const current_page = ref<number>(1)
const page_size = ref<number>(16)
const handleSizeChange = function (i: number): void {
  page_size.value = i
}
const handleCurrentChange = function (i: number): void {
  current_page.value = i
}
provide("current_page", current_page)
provide("page_size", page_size)
provide("handleSizeChange", handleSizeChange)
provide("handleCurrentChange", handleCurrentChange)
provide("from", from)
provide("table_columns", table_columns)
provide("table_data", table_data)
provide("switch_loading", switch_loading)
provide("switchBtn", switchBtn)
provide("openAdd", openAdd)
provide("openPower", openPower)
provide("openEdit", openEdit)


</script>