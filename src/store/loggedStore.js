import { createStore } from "vuex";

export default createStore({
    state: {
        adminIsLogged: false,
        userIsLogged: false,
        user: null
    },
    mutations: {
        SET_ADMIN_LOGGED(state, adminIsLogged) {
            state.adminIsLogged = adminIsLogged;
            state.userIsLogged = !adminIsLogged;
            state.user = null;
        },
        SET_USER_LOGGED(state, userIsLogged) {
            state.userIsLogged = userIsLogged;
            state.adminIsLogged = !userIsLogged;
        },
        SET_USER(state, user) {
            state.user = user;
        },
    },
    actions: {
        setAdminLogged(context, adminIsLogged) {
            context.commit("SET_ADMIN_LOGGED", adminIsLogged);
        },
        setUserLogged(context, userIsLogged) {
            context.commit("SET_USER_LOGGED", userIsLogged);
        },
        setUser(context, user) {
            context.commit("SET_USER", user);
        },
    },


    
});