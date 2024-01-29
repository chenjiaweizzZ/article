<template>
    <div class="dialog-demo">
        <dialog-package ref="dialogPackage" :ruleForm="ruleForm"></dialog-package>
        <el-button @click="add">新增</el-button>
        <el-button @click="edit">编辑</el-button>
    </div>
</template>
  
<script>
import dialogPackage from '@/components/dialogPackage.vue';
export default {
    name: 'dialogDemo',
    components: {
        dialogPackage
    },
    data() {
        return {
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        add() {
            this.$refs.dialogPackage.add()
        },
        edit() {
            this.$refs.dialogPackage.edit()
            this.$nextTick(() => {
                this.ruleForm = {
                name: '我是name',
                region: 'shanghai',
                date1: new Date('Tue Jan 09 2024 00:00:00 GMT+0800 (中国标准时间)'),
                date2: new Date('Mon Jan 29 2024 20:43:05 GMT+0800 (中国标准时间)'),
                delivery: true,
                type: ['美食/餐厅线上活动','地推活动'],
                resource: '线下场地免费',
                desc: 'desc'
            }
            })
        }
    }
}
</script>