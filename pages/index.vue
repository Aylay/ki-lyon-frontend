<template>
  <div>
    <div class="h-full-header relative flex items-center">
      <div class="absolute h-full w-full z-0">
        <nuxt-img
          src="/img/header-1.jpg"
          alt="Header"
          class="w-full h-full object-cover"
          loading="lazy"
          format="webp"
        />
      </div>
      <div class="flex-1">&nbsp;</div>
      <div class="relative z-10 pl-8 flex-1">
        <h1 class="text-h1 uppercase font-roboto font-black max-w-3xl">
          Faîtes le rêve<br />de vivre d’air et de lumière
        </h1>
        <p class="text-m font-robotoslab mt-8">
          Découvrez des appartements d'exception<br />en plein cœur de la Part-Dieu à Lyon.
        </p>
        <span class="button bg-white">
          Voir le film
        </span>
      </div>
      <div
        class="flex absolute left-1/2 transform -translate-x-1/2 bottom-[7%] z-20 cursor-pointer justify-center items-center gap-4"
        v-scroll-to="'#apts'"
      >
        <span class="text-cta2 uppercase font-roboto">
          Découvrir
        </span>
        <arrow-bottom />
      </div>
    </div>

    <div
      id="apts"
      class="pt-48"
    >
      <div class="px-56">
        <div class="lg:flex justify-between items-center pr-20 mb-60">
          <div class="lg:w-1/2 relative">
            <div class="swiper-1 w-full overflow-hidden relative">
              <div class="swiper-wrapper">
                <div
                  v-for="(img, i) in fluxImages"
                  :key="i"
                  class="swiper-slide w-full"
                >
                  <nuxt-img
                    :src="'/img/' + img.src"
                    :alt="img.alt"
                    class="w-full h-full object-cover"
                    loading="lazy"
                    format="webp"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center gap-8 absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-full">
              <div class="swiper-1-pagination"></div>
              <p class="text-cta2 font-roboto">
                <span id="indexSlideActive">0</span>
                / {{ fluxImages.length }}
              </p>
            </div>
          </div>
          <div class="lg:w-2/5">
            <p class="text-h4 font-roboto uppercase text-bleu-1 font-black">
              Appartements neufs à Lyon
            </p>
            <h2 class="text-h2 font-black font-roboto mt-4 mb-8 uppercase">
              Se laisser envahir<br />par un flux d'énergie naturelle
            </h2>
            <p class="text-s font-robotoslab">
              Et si vous donniez corps à ce rêve ?<br />
              En habitant une nouvelle adresse sans équivalent
              à l'architecture signée d'un référent mondial et
              aux appartements au style inspirant.
            </p>
            <!-- <nuxt-link
              to="#"
              title="Découvrir les appartements"
              class="button bg-white mt-16"
            >
              Découvrir les appartements
            </nuxt-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/swiper-bundle.min.css'
  import ArrowBottom from '@/assets/img/svg/arrow-bottom-header.svg?inline'

  export default {
    data () {
      return {
        currentSlideSwiper1 : 0,
        fluxImages: [
          {
            src: 'flux-1.png',
            alt: 'alt 1'
          },
          {
            src: 'flux-1.png',
            alt: 'alt 2'
          },
          {
            src: 'flux-1.png',
            alt: 'alt 3'
          }
        ]
      }
    },

    components: {
      ArrowBottom
    },

    mounted() {
      const swiper1 = new this.$swiper('.swiper-1', {
        loop: true,
        // configure Swiper to use modules
        modules: [this.$swiperModules.Autoplay, this.$swiperModules.Pagination, this.$swiperModules.EffectFade],
        autoplay: {
          delay: 5000
        },
        speed: 500,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".swiper-1-pagination",
          type: "progressbar",
        },
        on: {
          slideChange: function () {
            document.getElementById("indexSlideActive").innerHTML = this.realIndex + 1
          }
        }
      })
    }
  }
</script>

<style>
.swiper-1-pagination.swiper-pagination-progressbar {
  @apply w-1/2 relative bg-bleu-2 bg-opacity-20;
  height: 3px;
}
.swiper-1-pagination.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  @apply bg-bleu-2;
}
</style>