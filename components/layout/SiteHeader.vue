<template>
  <header class="sticky top-0 left-0 z-50 bg-white lg:border-b border-solid border-black border-opacity-10">
    <div class="max-w-1512px mx-auto flex justify-between items-center py-10 px-8 lg:px-40 border-b lg:border-b-0 border-solid border-black border-opacity-10">
      <div class="flex gap-40">
        <nuxt-link
          to="/"
          title="Ki"
        >
          <logo-ki class="max-w-[76px] lg:max-w-none h-auto" />
        </nuxt-link>
      </div>
      <div
        class="lg:hidden w-20 h-20 ml-4"
        @click="openMenu"
      >
        <svg
          class="burger cursor-pointer transition-transform duration-400 select-none"
          viewBox="0 0 100 100"
          :class="menuOpened ? 'active' : ''"
        >
          <path
            class="line stroke-current top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path
            class="line stroke-current middle"
            d="m 70,50 h -40"
          />
          <path
            class="line stroke-current bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
      <div
        class="lg:flex gap-8 lg:gap-6 absolute top-full lg:top-auto lg:relative w-full lg:w-auto left-0 lg:left-auto px-8 lg:px-0 bg-white lg:bg-transparent transition-all duration-300 lg:opacity-100 h-full-header-m lg:h-auto lg:max-h-[none] lg:overflow-auto"
        :class="menuOpened === true ? 'max-h-none overflow-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0'"
      >
        <div
          v-scroll-to="'#contact'"
          class="button text-white bg-bleu-2 mb-8 lg:mb-0 mt-24 lg:mt-0"
        >
          <div class="flex gap-4">
            <span>
              Télécharger la brochure
            </span>
            <brochure />
          </div>
        </div>
        <div
          v-scroll-to="'#contact'"
          class="button text-white bg-bleu-2"
        >
          <div class="flex gap-4">
            <span>
              Contactez-nous
            </span>
            <contact />
          </div>
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
    data () {
      return {
        isScrolling: false,
        menuOpened: false
      }
    },

    components: {
      LogoKi,
      Brochure,
      Contact
    },

    methods: {
      openMenu () {
        this.menuOpened = !this.menuOpened
        this.isScrolling = !this.isScrolling
        document.body.classList.toggle('mod')
      }
    }
  }
</script>

<style>
.burger .top {
  stroke-dasharray: 40 121;
}
.burger .bottom {
  stroke-dasharray: 40 121;
}

.burger.active {
  transform: rotate(45deg);
}
.burger.active .top {
  stroke-dashoffset: -68px;
}
.burger.active .bottom {
  stroke-dashoffset: -68px;
}

.line {
  fill:none;
  transition: stroke-dasharray 300ms, stroke-dashoffset 300ms, stroke 300ms;
  stroke-width: 5.5;
  stroke-linecap: round;
}
</style>