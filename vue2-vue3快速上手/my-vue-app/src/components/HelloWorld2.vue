<!-- 一般父子组件 -->
<template>
  <div>
    <h1>child</h1>
  </div>
  
</template>
<script setup>

defineExpose({
  childClick//暴露方法
})

function childClick(num) {
    console.log(num)
}
</script> 