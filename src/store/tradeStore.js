import { createStore } from "vuex";

// interface enterprises {
//     id: string;
//     name: string;
//     price: number;
//     count: number;
// }

export default createStore({
    namespaced: true,
    state: {
        enterprises: [
            {
                id: "1",
                name: "Apple",
                value: 100,
                quantity: 10,
            },
            {
                id: "2",
                name: "Microsoft",
                value: 200,
                quantity: 20,
            },
            {
                id: "3",
                name: "Google",
                value: 300,
                quantity: 30,
            }
        ],
    },
    mutations: {
        ADD_ENTERPRISE(state, enterprise) {
            state.enterprises.push(enterprise);
        },
        REMOVE_ENTERPRISE(state, enterprise) {
            state.enterprises.splice(state.enterprises.indexOf(enterprise), 1);
        },
        EDIT_ENTERPRISE(state, enterprise) {
            state.enterprises.splice(state.enterprises.indexOf(enterprise), 1, enterprise);
        },
    },
    actions: {
        addEnterprise(context, enterprise) {
            context.commit("ADD_ENTERPRISE", enterprise);
        },
        removeEnterprise(context, enterprise) {
            context.commit("REMOVE_ENTERPRISE", enterprise);
        },
        editEnterprise(context, enterprise) {
            context.commit("EDIT_ENTERPRISE", enterprise);
        },
    },
}); 