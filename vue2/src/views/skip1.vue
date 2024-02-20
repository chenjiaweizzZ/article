<template>
    <div class="skip1">
        <h1>{{ msg }}</h1>
        <el-button @click="skip('chenjiawei')">skip</el-button>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>
  
<script>
import skip from '@/mixins/skip.js'
import deptList from '@/mixins/deptList.js'
export default {
    name: 'skip1',
    mixins: [skip, deptList],
}
</script>