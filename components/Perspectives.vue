<template>
  <div class="fixed w-full h-screen bg-white inset-0 z-50 flex sm:block justify-center items-center lg:block">
    <div class="absolute top-8 lg:top-52 right-8 lg:right-52 z-20">
      <span
        class="button inline-block bg-white see-more"
        @click="$emit('openCloseModal')"
      >
        <div class="flex gap-4">
          <span>
            Fermer
          </span>
          <span
            class="w-6 h-6 relative transform rotate-45 before:content-[] before:top-1/2 before:left-0 before:absolute before:transform before:-translate-y-1/2 before:w-full before:h-px before:bg-black before:transition-colors see-more-picto after:content-[] after:top-0 after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:h-full after:w-px after:bg-black after:transition-colors"
          />
        </div>
      </span>
    </div>
    <div class="swiper-2 w-full overflow-hidden lg:relative z-10 pt-0 lg:pt-40 pb-0 lg:pb-40">
      <div class="swiper-wrapper lg:relative z-10">
        <div
          v-for="(img, i) in perspectives"
          :key="i"
          class="swiper-slide w-full"
        >
          <nuxt-img
            :src="'/img/' + img.src"
            :alt="img.alt"
            class="w-auto max-h-[calc(100vh-100px)] lg:max-h-[calc(100vh-300px)] mx-auto"
            format="webp"
            loading="lazy"
          />
          <div class="lg:px-40 w-full h-24 lg:h-40 flex lg:mt-40 justify-center items-center">
            <p class="text-s-m lg:text-s font-robotoslab max-w-7xl">{{ img.title }}</p>
          </div>
        </div>
      </div>
      <div class="sm:absolute w-full left-0 right-0 bottom-0 lg:bottom-40 flex justify-between items-center h-24 lg:h-40 px-8 lg:px-40 z-10 lg:border-t border-solid border-black border-opacity-10">
        <div class="swiper-2-button-prev flex gap-4 items-center cursor-pointer">
          <arrow-left-right />
          <span class="uppercase text-cta2 font-roboto">Précédente</span>
        </div>
        <div class="swiper-2-button-next flex gap-4 items-center cursor-pointer">
          <span class="uppercase text-cta2 font-roboto">Suivante</span>
          <arrow-left-right class="transform rotate-180" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/swiper-bundle.min.css'
  import ArrowLeftRight from '@/assets/img/svg/arrow-left-right.svg?inline'

  export default {
    data () {
      return {
        perspectives: [
          {
            title: "Conçue par l'architecte de renom Sou Fujimoto",
            src: 'perspective-1.jpg',
            alt: 'Apporter un nouveau regard sur l’architecture'
          },
          {
            title: 'Véritable lieu de vie où il fera bon travailler et habiter',
            src: 'perspective-2.jpg',
            alt: '550m² de commerces, 22 000 m² de bureaux et 85 appartements'
          },
          {
            title: '300 m² de jardins suspendus partagés et aménagés',
            src: 'perspective-3.jpg',
            alt: 'Maximiser les espaces végétalisés'
          },
          {
            title: 'Un pôle multimodal unique en pied de résidence',
            src: 'perspective-4.jpg',
            alt: 'Univers d’espace et de lumière'
          },
          {
            title: 'Les logements en vues inédites sur la ville',
            src: 'perspective-5.jpg',
            alt: "S'ouvrir sur des paysages différents"
          },
          {
            title: 'Des prestations de très grandes qualités',
            src: 'perspective-6.jpg',
            alt: 'Les finitions réalisées avec goût participent au plaisir d’habiter'
          },
          {
            title: 'Des grands espaces aux belles perspectives',
            src: 'perspective-7.jpg',
            alt: 'Larges baies vitrées sublimant les paysages'
          }
        ]
      }
    },

    components: {
      ArrowLeftRight,
    },

    mounted () {
      const swiper2 = new this.$swiper('.swiper-2', {
        loop: true,
        modules: [this.$swiperModules.Autoplay, this.$swiperModules.Navigation, this.$swiperModules.EffectFade],
        autoplay: {
          delay: 5000
        },
        speed: 500,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: ".swiper-2-button-next",
          prevEl: ".swiper-2-button-prev",
        }
      })
    }
  }

</script>