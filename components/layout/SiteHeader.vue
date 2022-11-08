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
        <span
          v-scroll-to="'#contact'"
          title="Télécharger la brochure Ki"
          class="py-20 px-16 text-white font-roboto text-cta1 bg-bleu-1 cursor-pointer"
        >
          Télécharger la brochure
        </span>
        <span
          v-scroll-to="'#contact'"
          title="Contactez-nous"
          class="py-20 px-16 text-white font-roboto text-cta1 bg-bleu-2 cursor-pointer"
        >
          Contactez-nous
        </span>
      </div>
    </div>
  </header>
</template>

<script>
  import LogoKi from '@/assets/img/svg/logo-ki.svg?inline'

  export default {
    components: {
      LogoKi
    }
  }
</script>