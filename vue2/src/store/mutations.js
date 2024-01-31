export const mutations = {
    increment(state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    incrementMore(state, payload) {
        state.counter += payload?.counter
    },
    setCounter(state, payload) {
        state.counter = payload
    },
    delayIncrement(state) {
        setTimeout(() => {
            state.counter++
        }, 1000);
    }
    // incrementMore(state, counter) {
    //     state.counter += { counter }
    // }
}