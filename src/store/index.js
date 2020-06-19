import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /* 后端获取当前设备显示首页 */
    homePage: "/index",
    // 功能菜单名称列表
    menusNameList: {
      cailiao: ["身份鉴权", "选择案件", "上传材料", "上传记录", "其他页面"],
      bian: [
        "微信缴费",
        "微信矩阵",
        "律师调解",
        "公告办理",
        "找法问案",
        "司法拍卖",
        "新浪微博",
        "法院全景",
        "12368热线",
        "法院导航",
        "诉费计算"
      ],
      sifa: [
        "裁判文书查询",
        "投诉举报建议",
        "最高院诉讼服务网",
        "庭审直播公开",
        "减刑假释公示",
        "失信名单",
        "执行信息公开",
        "扫黑除恶",
        "营商环境"
      ],
      shehui: [
        "诉讼服务区",
        "网上缴费",
        "案件查询",
        "电子送达",
        "递交材料",
        "证据交换",
        "风险评估",
        "网上立案",
        "网上阅卷",
        "案例检索",
        "智能问答",
        "诉服指南区",
        "庭审直播区",
        "四大公开平台",
        "审判指南区",
        "执行指南区",
        "诉讼工具区"
      ],
      shouye: [
        "我要立案",
        "我的案件",
        "诉前调解",
        "手机阅卷",
        "计算工具",
        "智能问答",
        "法规查询",
        "法院导航",
        "跨域立案",
        "地方特色"
      ],
      dangshiren: ["当事人通道"],
      lvshi: ["律师通道"]
    }
  },
  mutations: {
    getData(state, res) {
      // 类型=1的时候 跳转文本新闻
      // if (res.data.news.type === 1) {
      //   state.news.title = res.data.newsDetail.title;
      //   state.news.content = res.data.newsDetail.text;
      //   state.homePage = "courtIntrodaction";
      //   router.push(state.homePage);
      // }
      // // 类型=2的时候 跳转视频新闻
      // else if (res.data.news.type === 2) {
      //   if (res.data.newsDetail.url) {
      //     state.video = res.data.newsDetail.url;
      //   } else {
      //     // 如果视频路径为空则赋值为默认路径
      //     state.video = globalConfig.video;
      //   }
      //   state.homePage = "media";
      //   router.push(state.homePage);
      // }
      // // 类型=3的时候 跳转图片新闻
      // else if (res.data.news.type === 3) {
      //   if (res.data.newsDetail.urlList.length !== 0) {
      //     state.tops = [];
      //     res.data.newsDetail.urlList.forEach((item, index) => {
      //       state.tops.push({
      //         image: item,
      //         id: index
      //       });
      //     });
      //   } else {
      //     // 如果图片路径为空 则赋值默认路径
      //     state.tops = globalConfig.tops;
      //   }
      //   console.log(state.tops, 111);
      //   state.homePage = "photoSlide";
      //   router.push(state.homePage);
      // }
      // // 新闻类型=5的时候 跳转3D导航
      // else if (res.data.news.type === 5) {
      //   // state.homePage = 'index';
      //   // router.push(state.homePage);
      //   router.push("InSessionScheduling");
      // }
      // // 其他类型的时候 跳转开庭排期
      // else {
      //   router.push("InSessionScheduling");
      // }
    }
    // getTackByType(state, res) {
    //   state.tackListByType = res.data.data;
    //   console.log(res.data);
    //   res.data.tackResponseDtoList.forEach((item, index) => {
    //     if (index < 8) {
    //       state.tackListInner.push(item);
    //     } else {
    //       state.tackListOuter.push(item);
    //     }
    //   });
    // }
  },
  actions: {
    getData(context) {
      // 配置修改请求num号
      Axios.get(`/equip?num=${globalConfig.num}`)
        .then(res => {
          if (res.status === 200) {
            context.commit("getData", res.data);
            console.log(res.data);
          } else {
            console.log("请求状态失败");
          }
        })
        .catch(err => {
          // 请求不成功则进入catch
          router.push("photoSlide");
          console.log(err);
        });
      // console.log(data, 111)
    }
    // getTackByType(context) {
    //   Axios.post("http://39.96.53.79:9999/client/queryListTackType")
    //     .then(res => {
    //       if (res.data.code === 200) {
    //         context.commit("getTackByType", res.data);
    //         // console.log(res.data);
    //       } else {
    //         console.log("请求状态失败");
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       return false;
    //     });
    // }
  },
  modules: {}
});
