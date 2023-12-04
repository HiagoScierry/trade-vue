//join my two stores into one with modules

import Vuex from 'vuex'

import userStore from './userStore'
import tradeStore from './tradeStore'
import loggedStore from './loggedStore'


export default new Vuex.Store({
    modules: {
        userStore,
        tradeStore,
        loggedStore
    }
})
