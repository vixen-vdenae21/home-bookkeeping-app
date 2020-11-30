export default {
  install(Vue, options) {
    Vue.prototype.$message = function (html) {
      M.toast({ html })
      console.log('html', html)
    }

    Vue.prototype.$error = function (html) {
      M.toast({ html: `[Ошыбка]: ${html}` })
    }
  }
}
