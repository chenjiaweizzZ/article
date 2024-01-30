<template>
    <div class="about">
        <h1>index</h1>
        <div>
            <el-button @click="skip('print')">print案例</el-button>
            <el-button @click="skip('dateDemo')">deteDemo</el-button>
            <el-button @click="skip('vuexDemo')">vuexDemo</el-button>
            <el-button @click="skip('dialogDemo')">el-dialog封装</el-button>
            <el-button @click="skip('inputTypeNumber')">input输入数字</el-button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'index',
    methods: {
        skip(name,query= {}) {
            this.$router.push({
                name,
                query
            })
        }
    }
}
</script>