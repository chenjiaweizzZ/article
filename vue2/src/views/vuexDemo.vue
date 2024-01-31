<template>
    <div>
        <h1>vueX_demo</h1>
        <h1>当前计数 {{ this.$store.state.counter }}</h1>
        <div>
            <el-button @click="counterAdd()">counterAdd+1</el-button>
            <el-button @click="counterMin()">counterMin-1</el-button>
            <el-button @click="counterMinMore(5)">counterMin++</el-button>
            <el-button @click="counterAddDelay()">counterAddDelay++</el-button>
            <el-button @click="counterAddDelay2()">counterAddDelayDispatch</el-button>
            <el-button @click="counterUpdateDelay(99)">counterUpdateDelay</el-button>
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
        <h1>moduleA</h1>
        <h3>moduleA_name : {{ this.$store.state.a.name }}</h3>
        <h3>getterSex: {{ this.$store.getters.getSex }}   getterSex2:{{ this.$store.getters.getSex2 }}  getterSex3:{{ this.$store.getters.getSex3 }}</h3>
        <div>
            <el-button @click="changeMyName">changeMyName</el-button>
            <el-button @click="updateMyName('cjw12138')">updateMyName</el-button>
            <el-button @click="asyncChangeMyName()">async</el-button>
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
        },
        counterMinMore(counter) {
            // this.$store.commit('incrementMore',count)
            this.$store.commit({
                type: 'incrementMore',
                counter
            })
        },
        counterAddDelay() {
            this.$store.commit('delayIncrement')
        },
        counterAddDelay2() {
            this.$store.dispatch('adelayIncrement', () => {
                console.log('finished!!!')
            })
        },
        counterUpdateDelay(num) {
            this.$store.dispatch('adelayUpdate', {
                num,
                success: () => {
                    console.log('finished')
                }
            })
        },
        //``````````````````````````````````````````````````````````````````````````````
        changeMyName() {
            this.$store.commit('changeMyName')
        },
        updateMyName(name) {
            this.$store.commit('updateMyName',name)
        },
        asyncChangeMyName() {
            this.$store.dispatch('asyncChangeMyName')
        }
    }
}
</script>