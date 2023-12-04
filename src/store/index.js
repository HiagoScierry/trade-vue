//join my two stores into one with modules

import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './userStore'
import tradeStore from './tradeStore'
import adminStore from './adminStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userStore,
        tradeStore,
        adminStore
    }
})
