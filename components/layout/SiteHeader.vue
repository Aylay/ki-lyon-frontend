<template>
  <header class="sticky top-0 left-0 z-40 bg-white xl:border-b border-solid border-black border-opacity-10">
    <div class="max-w-1512px mx-auto flex justify-between xl:justify-start gap-20 items-center py-10 px-8 xl:px-40 border-b xl:border-b-0 border-solid border-black border-opacity-10">
      <div class="flex gap-40">
        <nuxt-link
          to="/"
          title="Ki"
        >
          <logo-ki class="max-w-[76px] xl:max-w-none h-auto" />
        </nuxt-link>
      </div>
      <div
        class="xl:hidden w-20 h-20 ml-4"
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
        class="absolute top-full xl:top-auto xl:relative w-full xl:w-auto left-0 xl:left-auto px-8 xl:px-0 bg-white xl:bg-transparent transition-all duration-300 xl:opacity-100 h-full-header-m xl:h-auto xl:max-h-[none] xl:overflow-auto xl:flex flex-1 justify-between items-center"
        :class="menuOpened === true ? 'max-h-none overflow-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0'"
      >
        <ul class="flex flex-col xl:flex-row gap-6 mt-24 xl:mt-0">
          <li class="border-b xl:border-0 border-solid border-black">
            <nuxt-link
              class="text-cta1 font-roboto block py-6 xl:py-0"
              to="/quartier"
              title="Le quartier Ki"
            >
              Le quartier
            </nuxt-link>
          </li>
          <li class="text-cta1 font-roboto hidden xl:block">
            |
          </li>
          <li>
            <nuxt-link
              class="text-cta1 font-roboto block"
              to="/appartements"
              title="Les appartements Ki"
            >
            Les appartements
            </nuxt-link>
          </li>
        </ul>
        <div class="xl:flex gap-8 xl:gap-6">
          <div
            v-scroll-to="'#contact'"
            class="button text-white bg-bleu-2 mb-8 xl:mb-0 mt-24 xl:mt-0"
            @click="openMenu(); $emit('needBrochure');"
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
            @click="openMenu();"
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
        document.body.classList.toggle('mod')
      }
    },

    watch: {
      '$route' (to, from) {
        this.openMenu()
        console.log(this.$store.state.query.utmSource)
      }
    },
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

.nuxt-link-exact-active {
  @apply font-medium;
}
</style>