<template>
  <div class="container">
    <div id="map-container" ref="mapContainer"></div>
  </div>
</template>

<script>
export default {
  name: "AmapCDNDemo",
  data() {
    return {
      map: null,
      AMap: null, // 保存 AMap 对象
    };
  },
  mounted() {
    if (window.AMap) {
      this.AMap = window.AMap;
      this.initMap();
    } else {
      console.error("高德地图 JSAPI 未正确加载");
    }
  },
  methods: {
    initMap() {
      // 初始化地图
      this.map = new this.AMap.Map(this.$refs.mapContainer, {
        center: [120.19660949707033, 30.234747338474293],
      });
      const map = this.map;
      let loca = new Loca.Container({
        map,
      });
      var geo = new Loca.GeoJSONSource({
        url: "https://a.amap.com/Loca/static/loca-v2/demos/mock_data/hz_house_order.json",
      });
      var heatmap = new Loca.HeatMapLayer({
        zIndex: 10,
        opacity: 1,
        visible: true,
        zooms: [2, 22], // 显示级别范围
      });
      heatmap.setSource(geo, {
        radius: 20, // 热力点半径
        unit: "px", // 半径单位
        height: 90, // 热力点高度
        gradient: {
          // 颜色渐变
          0.1: "rgba(50,48,118,1)",
          0.2: "rgba(127,60,255,1)",
          // ...更多颜色
        },
        value: function (index, feature) {
          return feature.properties.count; // 使用count属性作为热力值
        },
        min: 0, // 最小值
        max: 10, // 最大值
        heightBezier: [0, 0.53, 0.37, 0.98], // 高度贝塞尔曲线
      });
      loca.add(heatmap);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
#map-container {
  width: 100%;
  height: 100%;
}
</style>
