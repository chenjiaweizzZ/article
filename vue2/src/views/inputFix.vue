<template>
  <div class="inputFix">
    <div class="box">
      <el-input-number
        v-model="number"
        :controls="false"
        class="custom-input-number"
        :precision="2"
      ></el-input-number>
    </div>
    <div>{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "inputFix",
  data() {
    return {
      number: 100,
    };
  },
};
</script>

<style scoped>
.box {
  width: 200px; /* 调整宽度以适应内容 */
}

/* 自定义 el-input-number 样式 */
.custom-input-number {
  width: 100%;
}

/* 隐藏默认的增减按钮 */
.custom-input-number :deep(.el-input-number__decrease),
.custom-input-number :deep(.el-input-number__increase) {
  display: none;
}

/* 鼠标悬停时显示增减按钮 */
.custom-input-number:hover :deep(.el-input-number__decrease),
.custom-input-number:hover :deep(.el-input-number__increase) {
  display: inline-flex;
}

/* 调整增减按钮的样式，使其更像 el-input */
.custom-input-number :deep(.el-input-number__decrease),
.custom-input-number :deep(.el-input-number__increase) {
  background-color: #f5f7fa;
  border: 1px solid #dcdfe6;
  color: #606266;
  width: 30px;
  height: auto;
  line-height: 1;
  border-radius: 4px;
  cursor: pointer;
}

.custom-input-number :deep(.el-input-number__decrease) {
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.custom-input-number :deep(.el-input-number__increase) {
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* 调整输入框的样式 */
.custom-input-number :deep(.el-input__inner) {
  border-radius: 4px;
  padding-right: 30px; /* 为按钮留出空间 */
}
</style>