<template>
    <div class="audio-demo">
        <h1>audio-demo</h1>
            <audio :src="src" controls ref="music" @play="onPlay()"></audio>
            <el-button @click="btnPlay()">play</el-button>
    </div>
</template>
  
<script>
import axios from 'axios'
export default {
    name: 'index',
    data() {
        return {
            src: ''
        }
    },
    methods: {
        onPlay() {
            this.$refs[music].pause()
        },
        async btnPlay() {
            this.src = await this.getVideoData('https://premisd.zwjk.com/flup/api/file/audio/20240204152043270p0q')
            console.log(this.src)
        },
        getVideoData(val) {
            return new Promise((resolve, reject) => {
                axios({
                    method: 'get',
                    responseType: 'blob',
                    url: val
                }).then((res) => {
                    console.log('res', res)
                    resolve(URL.createObjectURL(res.data))
                })
            })
        },
    }
}
</script>