<template>
    <div>
        <h1>vueX_demo</h1>
        <h1>当前计数 {{ this.$store.state.counter }}</h1>
        <div>
            <el-button @click="counterAdd()">counterAdd</el-button>
            <el-button @click="counterMin()">counterMin</el-button>
        </div>
        <div>
            <h5>getStudentNameString: {{ this.$store.getters.getStudentNameString }}</h5>
        </div>
        <div>
            <span>age >= 20:</span>
            <span v-for="item in this.$store.getters.getStudentAgeThan20" :key="item.index">
                {{ item.name }}
            </span>
        </div>
        <div>
            <span>age >= ?:</span>
            <span v-for="item in this.$store.getters.getStudentAgeThan(55)" :key="item.indez">
                {{ item.name }}
            </span>
        </div>
        <div>
            <h5>getters使用getters: {{ this.$store.getters.getStudentAgeThan20NameString }}</h5>
        </div>
    </div>
</template>
  
<script>
export default {
    name: '',
    data() {
        return {
        }
    },
    methods: {
        counterAdd() {
            console.log("add")
            this.$store.commit('increment')
        },
        counterMin() {
            console.log("min")
            this.$store.commit('decrement')
        }
    }
}
</script>