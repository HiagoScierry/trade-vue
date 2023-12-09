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
            },
            {
                name:"Maria",
                cpf: "987.654.321-00",
                amountValue: 2000,
            }
        ],
    },
    mutations: {
    },
    actions: {
    },
}