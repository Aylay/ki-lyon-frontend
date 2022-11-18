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
    <div class="w-full lg:relative z-10 pt-0 lg:pt-40 pb-0 lg:pb-40">
      <nuxt-img
        src="/img/quartier-map-full.png"
        alt="Le quartier de Lyon Part-Dieu"
        class="w-auto max-h-[calc(100vh-100px)] lg:max-h-[calc(100vh-300px)] mx-auto"
        format="webp"
        loading="lazy"
      />
      <div class="lg:px-40 w-full h-24 lg:h-40 flex lg:mt-40 justify-center items-center lg:border-t border-solid border-black border-opacity-10">
        <p class="text-s-m lg:text-s font-robotoslab max-w-7xl">Une adresse agréable et stratégique</p>
      </div>
    </div>
  </div>
</template>