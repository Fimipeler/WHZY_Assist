<template>
  <div v-if="show" class="loading-content">
    <div class="loading-animate"></div>
    <div class="loading-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    show: Boolean,
    text: {
      type: String,
      default: "加载中..."
    }
  },
  data() {
    return {
      loading: false
    };
  }
};
</script>

<style lang="less" scoped>
.loading-content {
  width: 100%;
  height: 100%;
  min-width: 2rem;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 300;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.08rem;
  overflow: hidden;

  .loading-animate {
    position: relative;
    transform: translateX(-50%);
    display: inline-block;
    width: 8vw;
    height: 8vw;
    margin-top: 40vh;
    vertical-align: middle;
    animation: cricleLoading 1s linear  infinite;
    background: url('../../../assets/img/loading.png') no-repeat;
    background-size: 100% 100%;
    transform-origin: center;
  }

  .loading-text {
    font-size: 3vh;
    color: #fff;
    margin: 4vh;
  }
}

@keyframes cricleLoading {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
