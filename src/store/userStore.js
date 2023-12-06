import { createStore } from "vuex";

// interface investEnterprises {
//     idEnterprise: number;
//     amountValue: number;
//     countActions: number;
// }

// insterface user {
//     name: string;
//     cpf: string;
//     amountValue: number;
//     investEnterprises: investEnterprises[];
// }

export default createStore({
    state: {
        users: [
            {
                name: "João",
                cpf: "123.456.789-00",
                amountValue: 1000,
            },
            {
                name:"Maria",
                cpf: "987.654.321-00",
                amountValue: 2000,
            }
        ],
    },
    mutations: {
        ADD_USER(state, user) {
            state.users.push(user);
        },
        REMOVE_USER(state, user) {
            state.users.splice(state.users.indexOf(user), 1);
        },
        EDIT_USER(state, user) {
            state.users.splice(state.users.indexOf(user), 1, user);
        },
    },
    actions: {
        addUser(context, user) {
            context.commit("ADD_USER", user);
        },
        removeUser(context, user) {
            context.commit("REMOVE_USER", user);
        },
        editUser(context, user) {
            context.commit("EDIT_USER", user);
        },
    },


});