<template>
  <div>
    <div class="lg:h-[640px] relative">
      <div class="absolute h-full w-full z-0">
        <nuxt-img
          src="/img/header-quartier.jpg"
          alt="Des appartements neufs d’exception à Lyon"
          class="w-full h-full object-cover"
          format="webp"
        />
      </div>
      <div class="relative z-10 pb-60 lg:pb-0">
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
            Le quartier
          </li>
        </ul>
        
        <h1 class="text-center text-h1-m lg:text-h1 font-roboto font-black uppercase pt-12 lg:pt-44">
          Un cœur vibrant,<br />
          une dynamique <br />
          exemplaire
        </h1>
      </div>
    </div>
    <div class="pt-24 lg:pt-40 px-8 lg:px-56">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:pl-20 mb-32">
        <div class="lg:w-2/5 lg:pt-52 pb-12 lg:pb-60">
          <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black">
            Programme immobilier quartier Lyon Part-Dieu
          </h3>
          <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-8 uppercase">
            Une adresse agréable et stratégique
          </h2>
          <p class="text-s-m lg:text-s font-robotoslab">
            A la fois lieu de vie et quartier d'affaires, l'environnement de la Part-Dieu est aussi effervescent qu'agréable. Une situation stratégique dans le grand Lyon en mouvement.
          </p>

          <h4 class="text-h4-m lg:text-h4 font-roboto font-black text-bleu-2 uppercase mt-24 lg:mt-40">
            Logements neufs et écoles à proximité
          </h4>
          <h3 class="text-h3-m lg:text-h3 font-roboto font-black uppercase flex items-center">
            <apprendre />
            <span>
              Apprendre
            </span>
          </h3>
          <ul class="mt-10 mb-24 lg:mb-40 flex flex-col gap-4">
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Ecoles primaires publiques et privées, collèges et lycées
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Universités, centre de formation
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Equipements sportifs (piscine, gymnase, halle de sport)
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Grandes écoles de commerce et écoles d'ingénieurs
            </li>
          </ul>

          <h4 class="text-h4-m lg:text-h4 font-roboto font-black text-bleu-2 uppercase mt-24 lg:mt-40">
            Proche de tous les transports
          </h4>
          <h3 class="text-h3-m lg:text-h3 font-roboto font-black uppercase flex items-center">
            <bouger />
            <span>
              Bouger
            </span>
          </h3>
          <ul class="mt-10 mb-24 lg:mb-40 flex flex-col gap-4">
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              7 lignes de tramaway.
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              4 lignes de métro
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Nombreuses lignes de bus
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              600 m² dédiés aux mobilités douces internes à la résidence
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Vélo'v à proximité
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Liaison directe avec l'aéroport Lyon Saint-Exupéry par le Rhônexepress
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              TER, TGV nationaux et européens
            </li>
          </ul>

          <h4 class="text-h4-m lg:text-h4 font-roboto font-black text-bleu-2 uppercase mt-24 lg:mt-40">
            Lyon Part-Dieu, deuxième pôle tertiaire français
          </h4>
          <h3 class="text-h3-m lg:text-h3 font-roboto font-black uppercase flex items-center">
            <vivre />
            <span>
              Vivre
            </span>
          </h3>
          <ul class="mt-10 mb-24 lg:mb-40 flex flex-col gap-4">
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Bibliothèque centrale de Lyon
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Halles Paul Bocuse
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Auditorium, cinémas multiplexes
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Parc de la Tête d'Or
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Place Bellecour
            </li>
            <li class="text-s-m lg:text-s font-robotoslab pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4">
              Grand Hôtel-Dieu
            </li>
          </ul>
        </div>

        <div
          class="lg:w-1/2 relative"
          id="quartier-map"
        >
          <div
            class="w-full absolute top-0 h-full transition-opacity duration-500 hidden lg:block z-10"
            id="quartier-map1"
          >
            <div class="top-[140px] sticky">
              <nuxt-img
                src="/img/quartier-map-1.png"
                alt="Une réalisation unique"
                class="w-full"
                format="webp"
              />
              <div class="text-center">
                <span
                  @click.prevent="openMap()"
                  class="button hidden lg:inline-block bg-white w-max lg:w-auto"
                >
                  Voir la carte
                </span>
              </div>
            </div>
          </div>
          <div
            class="w-full absolute top-0 h-full transition-opacity duration-500 opacity-0 hidden lg:block z-10"
            id="quartier-map2"
          >
            <div class="top-[140px] sticky">
              <nuxt-img
                src="/img/quartier-map-2.png"
                alt="Un bâtiment paysage"
                class="w-full"
                format="webp"
              />
              <div class="text-center">
                <span
                  @click.prevent="openMap()"
                  class="button hidden lg:inline-block bg-white w-max lg:w-auto"
                >
                  Voir la carte
                </span>
              </div>
            </div>
          </div>
          <div
            class="w-full absolute top-0 h-full transition-opacity duration-500 opacity-0 hidden lg:block z-10"
            id="quartier-map3"
          >
            <div class="top-[140px] sticky">
              <nuxt-img
                src="/img/quartier-map-3.png"
                alt="Un bâtiment paysage"
                class="w-full"
                format="webp"
              />
              <div class="text-center">
                <span
                  @click.prevent="openMap()"
                  class="button hidden lg:inline-block bg-white w-max lg:w-auto"
                >
                  Voir la carte
                </span>
              </div>
            </div>
          </div>
          <div class="w-full relative block lg:hidden">
            <nuxt-img
              src="/img/quartier-map-full-mobile.png"
              alt="Un bâtiment paysage"
              class="w-full"
              format="webp"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="px-8 lg:px-40 bg-bleu-1 bg-opacity-10 py-32 lg:py-40">
      <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black lg:text-center">
        Des appartements neufs idéalement situés
      </h3>
      <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-16 lg:mb-24 uppercase lg:text-center">
        Temps de trajet
      </h2>

      <div class="flex flex-col lg:flex-row gap-16 lg:gap-60 mb-16 lg:mb-24">
        <div class="lg:pl-60 flex gap-16 items-center">
          <div class="border-r border-solid border-black pr-8">
            <nuxt-img
              src="/img/2-min.png"
              alt="2 minutes"
              class="max-h-24 lg:max-h-32 w-auto"
              format="webp"
            />
          </div>
          <p class="text-s-m lg:text-s font-robotoslab">
            à pied de la gare Lyon<br />Part-Dieu
          </p>
        </div>
        <div class="flex gap-16 items-center">
          <div class="border-r border-solid border-black pr-8">
            <nuxt-img
              src="/img/2-min.png"
              alt="2 minutes"
              class="max-h-24 lg:max-h-32 w-auto"
              format="webp"
            />
          </div>
          <p class="text-s-m lg:text-s font-robotoslab">
            à pied du centre<br />commercial La Part-Dieu
          </p>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-16 lg:gap-60 justify-end">
        <div class="flex gap-16 items-center">
          <div class="border-r border-solid border-black pr-8">
            <nuxt-img
              src="/img/12-min.png"
              alt="12 minutes"
              class="max-h-24 lg:max-h-32 w-auto"
              format="webp"
            />
          </div>
          <p class="text-s-m lg:text-s font-robotoslab">
            en métro de la Place<br />Bellecour
          </p>
        </div>
        <div class="flex gap-16 items-center lg:pr-60">
          <div class="border-r border-solid border-black pr-8">
            <nuxt-img
              src="/img/5-min.png"
              alt="5 minutes"
              class="max-h-24 lg:max-h-32 w-auto"
              format="webp"
            />
          </div>
          <p class="text-s-m lg:text-s font-robotoslab">
            en vélo du<br />Parc de la Tête d'Or
          </p>
        </div>
      </div>
    </div>
    
    <map-neighborhood
      v-if="mapOpened"
      @openCloseModal="openMap()"
    />
  </div>
</template>

<script>
import MapNeighborhood from '@/components/MapNeighborhood'

import Apprendre from '@/assets/img/svg/apprendre.svg?inline'
import Bouger from '@/assets/img/svg/bouger.svg?inline'
import Vivre from '@/assets/img/svg/vivre.svg?inline'

export default {
  data () {
    return {
      mapOpened: false,
      siteURL: process.env.SITE_URL
    }
  },

  components: {
    Apprendre,
    Bouger,
    Vivre,
    MapNeighborhood
  },

  methods: {
    onScroll () {
      const heightNeighborhoodDivTop = document.getElementById("quartier-map").offsetTop
      const heightNeighborhoodDivHeight = document.getElementById("quartier-map").clientHeight
      const thirdNeighborhoodDiv = heightNeighborhoodDivTop + heightNeighborhoodDivHeight / 7
      const twoThirdNeighborhoodDiv = heightNeighborhoodDivTop + heightNeighborhoodDivHeight / 2

      if (window.innerWidth > 1023) {
        if (scrollY >= thirdNeighborhoodDiv && scrollY < twoThirdNeighborhoodDiv) {
          document.getElementById("quartier-map1").classList.add('opacity-0')
          document.getElementById("quartier-map1").classList.remove('z-10')

          document.getElementById("quartier-map2").classList.remove('opacity-0')
          document.getElementById("quartier-map2").classList.add('z-10')

          document.getElementById("quartier-map3").classList.add('opacity-0')
          document.getElementById("quartier-map3").classList.remove('z-10')
        } else if (scrollY >= twoThirdNeighborhoodDiv) {
          document.getElementById("quartier-map1").classList.add('opacity-0')
          document.getElementById("quartier-map1").classList.remove('z-10')

          document.getElementById("quartier-map2").classList.add('opacity-0')
          document.getElementById("quartier-map2").classList.remove('z-10')

          document.getElementById("quartier-map3").classList.remove('opacity-0')
          document.getElementById("quartier-map3").classList.add('z-10')
        } else {
          document.getElementById("quartier-map1").classList.remove('opacity-0')
          document.getElementById("quartier-map1").classList.add('z-10')

          document.getElementById("quartier-map2").classList.add('opacity-0')
          document.getElementById("quartier-map2").classList.remove('z-10')

          document.getElementById("quartier-map3").classList.add('opacity-0')
          document.getElementById("quartier-map3").classList.remove('z-10')
        }
      }
    },

    openMap () {
      this.mapOpened = !this.mapOpened
      document.body.classList.toggle('overflow-hidden')
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
        "name": "Le quartier",
        "item": this.siteURL + this.$route.path
      }]
    }
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
  }
}
</script>