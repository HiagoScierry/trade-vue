

import formatCPF from "../util/formatCPF";

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

export default {
    state: {
        users: [
            {
                name: "João",
                cpf: "123.456.789-00",
                amountValue: 1000,
                investEnterprises: []
            },
            {
                name:"Maria",
                cpf: "987.654.321-00",
                amountValue: 2000,
                investEnterprises: []
            }
        ],
    },
    mutations: {
        CREATE_USER(state, user) {
            state.users.push(user);
        }
    },
    actions: {
        createUser(context, user) {
            const newUser = {
                name: user.name,
                cpf: formatCPF(user.cpf),
                amountValue: parseInt(user.amountValue),
                investEnterprises: []
            }

            context.commit('CREATE_USER', newUser);
        }
    },
}