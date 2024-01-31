export const getters = {
    getStudentNameString(state) {
        return state.students.map(i => i.name).join("、")
    },
    getStudentAgeThan20(state) {
        return state.students.filter(i => i.age >= 20)
    },
    getStudentAgeThan(state) {
        return age => {
            return state.students.filter(i => i.age >=age)
        }
    },
    getStudentAgeThan20NameString(state, getters) {
        return getters.getStudentAgeThan20.length
    },
}