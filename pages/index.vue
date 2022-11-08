<template>
  <div>
    <div class="h-full-header relative flex items-center">
      <div class="absolute h-full w-full z-0">
        <nuxt-img
          src="/img/header-1.jpg"
          alt="Des appartements neufs d’exception à Lyon"
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
            <h3 class="text-h4 font-roboto uppercase text-bleu-1 font-black">
              Appartements neufs à Lyon
            </h3>
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

      <div class="px-40 pb-40">
        <h3 class="text-h4 font-roboto uppercase text-bleu-1 font-black text-center">
          Des appartements d'exception
        </h3>
        <h2 class="text-h2 font-black font-roboto mt-4 mb-24 uppercase text-center">
          Les atouts d'une résidence<br />idéalement située
        </h2>
        <div class="flex gap-40 justify-center">
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <pin class="w-32 h-auto" />
            </div>
            <p class="text-s font-robotoslab">
              Au cœur du quartier<br />
              de la Part-Dieu, 2ème pôle<br />
              d'affaires français
            </p>
          </div>
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <restaurant class="w-32 h-auto" />
            </div>
            <p class="text-s font-robotoslab">
              Nombreux<br />
              commerces, restaurants<br />
              et services sur place
            </p>
          </div>
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <avion class="w-32 h-auto" />
            </div>
            <p class="text-s font-robotoslab">
              Aéroport Lyon Saint-<br />
              Exupéry à 30 min par<br />
              le tramway Rhônexpress
            </p>
          </div>
        </div>
        <div class="flex gap-40 justify-center mt-24">
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <train class="w-32 h-auto" />
            </div>
            <p class="text-s font-robotoslab">
              Paris, Marseille<br />
              et Genève à 2h par<br />
              le train*
            </p>
          </div>
          <div class="flex gap-16 items-center">
            <div class="w-40 border-r border-solid border-bleu-2">
              <pole class="w-32 h-auto" />
            </div>
            <p class="text-s font-robotoslab">
              Un pôle<br />
              multimodal unique<br /> 
              en pied de résidence
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-40 px-56">
      <div class="lg:flex justify-between pl-20 mb-60">
        <div class="lg:w-2/5 pt-52 pb-60">
          <h3 class="text-h4 font-roboto uppercase text-bleu-1 font-black">
            Devenir propriétaire
          </h3>
          <h2 class="text-h2 font-black font-roboto mt-4 mb-40 uppercase">
            Une adresse<br /> 
            d'exception au coeur du 3ème arrondissement 
            de Lyon
          </h2>

          <h4 class="text-h4 font-roboto font-black text-bleu-2 uppercase">
            Acheter, investir, habiter ou travailler
          </h4>
          <h3 class="text-h3 font-roboto font-black uppercase">
            Une réalisation unique
          </h3>
          <ul class="mt-10 mb-40 flex flex-col gap-4">
            <li class="text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Conçue par l'architecte de renom Sou Fujimoto, accompagné des cabinets d'architecture Dream et Exndo.
            </li>
            <li class="text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Véritable lieu de vie où il fera bon travailler et habiter. 550m² de commerces, 22 000 m² de bureaux et 85 appartements. 
            </li>
            <li class="text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              300 m² de jardins suspendus partagés et aménagés.
            </li>
          </ul>

          <h4 class="text-h4 font-roboto font-black text-bleu-2 uppercase">
            Une adresse de logements neufs sans équivalent 
          </h4>
          <h3 class="text-h3 font-roboto font-black uppercase">
            Un "bâtiment paysage"
          </h3>
          <ul class="mt-10 flex flex-col gap-4">
            <li class="text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Un pôle multimodal unique en pied de résidence
            </li>
            <li class="text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Les logements en vues inédites sur la ville.
            </li>
            <li class="text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Des prestations de très grandes qualités.
            </li>
            <li class="text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Des grands espaces aux belles perspectives.
            </li>
          </ul>
        </div>

        <div
          class="lg:w-1/2 relative"
          id="owner"
        >
          <div
            class="w-full absolute top-0 h-full transition-opacity duration-500"
            id="owner1"
          >
            <nuxt-img
              src="/img/proprietaire-1.png"
              alt="Devenir proprietaire"
              class="w-full top-[140px] sticky"
              loading="lazy"
              format="webp"
            />
          </div>
          <div
            class="w-full absolute top-0 h-full transition-opacity duration-500 opacity-0"
            id="owner2"
          >
            <nuxt-img
              src="/img/proprietaire-2.png"
              alt="Devenir proprietaire"
              class="w-full top-[140px] sticky"
              loading="lazy"
              format="webp"
            />
          </div>
          <span class="button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white">
            Voir les perspectives
          </span>
        </div>
      </div>
    </div>

    <div class="px-56">
      <div class="lg:flex justify-between items-center pr-20 mb-60">
        <div class="lg:w-1/2 relative">
          <nuxt-img
            src="/img/map.png"
            alt="Map"
            class="w-full"
            loading="lazy"
            format="webp"
          />
        </div>
        <div class="lg:w-2/5">
          <h3 class="text-h4 font-roboto uppercase text-bleu-1 font-black">
            Au cœur de la ville de Lyon
          </h3>
          <h2 class="text-h2 font-black font-roboto mt-4 mb-8 uppercase">
            Un cœur vibrant,<br />une dynamique exemplaire
          </h2>
          <p class="text-s font-robotoslab">
            Au coeur de ce quartier, 2ème pôle tertiaire français après la Défense, ce programme bénéficie d'une desserte exceptionnelle. A proximité immédiate, vous accéderez à l'un des plus grands centres commerciaux de France, la gare de Lyon Part-Dieu, l'Auditorium de Lyon et les fameuses Halles Paul Bocuse. 
          </p>
          <!-- <nuxt-link
            to="#"
            title="Découvrir le quartier"
            class="button bg-white mt-16"
          >
            Découvrir le quartier
          </nuxt-link> -->
        </div>
      </div>
    </div>

    <div class="px-40 pb-40">
      <h3 class="text-h4 font-roboto uppercase text-bleu-1 font-black text-center">
        Une architecture respectueuse de l'environnement
      </h3>
      <h2 class="text-h2 font-black font-roboto mt-4 mb-24 uppercase text-center">
        Prôner une philosophie<br />du respect
      </h2>
      <div class="flex gap-40 justify-center">
        <div class="flex gap-16 items-center">
          <div class="w-80 border-r border-solid border-bleu-2">
            <nuxt-img
              src="/img/biodivercity.png"
              alt="Biodivercity"
              class="w-64"
              loading="lazy"
              format="webp"
            />
          </div>
          <p class="text-s font-robotoslab">
            Premier et seul outil de labellisation<br />permettant d’évaluer l’impact des<br />constructions en termes d’intégration<br />à la nature et de continuité écologique.
          </p>
        </div>
        <div class="flex gap-16 items-center">
          <div class="w-72 border-r border-solid border-bleu-2">
            <nuxt-img
              src="/img/label.png"
              alt="Label"
              class="w-64"
              loading="lazy"
              format="webp"
            />
          </div>
          <p class="text-s font-robotoslab">
            Reconnaît l’engagement pour la prévention<br /> et la gestion de déchets et/ou la valorisation<br /> de matériaux alternatifs issus de déchets<br /> non dangereux.
          </p>
        </div>
      </div>
      <div class="flex gap-40 justify-center mt-32">
        <div class="flex gap-16 items-center">
          <div class="w-80 border-r border-solid border-bleu-2">
            <nuxt-img
              src="/img/nf.png"
              alt="NF"
              class="w-64"
              loading="lazy"
              format="webp"
            />
          </div>
          <p class="text-s font-robotoslab">
            Label de référence dans le secteur du<br />bâtiment, il garantit la performance globale<br /> des appartements pour un meilleur confort<br /> de vie (isolation sonore et thermique,<br />salubrité).
          </p>
        </div>
      </div>
    </div>

    <div class="h-[456px] relative flex justify-center items-center">
      <div class="absolute w-full h-full z-0">
        <nuxt-img
          src="/img/bg-nuage.jpg"
          alt="Nuage"
          class="w-full h-full object-cover"
          loading="lazy"
          format="webp"
        />
      </div>
      <div class="text-center relative z-10">
        <h3 class="text-h4 font-roboto uppercase text-bleu-1 font-black">
          Pour nous rencontrer
        </h3>
        <h2 class="text-h2 font-black font-roboto mt-4 mb-16 uppercase text-white">
          Où nous trouver
        </h2>
        <p class="text-s font-robotoslab text-white">
          Espace de vente Ki<br />
          19 Boulevard Eugène Deruelle, Lyon 3<br />
          Du lundi au samedi de 10h à 19h
        </p>
        <div class="flex justify-center gap-10">
          <a
            href="https://goo.gl/maps/e9tCba2dSkghoSbF8"
            target="_blank"
            title="Se rendre à l'espace de vente Ki"
            class="button bg-white"
          >
            Je m'y rends
          </a>
          <span
            class="button bg-white"
            v-scroll-to="'#contact'"
          >
            Je prends rendez-vous
          </span>
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

        if (scrollY >= middleOwnerDiv) {
          document.getElementById("owner1").classList.add('opacity-0')
          document.getElementById("owner2").classList.remove('opacity-0')
        } else {
          document.getElementById("owner2").classList.add('opacity-0')
          document.getElementById("owner1").classList.remove('opacity-0')
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
  @apply w-1/2 relative bg-bleu-2 bg-opacity-20;
  height: 3px;
}
#apts .swiper-1-pagination.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  @apply bg-bleu-2;
}
</style>