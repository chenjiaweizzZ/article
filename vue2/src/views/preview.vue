<template>
  <div>
    <viewer :options="options" :images="images"
            @inited="inited"
            class="viewer" ref="viewer"
    >
      <template #default="scope">
        <!-- <img v-for="src in scope.images" :src="src" :key="src"> -->
        <video v-for="src in scope.images" :src="src" :key="src"></video>
        {{scope.options}}
      </template>
    </viewer>
    <button type="button" @click="show">Show</button>
  </div>
</template>
<script>
  import 'viewerjs/dist/viewer.css'
  import { component as Viewer } from "v-viewer"
  export default {
    components: {
      Viewer
    },
    data() {
      return {
        images: [
          "https://file.kkview.cn/onlinePreview?url=aHR0cHM6Ly9maWxlLmtrdmlldy5jbi9kZW1vL1dlQ2hhdF8yMDI0MDUyMzIxNTkwNy5tcDQ%3D",
          "https://file.kkview.cn/onlinePreview?url=aHR0cHM6Ly9maWxlLmtrdmlldy5jbi9kZW1vL1dlQ2hhdF8yMDI0MDUyMzIxNTkwNy5tcDQ%3D",
          "https://file.kkview.cn/onlinePreview?url=aHR0cHM6Ly9maWxlLmtrdmlldy5jbi9kZW1vL1dlQ2hhdF8yMDI0MDUyMzIxNTkwNy5tcDQ%3D"
        ]
      };
    },
    methods: {
      inited (viewer) {
        this.$viewer = viewer
      },
      show () {
        this.$viewer.show()
      }
    }
  }
</script>