<template>
  <div>
    <div class="lg:h-[640px] relative">
      <div class="absolute h-full w-full z-0">
        <nuxt-img
          src="/img/header-apts.jpg"
          alt="Terrasses avec vue"
          class="w-full h-full object-cover"
          format="webp"
        />
      </div>
      <div class="relative z-10 pb-80 lg:pb-0">
        <ul class="pt-12 flex gap-4 justify-center">
          <li>
            <nuxt-link
              to="/"
              title="Accueil Ki"
              class="text-xs-m lg:text-xs font-robotoslab underline"
            >
              Accueil
            </nuxt-link>
          </li>
          <li class="text-xs-m lg:text-xs font-robotoslab">
            •
          </li>
          <li class="text-xs-m lg:text-xs font-robotoslab">
            Les appartements
          </li>
        </ul>
        
        <h1 class="text-center text-h1-m lg:text-h1 font-roboto font-black uppercase pt-12 lg:pt-44">
          Habiter l'exception,<br />
          vivre l'aisance
        </h1>
      </div>
    </div>

    <div class="py-24 lg:py-40 px-8">
      <p class="max-w-[740px] mx-auto text-h3-m lg:text-h3 uppercase font-roboto font-black text-center">
        Comme des bulles suspendues dans un décor extraverti, les appartements du studio au 5 pièces vous entrainent dans un univers d'espace et de lumière. <br /><br />
        Circulations bien pensées, géométries pures, expositions optimales apprivoisent le regard. Quelles que soient les superficies, les atmosphères donnent envie de se "poser" sans penser à rien d'autre que d'être bien. 
      </p>

      <div class="mt-24 lg:mt-40 relative">
        <div
          class="swiper-3 w-full overflow-hidden relative"
          id="swiperAptsPage"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(img, i) in aptImages"
              :key="i"
              class="swiper-slide w-full lg:px-16"
            >
              <nuxt-img
                :src="'/img/' + img.src"
                :alt="img.alt"
                class="w-full h-full object-cover"
                format="webp"
              />
            </div>
          </div>
          <div class="flex justify-between mt-16 items-center gap-16">
            <div class="swiper-3-button-prev flex gap-4 items-center cursor-pointer">
              <arrow-left-right />
              <span class="uppercase text-cta2 font-roboto hidden lg:block">Précédente</span>
            </div>

            <div class="flex justify-center items-center gap-8 w-full lg:max-w-lg">
              <div class="swiper-3-pagination !left-auto !top-auto !relative"></div>
              <p class="text-cta2 font-roboto w-16">
                <span id="indexSlideAptActive">0</span>
                / {{ aptImages.length }}
              </p>
            </div>

            <div class="swiper-3-button-next flex gap-4 items-center cursor-pointer">
              <span class="uppercase text-cta2 font-roboto hidden lg:block">Suivante</span>
              <arrow-left-right class="transform rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="bg-bleu-1 bg-opacity-10 py-32 lg:py-40">
      <div class="px-8 lg:px-40">
        <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black lg:text-center">
          des finitions de qualité au cœur de lyon
        </h3>
        <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-16 lg:mb-24 uppercase flex flex-col lg:flex-row gap-4 lg:gap-20 justify-center">
          <span>
            Espaces apaisants
          </span>
          <span>
            Cœur végétal
          </span>
          <span>
            Terrasses avec vue
          </span>
        </h2>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <div class="flex gap-8">
          <div
            v-for="(img, i) in finitionImages1"
            :key="i"
            :class="img.flex"
          >
            <div class="w-full h-80 lg:h-[325px]">
              <nuxt-img
                :src="'/img/' + img.src"
                :alt="img.alt"
                class="w-full h-full object-cover"
                format="webp"
              />
            </div>
          </div>
        </div>
        <div class="flex gap-8">
          <div
            v-for="(img, i) in finitionImages2"
            :key="i"
            :class="img.flex"
          >
            <div class="w-full h-80 lg:h-[325px]">
              <nuxt-img
                :src="'/img/' + img.src"
                :alt="img.alt"
                class="w-full h-full object-cover"
                format="webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <prices />

    <virtual-visit />

    <div class="pt-24 lg:pt-40 px-8 lg:px-56">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:pl-20 mb-32">
        <div class="lg:w-2/5 lg:pt-52 pb-12 lg:pb-60">
          <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black">
            Un projet immobilier respectueux
          </h3>
          <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-8 uppercase">
            Là ou le premium<br />en perd son latin
          </h2>

          <h4 class="text-h4-m lg:text-h4 font-roboto font-black text-bleu-2 uppercase mt-24 lg:mt-40">
            Pour un habitat durable
          </h4>
          <h3 class="text-h3-m lg:text-h3 font-roboto font-black uppercase">
            Labels
          </h3>
          <p class="mt-10 mb-24 lg:mb-40 text-s-m lg:text-s font-robotoslab">
            Labels qualité (NF Habitat, 2EC, Biodivercity), normes sécurité, services partagés, exigence maximisée, chaque référence et chaque prestation visent une excellence évidente...
          </p>

          <h4 class="text-h4-m lg:text-h4 font-roboto font-black text-bleu-2 uppercase mt-24 lg:mt-40">
            Haut de gamme
          </h4>
          <h3 class="text-h3-m lg:text-h3 font-roboto font-black uppercase">
            Extérieur
          </h3>
          <ul class="mt-10 mb-24 lg:mb-40 flex flex-col gap-4">
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Menuiseries aluminium
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Volets roulants ou BSO à commande centralisée
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Portes palières à serrures 5 points A2P**
            </li>
          </ul>

          <h4 class="text-h4-m lg:text-h4 font-roboto font-black text-bleu-2 uppercase mt-24 lg:mt-40">
            Des appartements d’exception
          </h4>
          <h3 class="text-h3-m lg:text-h3 font-roboto font-black uppercase">
            Prestations
          </h3>
          <ul class="mt-10 mb-24 lg:mb-40 flex flex-col gap-4">
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Cloisons intérieures de 72 mm
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Les studios et 2 pièces : carrelage grand format dans les séjours et parquet massif dans les chambres
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Du 3 pièces au 5 pièces : parquet massif dans les séjours et chambres
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Faïence 30x60 cm / hauteur 2 m en périphérie dans les salles de bain et salles d'eau
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Chauffage collectif urbain, plancher chauffant
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Brasseur d'air dans les chambres
            </li>
          </ul>

          <h4 class="text-h4-m lg:text-h4 font-roboto font-black text-bleu-2 uppercase mt-24 lg:mt-40">
            Dernières innovations
          </h4>
          <h3 class="text-h3-m lg:text-h3 font-roboto font-black uppercase">
            Services partagés
          </h3>
          <p class="mt-10 mb-24 lg:mb-40 text-s-m lg:text-s font-robotoslab">
            Une application permettra d'obtenir des infos en temps réel, de communiquer avec d'autres résidents, d'échanger des biens et services; de connaître ses consommations, de piloter le chauffage, les volets et l'éclairage.
          </p>
        </div>

        <div
          class="lg:w-1/2 relative"
          id="premium"
        >
        <div
            class="w-full relative lg:absolute top-0 h-full transition-opacity duration-500"
            id="premium1"
          >
            <nuxt-img
              src="/img/premium-1.png"
              alt="Des prestations de qualité"
              class="w-full top-[140px] sticky"
              format="webp"
            />
          </div>
          <div
            class="w-full absolute top-0 h-full transition-opacity duration-500 opacity-0 hidden lg:block"
            id="premium2"
          >
            <nuxt-img
              src="/img/premium-2.png"
              alt="Un intérieur soigné"
              class="w-full top-[140px] sticky"
              format="webp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css'

import Prices from '@/components/Prices'
import VirtualVisit from '@/components/BlockVirtualVisit'

import ArrowLeftRight from '@/assets/img/svg/arrow-left-right.svg?inline'

export default {
  data () {
    return {
      siteURL: process.env.SITE_URL,
      aptImages: [
        {
          src: 'apt-1.png',
          alt: 'Terrasses avec vue'
        },
        {
          src: 'apt-2.png',
          alt: 'Un univers d’espace et de lumière'
        },
        {
          src: 'apt-3.png',
          alt: 'De multiples terrasses qui s’ouvrent sur des décors différents'
        },
        {
          src: 'apt-4.png',
          alt: 'Comme des bulles suspendues'
        },
        {
          src: 'apt-5.png',
          alt: 'Expositions optimales'
        }
      ],
      finitionImages1: [
        {
          src: 'finition-1.jpg',
          alt: 'Appartements grands volumes',
          flex: 'flex-1 lg:flex-2'
        },
        {
          src: 'finition-2.jpg',
          alt: 'Un patio de fraîcheur',
          flex: 'flex-1'
        }
      ],
      finitionImages2: [
        {
          src: 'finition-3.jpg',
          alt: 'Terrasses avec vue sur les reliefs lyonnais',
          flex: 'flex-1'
        },
        {
          src: 'finition-4.jpg',
          alt: 'Une haute idée du confort',
          flex: 'flex-1 lg:flex-2'
        }
      ]
    }
  },

  components: {
    ArrowLeftRight,
    Prices,
    VirtualVisit
  },

  mounted() {
    const swiper3 = new this.$swiper('.swiper-3', {
      loop: true,
      modules: [this.$swiperModules.Autoplay, this.$swiperModules.Pagination, this.$swiperModules.Navigation, this.$swiperModules.EffectFade],
      autoplay: {
        delay: 5000
      },
      speed: 500,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: ".swiper-3-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-3-button-next",
        prevEl: ".swiper-3-button-prev",
      },
      on: {
        slideChange: function () {
          document.getElementById("indexSlideAptActive").innerHTML = this.realIndex + 1
        }
      }
    })
  },

  methods: {
    onScroll () {
      const heightOPremiumDivTop = document.getElementById("premium").offsetTop
      const heightOPremiumDivHeight = document.getElementById("premium").clientHeight
      const middleOPremiumDiv = heightOPremiumDivTop + heightOPremiumDivHeight / 4

      if (window.innerWidth > 1023) {
        if (scrollY >= middleOPremiumDiv) {
          document.getElementById("premium1").classList.add('opacity-0')
          document.getElementById("premium2").classList.remove('opacity-0')
        } else {
          document.getElementById("premium2").classList.add('opacity-0')
          document.getElementById("premium1").classList.remove('opacity-0')
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

  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": this.siteURL
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Les appartements",
        "item": this.siteURL + this.$route.path
      }]
    }
  },

  head () {
    return {
      title: '85 appartements neufs du studio au 5 pièces à Lyon',
      meta: [
        { hid: 'description', name: 'description', content: 'Un programme immobilier neuf à Lyon avec des appartements offrant de grands espaces aux belles perspectives et de larges baies vitrées sublimant les paysages.' },
        { hid: 'ogdescription', property: 'og:description', content: 'Un programme immobilier neuf à Lyon avec des appartements offrant de grands espaces aux belles perspectives et de larges baies vitrées sublimant les paysages.' },
        { hid: 'url', property: 'og:url', content: this.siteURL + this.$route.path },
        { hid: 'title', property: 'og:title', content: '85 appartements neufs du studio au 5 pièces à Lyon' },
      ],
      link: [
        { rel: 'canonical', href: this.siteURL + this.$route.path }
      ]
    }
  }
}
</script>