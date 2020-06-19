<template>
  <div id="cailiaoIndex">
    <section>
      <div class="btn one" @click="$router.push('/cailiaoDetail/susong')">
        <span>诉讼服务网</span>
      </div>
      <div class="btn two" @click="$router.push('/cailiaoDetail/gongzonghao')">
        <span>法院公众号</span>
      </div>
      <div
        class="btn thr current"
        @click="$router.push('/cailiaoDetail/cailiao')"
      >
        <span>材料收转</span>
      </div>
      <div class="btn four">
        <span>调解平台</span>
      </div>
      <div class="btn five" @click="$router.push('/cailiaoDetail/weifayuan')">
        <span>微法院</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
#cailiaoIndex {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  section {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../assets/img/02设备指示页-折线.png") no-repeat center
      center;
    .btn {
      position: absolute;
      text-align: center;
      background: url("../assets/img/D.gif") no-repeat center center;
      background-size: 100% 100%;
      span {
        font-family: SourceHanSansCN-Regular;
        font-size: 3vh;
        color: rgba(255, 255, 255, 1);
      }
    }
    .one {
      width: 25vh;
      height: 25vh;
      top: 33vh;
      left: 6vh;
      opacity: 0.6;
      span {
        line-height: 25vh;
      }
    }
    .two {
      width: 29vh;
      height: 29vh;
      top: 57vh;
      left: 31vh;
      opacity: 0.9;
      span {
        line-height: 29vh;
      }
    }
    .thr {
      width: 33vh;
      height: 33vh;
      top: 32vh;
      left: 70vh;

      span {
        line-height: 33vh;
      }
    }
    .four {
      width: 29vh;
      height: 29vh;
      top: 16vh;
      right: 32vh;
      opacity: 0.9;
      span {
        line-height: 29vh;
      }
    }
    .five {
      width: 25vh;
      height: 25vh;
      right: 5vh;
      top: 32vh;
      opacity: 0.6;
      span {
        line-height: 25vh;
      }
    }
    .current {
      transform: scale(1.3);
      span {
        font-size: 4.5vh;
      }
    }
  }
}
</style>
