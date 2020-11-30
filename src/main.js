import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from "@/filters/date.filter"
import currencyFilter from "@/filters/currency.filter"
import localizeFilter from "@/filters/localize.filter"
import tooltipDirective from '@/directives/tooltip.directive'
import Paginate from 'vuejs-paginate'
import messageFilter from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from "@/components/app/Loader"

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messageFilter)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyD8AeBaoFF9RXg2E6HjE4oT16EfOwIEtCY",
  authDomain: "sheduler-crm.firebaseapp.com",
  databaseURL: "https://sheduler-crm.firebaseio.com",
  projectId: "sheduler-crm",
  storageBucket: "sheduler-crm.appspot.com",
  messagingSenderId: "1085809254503",
  appId: "1:1085809254503:web:8e130504ab9bf0d8f6b4c2",
  measurementId: "G-KMYLJEHCHM"
})

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
