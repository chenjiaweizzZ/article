<template>
    <div class="async-demo">
        123
    </div>
</template>
  
<script>
export default {
    name: 'async-demo',
    data() {
        return {}
    },
    created() {
        this.getInfo()
    },
    methods: {
        async getInfo() {
            let id = await this.getId()
            console.log(111,id)
            let info = await this.getData(id)
            console.log(222,info)
        },
        getId() {  
            return new Promise((resolve) => { 
                setTimeout(() => {  
                    resolve(12138) 
                }, 5000);  
            });  
        },
        getData(id) {
            return new Promise((resolve) => { 
                setTimeout(() => {  
                    resolve("cjw" + id) 
                }, 5000);  
            });  
        }  
    }
}
</script>