const state = {
    loginKey: localStorage.getItem('loginKey') ? localStorage.getItem('loginKey') : '',
    userNickName: '',

}


const actions = {

}

const getter = {
}

const mutations = {
    setLoginKey(state, msg) {
        state.loginKey = msg;
    },
    setNickName(state, msg) {
        state.userNickName = msg;
    }
}

export default {
    state,
    actions,
    getter,
    mutations
}