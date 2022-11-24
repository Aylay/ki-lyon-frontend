<template>
  <div
    class="px-8 lg:px-56 transition-colors"
    :class="isOpened ? 'bg-bleu-1' : 'bg-bleu-2'"
    :id="'unit-' + actualUnit"
  >
    <div
      class="py-16 lg:py-20 border-b border-solid"
      :class="(!isLast && !isOpened) ? 'border-white border-opacity-20' : 'border-transparent'"
    >
      <h3 class="text-h3-m lg:text-h3 uppercase font-roboto font-black text-white">
        {{ unitType }}
      </h3>
      <div class="flex justify-between items-center">
        <p class="flex-2 text-s-m lg:text-s text-white font-robotoslab">
          Appartement{{ unit.lots.length > 1 ? 's' : '' }} neuf{{ unit.lots.length > 1 ? 's' : '' }}
        </p>
        <p class="flex-1 text-s-m lg:text-s text-white font-robotoslab">
          ~ {{ unit.surface.toLocaleString() }} m<sup>2</sup>
        </p>
        <div class="flex-2 flex justify-center gap-8 items-center">
          <p class="text-s-m lg:text-s text-white font-robotoslab">
            À partir de {{ unit.prixMin.toLocaleString() }} €
          </p>
          <p class="text-xs-m lg:text-xs font-robotoslab text-white">
            (TVA 20%)
          </p>
        </div>
        <p class="flex-2 text-s-m lg:text-s text-white font-robotoslab lg:text-center">
          {{ unit.lots.length }} lot{{ unit.lots.length > 1 ? 's' : '' }} disponible{{ unit.lots.length > 1 ? 's' : '' }}
        </p>
        <div class="flex-1 text-right">
          <div
            class="button inline-block bg-white mb-4 cursor-pointer see-more"
            :class="isOpened ? 'button-2' : ''"
            @click="$emit('unitNeedToBeOpen', actualUnit)"
          >
            <div class="flex gap-4">
              <span>
                Voir
              </span>
              <span
                class="w-6 h-6 relative before:content-[] before:top-1/2 before:left-0 before:absolute before:transform before:-translate-y-1/2 before:w-full before:h-px before:bg-black before:transition-colors see-more-picto"
                :class="!isOpened ? 'after:content-[] after:top-0 after:left-1/2 after:absolute after:transform after:-translate-x-1/2 after:h-full after:w-px after:bg-black after:transition-colors' : ''"
              />
            </div>
          </div>
        </div>
      </div>

      <div v-if="isOpened">
        <div
          class="pt-24 pb-8 flex px-8"
        >
          <p class="text-m-m lg:text-m font-semibold font-robotoslab text-white flex-1">N° lot</p>
          <p class="text-m-m lg:text-m font-semibold font-robotoslab text-white flex-1">Surface</p>
          <p class="text-m-m lg:text-m font-semibold font-robotoslab text-white flex-1">Étage</p>
          <p class="text-m-m lg:text-m font-semibold font-robotoslab text-white flex-2">Annexes</p>
          <p class="text-m-m lg:text-m font-semibold font-robotoslab text-white flex-1">Parking</p>
          <p class="text-m-m lg:text-m font-semibold font-robotoslab text-white flex-2">Prix</p>
        </div>
        <div
          class="p-8 flex even:bg-white even:bg-opacity-10"
          v-for="(lot,i) in unit.lots"
          :key="i"
        >
          <p class="text-s-m lg:text-s font-robotoslab text-white flex-1">{{ lot.lot }}</p>
          <p class="text-s-m lg:text-s font-robotoslab text-white flex-1">{{ lot.surface.toLocaleString() }} m<sup>2</sup></p>
          <p class="text-s-m lg:text-s font-robotoslab text-white flex-1">{{ lot.etage }}</p>
          <p class="text-s-m lg:text-s font-robotoslab text-white flex-2 lowercase first-letter:uppercase">{{ lot.annexes }}</p>
          <p class="text-s-m lg:text-s font-robotoslab text-white flex-1">{{ lot.parking ? '1' : '-' }}</p>
          <div class="flex-2 flex gap-16 items-center">
            <p class="text-s-m lg:text-s text-white font-robotoslab">
              {{ lot.prix.toLocaleString() }} €
            </p>
            <p class="text-xs-m lg:text-xs font-robotoslab text-white">
              (TVA 20%)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    unit: {
      type: Object,
      default: () => {}
    },
    isOpened: {
      type: Boolean,
      default: () => false
    },
    isLast: {
      type: Boolean,
      default: () => false
    },
    actualUnit: {
      type: Number,
      default: () => 0
    }
  },

  computed: {
    unitType () {
      if (this.unit.nbPieces === 1) {
        return 'Studio'
      } else {
        return this.unit.nbPieces + ' pièces'
      }
    }
  }
}
</script>