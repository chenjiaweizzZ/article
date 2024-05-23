<template>
  <div>
    <!-- directive -->
    <div class="images" v-viewer>
      <img v-for="src in images" :key="src" :src="src">
    </div>
    <!-- component -->
    <viewer :images="images">
      <img v-for="src in images" :key="src" :src="src">
    </viewer>
    <!-- api -->
    <button type="button" @click="show">Click to show</button>
  </div>
</template>
<script>
  import 'viewerjs/dist/viewer.css'
  import VueViewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(VueViewer)
  export default {
    data() {
      return {
        images: [
          {
            title: 'Fruits',
            type: 'video/mp4',
            href: 'https://file.kkview.cn/demo/WeChat_20240523215907.mp4',
            poster: 'https://img01.yzcdn.cn/vant/apple-1.jpg'
          },
          {
            title: 'Banana',
            type: 'video/mp4',
            href: 'https://premisd.zwjk.com/flup/api/file/video/25d825fa4b4d4ab5831c6b1fa0df921d',
            poster: 'https://img01.yzcdn.cn/vant/apple-1.jpg'
          },
          {
            title: 'Banana',
	        type: 'image/jpeg',
	        href: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
	        thumbnail: 'https://img01.yzcdn.cn/vant/apple-1.jpg'
          },
        ]
      };
    },
    methods: {
      show() {
        this.$viewerApi({
          images: this.images,
        })
      },
    },
  }
</script>