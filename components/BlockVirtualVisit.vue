<template>
  <div>

    <div class="px-8 lg:px-40 py-32 lg:py-40">
      <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black lg:text-center">
        Votre future résidence
      </h3>
      <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-24 uppercase lg:text-center">
        Plongée immersive
      </h2>
      <div class="w-full h-[38rem] lg:h-[65rem] flex items-center justify-center relative">
        <div class="absolute inset-0">
          <nuxt-img
            src="/img/visite-virtuelle-mobile.jpg"
            alt="..."
            class="w-full h-full object-cover lg:hidden"
            format="webp"
          />
          <nuxt-img
            src="/img/visite-virtuelle-desktop.jpg"
            alt="..."
            class="w-full h-full object-cover hidden lg:block"
            format="webp"
          />
        </div>
        <span
          class="button inline-block bg-white mb-6 lg:mb-0 relative z-10"
          @click.prevent="openVirtualVisit()"
        >
          Démarrer votre visite virtuelle
        </span>
        <!-- <div class="relative">
          <div
            class="button inline-block bg-white"
            @click.prevent="openVirtualMenu()"
            @mouseover="hoverVirtualButton = true"
            @mouseleave="hoverVirtualButton = false"
          >
            <div class="flex gap-4">
              <span>
                Démarrer votre visite virtuelle
              </span>
              <arrow-top-bottom
                v-if="!hoverVirtualButton"
                class="w-6 h-auto"
              />
              <arrow-top-bottom-white
                v-if="hoverVirtualButton"
                class="w-6 h-auto transition-opacity"
                :class="hoverVirtualButton ? 'opacity-100' : 'opacity-0'"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <virtual-visit
      v-if="virtualVisitOpened"
      @openCloseModal="openVirtualVisit()"
    />
  </div>
</template>

<script>
import ArrowTopBottom from '@/assets/img/svg/arrow-top-bottom.svg?inline'
import ArrowTopBottomWhite from '@/assets/img/svg/arrow-top-bottom-white.svg?inline'
import VirtualVisit from '@/components/VirtualVisit'

export default {
  data () {
    return {
      hoverVirtualButton: false,
      virtualVisitOpened: false
    }
  },

  components: {
    ArrowTopBottom,
    ArrowTopBottomWhite,
    VirtualVisit
  },

  methods: {
    openVirtualVisit () {
      this.virtualVisitOpened = !this.virtualVisitOpened
      document.body.classList.toggle('overflow-hidden')
    }
  }
}
</script>