export default {
    state: {
        adminIsLogged: true,
        userIsLogged: false,
        user: null
    },
    mutations: {
        EXIT_ADMIN(state) {
            state.adminIsLogged = false;
        },
        LOGIN_USER(state, user) {
            state.userIsLogged = true;
            state.user = user;
        },
        LOGOUT_USER(state) {
            state.userIsLogged = false;
            state.user = null;
        },


    },
    actions: {
        exitAdmin(context) {
            context.commit('EXIT_ADMIN');
            context.dispatch('saveInLocalStorage');

        },
        loginUser(context, user) {
            context.commit('LOGIN_USER', user);
            context.dispatch('saveInLocalStorage');

        },
        logoutUser(context) {
            context.commit('LOGOUT_USER');
            context.dispatch('saveInLocalStorage');

        },

    },



};