<template>
  <div class="about">
    <h1>index</h1>
    <div class="iindex">
      <el-button @click="skip('print')">print案例</el-button>
      <el-button @click="skip('dateDemo')">deteDemo</el-button>
      <el-button @click="skip('vuexDemo')">vuexDemo</el-button>
      <el-button @click="skip('dialogDemo')">el-dialog封装</el-button>
      <el-button @click="skip('inputTypeNumber')">input输入数字</el-button>
      <el-button @click="skip('mediumDemo')">流媒体案例</el-button>
      <el-button @click="skip('audioDemoMul')">流媒体唯一</el-button>
      <el-button @click="skip('audioDemoGet')">流媒体GET</el-button>
      <el-button @click="skip('audioDemoGet2')">流媒体GET2</el-button>
      <el-button @click="skip('skip1')">mixins-skip1</el-button>
      <el-button @click="skip('expandAmation')">展开动画</el-button>
      <el-button @click="skip('ellipsisDemo')">ellipsisDemo</el-button>
      <el-button @click="skip('asyncDemo')">asyncDemo</el-button>
      <el-button @click="skip('docxView')">docxView</el-button>
      <el-button @click="skip('preview')">preview</el-button>
      <el-button @click="skip('preview2')">preview2</el-button>
      <el-button @click="skip('preview3')">preview3</el-button>
      <el-button @click="skip('stricky')">stricky</el-button>
      <el-button @click="skip('postMessageIndex')">postMessageIndex</el-button>
      <el-button @click="skip('postMessageChild')">postMessageChild</el-button>
      <el-button @click="skip('tableMerge')">tableMerge</el-button>
      <el-button @click="skip('inputFix')">inputFix</el-button>
      <el-button @click="skip('amapDemo')">amapDemo</el-button>
      <el-button @click="skip('amapDemo2')">amapDemo2</el-button>
      <el-button @click="skip('amapDemo3')">amapDemo3</el-button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "index",
  methods: {
    skip(name, query = {}) {
      this.$router.push({
        name,
        query,
      });
    },
  },
};
</script>

<style>
.iindex {
  line-height: 50px;
}
</style>