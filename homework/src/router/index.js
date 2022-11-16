import Vue from 'vue'
import VueRouter from "vue-router";

// import headerVue from '../components/headerVue'
import mainderVue from '../pages/mainderVue';
import databaseVue from '../pages/databaseVue';
import recruitVue from '../pages/recruitVue';
import chartVue from '../pages/chartVue';
import footerVue from '../pages/footerVue';

Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path: '/',
            component: mainderVue,footerVue
        },
        
        {
            path:'/zhaoping',
            component: recruitVue
        },
        {
            path:'/ziliao',
            component: databaseVue,footerVue
        },
        {
            path:'/shuju',
            component: chartVue
        },
    ]
})