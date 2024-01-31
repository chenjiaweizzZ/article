export const actions = {
    adelayIncrement(context, payload) {
        setTimeout(() => {
            context.commit('increment')
            payload()
        }, 1000);
    },
    adelayUpdate(context, payload) {
        setTimeout(() => {
            console.log(payload)
            context.commit('setCounter',payload.num)
            payload.success()
        },1000)
    }
}