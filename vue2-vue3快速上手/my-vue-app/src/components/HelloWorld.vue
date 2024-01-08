<!-- 一般父子组件 -->
<template>
  <div>
    <h1>hello-world{{ num }}</h1>
  <button @click="click">click</button>
  </div>
  
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue';
const { proxy } = getCurrentInstance()
let props = defineProps({
  num:{
    type: Number,
    required: true,
    default: 0
  }
})
let childNum = 888
function click() {
  proxy.$emit('childCall',childNum)
}
</script> 


