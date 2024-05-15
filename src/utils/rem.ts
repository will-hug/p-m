/*
 * @Author: will_hug 1447607151@qq.com
 * @Date: 2024-05-12 13:55:56
 * @LastEditors: will_hug 1447607151@qq.com
 * @LastEditTime: 2024-05-13 15:46:00
 * @FilePath: \vue-project\src\utils\rem.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { p_size, m_size } from './config';
import configState from '@/stores/config';
// // rem 函数
function setRem() {
  let  clientWidth = document.documentElement.clientWidth||document.body.clientWidth;
  // window.innerWidth ||
  // document.documentElement.clientWidth ||

  let scale = clientWidth / 10;
  let enlarge = 1;
  try {
    const config_state = configState();
    config_state.upIsPc();
    console.log('configState', clientWidth);
  } catch (error) {
    console.log('configState', error);
  }

  if (clientWidth > 750) {
    enlarge = m_size / p_size; //p_size是PC端设计稿的宽度 m_size 是移动端端设计稿的宽度
  }
  console.log('enlarge * scale', enlarge * scale);
  document.documentElement.style.fontSize = enlarge * scale + 'px';
}
// 调用方法
setRem();

// 监听窗口在变化时重新设置跟文件大小
window.onresize = function () {
  setRem();
};
