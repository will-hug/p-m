/*
 * @Author: will_hug 1447607151@qq.com
 * @Date: 2024-05-10 21:03:13
 * @LastEditors: will_hug 1447607151@qq.com
 * @LastEditTime: 2024-05-10 21:09:30
 * @FilePath: \vue-project\src\utils\storage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { token } from './config';
const getToken = (): string | null => {
  return localStorage.getItem(token);
};
const setToken = (v: string): void => {
  localStorage.setItem(token, v);
};
const logout = (): void => {
  localStorage.removeItem(token);
};
 