//join my two stores into one with modules

import Vuex from 'vuex'

import userStore from './userStore'
import tradeStore from './tradeStore'
import loggedStore from './loggedStore'


export default new Vuex.Store({
    modules: {
        userStore: userStore,
        tradeStore: tradeStore,
        loggedStore: loggedStore
    },
    actions: {
        buyStock(context, payload) {
            //getUser and getEnterprise
            const user = context.state.userStore.users.find(user => user.cpf === payload.user.cpf);
            const enterprise = context.state.tradeStore.enterprises.find(enterprise => enterprise.id === payload.enterprise.id);

            if (user.amountValue < payload.quantity * enterprise.value) {
                alert("Saldo insuficiente");
                return;
            }

            if (enterprise.quantity < payload.quantity) {
                alert("Quantidade de ações insuficiente");
                return;
            }

            //update user

            user.amountValue -= payload.quantity * enterprise.value;

            const index = user.investEnterprises.findIndex(item => item.idEnterprise === enterprise.id);

            if (index !== -1) {
                user.investEnterprises[index].countActions = parseInt(user.investEnterprises[index].countActions) + parseInt(payload.quantity);
            } else {
                user.investEnterprises.push({
                    idEnterprise: enterprise.id,
                    countActions: payload.quantity,
                });
            }

            context.commit('UPDATE_USER', user, { root: true });

            //update enterprise
            enterprise.quantity -= payload.quantity;

            context.commit('UPDATE_ENTERPRISE', enterprise, { root: true });

        },
        sellStock(context, payload) {
            //getUser and getEnterprise
            const user = context.state.userStore.users.find(user => user.cpf === payload.user.cpf);
            const enterprise = context.state.tradeStore.enterprises.find(enterprise => enterprise.id === payload.enterprise.id);

            const index = user.investEnterprises.findIndex(item => item.idEnterprise === enterprise.id);

            if (index === -1) {
                alert("Usuário não possui ações desta empresa");
                return;
            }

            if (user.investEnterprises[index].countActions < payload.quantity) {
                alert("Está tentando vender ações que não possui");
                return;
            }

            //update user

            user.amountValue += payload.quantity * enterprise.value;
            user.investEnterprises[index].countActions -= payload.quantity;

            if (user.investEnterprises[index].countActions === 0) {
                user.investEnterprises.splice(index, 1);
            }

            context.commit('UPDATE_USER', user, { root: true });

            //update enterprise
            enterprise.quantity = parseInt(enterprise.quantity) + parseInt(payload.quantity);

            context.commit('UPDATE_ENTERPRISE', enterprise, { root: true });
        },
    }
})
