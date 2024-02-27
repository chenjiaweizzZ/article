<template>
    <div class="expandA">
        <div class="item color1"></div>
        <div class="item color2"></div>
        <div class="item color3"></div>
        <div class="btn" @click="more">
            <!-- <span class="rotatable" :class="{ 'rotated': isRotated }">123</span> -->
            <i class="el-icon-arrow-down rotatable"  :class="{ 'rotated': expand }"></i>
        </div>
        <transition name="fade">
            <div class="item2" v-show="expand">
                <div class="item color4"></div>
                <div class="item color5"></div>
                <div class="item color6"></div>
            </div>
        </transition>
        <div class="item color7"></div>
    </div>
</template>
  
<script>
export default {
    name: 'expandA',
    data() {
        return {
            expand: false
        }
    },
    methods: {
        more() {
            this.expand = !this.expand
        }
    }
}
</script>

<style scoped>
.expandA {
    width: 100px;
    height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.rotatable {  
  transition: transform 0.3s ease; /* 添加过渡效果，使旋转更平滑 */  
}  
  
.rotated {  
  transform: rotate(180deg); /* 应用旋转 */  
}  

.item {
    height: 40px;
}

.btn {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.color1 {
    background-color: aqua;
}

.color2 {
    background-color: blue;
}

.color3 {
    background-color: burlywood;
}

.color4 {
    background-color: blueviolet;
    height: 120px;
}

.color5 {
    background-color: chartreuse;
}

.color6 {
    background-color: crimson;
}

.color7 {
    background-color: gold;
}</style>

