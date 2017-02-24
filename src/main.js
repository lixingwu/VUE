import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from '../routerConfig.js'
import App from './App.vue'

Vue.use(VueRouter)

const router=new VueRouter({
    routes
});
new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
