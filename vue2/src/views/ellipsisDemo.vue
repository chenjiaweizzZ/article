<template>
    <div class="ellipsisDemo">
        <div class="container">
            <div class="box1"></div>
            <div class="box2">1111111111111111111111111111111111111111111111111111111111111111111111111</div>
            <div class="box3"></div>
        </div>
        <div class="ess-box">
            <div class="container">
                <div class="box1"></div>
                <div>
                    <div>大满贯</div>
                    <div class="box22">
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    </div>
                </div>
                <div class="box3"></div>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: '',
    methods: {

    }
}
</script>

<style>
.ess-box {
    padding: 20px;
}

.container {
    padding: 20px;
}

.container {
    display: flex;
    justify-content: space-between;
}

.box1 {
    width: 80px;
    min-width: 80px;
    height: 80px;
    background-color: aqua;
}

.box2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.box22 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    line-height: 20px;
    height: 40px;
}

.box3 {
    width: 80px;
    min-width: 80px;
    height: 80px;
    background-color: chartreuse;
}
</style>