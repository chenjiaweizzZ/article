<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null" ref="allery"></gallery>
        <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="show(imageIndex)"
        :style="{ backgroundImage: 'url(' + image.poster + ')', width: '300px', height: '200px' }"
        ></div>
        <button @click="show(1)">show</button>
    </div>
</template>
 
<script>
  import VueGallery from 'vue-gallery';
  import 'viewerjs/dist/viewer.css'
  import { component as Viewer } from "v-viewer"
  export default {
    data: function () {
      return {
        arr: [1,2,3,4,5,6,7,8,9],
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
        ],
        index: null
      };
    },

    methods: {
      show(index) {
        console.log(index)
        this.index = index
      }
    },
 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
 
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>