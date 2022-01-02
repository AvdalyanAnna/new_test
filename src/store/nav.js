export default {
    state: {
        nav: [
            {
                title: 'home',
                active: true
            },
            {
                title: 'services',
            },
            {
                title: 'projects',
            },
            {
                title: 'about',
            },
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        GET_NAV(state) {
            return state.nav;
        },
    },
};
