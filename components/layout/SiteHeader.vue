<template>
  <header class="sticky top-0 left-0 z-50 bg-white">
    <div class="max-w-1512px mx-auto flex justify-between items-center py-10 px-40">
      <div class="flex gap-40">
        <nuxt-link
          to="/"
          title="Ki"
        >
          <logo-ki />
        </nuxt-link>
      </div>
      <div class="flex gap-6">
        <div
          v-scroll-to="'#contact'"
          title="Télécharger la brochure Ki"
          class="button flex gap-4 text-white bg-bleu-2"
        >
          <span>
            Télécharger la brochure
          </span>
          <brochure />
        </div>
        <div
          v-scroll-to="'#contact'"
          title="Contactez-nous"
          class="button flex gap-4 text-white bg-bleu-2"
        >
          <span>
            Contactez-nous
          </span>
          <contact />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import LogoKi from '@/assets/img/svg/logo-ki.svg?inline'
  import Brochure from '@/assets/img/svg/brochure.svg?inline'
  import Contact from '@/assets/img/svg/contact.svg?inline'

  export default {
    components: {
      LogoKi,
      Brochure,
      Contact
    }
  }
</script>