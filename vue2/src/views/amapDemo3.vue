<template>
  <div class="map-container">
    <div id="map-container" ref="mapContainer"></div>
    <div class="controls">
      <div @click="addTest">addTest</div>
    </div>
  </div>
</template>

<script>
import InfoWindow from "@/components/InfoWindow";
import Vue from "vue";
export default {
  name: "AmapCDNDemo",
  components: {
    InfoWindow,
  },
  data() {
    return {
      map: null,
      AMap: null,
      markers: [],
    };
  },
  mounted() {
    if (window.AMap) {
      this.AMap = window.AMap;
      this.initMap();
      console.log(this.AMap);
    } else {
      console.error("高德地图 JSAPI 未正确加载");
    }
  },
  methods: {
    initMap() {
      // 初始化地图
      this.map = new this.AMap.Map(this.$refs.mapContainer, {
        viewMode: "2D",
        zoom: 9,
        enter: [120.19660949707033, 30.234747338474293],
      });
    },
    addTest() {
      this.addMarker([116.41688, 39.858894], `123`);
    },
    addMarker(position, title) {
      const markerContent = `
        <div style="position: relative;">
            <div style="background-color: #3388ff; width: 30px; height: 30px; border-radius: 15px; color: white; text-align: center; line-height: 30px;">1</div>
        </div>
    `;
      const marker = new this.AMap.Marker({
        position: position,
        title: title,
        map: this.map,
        content: markerContent,
      });

      marker.on("click", () => {
        const container = document.createElement("div");

        // 创建Vue组件实例
        const ComponentClass = Vue.extend(InfoWindow);
        const instance = new ComponentClass({
          propsData: {
            title: title,
            position: position,
          },
        });

        // 挂载组件
        instance.$mount(container);
        const infoWindow = new this.AMap.InfoWindow({
          content: container,
          offset: new this.AMap.Pixel(0, -30),
        });
        infoWindow.open(this.map, position);
      });

      this.markers.push(marker);
    },
  },
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

#map-container {
  width: 100%;
  height: 100%;
}

.controls {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  background: white;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.controls button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>