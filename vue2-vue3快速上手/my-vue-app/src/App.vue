<!-- 基础,循环 -->
<!-- <template>
  {{ num }}
  <p v-if="num === 1"></p>
  <p v-else-if="num === 2">2</p>
  <p v-else="num === 3">3</p>
  <p v-for="item in 10">{{ item }}</p>
  vue-macros依赖可以去掉.value
</template>
<script setup>
let num = 3
</script> -->

<!-- 响应式 -->
<!-- <template>
  {{ num }}
  {{ student.name }}{{ student.age }}
  <button @click="add">click</button>
</template>
<script setup>
import { reactive, ref } from 'vue';
let num = ref(0)  //ref可以声明任意数据类型
let student = reactive({
  name: "cjw",
  age: 18
})
function add() {
  num.value++
  student.age++
}
</script> -->

<!-- 计算属性 -->
<!-- <template>
  {{ num }}
  {{ str }}
  <button @click="add">update</button>
</template>
<script setup>
import {  ref, computed } from 'vue';
let price = ref(4)
let num = ref(1)
function add() {
  num.value ++ 
}
let str = computed({
  // return num.value * price.value
  set: (val) => {
    return num.value = val
  },
  get: () => {
    return num.value * price.value
  }
})
</script> -->

<!-- 监听 -->
<!-- <template>
  {{ num }}
  <button @click="add">update</button>
</template>
<script setup>
import {  ref, watch } from 'vue';
let price = ref(4)
let num = ref(1)
function add() {
  num.value ++ 
}
watch((num),(newValue, oldValue) => {
  console.log(newValue, oldValue)
},{immediate: true})
//immediate: true初始化
</script> -->

<!-- 一般父子组件 -->
<!-- <template>
  <HelloWorld :num="num" @childCall="childCall"></HelloWorld>
</template>
<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
let num = ref(1)
function childCall(num) {
  console.log(num)
}
</script>  -->

<!-- 父组件调用子组件的方法 -->
<!-- <template>
  <div>
    <HelloWorld2 ref="childRef"></HelloWorld2>
    <button @click="$refs.childRef.childClick(1)">fatClick</button>
    <button @click="handleClick">handleClick</button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import HelloWorld2 from './components/HelloWorld2.vue';
const { proxy } = getCurrentInstance()
function handleClick() {
  proxy.$refs.childRef.childClick(2)
}
</script> -->

<!-- 携带参数 -->
<template>
  <div>
    <HelloWorld2 ref="childRef"></HelloWorld2>
    <button @click="$refs.childRef.childClick(1)">fatClick</button>
    <button @click="handleClick">handleClick</button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
import HelloWorld2 from './components/HelloWorld2.vue';
const { proxy } = getCurrentInstance()
function handleClick() {
  proxy.$refs.childRef.childClick(2)
}
</script>


<!-- 生命周期 -->
<!-- <template>
  <div>
    {{ num }}
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
let num = ref(0)
onMounted(() => {
  init() //初始化请求接口数据
})
function init() {
  console.log(`请求接口拿到数据`)
  num.value = 666
}
</script> -->



