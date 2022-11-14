<template>
  <div id="top">
    <site-header @needBrochure="needBrochureChecked = true" />
    <main role="main" class="bg-white max-w-1512px mx-auto">
      <Nuxt />
    </main>
    <site-footer :needBrochureChecked="needBrochureChecked" class="bg-white max-w-1512px mx-auto" />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'

export default {
  data () {
    return {
      needBrochureChecked: false
    }
  },

  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>