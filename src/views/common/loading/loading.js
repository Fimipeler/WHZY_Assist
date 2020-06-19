import Vue from 'vue'
import loading from './loading.vue'
// 使用extend创建的是一个组件构造器
const LoadingConstructor = Vue.extend(loading)
// 实例化组并创建一个div
let instance = new LoadingConstructor({
  el: document.createElement('div')
})

const newLoading = {
  show(options) { // 接受传递过来的问题，调用此方法时同事显示弹窗
    instance.show = true
    // 判断是否有传值过来，有就改变默认值
    if (options) {
      instance.text = options
    }
    document.body.appendChild(instance.$el)
  },
  // 隐藏方法
  hide() {
    instance.show = false
  }
}

const install = function () {
  if (!Vue.$loading) {
    Vue.$loading = newLoading
  }
  Vue.mixin({
    created() {
      this.$loading = Vue.$loading
    }
  })
}
export default install
