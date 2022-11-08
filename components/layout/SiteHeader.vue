<template>
  <header class="sticky top-0 left-0 z-50 bg-white">
    <div class="max-w-1512px mx-auto flex justify-between items-center">
      <div class="flex gap-40 pl-36">
        <nuxt-link
          to="/"
          title="Ki"
        >
          <logo-ki />
        </nuxt-link>
      </div>
      <div class="flex">
        <a
          href=""
          download
          title="Télécharger la brochure Ki"
          class="py-20 px-16 text-white font-roboto text-cta1 bg-viking"
        >
          Télécharger la brochure
        </a>
        <a
          href="#"
          v-scroll-to="'#contact'"
          title="Contactez-nous"
          class="py-20 px-16 text-white font-roboto text-cta1 bg-st-tropaz"
        >
          Contactez-nous
        </a>
      </div>
    </div>
  </header>
</template>

<script>
  import LogoKi from '@/assets/img/svg/LogoKi.svg?inline'

  export default {
    components: {
      LogoKi
    }
  }
</script>