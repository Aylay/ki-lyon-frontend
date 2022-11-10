<template>
  <div>
    <div class="h-full-header-m lg:h-full-header relative flex lg:items-center">
      <div class="absolute h-full w-full z-0">
        <nuxt-img
          src="/img/header.jpg"
          alt="Des appartements neufs d’exception à Lyon"
          class="w-full h-full object-cover hidden lg:block"
          format="webp"
        />
        <nuxt-img
          src="/img/header-mobile.jpg"
          alt="Des appartements neufs d’exception à Lyon"
          class="w-full h-full object-cover lg:hidden"
          format="webp"
        />
      </div>
      <div class="flex-1 hidden lg:block">&nbsp;</div>
      <div class="relative z-10 flex-1 text-center lg:text-left pt-24 lg:pt-0 px-8">
        <h1 class="text-h1-m lg:text-h1 uppercase font-roboto font-black max-w-3xl">
          Faîtes le rêve<br />de vivre d’air et de lumière
        </h1>
        <p class="text-m-m lg:text-m font-robotoslab mt-8">
          Découvrez des appartements d'exception<br />en plein cœur de la Part-Dieu à Lyon.
        </p>
        <!-- <span class="button inline-block bg-white mt-16">
          Voir le film
        </span> -->
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
      class="pt-24 lg:pt-48"
    >
      <div class="px-8 lg:px-56">
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:pr-20 mb-12 lg:mb-60">
          <div class="lg:w-1/2 order-2 lg:order-1 relative">
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
                    format="webp"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-between lg:justify-center items-center lg:gap-8 absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-full">
              <div class="swiper-1-pagination"></div>
              <p class="text-cta2 font-roboto">
                <span id="indexSlideActive">0</span>
                / {{ fluxImages.length }}
              </p>
            </div>
          </div>
          <div class="lg:w-2/5 order-1 lg:order-2 pb-24 lg:pb-0">
            <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black">
              Appartements neufs à Lyon
            </h3>
            <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-8 uppercase">
              Se laisser envahir<br />par un flux d'énergie naturelle
            </h2>
            <p class="text-s-m lg:text-s font-robotoslab">
              Et si vous donniez corps à ce rêve ?<br />
              En habitant une nouvelle adresse sans équivalent
              à l'architecture signée d'un référent mondial et
              aux appartements au style inspirant.
            </p>
            <!-- <nuxt-link
              to="#"
              title="Découvrir les appartements"
              class="button inline-block bg-white mt-16"
            >
              Découvrir les appartements
            </nuxt-link> -->
          </div>
        </div>
      </div>

      <div class="px-8 lg:px-40 py-32 lg:pb-40">
        <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black lg:text-center">
          Des appartements d'exception
        </h3>
        <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-16 lg:mb-24 uppercase lg:text-center">
          Les atouts d'une résidence<br />idéalement située
        </h2>
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-40 justify-center">
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <pin class="w-32 h-auto" />
            </div>
            <p class="text-s-m lg:text-s font-robotoslab">
              Au cœur du quartier<br />
              de la Part-Dieu, 2ème pôle<br />
              d'affaires français
            </p>
          </div>
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <restaurant class="w-32 h-auto" />
            </div>
            <p class="text-s-m lg:text-s font-robotoslab">
              Nombreux<br />
              commerces, restaurants<br />
              et services sur place
            </p>
          </div>
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <avion class="w-32 h-auto" />
            </div>
            <p class="text-s-m lg:text-s font-robotoslab">
              Aéroport Lyon Saint-<br />
              Exupéry à 30 min par<br />
              le tramway Rhônexpress
            </p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-40 justify-center mt-12 lg:mt-24">
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <train class="w-32 h-auto" />
            </div>
            <p class="text-s-m lg:text-s font-robotoslab">
              Paris, Marseille<br />
              et Genève à 2h par<br />
              le train*

              <span class="block text-xs-m lg:text-xsm text-black text-opacity-50 font-robotoslab mt-2">
                * Source Google Maps
              </span>
            </p>
          </div>
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <pole class="w-32 h-auto" />
            </div>
            <p class="text-s-m lg:text-s font-robotoslab">
              Un pôle<br />
              multimodal unique<br /> 
              en pied de résidence
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-24 lg:pt-40 px-8 lg:px-56">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:pl-20 mb-32 lg:mb-60">
        <div class="lg:w-2/5 lg:pt-52 pb-24 lg:pb-60">
          <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black">
            Devenir propriétaire
          </h3>
          <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-24 lg:mb-40 uppercase">
            Une adresse<br /> 
            d'exception au coeur du 3ème arrondissement 
            de Lyon
          </h2>

          <h4 class="text-h4-m lg:text-h4 font-roboto font-black text-bleu-2 uppercase">
            Acheter, investir, habiter ou travailler
          </h4>
          <h3 class="text-h3-m lg:text-h3 font-roboto font-black uppercase">
            Une réalisation unique
          </h3>
          <ul class="mt-10 mb-24 lg:mb-40 flex flex-col gap-4">
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Conçue par l'architecte de renom Sou Fujimoto, accompagné des cabinets d'architecture Dream et Exndo.
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Véritable lieu de vie où il fera bon travailler et habiter. 550m² de commerces, 22 000 m² de bureaux et 85 appartements. 
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              300 m² de jardins suspendus partagés et aménagés.
            </li>
          </ul>

          <h4 class="text-h4-m lg:text-h4 font-roboto font-black text-bleu-2 uppercase">
            Une adresse de logements neufs sans équivalent 
          </h4>
          <h3 class="text-h3-m lg:text-h3 font-roboto font-black uppercase">
            Un "bâtiment paysage"
          </h3>
          <ul class="mt-10 flex flex-col gap-4">
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Un pôle multimodal unique en pied de résidence
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Les logements en vues inédites sur la ville.
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Des prestations de très grandes qualités.
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Des grands espaces aux belles perspectives.
            </li>
          </ul>
        </div>

        <div
          class="lg:w-1/2 relative"
          id="owner"
        >
          <div
            class="w-full relative lg:absolute top-0 h-full transition-opacity duration-500"
            id="owner1"
          >
            <nuxt-img
              src="/img/proprietaire-1.png"
              alt="Une réalisation unique"
              class="w-full top-[140px] sticky"
              format="webp"
            />
          </div>
          <div
            class="w-full absolute top-0 h-full transition-opacity duration-500 opacity-0 hidden lg:block"
            id="owner2"
          >
            <nuxt-img
              src="/img/proprietaire-2.png"
              alt="Un bâtiment paysage"
              class="w-full top-[140px] sticky"
              format="webp"
            />
          </div>
          <!-- <span class="button inline-block absolute bottom-8 lg:bottom-auto lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 z-20 bg-white w-max lg:w-auto">
            Voir les perspectives
          </span> -->
        </div>
      </div>
    </div>

    <div class="px-8 lg:px-56 bg-bleu-1 bg-opacity-10 py-24 lg:py-40">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:pr-20">
        <div class="lg:w-1/2 order-2 lg:order-1 relative">
          <nuxt-img
            src="/img/map.png"
            alt="Au coeur du quartier de Lyon Part-Dieu"
            class="w-full"
            format="webp"
          />
        </div>
        <div class="lg:w-2/5 order-1 lg:order-2 mb-24 lg:mb-0">
          <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black">
            Au cœur de la ville de Lyon
          </h3>
          <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-8 uppercase">
            Un cœur vibrant,<br />une dynamique exemplaire
          </h2>
          <p class="text-s-m lg:text-s font-robotoslab">
            Au coeur de ce quartier, 2ème pôle tertiaire français après la Défense, ce programme bénéficie d'une desserte exceptionnelle. A proximité immédiate, vous accéderez à l'un des plus grands centres commerciaux de France, la gare de Lyon Part-Dieu, l'Auditorium de Lyon et les fameuses Halles Paul Bocuse. 
          </p>
          <!-- <nuxt-link
            to="#"
            title="Découvrir le quartier"
            class="button inline-block bg-white mt-16"
          >
            Découvrir le quartier
          </nuxt-link> -->
        </div>
      </div>
    </div>

    <div class="px-8 lg:px-40 py-32 lg:py-40">
      <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black lg:text-center">
        Une architecture respectueuse de l'environnement
      </h3>
      <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-24 uppercase lg:text-center">
        Prôner une philosophie<br />du respect
      </h2>
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-40 justify-center">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div class="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-solid border-bleu-2 pb-8 lg:pb-0">
            <nuxt-img
              src="/img/biodivercity.png"
              alt="Label Biodivercity"
              class="w-auto max-h-16"
              format="webp"
            />
          </div>
          <p class="w-full lg:w-auto text-s-m lg:text-s font-robotoslab">
            Premier et seul outil de labellisation<br />permettant d’évaluer l’impact des<br />constructions en termes d’intégration<br />à la nature et de continuité écologique.
          </p>
        </div>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div class="w-full lg:w-72 border-b lg:border-b-0 lg:border-r border-solid border-bleu-2 pb-8 lg:pb-0">
            <nuxt-img
              src="/img/label.png"
              alt="Label 2EC"
              class="w-auto max-h-24"
              format="webp"
            />
          </div>
          <p class="w-full lg:w-auto text-s-m lg:text-s font-robotoslab">
            Reconnaît l’engagement pour la prévention<br /> et la gestion de déchets et/ou la valorisation<br /> de matériaux alternatifs issus de déchets<br /> non dangereux.
          </p>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-40 justify-center mt-12 lg:mt-32">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div class="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-solid border-bleu-2 pb-8 lg:pb-0">
            <nuxt-img
              src="/img/nf.png"
              alt="Label NF Habitat"
              class="w-auto max-h-20"
              format="webp"
            />
          </div>
          <p class="w-full lg:w-auto text-s-m lg:text-s font-robotoslab">
            Label de référence dans le secteur du<br />bâtiment, il garantit la performance globale<br /> des appartements pour un meilleur confort<br /> de vie (isolation sonore et thermique,<br />salubrité).
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/swiper-bundle.min.css'
  import ArrowBottom from '@/assets/img/svg/arrow-bottom-header.svg?inline'

  import Avion from '@/assets/img/svg/avion.svg?inline'
  import Pole from '@/assets/img/svg/pole.svg?inline'
  import Restaurant from '@/assets/img/svg/restaurant.svg?inline'
  import Pin from '@/assets/img/svg/pin.svg?inline'
  import Train from '@/assets/img/svg/train.svg?inline'

  export default {
    data () {
      return {
        currentSlideSwiper1 : 0,
        fluxImages: [
          {
            src: 'flux-1.png',
            alt: 'Univers d’espace et de lumière'
          },
          {
            src: 'flux-2.png',
            alt: 'Un coeur végétal'
          },
          {
            src: 'flux-3.png',
            alt: 'Des espaces apaisants'
          }
        ],
        siteURL: process.env.SITE_URL,
      }
    },

    components: {
      ArrowBottom,
      Avion,
      Pole,
      Restaurant,
      Pin,
      Train
    },

    mounted() {
      const swiper1 = new this.$swiper('.swiper-1', {
        loop: true,
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
    },

    methods: {
      onScroll () {
        const heightOwnerDivTop = document.getElementById("owner").offsetTop
        const heightOwnerDivHeight = document.getElementById("owner").clientHeight
        const middleOwnerDiv = heightOwnerDivTop + heightOwnerDivHeight / 8

        if (window.innerWidth > 1023) {
          if (scrollY >= middleOwnerDiv) {
            document.getElementById("owner1").classList.add('opacity-0')
            document.getElementById("owner2").classList.remove('opacity-0')
          } else {
            document.getElementById("owner2").classList.add('opacity-0')
            document.getElementById("owner1").classList.remove('opacity-0')
          }
        }
      }
    },

    beforeMount () {
      window.addEventListener('scroll', this.onScroll);
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll);
    },

    head () {
      return {
        title: 'Ki - Une nouvelle adresse d’exception - Immobilier neuf à Lyon',
        meta: [
          { hid: 'description', name: 'description', content: '85 appartements neufs du studio au 5 pièces bénéficiant de vues inédites sur la ville de Lyon dans le quartier de la Part-Dieu' },
          { hid: 'ogdescription', property: 'og:description', content: '85 appartements neufs du studio au 5 pièces bénéficiant de vues inédites sur la ville de Lyon dans le quartier de la Part-Dieu' },
          { hid: 'url', property: 'og:url', content: this.siteURL + this.$route.path },
          { hid: 'title', property: 'og:title', content: 'Ki - Une nouvelle adresse d’exception - Immobilier neuf à Lyon' },
        ],
        link: [
          { rel: 'canonical', href: this.siteURL + this.$route.path }
        ]
      }
    },
  }
</script>

<style>
#apts .swiper-1-pagination.swiper-pagination-progressbar {
  @apply w-10/12 lg:w-1/2 relative bg-bleu-2 bg-opacity-20;
  height: 3px;
}
#apts .swiper-1-pagination.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  @apply bg-bleu-2;
}
</style>