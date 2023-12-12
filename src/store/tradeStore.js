// interface enterprises {
//     id: string;
//     name: string;
//     price: number;
//     count: number;
// }

export default {
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
        CREATE_ENTERPRISE(state, enterprise) {
            state.enterprises.push(enterprise);
        },
        DELETE_ENTERPRISE(state, id) {
            state.enterprises.splice(id, 1);
        },
        UPDATE_ENTERPRISE(state, enterprise) {
            const index = state.enterprises.findIndex(item => item.id === enterprise.id);
            state.enterprises[index] = enterprise;
        }
    },
    actions: {
        createEnterprise(context, enterprise) {
            const newStore = {
                id: context.state.enterprises.length + 1,
                name: enterprise.name,
                value: parseInt(enterprise.value),
                quantity: parseInt(enterprise.quantity),
            };

            context.commit('CREATE_ENTERPRISE', newStore);
        },

        deleteEnterprise(context, id) {
            const index = context.state.enterprises.findIndex(enterprise => enterprise.id === id);
            context.commit('DELETE_ENTERPRISE', index);
        }


    },
};