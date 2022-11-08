<template>
  <div class="pb-20">
    <div
      id="contact"
      class="bg-bleu-1 px-40 pt-64 pb-32 bg-opacity-10"
    >
      <h3 class="text-h4 font-roboto uppercase text-bleu-1 font-black text-center">
        Pour nous contacter
      </h3>
      <h2 class="text-h2 font-black font-roboto mt-4 mb-16 uppercase text-center">
        Quelques mots sur vous<br />
        pour tout savoir sur cette adresse !
      </h2>

      <p class="text-xs text-black text-opacity-50 mt-20">
        Les données signalées ci-dessus par un astérisque sont nécessaires pour nous permettre de répondre à votre demande d'information. Elles sont collectées et traitées informatiquement par PITCH IMMO (société du groupe ALTAREA) uniquement sur la base de votre consentement. Pour en savoir plus sur le traitement de vos données et vos droits, consultez notre politique de protection des données.
      </p>
    </div>

    <div class="pt-64 px-40">
      <h3 class="text-h4 font-roboto uppercase text-bleu-1 font-black text-center">
        Foire aux questions
      </h3>
      <h2 class="text-h2 font-black font-roboto mt-4 mb-16 uppercase text-center">
        Tout savoir sur les programmes immobiliers neufs
      </h2>
    </div>

    <div class="pt-40 px-40">
      <p class="text-xs text-black text-opacity-50">
        Mentions légales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis tortor dolor sed lobortis tortor velit sed. Semper sagittis praesent elit, varius. Non cursus praesent faucibus proin. Condimentum vulputate aenean odio nullam magna morbi. Consectetur lacus egestas egestas sed egestas eleifend lorem orci. Turpis pharetra massa, gravida integer amet, bibendum ullamcorper. Libero, tristique viverra interdum magna. Venenatis est netus auctor quam. Sit ac elementum dolor, facilisis. Consectetur duis tellus faucibus purus pellentesque neque, nullam tortor at. Porttitor nisl velit est eros eget ultricies nisl. Consequat feugiat quis faucibus molestie lacus ut vitae. Id interdum sed turpis non pretium. Sapien pellentesque bibendum erat proin. Nascetur tempus, adipiscing turpis pretium viverra turpis est adipiscing.
        Molestie porttitor fames sed leo arcu nulla fusce nam. Eu non nibh feugiat senectus metus, risus a cras. Morbi sit duis fermentum feugiat pretium quis iaculis libero. A tincidunt pharetra, nam lectus tincidunt eget justo. Nulla sed et, et tincidunt id. Molestie sed proin tempus nec turpis. At cursus facilisis at molestie sit mattis. Urna consectetur blandit cras dignissim vel. Mattis tincidunt ultrices non tortor in. Aliquet eu egestas enim feugiat aliquam lorem nibh. Ipsum at dignissim pellentesque scelerisque porttitor lacus, facilisis. Tempus sit dictum a senectus non nunc magna blandit.
      </p>
    </div>

    <div class="px-40 relative before:content-[] before:absolute before:w-full before:h-px before:top-1/2 before:bg-black before:bg-opacity-10 before:left-0 mt-20 flex justify-end before:z-0">
      <div
        class="w-24 h-24 relative z-10 bg-white border border-solid border-black border-opacity-10 rounded-full flex justify-center items-center cursor-pointer"
        v-scroll-to="'#top'"
      >
        <arrow-bottom class="rotate-180 w-4 h-auto" />
      </div>
    </div>

    <div class="pt-32 px-40 flex justify-between">
      <div>
        
      </div>
    </div>
  </div>
</template>

<script>
  import ArrowBottom from '@/assets/img/svg/arrow-bottom.svg?inline'
  import LogoPitchImmo from '@/assets/img/svg/logo-pitch-immo.svg?inline'

  export default {
    components: {
      ArrowBottom,
      LogoPitchImmo
    }
  }
</script>