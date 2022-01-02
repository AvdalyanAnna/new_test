import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)
import nav from "@/store/nav";
import global from "@/store/global";
import services from "@/store/services";
export default new Vuex.Store({
    modules: {
        nav,
        global,
        services
    },
    state: {}
})