import Vue from "vue"
import Vuex from "vuex"
import { mutations } from "./mutations"
import { actions } from "./actions"
import { getters } from "./getters"
Vue.use(Vuex)

import { moduleA } from "./modules/moduleA"

const state = {
    counter: 1,
    students: [
        {index: 1, name: '萧密如', age: 10},
        {index: 2, name: '沃忆彤', age: 16},
        {index: 3, name: '薛芮优', age: 18},
        {index: 4, name: '傅晶灵', age: 20},
        {index: 5, name: '家书云', age: 35},
        {index: 6, name: '邰元香', age: 38},
        {index: 7, name: '麴玉兰', age: 41},
        {index: 8, name: '桓逸致', age: 48},
        {index: 9, name: '芮书芹', age: 55},
        {index: 10, name: '芮本芹', age: 65}
    ]
}

const store =  new Vuex.Store({
    modules: {
        a: moduleA
    },
    state,
    mutations,
    getters,
    actions
})

export default store


