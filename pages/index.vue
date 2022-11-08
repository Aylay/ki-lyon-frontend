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
        <span class="inline-block mt-16 text-cta2 bg-white rounded-70px uppercase cursor-pointer py-8 px-12 border border-black border-solid border-opacity-10">
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
    <div id="apts"></div>
    <h1 class="text-2xl text-black">Coucou</h1>
    <h1 class="text-2xl text-black" id="contact">Coucou</h1>
  </div>
</template>

<script>
  import ArrowBottom from '@/assets/img/svg/arrow-bottom-header.svg?inline'

  export default {
    components: {
      ArrowBottom
    }
  }
</script>