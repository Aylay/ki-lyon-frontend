import Vue from 'vue'
import { Swiper, Pagination, Navigation, Autoplay, EffectFade } from 'swiper'

const swiper = {
  install(Vue, options) {
    Vue.prototype.$swiper = Swiper;
    Vue.prototype.$swiperModules = {
      Autoplay,
      Pagination,
      EffectFade,
      Navigation
    };
  }
};

Vue.use(swiper);