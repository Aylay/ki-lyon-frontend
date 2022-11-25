<template>
  <div class="px-8 pt-24 lg:pt-56 pb-16 lg:pb-32 text-center">
    <nuxt-img
      src="/img/404.png"
      alt="Erreur 404"
      class="h-auto max-w-[60rem] mx-auto w-full"
      format="webp"
    />
    <p class="mt-8 text-s-m lg:text-s font-robotoslab text-black">
      La page que vous souhaitez consulsuter n’existe pas.
    </p>
    <div class="mt-8 lg:mt-16">
      <nuxt-link
        to="/"
        title="Retour à l'accueil"
        class="button bg-white"
      >
        Retour à l'accueil
      </nuxt-link>
    </div>
  </div>
</template>