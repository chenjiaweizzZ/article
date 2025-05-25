<template>
  <div class="map-container">
    <div id="map-container" ref="mapContainer"></div>
    <div class="controls">
      <button @click="clearMarkers">清除所有标记</button>
      <button @click="addRandomMarker">添加随机标记</button>
      <div>点击地图添加标记</div>
      <div>当前标记数: {{ markers.length }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AmapCDNDemo",
  data() {
    return {
      map: null,
      AMap: null, // 保存 AMap 对象
      markers: [],
    };
  },
  mounted() {
    // 确保 AMap 已加载
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
        zoom: 13,
        enter: [120.19660949707033, 30.234747338474293],
      });

      // 添加默认标记点
      //   this.addMarker([120.215379, 30.207628], "省医保");

      // 点击地图添加标记
      this.map.on("click", (e) => {
        this.addMarker(
          [e.lnglat.lng, e.lnglat.lat],
          `标记点${this.markers.length + 1}`
        );
      });
    },

    addMarker(position, title) {
      const marker = new this.AMap.Marker({
        position: position,
        title: title,
        map: this.map,
      });

      // 点击标记显示信息窗口
      marker.on("click", () => {
        const infoWindow = new this.AMap.InfoWindow({
          content: `<div style="padding: 5px;">${title}<br/>坐标: ${position[0].toFixed(
            6
          )}, ${position[1].toFixed(6)}</div>`,
          offset: new this.AMap.Pixel(0, -30),
        });
        infoWindow.open(this.map, position);
      });

      this.markers.push(marker);
      this.map.setFitView();
    },

    // 添加随机位置标记
    addRandomMarker() {
      const center = this.map.getCenter();
      const lng = center.getLng() + (Math.random() - 0.5) * 0.1;
      const lat = center.getLat() + (Math.random() - 0.5) * 0.1;
      this.addMarker([lng, lat], `随机标记${this.markers.length + 1}`);
    },

    // 清除所有标记
    clearMarkers() {
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });
      this.markers = [];
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
 
