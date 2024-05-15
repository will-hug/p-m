/*
 * @Author: will_hug 1447607151@qq.com
 * @Date: 2024-05-11 21:56:35
 * @LastEditors: will_hug 1447607151@qq.com
 * @LastEditTime: 2024-05-13 15:40:51
 * @FilePath: \vue-project\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import 'amfe-flexible'
import App from './App.vue'
import router from './router'
import "./utils/rem"
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from "element-plus/es/locale/lang/zh-cn"
// 修改分页器默认文字
zhCn.el.pagination.total = "共" + `{total}` + "条"
zhCn.el.pagination.goto = "前往"
 
const app = createApp(App)

app.use(ElementPlus,{ locale: zhCn });
app.use(createPinia())
app.use(router)

app.mount('#app')
