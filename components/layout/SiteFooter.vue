<template>
  <div class="pb-20">
    <div class="relative flex justify-center items-center py-32 lg:py-40 px-8">
      <div class="absolute w-full h-full z-0">
        <nuxt-img
          src="/img/bg-nuage.jpg"
          alt="Nuage"
          class="w-full h-full object-cover"
          loading="lazy"
          format="webp"
        />
      </div>
      <div class="lg:text-center relative z-10">
        <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black">
          Pour nous rencontrer
        </h3>
        <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-4 lg:mb-16 uppercase text-white">
          Où nous trouver
        </h2>
        <p class="text-s-m lg:text-s font-robotoslab text-white">
          Espace de vente Ki<br />
          19 Boulevard Eugène Deruelle, Lyon 3<br />
          Du lundi au samedi de 10h à 19h
        </p>
        <div class="lg:flex justify-center gap-10 mt-16">
          <a
            href="https://goo.gl/maps/e9tCba2dSkghoSbF8"
            target="_blank"
            title="Se rendre à l'espace de vente Ki"
            class="button inline-block bg-white mb-4 lg:mb-0"
          >
            Je m'y rends
          </a>
          <span
            class="button inline-block bg-white"
            v-scroll-to="'#contact'"
          >
            Je prends rendez-vous
          </span>
        </div>
      </div>
    </div>
    <div
      id="contact"
      class="bg-bleu-1 px-8 lg:px-40 pt-40 lg:pt-64 pb-24 lg:pb-32 bg-opacity-10"
    >
      <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black lg:text-center">
        Pour nous contacter
      </h3>
      <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-16 uppercase lg:text-center lg:max-w-[725px] lg:mx-auto">
        Quelques mots sur vous pour tout savoir sur cette adresse&nbsp;!
      </h2>

      <form
        action=""
      >
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-center mb-16">
          <p class="text-placeholder font-medium font-roboto">
            J'aimerais :
          </p>

          <label
            class="block relative pl-10 cursor-pointer select-none items-center custom-checkbox"
            v-for="(wouldLike, i) in wouldLikeOptions"
            :key="i"
            :for="wouldLike.id"
          >
            <input
              :id="wouldLike.id"
              :value="wouldLike.id"
              type="checkbox"
              class="absolute opacity-0 cursor-pointer h-0 w-0"
              v-model="wouldLikeSelected"
            >
            <span class="text-placeholder font-roboto">{{ wouldLike.label }}</span>
            <span
              class="absolute top-1/2 transform -translate-y-1/2 left-0 h-6 w-6 border rounded border-black border-solid after:absolute after:content-[] after:opacity-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-4 after:h-4 after:bg-bleu-2 after:rounded after:transition-opacity checkmark"
            ></span>
          </label>
        </div>

        <div class="flex flex-col lg:flex-row justify-center gap-8 lg:gap-40">
          <div class="flex gap-10 lg:justify-center">
            <p class="text-placeholder font-medium font-roboto">
              Civilité :
            </p>

            <label
              class="block relative pl-10 cursor-pointer select-none items-center custom-checkbox"
              v-for="(gender, i) in genderOptions"
              :key="i"
              :for="gender.id"
            >
              <input
                :id="gender.id"
                :value="gender.id"
                type="radio"
                class="absolute opacity-0 cursor-pointer h-0 w-0"
                v-model="genderSelected"
              >
              <span class="text-placeholder font-roboto">{{ gender.label }}</span>
              <span
                class="absolute top-1/2 transform -translate-y-1/2 left-0 h-6 w-6 border rounded-full border-black border-solid after:absolute after:content-[] after:opacity-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-4 after:h-4 after:bg-bleu-2 after:rounded-full after:transition-opacity checkmark"
              ></span>
            </label>
          </div>

          <div class="flex gap-10 lg:justify-center">
            <p class="text-placeholder font-medium font-roboto">
              Vous souhaitez :
            </p>

            <label
              class="block relative pl-10 cursor-pointer select-none items-center custom-checkbox"
              v-for="(wish, i) in wishOptions"
              :key="i"
              :for="wish.id"
            >
              <input
                :id="wish.id"
                :value="wish.id"
                type="radio"
                class="absolute opacity-0 cursor-pointer h-0 w-0"
                v-model="wishSelected"
              >
              <span class="text-placeholder font-roboto">{{ wish.label }}</span>
              <span
                class="absolute top-1/2 transform -translate-y-1/2 left-0 h-6 w-6 border rounded-full border-black border-solid after:absolute after:content-[] after:opacity-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-4 after:h-4 after:bg-bleu-2 after:rounded-full after:transition-opacity checkmark"
              ></span>
            </label>
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 items-center">
          <div class="relative">
            <input
              type="text"
              class="w-full h-full border border-black border-solid rounded px-4 py-8"
              v-model="lastname"
              id="lastname"
            >
            <label
              for="lastname"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder font-roboto"
            >
              Nom *
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              class="w-full h-full border border-black border-solid rounded px-4 py-8"
              v-model="firstname"
              id="firstname"
            >
            <label
              for="firstname"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder font-roboto"
            >
              Prénom *
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              class="w-full h-full border border-black border-solid rounded px-4 py-8"
              v-model="tel"
              id="tel"
            >
            <label
              for="tel"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder font-roboto"
            >
              Numéro de téléphone *
            </label>
          </div>

          <div class="relative">
            <input
              type="email"
              class="w-full h-full border border-black border-solid rounded px-4 py-8"
              v-model="email"
              id="email"
            >
            <label
              for="email"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder font-roboto"
            >
              Email *
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              class="w-full h-full border border-black border-solid rounded px-4 py-8"
              v-model="postalCode"
              id="postalCode"
            >
            <label
              for="postalCode"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder font-roboto"
            >
              Code Postal *
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              class="w-full h-full border border-black border-solid rounded px-4 py-8"
              v-model="city"
              id="city"
            >
            <label
              for="city"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder font-roboto"
            >
              Ville *
            </label>
          </div>

          <p class="text-placeholder font-medium font-roboto lg:text-center">
            Vos disponibilités pour un RDV en visioconférence :
          </p>
          <div class="relative">
            <input
              type="email"
              class="w-full h-full border border-black border-solid rounded px-4 py-8"
              v-model="date"
              id="date"
            >
            <label
              for="date"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder font-roboto"
            >
              Date *
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              class="w-full h-full border border-black border-solid rounded px-4 py-8"
              v-model="hour"
              id="hour"
            >
            <label
              for="hour"
              class="absolute top-1/2 left-4 transform -translate-y-1/2 text-placeholder font-roboto"
            >
              Heure de RDV souhaitée *
            </label>
          </div>
        </div>

        <div class="flex lg:justify-center mt-8 mb-20">
          <label
            class="block relative pl-14 lg:pl-10 cursor-pointer select-none items-center custom-checkbox"
            for="nl"
          >
            <input
              id="nl"
              value="nl"
              type="checkbox"
              class="absolute opacity-0 cursor-pointer h-0 w-0"
              v-model="nl"
            >
            <span class="text-placeholder font-roboto">J’accepte de recevoir des alertes et des contenus personnalisés de la part de Pitch Immo m’informant de ses produits et services.</span>
            <span
              class="absolute top-1/2 transform -translate-y-1/2 left-0 h-6 w-6 border rounded border-black border-solid after:absolute after:content-[] after:opacity-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-4 after:h-4 after:bg-bleu-2 after:rounded after:transition-opacity checkmark"
            ></span>
          </label>
        </div>

        <div class="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 lg:gap-10">
          <p class="text-xs-m lg:text-xs font-robotoslab">* Champs obligatoires</p>
          <div>
            <input
              type="submit"
              class="button bg-bleu-2 text-white"
              value="Je valide"
            >
          </div>
        </div>
      </form>

      <p class="text-xs-m lg:text-xs text-black text-opacity-50 mt-20 font-robotoslab">
        Les données signalées ci-dessus par un astérisque sont nécessaires pour nous permettre de répondre à votre demande d'information. Elles sont collectées et traitées informatiquement par PITCH IMMO (société du groupe ALTAREA) uniquement sur la base de votre consentement. Pour en savoir plus sur le traitement de vos données et vos droits, consultez notre politique de protection des données.
      </p>
    </div>

    <!-- <div class="pt-32 lg:pt-64 px-8 lg:px-40">
      <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black lg:text-center">
        Foire aux questions
      </h3>
      <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-16 uppercase lg:text-center">
        Tout savoir sur les programmes immobiliers neufs
      </h2>
    </div> -->

    <div class="px-40 relative before:content-[] before:absolute before:w-full before:h-px before:top-1/2 before:bg-black before:bg-opacity-10 before:left-0 mt-20 flex justify-center lg:justify-end before:z-0">
      <div
        class="w-24 h-24 relative z-10 bg-white border border-solid border-black border-opacity-10 rounded-full flex justify-center items-center cursor-pointer"
        v-scroll-to="'#top'"
      >
        <arrow-bottom class="rotate-180 w-4 h-auto" />
      </div>
    </div>

    <div class="pt-28 px-8 lg:px-40 lg:flex justify-between">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        <div class="w-full lg:w-auto flex lg:gap-32 justify-between lg:justify-start">
          <div>
            <logo-pitch-immo class="max-w-[76px] lg:max-w-none" />
          </div>
          <p class="text-xs-m lg:text-xs font-robotoslab">
            Espace de vente Ki<br />
            19 Boulevard Eugène Deruelle, Lyon 3<br />
            Du lundi au samedi de 10h à 19h
          </p>
        </div>
        <a
          href="tel:+33800123123"
          title="Numéro vert"
          class="w-full lg:w-auto"
        >
          <nuxt-img
            src="/img/numero.png"
            alt="Numéro vert"
            class="w-full lg:w-[267px]"
            loading="lazy"
            format="webp"
          />
          <p class="text-xs-m lg:text-xs mt-2 font-robotoslab text-center lg:text-left">
            Nos conseillers sont à votre écoute
          </p>
        </a>
      </div>
      <div class="flex justify-center lg:justify-start gap-10 mt-16 lg:mt-0">
        <a
          href="https://www.instagram.com/pitch_immo"
          target="_blank"
          title="Instagram"
          class="w-24 h-24 relative bg-white border border-solid border-black border-opacity-10 rounded-full flex justify-center items-center"
        >
          <instagram class="w-8 h-auto" />
        </a>
        <a
          href="https://www.facebook.com/pitchimmo"
          target="_blank"
          title="Facebook"
          class="w-24 h-24 relative bg-white border border-solid border-black border-opacity-10 rounded-full flex justify-center items-center"
        >
          <facebook class="w-8 h-auto" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCgsir2lc2uerOH0PSMCEoSQ"
          target="_blank"
          title="YouTube"
          class="w-24 h-24 relative bg-white border border-solid border-black border-opacity-10 rounded-full flex justify-center items-center"
        >
          <youtube class="w-8 h-auto" />
        </a>
      </div>
    </div>

    <div class="pt-20 px-40 flex flex-col lg:flex-row gap-4 lg:gap-10 items-center">
      <nuxt-link
        to="/donnees-personnelles"
        title="Données personnelles"
        class="text-xs-m lg:text-xs underline font-robotoslab"
      >
        Données personnelles
      </nuxt-link>
      <span class="hidden lg:block text-cta2 font-robotoslab">
        |
      </span>
      <nuxt-link
        to="/politique-cookies"
        title="Politique des cookies"
        class="text-xs-m lg:text-xs underline font-robotoslab"
      >
        Politique des cookies
      </nuxt-link>
      <span class="hidden lg:block text-cta2 font-robotoslab">
        |
      </span>
      <nuxt-link
        to="/mentions-legales"
        title="Mentions légales"
        class="text-xs-m lg:text-xs underline font-robotoslab"
      >
        Mentions légales
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import ArrowBottom from '@/assets/img/svg/arrow-bottom.svg?inline'
  import LogoPitchImmo from '@/assets/img/svg/logo-pitch-immo.svg?inline'
  import Instagram from '@/assets/img/svg/instagram.svg?inline'
  import Facebook from '@/assets/img/svg/facebook.svg?inline'
  import Youtube from '@/assets/img/svg/youtube.svg?inline'

  export default {
    data () {
      return {
        wouldLikeSelected: [],
        wouldLikeOptions: [
          {
            id: 'brochure',
            label: 'Recevoir la brochure'
          },
          {
            id: 'infos',
            label: 'Obtenir plus d’informations'
          },
          {
            id: 'call',
            label: 'Être appelé'
          },
          {
            id: 'visio',
            label: 'Planifier un RDV en visioconférence'
          },
          {
            id: 'rdv',
            label: 'Prendre RDV en espace de vente'
          }
        ],
        genderSelected: '',
        genderOptions: [
          {
            id: 'femme',
            label: 'Mme.'
          },
          {
            id: 'homme',
            label: 'M.'
          }
        ],
        wishSelected: '',
        wishOptions: [
          {
            id: 'habiter',
            label: 'Habiter'
          },
          {
            id: 'investir',
            label: 'Investir'
          }
        ],
        lastname: '',
        firstname: '',
        tel: '',
        email: '',
        postalCode: '',
        city: '',
        date: '',
        hour: '',
        nl: ''
      }
    },

    components: {
      ArrowBottom,
      LogoPitchImmo,
      Instagram,
      Facebook,
      Youtube
    }
  }
</script>

<style>
.custom-checkbox input:checked ~ .checkmark::after {
  @apply opacity-100;
}
.custom-checkbox input:checked ~ span:not(.checkmark) {
  @apply font-medium;
}
</style>