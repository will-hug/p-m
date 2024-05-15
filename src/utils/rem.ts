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
// function setRem() {
//   let  clientWidth = document.documentElement.clientWidth||document.body.clientWidth;
//   // window.innerWidth ||
//   // document.documentElement.clientWidth ||

//   let scale = clientWidth / 10;
//   let enlarge = 1;
//   try {
//     const config_state = configState();
//     config_state.upIsPc();
//     console.log('configState', clientWidth);
//   } catch (error) {
//     console.log('configState', error);
//   }

//   if (clientWidth > 750) {
//     enlarge = m_size / p_size; //p_size是PC端设计稿的宽度 m_size 是移动端端设计稿的宽度
//   }
//   console.log('enlarge * scale', enlarge * scale);
//   document.documentElement.style.fontSize = enlarge * scale + 'px';
// }
// // 调用方法
// setRem();

// // 监听窗口在变化时重新设置跟文件大小
// window.onresize = function () {
//   setRem();
// };

(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // docEl.clientWidth=window.innerWidth
  var rem = docEl.clientWidth / 10;
  var enlarge = 1;
  function enlargeFunc() {
    if (docEl.clientWidth > 750) {
      enlarge = m_size / p_size; //p_size是PC端设计稿的宽度 m_size 是移动端端设计稿的宽度
    } else {
      enlarge = 1;
    }
  }



  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      enlargeFunc();
      // document.body.style.fontSize = enlarge * rem + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  function setRemUnit() {
    enlargeFunc();
    console.log('enlarge * rem', enlarge * rem);
    try {
      const config_state = configState();
      config_state.upIsPc()
    } catch (error) {
      console.log('configState', error);
    }
    docEl.style.fontSize = enlarge * rem + 'px';
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });
})(window, document);
