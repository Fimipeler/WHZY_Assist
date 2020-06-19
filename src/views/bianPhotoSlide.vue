<template>
  <div id="bianmin">
    <div class="rebackIndex" @click="$router.push('/index')"></div>
    <div class="slideWarp">
      <div :class="warpConfig ? 'warpConfig' : ''">
        <transition-group
          name="fade"
          tag="ul"
          mode="out-in"
          v-swipedown="e => vueTouch('下滑', e)"
          v-swipeup="e => vueTouch('上滑', e)"
        >
          <div
            class="menuName"
            v-show="true"
            v-for="(item, index) in menusNameList"
            :key="index"
            :style="
              warpConfig
                ? roundConfig
                  ? ''
                  : ' transform: rotate(0deg) translate(540px);width:10vh;height:10vh'
                : config[index]
            "
          >
            <span>{{ item }}</span>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="photoWarp">
      <transition-group name="list" mode="out-in">
        <template v-for="(item, index) in photoList">
          <img
            :src="photoList[centerDot]"
            alt=""
            :key="index"
            :class="warpConfig ? 'photoConfig' : ''"
            v-if="centerDot === index"
          />
        </template>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { debounce } from "../util/util";
export default {
  components: {
    // Head,
    Swiper,
    SwiperSlide
  },
  directives: {
    Swiper: directive
  },
  data() {
    return {
      // tops: this.$store.tops,
      menuName: "bian",
      // 轮播配置
      swiperOptions: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        autoplay: {
          // 轮播时间
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 滑动速度
        speed: 800,
        // 滑动方向
        direction: "horizontal",
        on: {
          slideChangeTransitionStart: function() {
            this.imgIndex = this.realIndex + 1;
          }
        }
      },
      menusNameList: [],
      photoList: [
        require("../assets/img/bian/1.gif"),
        require("../assets/img/bian/2.gif"),
        require("../assets/img/bian/3.gif"),
        require("../assets/img/bian/4.gif"),
        require("../assets/img/bian/5.gif"),
        require("../assets/img/bian/6.gif"),
        require("../assets/img/bian/7.gif"),
        require("../assets/img/bian/8.gif"),
        require("../assets/img/bian/9.gif"),
        [
          require("../assets/img/bian/12-1.gif"),
          require("../assets/img/bian/12-2.gif"),
          require("../assets/img/bian/12-3.gif")
        ],
        [
          require("../assets/img/bian/17-1.gif"),
          require("../assets/img/bian/17-2.gif"),
          require("../assets/img/bian/17-3.gif"),
          require("../assets/img/bian/17-4.gif")
        ]
      ],
      config: [
        {
          width: "8vh",
          height: "8vh",
          fontSize: "1.5vh",
          lineHeight: "2.4vh",
          transform: "rotate(-81deg) translate(590px,-50%)"
        },
        {
          width: "10vh",
          height: "10vh",
          fontSize: "1.5vh",
          lineHeight: "3vh",
          transform: "rotate(-70deg) translate(590px,-50%)"
        },
        {
          width: "10vh",
          height: "10vh",
          fontSize: "1.5vh",
          lineHeight: "3vh",
          transform: "rotate(-58deg) translate(586px,-50%)"
        },
        {
          width: "13vh",
          height: "13vh",
          fontSize: "2.3vh",
          lineHeight: "3.8vh",
          transform: "rotate(-45deg) translate(580px,-50%)"
        },
        {
          width: "18vh",
          height: "18vh",
          fontSize: "3vh",
          lineHeight: "5.2vh",
          transform: "rotate(-27deg) translate(550px,-50%)"
        },
        {
          width: "24vh",
          height: "24vh",
          fontSize: "4vh",
          lineHeight: "6.3vh",
          background: `url(${require("../assets/img/选中按钮.gif")}) center center`,
          backgroundSize: `32vh 32vh !important`,
          transform: "rotate(0deg) translate(470px,-50%)"
        },
        {
          width: "18vh",
          height: "18vh",
          fontSize: "3vh",
          lineHeight: "5.2vh",
          transform: "rotate(30deg) translate(450px,-50%)"
        },
        {
          width: "13vh",
          height: "13vh",
          fontSize: "2.3vh",
          lineHeight: "3.8vh",
          transform: "rotate(50deg) translate(470px, -50%)"
        },
        {
          width: "10vh",
          height: "10vh",
          fontSize: "1.5vh",
          lineHeight: "3vh",
          transform: "rotate(65deg) translate(490px,-50%)"
        },
        {
          width: "10vh",
          height: "10vh",
          fontSize: "1.5vh",
          lineHeight: "3vh",
          transform: "rotate(79deg) translate(482px,-50%)"
        },
        {
          width: "8vh",
          height: "8vh",
          fontSize: "1.5vh",
          lineHeight: "2.4vh",
          transform: "rotate(90deg) translate(495px, -50%)"
        }
      ],
      warpConfig: false,
      roundConfig: false,
      previous: 0,
      now: Date.now(),
      centerDot: 0
    };
  },
  watch: {
    "$store.state.tops": function() {
      this.tops = this.$store.state.tops;
    }
  },
  created() {
    // 获取轮播数据
    this.menusNameList = this.$store.state.menusNameList[`${this.menuName}`];
  },
  mounted() {
    // 轮播
    // this.photoBanner();

    // 取中间数
    this.centerDot = Math.floor(this.menusNameList.length / 2);
    if (this.$route.params.num.length >= 4) {
      this.photoList[9] = this.photoList[9][this.$route.params.num.slice(3, 4)];
      this.photoList[10] = this.photoList[10][
        this.$route.params.num.slice(3, 4)
      ];
      // 上级路由选择下标
      this.$nextTick(() => {
        this.changeItem(this.$route.params.num.slice(0, 1));
      });
    } else {
      this.photoList[9] = this.photoList[9][0];
      this.photoList[10] = this.photoList[10][0];
      // 上级路由选择下标
      this.$nextTick(() => {
        this.changeItem(this.$route.params.num);
      });
    }
  },
  methods: {
    // 防抖函数
    refreshTime: debounce(
      vm => {
        vm.photoBanner();
      },
      10000,
      false
    ),
    vueTouch: function(txt, e) {
      console.log("touch");
      let _this = this;
      // this.round();
      if (txt === "上滑") {
        this.turnTop();
      } else if (txt === "下滑") {
        this.turnDown();
      } // 进行了上划或下滑操作时，让楼层轮播停止，并且如果用户一直未点击20S后继续开始轮播
      if (this.photoBannerInterval) {
        clearInterval(this.photoBannerInterval);
        this.refreshTime(_this);
      }
      console.log(this.menusNameList, this.centerDot);
    },
    // 下滑
    turnDown: function() {
      this.centerDot -= 1;
      if (this.centerDot < 0) {
        this.centerDot = this.menusNameList.length - 1;
      }
      this.now = Date.now();
      if (this.now - this.previous > 500) {
        // this.bottomFloor = this.menusNameList[this.menusNameList.length - 1];
        // this.menusNameList.splice(this.menusNameList.length - 1, 1);
        // this.menusNameList.unshift(this.bottomFloor);
        this.config.push(this.config.shift());
        this.previous = this.now;
      }
    },
    // 上滑
    turnTop: function() {
      this.centerDot += 1;
      if (this.centerDot > this.menusNameList.length - 1) {
        this.centerDot = 0;
      }
      this.now = Date.now();
      if (this.now - this.previous > 500) {
        // this.topFloor = this.menusNameList[0];
        // this.menusNameList.splice(0, 1);
        // this.menusNameList.push(this.topFloor);
        this.config.unshift(this.config.pop());
        this.previous = this.now;
      }
    },
    changeItem(index) {
      // @click="changeItem(index)"
      console.log("click");
      let _this = this;
      let temp = "";
      let tempPhoto = "";
      temp = _this.menusNameList[index];
      _this.menusNameList[index] = _this.menusNameList[_this.centerDot];
      _this.menusNameList[_this.centerDot] = temp;

      tempPhoto = _this.photoList[index];
      _this.photoList[index] = _this.photoList[_this.centerDot];
      _this.photoList[_this.centerDot] = tempPhoto;
      _this.round();
      if (_this.photoBannerInterval) {
        clearInterval(_this.photoBannerInterval);
        _this.refreshTime(_this);
      }
    },
    // 转圈
    round() {
      this.warpConfig = !this.warpConfig;
      this.roundConfig = !this.roundConfig;
      this.roundConfig = !this.roundConfig;
      setTimeout(() => {
        this.warpConfig = false;
      }, 1000);
    },
    // 楼层轮播
    photoBanner() {
      this.photoBannerInterval = setInterval(() => {
        this.turnTop();
      }, 5000);
    }
  },
  destroyed() {
    this.$loading.hide();
  }
};
</script>

<style lang="less" scoped>
#bianmin {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("../assets/img/04功能说明页-线.png") no-repeat center center;
  background-size: 136vh;
  .rebackIndex {
    position: absolute;
    top: 8vh;
    left: 40vh;
    width: 15vh;
    height: 15vh;
    background: url("../assets/img/返回.png") no-repeat center center;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .slideWarp {
    position: relative;
    width: 100vh;
    height: 100vh;
    border-radius: 50%;
    margin: 0 auto;
  }
  .warpConfig {
    width: 100vh;
    height: 100vh;
    animation: identifier 1s linear;
  }
  .photoConfig {
    animation: photoIn 0.8s linear;
  }
  .menuName {
    position: absolute;
    top: 50%;
    left: 486px;
    width: 10vh;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/img/按钮1.gif");
    background-size: 100% 100% !important;
    text-align: center;
    transition: all 0.5s;

    span {
      width: 40%;
      font-family: "SourceHanSansCN-Regular";
      letter-spacing: 0vh;
      font-weight: 600;
      background: linear-gradient(
        to top,
        rgb(240, 251, 255),
        rgb(79, 224, 240)
      );
      background-clip: text;
      color: transparent;
    }
  }
  .photoWarp {
    position: absolute;
    left: 26vh;
    top: 23vh;
    width: 110vh;
    height: 64vh;
    background: url("../assets/img/imgBack.png") no-repeat center center;
    background-size: 100% 100%;
    img {
      position: absolute;
      right: 20vh;
      top: 6.5vh;
      width: 75%;
      height: 66%;
    }
  }
}
@keyframes identifier {
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes photoIn {
  0% {
    // width: 0;
    // height: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    // width: 100%;
    // height: 100%;
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
