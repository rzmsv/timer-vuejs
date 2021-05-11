import Vue from "vue";
import App from "./App"
import VueRouter from "vue-router"
import timer from "./components/timer"
import user from "./components/user"
import market from "./components/market"
import store from "./store"


Vue.use(VueRouter)
Vue.config.devtools = true
const router = new VueRouter({
    mode:"history",
    routes:[
        {path:'/timer',name:'time',component:timer},
        {path:'/market',component:market},
        {path:'/user/:id',component:user},
        { path: '*', redirect: '/timer' }
    ]
})


new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})