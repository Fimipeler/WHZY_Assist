<template>
  <div id="app">
    <video
      id="bjVideo"
      src="./assets/img/beijing.mp4"
      muted
      loop
      autoplay
    ></video>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "SourceHanSansSC-Regular", "pingfang SC", "helvetica neue", arial,
    "hiragino sans gb", "microsoft yahei ui", "microsoft yahei", simsun,
    sans-serif;
  width: 100vw;
  height: 100vh;
  // background: url("../src/assets/img/background_img.png");
  // background-size: 100% 100%;
  // cursor: url("./assets/img/cursor.gif");
  #bjVideo {
    position: absolute;
    z-index: -999;
    width: 100%;
    height: 100%;
  }
}
</style>
