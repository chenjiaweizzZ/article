<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld  msg="Welcome to Your Vue.js App"></HelloWorld>
    <button @click="print">打印</button>
    <child id="print" ref="contentToPrint"></child>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import child from "@/components/child.vue"

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    child
  },
  methods: {
    print() {
            // let print = this.$refs.contentToPrint.$el
            // console.log(print)
            // var newContent = print.innerHTML;
            // var oldContent = document.body.innerHTML;
            // document.body.innerHTML = newContent;
            // document.getElementsByTagName('body')[0].style.zoom = 0.92;
            // window.print();
            // window.location.reload();
            // document.body.innerHTML = oldContent;
            // return false;
            // this.$print(this.$refs['contentToPrint'].$el);
            window.print()
        }
  }
}
</script>
