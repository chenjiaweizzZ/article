<template>
  <div>
    <el-button @click="post">post</el-button>
    <iframe
      src="http://localhost:8080/#/postMessageChild"
      width="300px"
      height="300px"
      id="iframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "postMessageIndex",
  data() {
    return {};
  },
  created() {
    this.listenMessage();
  },
  methods: {
    post() {
      const iFrame = document.getElementById("iframe");
      iFrame.contentWindow.postMessage(
        "父页面发送的消息",
        "http://localhost:8080"
      );
    },
    listenMessage() {
      window.addEventListener(
        "message",
        (e) => {
          console.log("from child", e.data);
        },
        false
      );
    },
  },
};
</script>