<template>
  <div class="flex flex-col lg:flex-row gap-10 justify-between py-20">
    <div>
      <h3 class="text-h3-m lg:text-h3 font-black font-roboto uppercase pt-6">
        {{ qa.question }}
      </h3>
      <div
        v-if="isOpened"
        class="pt-12"
      >
        <div
          v-html="qa.answer"
          class="answer mb-8"
        />
        <a
          :href="qa.link.href"
          target="_blank"
          :title="qa.link.label"
          class="text-s-m lg:text-s underline font-robotoslab hover:no-underline"
        >
          {{ qa.link.label }}
        </a>
      </div>
    </div>
    <div>
      <div
        class="button inline-block bg-white mb-4 lg:mb-0 cursor-pointer see-more"
        @click="isOpened = !isOpened"
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
</template>

<script>
import Minus from '@/assets/img/svg/minus.svg?inline'
import Plus from '@/assets/img/svg/plus.svg?inline'

export default {
  props: {
    qa: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      isOpened: false
    }
  },

  components: {
    Plus,
    Minus
  }
}
</script>