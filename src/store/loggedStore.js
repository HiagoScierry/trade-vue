export default {
    state: {
        adminIsLogged: true,
        userIsLogged: false,
        user: null
    },
    mutations: {
        EXIT_ADMIN(state) {
            state.adminIsLogged = false;
        }

    },
    actions: {
        exitAdmin(context) {
            context.commit('EXIT_ADMIN');
        }
    },



};