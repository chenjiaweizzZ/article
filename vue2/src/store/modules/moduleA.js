export const moduleA = {
    state: {
        name: 'chenjiawei_moduleA',
    },
    mutations: {
        changeMyName(state) {
            state.name = "chenjiawei_moduleAAAAAAAAAAAAAAAAAA"
        },
        updateMyName(state, payload) {
            state.name = payload
        }
    },
    getters: {
        getSex(state) {
            return state.name + 'man'
        },
        getSex2(state,getters) {
            return getters.getSex + 'woman'
        },
        getSex3(state,getters,rootState) {
            return getters.getSex + rootState.counter
        }
    },
    actions: {
        asyncChangeMyName(context) {
            setTimeout(() => {
                context.commit('updateMyName','asyncChangeMyName')
            }, 1000);
        }
    }
}