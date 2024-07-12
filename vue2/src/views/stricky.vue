
<template>
    <div class="box">
      <div class="box-scroll">
        <div v-for="(item, index) in 10" :key="index">{{ index + 1 }}</div>
        <div class="box-scroll-sticky">我要悬浮在40px处</div>
        <div v-for="(item, index) in 100" :key="index">{{ index + 1 }}</div>
      </div>
    </div>
  </template>
  <script>
  export default {};
  </script>
  <style  scoped>
  .box {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-scroll {
      height: 400px;
      width: 400px;
      background: #eee;
      overflow: auto;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .box-scroll div {
        width: 100%;
        height: 40px;
        border-bottom: 2px solid #fff;
    }
    .box-scroll-sticky {
        position: sticky;
        top: 40px;
        background: red;
        color: #fff;
    }
  </style>
