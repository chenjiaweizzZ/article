<template>
    <div class="audio-demo">
        <h1>audio-demo</h1>
        <div v-for="item in list">
            <audio :src="item.url" controls :ref="item.remarkId"></audio>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
export default {
    name: 'index',
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            this.list = [
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
                { remarkId: 'first' , url: 'https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q' },
            ]
            this.getUrls()
        },
        async getUrls() {
            await this.list.forEach(async i => {
                i.url = await this.getVideoData(i.url)
            })
        },
        getVideoData(val) {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'get',
                    responseType: 'blob',
                    url: val
                }).then((res) => {
                    resolve(URL.createObjectURL(res.data))
                })
            })
        },
    }
}
</script>