//join my two stores into one with modules

import Vuex from 'vuex'

import userStore from './userStore'
import tradeStore from './tradeStore'
import loggedStore from './loggedStore'
import { createStore } from 'vuex';


export default new Vuex.Store({
    modules: {
        userStore: userStore,
        tradeStore :tradeStore,
        loggedStore :loggedStore
    },
    mutations: {
        UPDATE_STATE(state) {
            localStorage.setItem('state', JSON.stringify(store.state));
        },
      },
})
