<template>
  <div id="top">
    <site-header />
    <main role="main" class="bg-white max-w-1512px mx-auto">
      <Nuxt />
    </main>
    <site-footer class="bg-white max-w-1512px mx-auto" />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'

export default {
  components: {
    SiteHeader,
    SiteFooter
  },

  mounted() {
    window.addEventListener('resize', this.appHeight())
    this.appHeight()
  },

  methods: {
    appHeight () {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }
}
</script>