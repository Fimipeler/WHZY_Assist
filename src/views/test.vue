<template>
  <div class="qiuqiu">
    <div class="one btn"></div>
    <div class="two btn"></div>
    <div class="thr btn"></div>
    <div class="four btn"></div>
  </div>
</template>

<script>
export default {
  name: "qiuqiu"
};
</script>

<style lang="less">
.qiuqiu {
  position: absolute;
  width: 20vh;
  height: 20vh;
  margin: 0 auto;
  .btn {
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .one {
    background: url("../assets/img/地图按钮/里层.png") no-repeat center center;
    background-size: 90% 90%;
    z-index: -10;
    animation: one 5s linear infinite;
  }
  .two {
    background: url("../assets/img/地图按钮/外层.png") no-repeat center center;
    background-size: 90% 90%;
    animation: two 5s linear infinite;
  }
  .thr {
    background: url('../assets/img/地图按钮/diqiu.png') no-repeat center center;
    background-size: 80% 80%;
    z-index: -9;
    opacity: 0.45;
  }
  .four {
    background: url("../assets/img/地图按钮/光.png") no-repeat center center;
    background-size: 100% 100%;
    z-index: -8;
    left: 1vh;
  }
  @keyframes one {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes two {
    0% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
}
</style>
