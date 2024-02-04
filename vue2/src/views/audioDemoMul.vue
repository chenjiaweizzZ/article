<template>
    <div class="audio-demo">
        <h1>audio-demo</h1>
        <div v-for="item in musicList">
            <audio :src="item.src" controls :ref="item.index" @play="onPlay(item)"></audio>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'index',
    data() {
        return {
            musicList: [
                { index: 'first', src: 'https://lx-sycdn.kuwo.cn/a64c7a7f8f498f825d51cc6ce1196322/65bf8114/resource/n3/91/84/3738766092.mp3' },
                { index: 'second', src: 'https://lx-sycdn.kuwo.cn/a64c7a7f8f498f825d51cc6ce1196322/65bf8114/resource/n3/91/84/3738766092.mp3' },
                { index: 'third', src: 'https://lx-sycdn.kuwo.cn/a64c7a7f8f498f825d51cc6ce1196322/65bf8114/resource/n3/91/84/3738766092.mp3' },
            ] 
        }
    },
    methods: {
        onPlay(item) {
            this.musicList.forEach(i => {
                if(i.index !== item.index) {
                    console.log(i.index)
                    console.log(this.$refs[i.index])
                    this.$refs[i.index][0].pause()
                }
            })
        }
    }
}
</script>