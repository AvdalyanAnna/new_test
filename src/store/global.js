export default {
    state: {
       phone:'0437 978 101',
        email:'Info@arsenpaintinggroup.com.au'
    },
    mutations: {},
    actions: {},
    getters: {
        GET_PHONE(state) {
            return state.phone;
        },
        GET_EMAIL(state) {
            return state.email;
        },
    },
};
