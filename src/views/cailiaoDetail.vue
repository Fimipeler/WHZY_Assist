<template>
  <div id="cailiaoDetail">
    <section>
      <transition-group name="list">
        <!-- 材料收转 -->
        <div class="son cailiao" :key="1" v-show="routeName === 'cailiao'">
          <div
            class="round one"
            @click="$router.push('/cailiaoPhotoSlide/0-0')"
          >
            <span>身份鉴权</span>
          </div>
          <div class="round two" @click="$router.push('/cailiaoPhotoSlide/1')">
            <span>选择案件</span>
          </div>
          <div class="round thr" @click="$router.push('/cailiaoPhotoSlide/2')">
            <span>上传材料</span>
          </div>
          <div class="round four" @click="$router.push('/cailiaoPhotoSlide/3')">
            <span>上传记录</span>
          </div>
          <div class="round five" @click="$router.push('/cailiaoPhotoSlide/4')">
            <span>其他页面</span>
          </div>
        </div>
        <!-- 公众号 -->
        <div
          class="son gongzonghao sanqiu"
          :key="2"
          v-show="routeName === 'gongzonghao'"
        >
          <div class="round one" @click="$router.push('/bianPhotoSlide/1')">
            <span>便民服务</span>
          </div>
          <div class="round two">
            <span>排队叫号</span>
          </div>
          <div class="round thr" @click="$router.push('/sifaPhotoSlide/1')">
            <span>司法公开</span>
          </div>
        </div>
        <!-- 诉讼服务网 -->
        <div class="son susong sanqiu" :key="3" v-show="routeName === 'susong'">
          <div
            class="round one"
            @click="$router.push('/dangshirenPhotoSlide/0')"
          >
            <span>当事人</span>
          </div>
          <div class="round two" @click="$router.push('/shehuiPhotoSlide/6')">
            <span>社会公众</span>
          </div>
          <div class="round thr" @click="$router.push('/lvshiPhotoSlide/0')">
            <span>律师</span>
          </div>
        </div>
        <!-- 微法院 -->
        <div
          class="son weifayuan sanqiu"
          :key="4"
          v-show="routeName === 'weifayuan'"
        >
          <div class="round one">
            <span>首页</span>
          </div>
          <div class="round two">
            <span>消息</span>
          </div>
          <div class="round thr">
            <span>我的</span>
          </div>
        </div>
        <!-- 调解平台 -->
        <div class="son tiaojie" :key="5" v-show="routeName === 'tiaojie'">
          <!-- <div class="round one" @click="$router.push('/bianPhotoSlide/1')">
            <span>首页</span>
          </div>
          <div class="round two">
            <span>消息</span>
          </div>
          <div class="round thr" @click="$router.push('/sifaPhotoSlide/1')">
            <span>我的</span>
          </div> -->
        </div>
      </transition-group>
    </section>
    <footer>
      <div :class="routeName === 'susong' ? 'menus Mon current' : 'menus Mon'">
        <qiuqiu></qiuqiu>
        <span>诉讼</span>
        <span>服务网</span>
      </div>
      <div
        :class="routeName === 'cailiao' ? 'menus Tues current' : 'menus Tues'"
      >
        <qiuqiu></qiuqiu>
        <span>材料收转</span>
      </div>
      <div
        :class="routeName === 'gongzonghao' ? 'menus Wed current' : 'menus Wed'"
      >
        <qiuqiu></qiuqiu>
        <span>法院</span>
        <span>公众号</span>
      </div>
      <div
        :class="routeName === 'tiaojie' ? 'menus Thur current' : 'menus Thur'"
      >
        <qiuqiu></qiuqiu>
        <span>调解平台</span>
      </div>
      <div
        :class="routeName === 'weifayuan' ? 'menus Fri current' : 'menus Fri'"
      >
        <qiuqiu></qiuqiu>
        <span>微法院</span>
      </div>
    </footer>
  </div>
</template>

<script>
import qiuqiu from "./test.vue";
export default {
  components: { qiuqiu },
  data() {
    return {
      routeName: "",
      current: ""
    };
  },
  created() {
    this.routeName = this.$route.params.name;
    console.log(this.$route.params.name);
  }
};
</script>

<style lang="less" scoped>
#cailiaoDetail {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  section {
    position: relative;
    height: 66vh;
    .son {
      position: absolute;
      height: 66vh;
      width: 100vw;
      top: 0;
      left: 0;
      .round {
        position: absolute;
        width: 25vh;
        height: 25vh;
        background: url("../assets/img/按钮1.gif") no-repeat center center;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        span {
          width: 12vh;
          font-family: SourceHanSansCN-Regular;
          font-size: 4.5vh;
          font-weight: normal;
          font-stretch: normal;
          line-height: 7vh;
          letter-spacing: 1vh;
          background: linear-gradient(
            to top,
            rgb(240, 251, 255),
            rgb(79, 224, 240)
          );
          background-clip: text;
          color: transparent;
        }
      }
    }
    .sanqiu {
      background: url("../assets/img/07模块指示页-线.png") no-repeat center
        center;
      background-position-y: 30vh;

      .one {
        top: 20vh;
        left: 32vh;
      }
      .two {
        top: 20vh;
        left: 77vh;
      }
      .thr {
        top: 20vh;
        right: 32vh;
      }
    }
    .cailiao {
      background: url("../assets/img/03模块指示页折线.png") no-repeat center
        center;
      background-position-y: 30vh;
      .one {
        top: 32vh;
        left: 15vh;
      }
      .two {
        top: 14vh;
        left: 47vh;
      }
      .thr {
        top: 39vh;
        left: 77vh;
      }
      .four {
        top: 14vh;
        right: 47vh;
      }
      .five {
        top: 32vh;
        right: 16vh;
      }
    }
  }
  footer {
    display: flex;
    height: 34vh;
    padding: 0px 12vh;
    background: url("../assets/img/分割线.png") no-repeat center center;
    background-position-x: 35vh;
    .menus {
      flex: 25%;
      display: flex;
      background-size: 35vh 35vh;
      justify-content: center;
      align-items: center;
      text-align: center;
      span {
        width: 100%;
        font-family: "SourceHanSansCN-Regular";
        font-size: 2.5vh;
        font-weight: normal;
        font-stretch: normal;
        line-height: 5vh;
        letter-spacing: 0vh;
        background: linear-gradient(
          to top,
          rgb(240, 251, 255),
          rgb(79, 224, 240)
        );
        background-clip: text;
        color: transparent;
      }
    }
    .Mon,
    .Wed {
      padding: 12vh 0;
      flex-wrap: wrap;
    }
  }
  .current {
    .qiuqiu {
      width: 30vh;
      height: 30vh;
    }
    span {
      font-size: 3vh !important;
    }
  }
}
.list-enter-active,
.list-leave-active {
  animation: photoIn 1s;
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  // transform: translateX(50px);
}
</style>
