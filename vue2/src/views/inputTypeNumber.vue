<template>
    <div class="input-type-number">
        <h1>值: {{ input }}</h1>
        <span class="input-box"><el-input v-model="input" placeholder="请输入内容" onkeyup="value=value.replace(/[^\d]/g,'')"></el-input></span>
    </div>
</template>
  
<script>
export default {
    name: 'inputTypeNumber',
    data() {
        return {
            input: ''
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.input-box {
    display: inline-block;
    width: 300px;
}
</style>