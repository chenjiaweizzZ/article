<template>
  <div>
    <div>postMessageChild {{ data }}</div>
    <el-button @click="post">postMessage</el-button>
  </div>
</template>

<script>
export default {
  name: "postMessageChild",
  data() {
    return {
      data: "",
    };
  },
  created() {
    this.listenMessage();
  },
  methods: {
    post() {
      window.parent.postMessage("子页面发送的消息", "http://localhost:8080");
    },
    listenMessage() {
      window.addEventListener(
        "message",
        (e) => {
          console.log("from index", e.data);
        },
        false
      );
    },
  },
};
</script>

