import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            activeUser: null,
            resultUserList: []
        }
    },
    getters: {
        activeUser (state) {
            return state.activeUser;
        }
    },
    mutations: {
        setUser (state, user) {
            state.activeUser = user
        },
        setResultUserList (state, userList) {
            state.resultUserList = userList
        },
    },
    actions: {
        setUser ({ commit }, data) {
            commit('setUser', data)
        },
        setResultUserList ({ commit }, data) {
            commit('resultUserList', data)
        },
    }
})

export default store;
