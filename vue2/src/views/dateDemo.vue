<template>
    <div class="about">
        <h1>date</h1>
        <span class="text-box"><el-input type="text" v-model="date"></el-input></span>
        <el-button @click="getThisWeek(date)">getThisWeek</el-button>
        <el-button @click="getLastWeek(date)">getlastWeek</el-button>
        <el-button @click="getThisMonth(date)">getTiisMonth</el-button>
        <el-button @click="getLastMonth(date)">getLastMonth</el-button>
    </div>
</template>

<script>
export default {
    name: 'HdateDemo',
    data() {
        return {
            date: '',
            kkk: '2024-1-25'
        }
    },
    methods: {
        formatDateString(date) {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        getToday() {
            return this.formatDateString(new Date())
        },
        getThisMonday() {
            let currentDate = new Date();
            let dayOfWeek = currentDate.getDay();
            if (dayOfWeek === 0) {
                currentDate.setDate(currentDate.getDate() - 6);
            } else {
                currentDate.setDate(currentDate.getDate() - dayOfWeek + 1);
            }
            return this.formatDateString(currentDate)
        },
        getLastMonday(time) {
            let currentDate = new Date(time);
            let dayOfWeek = currentDate.getDay();
            if (dayOfWeek === 0) {
                currentDate.setDate(currentDate.getDate() - 13);
            } else {
                currentDate.setDate(currentDate.getDate() - dayOfWeek - 6);
            }
            return this.formatDateString(currentDate)
        },
        getThisSunday(time) {
            let currentDate = new Date(time);
            let dayOfWeek = currentDate.getDay();
            if (dayOfWeek === 0) {
                currentDate.setDate(currentDate.getDate() - 7);
            } else {
                currentDate.setDate(currentDate.getDate() - dayOfWeek);
            }
            return this.formatDateString(currentDate)
        },

        getMonthFirstDay(time) {
            let now = new Date(time);

            // 获取当前月份的第一天  
            let firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

            return this.formatDateString(firstDayOfMonth)

        },

        getLastMonthFirstDay(time) {
            let now = new Date(time);
            let firstDayOfMonth;
            if (now.getMonth() == 0) {
                firstDayOfMonth = new Date(now.getFullYear() - 1, 11, 1);
            } else {
                firstDayOfMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            }
            return this.formatDateString(firstDayOfMonth)
        },

        getLastMonthLastDay(time) {
            let now = new Date(time);

            // 获取当前月份的第一天  
            let firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 0);

            return this.formatDateString(firstDayOfMonth)
        },

        getThisWeek() {
            this.$notify({
                title: '本周',
                message: [this.getThisMonday(), this.getToday()]
            });
            console.log([this.getThisMonday(), this.getToday()])
        },

        getLastWeek(time) {
            this.$notify({
                title: '上周',
                message: [this.getLastMonday(time), this.getThisSunday(time)]
            });
            console.log([this.getLastMonday(time), this.getThisSunday(time)])
        },

        getThisMonth(time) {
            this.$notify({
                title: '本月',
                message: [this.getMonthFirstDay(time), this.getToday()]
            });
            console.log([this.getMonthFirstDay(time), this.getToday()])
        },

        getLastMonth(time) {
            this.$notify({
                title: '上月',
                message: [this.getLastMonthFirstDay(time), this.getLastMonthLastDay(time)]
            });
            console.log([this.getLastMonthFirstDay(time), this.getLastMonthLastDay(time)])
        }

    }
}
</script>

<style scoped>
.text-box {
    width: 200px;
    display: inline-block;
    margin-right: 30px;
}
</style>
  