import { createStore } from 'vuex';

import tradeStore from './modules/tradeStore'; // Importe o módulo tradeStore



const store = createStore({
  state: {
    enterprises: [], // Lista de empresas
    users: [], // Lista de usuários
    currentUser: null, // Usuário atual logado
    
  },
  mutations: {
    // Defina mutations para adicionar, deletar empresas, etc.
    ADD_ENTERPRISE(state, enterprise) {
      state.enterprises.push(enterprise);
    },
    DELETE_ENTERPRISE(state, id) {
      state.enterprises = state.enterprises.filter(ent => ent.id !== id);
    },

    ADD_ENTERPRISE(state, enterprise) {
        state.enterprises.push(enterprise);
        localStorage.setItem('enterprises', JSON.stringify(state.enterprises));
      },
    
  },
  actions: {
    // Actions para manipular as mutations e realizar lógica de negócio
    addEnterprise({ commit }, enterprise) {
      commit('ADD_ENTERPRISE', enterprise);
    },
    deleteEnterprise({ commit }, id) {
      commit('DELETE_ENTERPRISE', id);
    },
    
  },
  getters: {
    // Getters para acessar os dados do estado
    getEnterprises: state => state.enterprises,
    
  },
});

export default createStore({
    modules: {
      tradeStore,
      // ...outros módulos, se houver
    },
  });
