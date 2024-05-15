import { defineStore } from 'pinia';
const configState = defineStore('config', {
  state() {
    return {
      is_pc: true,
    };
  },
  getters: {},
  actions: {
    upIsPc() {
      const clientWidth =
        document.body.clientWidth
        //  ||
        // document.documentElement.clientWidth ||
        // window.innerWidth;
      this.is_pc = clientWidth > 750;
    },
  },
});
export default configState;
