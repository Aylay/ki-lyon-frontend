<template>
  <div class="fixed w-full h-screen flex justify-center items-center bg-white inset-0 z-50">
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
    <div class="max-w-screen-xl mx-auto w-full">
      <div class="relative overflow-hidden w-full pt-[56.25%]">
        <iframe
          src="https://www.youtube.com/embed/HfFw1wIt26o"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute w-full h-full inset-0"
        ></iframe>
      </div>
    </div>
  </div>
</template>