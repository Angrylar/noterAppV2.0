const state = {
    noteId: sessionStorage.getItem('nid') ? sessionStorage.getItem('nid') : '',
    noteState: sessionStorage.getItem('noteState') ? sessionStorage.getItem('noteState') : '',
}


const actions = {

}

const getter = {
}

const mutations = {
    currentNoteId(state, msg) {
        sessionStorage.setItem('nid', msg);
        state.noteId = msg;
    },
    setNoteState(state, msg) {
        sessionStorage.setItem('noteState', msg);
        state.noteState = msg;
    },
}

export default {
    state,
    actions,
    getter,
    mutations
}