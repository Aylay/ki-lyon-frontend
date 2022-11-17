<template>
  <div class="pb-20">
    <div class="relative flex justify-center items-center py-32 lg:py-40 px-8">
      <div class="absolute w-full h-full z-0">
        <nuxt-img
          src="/img/bg-nuage.jpg"
          alt="Nuage"
          class="w-full h-full object-cover"
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
          Ouverture dès le lundi 14 novembre de 14h à 19h<br /> 
          du mardi au samedi de 9h à 19h
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
        @submit.prevent="addProspect"
        v-if="!formSent"
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
              name="wouldLikeSelected"
              v-model="wouldLikeSelected"
              @change="wouldLikeUpdate($event.target.value)"
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
              class="w-full text-placeholder font-roboto h-full border border-black border-solid rounded px-4 py-8"
              v-model="lastname"
              id="lastname"
              placeholder="Nom *"
            >
          </div>
          <div class="relative">
            <input
              type="text"
              class="w-full text-placeholder font-roboto h-full border border-black border-solid rounded px-4 py-8"
              v-model="firstname"
              id="firstname"
              placeholder="Prénom *"
            >
          </div>
          <div class="relative">
            <vue-tel-input
              v-model="phone"
              defaultCountry='FR'
              :inputOptions='phoneInputOptions'
              styleClasses="custom-vue-tel-input"
            ></vue-tel-input>
          </div>

          <div class="relative">
            <input
              type="email"
              class="w-full text-placeholder font-roboto h-full border border-black border-solid rounded px-4 py-8"
              v-model="email"
              id="email"
              placeholder="Email *"
            >
          </div>
          <div class="relative">
            <input
              type="text"
              class="w-full text-placeholder font-roboto h-full border border-black border-solid rounded px-4 py-8"
              v-model="postalCode"
              id="postalCode"
              placeholder="Code postal *"
            >
          </div>
          <div class="relative">
            <input
              type="text"
              class="w-full text-placeholder font-roboto h-full border border-black border-solid rounded px-4 py-8"
              v-model="city"
              id="city"
              placeholder="Ville *"
            >
          </div>
        </div>

        <div
          class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 items-center"
          v-if="wouldLikeSelected.includes('visio') || wouldLikeSelected.includes('rdv') || wouldLikeSelected.includes('call')"
        >
          <p
            class="text-placeholder font-medium font-roboto lg:text-center"
            v-if="wouldLikeSelected.includes('visio')"
          >
            Vos disponibilités pour un RDV en visioconférence :
          </p>
          <p
            class="text-placeholder font-medium font-roboto lg:text-center"
            v-else-if="wouldLikeSelected.includes('rdv')"
          >
            Vos disponibilités pour un RDV en espace de vente :
          </p>
          <p
            class="text-placeholder font-medium font-roboto lg:text-center"
            v-else-if="wouldLikeSelected.includes('call')"
          >
            Vos disponibilités pour être rappelé :
          </p>
          <div
            class="relative"
            v-if="wouldLikeSelected.includes('visio') || wouldLikeSelected.includes('rdv')"
          >
            <client-only>
              <date-picker
                placeholder="Date *"
                format="dd/MM/yyyy"
                v-model="date"
                name="date"
                :language="fr"
                input-class="w-full text-placeholder font-roboto h-full border border-black border-solid rounded px-4 py-8 bg-white"
                calendar-class="!w-full"
                :disabledDates="disabledDates"
                :monday-first="true"
                :full-month-name="true"
                @selected="pickedADate($event)"
              />
            </client-only>
          </div>
          <div class="relative">
            <select
              name="hour"
              v-model="hourSelected"
              id="hour"
              class="w-full text-placeholder font-roboto h-full border border-black border-solid rounded px-4 py-8 disabled:opacity-25 transition-opacity"
              :disabled="hourAvailable ? false : true"
            >
              <option value="">Heure de RDV souhaitée *</option>

              <option
                v-for="(hour,i) in hourOptions"
                :key="i"
                :value="hour"
              >
                {{ hour }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex lg:justify-center mt-8">
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

        <div
          class="mt-8 flex flex-col gap-2"
          v-if="messageDisplay.length > 0"
        >
          <p
            class="text-xs-m lg:text-xs font-robotoslab text-rouge text-center"
            v-for="(message, i) in messageDisplay"
            :key="i"
            v-html="message"
          />
        </div>

        <div class="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 lg:gap-10 mt-20">
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

      <div v-else>
        <p class="text-m-m lg:text-m font-semibold font-robotoslab text-center mb-4">Merci {{ genderSelected === 'madame' ? 'Madame' : 'Monsieur' }} {{ lastname }} !</p>
        <div
          v-if="wouldLikeSelected.includes('brochure') && !wouldLikeSelected.includes('infos') && !wouldLikeSelected.includes('call') && !wouldLikeSelected.includes('visio') && !wouldLikeSelected.includes('rdv')"
          class="text-center"
        >
          <p class="text-m-m lg:text-m font-robotoslab text-center mb-16">
            Vous pouvez maintenant télécharger la brochure en cliquant sur le bouton ci-dessous 
          </p>
          <a
            href="/Ki-brochure.pdf"
            class="button text-white bg-bleu-2"
            target="_blank"
          >
            <div class="flex gap-4">
              <span>
                Télécharger la brochure
              </span>
              <brochure />
            </div>
          </a>
        </div>

        <div
          v-if="wouldLikeSelected.includes('infos') && !wouldLikeSelected.includes('brochure') && !wouldLikeSelected.includes('call') && !wouldLikeSelected.includes('visio') && !wouldLikeSelected.includes('rdv')"
          class="text-center"
        >
          <p class="text-m-m lg:text-m font-robotoslab text-center">
            Nous avons pris en compte votre demande d’informations et nous vous recontacterons très prochainement.
          </p>
        </div>

        <div
          v-if="wouldLikeSelected.includes('infos') && wouldLikeSelected.includes('brochure') && !wouldLikeSelected.includes('call') && !wouldLikeSelected.includes('visio') && !wouldLikeSelected.includes('rdv')"
          class="text-center"
        >
          <p class="text-m-m lg:text-m font-robotoslab text-center mb-16">
            Nous avons pris en compte votre demande d’informations. Un conseiller prendra contact avec vous dans les plus brefs délais.
          </p>
          <a
            href="/Ki-brochure.pdf"
            class="button text-white bg-bleu-2"
            target="_blank"
          >
            <div class="flex gap-4">
              <span>
                Télécharger la brochure
              </span>
              <brochure />
            </div>
          </a>
        </div>

        <div
          v-if="wouldLikeSelected.includes('call')"
          class="text-center"
        >
          <p class="text-m-m lg:text-m font-robotoslab text-center mb-16">
            Nous avons pris en compte votre demande de rappel concernant la résidence Ki à Lyon et vous en remercions. <br />
            Un conseiller prendra contact avec vous dans les plus brefs délais. 
          </p>

          <a
            href="/Ki-brochure.pdf"
            class="button text-white bg-bleu-2"
            target="_blank"
            v-if="wouldLikeSelected.includes('brochure')"
          >
            <div class="flex gap-4">
              <span>
                Télécharger la brochure
              </span>
              <brochure />
            </div>
          </a>
        </div>

        <div
          v-if="wouldLikeSelected.includes('visio') || wouldLikeSelected.includes('rdv')"
          class="text-center"
        >
          <p class="text-m-m lg:text-m font-robotoslab text-center mb-16">
            Nous vous recontacterons très rapidement pour vous confirmer la date et l’heure du rendez-vous. <br />
            A bientôt !
          </p>

          <a
            href="/Ki-brochure.pdf"
            class="button text-white bg-bleu-2"
            target="_blank"
            v-if="wouldLikeSelected.includes('brochure')"
          >
            <div class="flex gap-4">
              <span>
                Télécharger la brochure
              </span>
              <brochure />
            </div>
          </a>
        </div>
      </div>

      <p class="text-xs-m lg:text-xs text-black text-opacity-50 mt-20 font-robotoslab">
        Les données signalées ci-dessus par un astérisque sont nécessaires pour nous permettre de répondre à votre demande d'information. Elles sont collectées et traitées informatiquement par PITCH IMMO (société du groupe ALTAREA) uniquement sur la base de votre consentement. Pour en savoir plus sur le traitement de vos données et vos droits, consultez notre politique de protection des données.
      </p>
    </div>

    <qas v-if="this.$route.fullPath === '/'" />

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
            Ouverture dès le lundi 14 novembre de 14h à 19h<br /> 
            du mardi au samedi de 9h à 19h
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
  import Brochure from '@/assets/img/svg/brochure.svg?inline'

  import Qas from '@/components/Qas'

  import { fr } from 'vuejs-datepicker/dist/locale'

  export default {
    props: {
      needBrochureChecked: {
        type: Boolean,
        default: () => true
      }
    },

    data () {
      return {
        formSent: false,
        fr: fr,
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
        genderSelected: 'madame',
        genderOptions: [
          {
            id: 'madame',
            label: 'Mme.'
          },
          {
            id: 'monsieur',
            label: 'M.'
          }
        ],
        wishSelected: 'habiter',
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
        phone: '',
        email: '',
        postalCode: '',
        city: '',
        date: '',
        hourSelected: '',
        hourOptions: [],
        nl: '',
        disabledDates: {},
        messageDisplay: [],
        strapiURL: process.env.STRAPI_URL,
        nlChecked: false,
        phoneInputOptions: {
          placeholder: 'Numéro de téléphone *',
          id: 'phone'
        },
        postalCodeOptions: ['op1', 'op2', 'op3'],
        hourAvailable: false
      }
    },

    watch: {
      needBrochureChecked () {
        document.getElementById('brochure').checked = true
        this.wouldLikeSelected.push('brochure')
      }
    },

    components: {
      ArrowBottom,
      LogoPitchImmo,
      Instagram,
      Facebook,
      Youtube,
      Brochure,
      Qas
    },

    mounted () {
      const tomorrow =this.$moment().add(1, 'days').format('YYYY, MM, DD');

      this.disabledDates = {
        to: new Date(tomorrow),
        days: [0]
      }
    },

    methods: {
      async addProspect () {
        this.checkForm()
        if (this.messageDisplay.length === 0) {
          let newWouldLike = this.wouldLikeSelected.slice()
          let brochure = false
          if (this.wouldLikeSelected.includes('brochure')) {
            brochure = true
            newWouldLike = newWouldLike.filter(e => e !== 'brochure');
          }
          
          let info = false
          if (this.wouldLikeSelected.includes('infos')) {
            info = true
            newWouldLike = newWouldLike.filter(e => e !== 'infos')
          }

          let type = newWouldLike.length > 0 ? newWouldLike[0] : null

          let utmSource = this.$route.query.utm_source ? this.$route.query.utm_source : 'acces_direct'
          let utmMedium = this.$route.query.utm_medium ? this.$route.query.utm_medium : 'acces_direct'
          let utmCampagne = this.$route.query.utm_campaign ? this.$route.query.utm_campaign : 'acces_direct'
          try {
            await this.$axios.$post("https://admin.ki-lyon.fr/api/prospects", {
            // await this.$axios.$post(this.strapiURL + "/api/prospects", {
              data: {
                type: type,
                brochure: brochure,
                info: info,
                civilite: this.genderSelected,
                interet: this.wishSelected,
                nom: this.lastname,
                prenom: this.firstname,
                telephone: this.phone,
                email: this.email,
                codePostal: this.postalCode,
                ville: this.city,
                date: this.$moment(this.date).format('DD/MM/YYYY'),
                heure: this.hourSelected,
                utmSource: utmSource,
                utmMedium: utmMedium,
                utmCampagne: utmCampagne,
                dateSoumission: this.$moment().format('DD/MM/YYYY'),
                nl: this.nl ? this.nl : false
              }
            })
          } catch (error) {
            
          }

          this.$scrollTo('#contact')

          this.$gtm.push({
            event: 'conversion',
            'send_to': 'AW-10785325481/a9WHCLyQuP4CEKmD7JYo',
            'event_callback': this.callback()
          })
          
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "/tiktok.js";
          document.head.appendChild(script);

          this.formSent = true
        }
      },

      checkForm () {
        this.messageDisplay = []

        if (this.wouldLikeSelected.length === 0) {
          this.messageDisplay.push("Votre souhait est manquant.")
        }

        if (this.genderSelected === '') {
          this.messageDisplay.push("Votre civilité est manquante.")
        }

        if (this.wishSelected === '') {
          this.messageDisplay.push("Votre intérêt est manquant.")
        }

        if (this.lastname === '') {
          this.messageDisplay.push("Votre nom est manquant.")
        }

        if (this.firstname === '') {
          this.messageDisplay.push("Votre prénom est manquant.")
        }
        
        this.checkPhone()

        this.checkEmail()

        if (this.postalCode === '') {
          this.messageDisplay.push("Votre code postal est manquant.")
        }

        if (this.city === '') {
          this.messageDisplay.push("Votre vile est manquante.")
        }

        if (this.message === '') {
          this.messageDisplay.push("Votre message est manquant.")
        }

        if (this.wouldLikeSelected.includes('call') && this.hourSelected === '') {
          this.messageDisplay.push("Votre heure de rappel est manquante.")
        }

        if (this.wouldLikeSelected.includes('visio') || this.wouldLikeSelected.includes('rdv')) {
          if (this.date === '') {
            this.messageDisplay.push("Votre date est manquante.")
          }

          if (this.hourSelected === '') {
            this.messageDisplay.push("Votre heure de RDV est manquante.")
          }
        }

        if (!this.nlChecked) {
          if (this.nl === '' || !this.nl) {
            this.nlChecked = true
            this.messageDisplay.push("<span class='font-bold'>Vous y êtes presque !</span> Une demande d’autorisation nécessite une validation de votre part.")
            this.messageDisplay.push("En cochant cette case, vous nous donnez tout simplement votre consentement pour vous recontacter et surtout vous accompagner vers votre rêve de propriété.")
          }
        }
      },

      checkPhone (){
        if (this.phone !== '') {
          if (!this.validPhone(this.phone)) {
            this.messageDisplay.push("Votre numéro de téléphone semble invalide.")
          }
        } else {
          this.messageDisplay.push("Votre numéro de téléphone est manquant.")
        }
      },

      checkEmail (){
        if (this.email !== '') {
          if (!this.validEmail(this.email)) {
            this.messageDisplay.push("Votre email semble invalide.")
          }
        } else {
          this.messageDisplay.push("Votre email est manquant.")
        }
      },

      clean () {
        this.wouldLikeSelected = []
        this.genderSelected = ''
        this.wishSelected = ''
        this.lastname = ''
        this.firstname = ''
        this.phone = ''
        this.email = ''
        this.postalCode = ''
        this.city = ''
        this.date = ''
        this.hourSelected = ''
        this.nl = ''
      },

      validEmail (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      },

      validPhone (phone) {
        const re = /^([0-9]{2}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2})$/
        return re.test(phone)
        
      },

      wouldLikeUpdate (e) {
        const callVisio = ['call', 'visio'];
        const callRdv = ['call', 'rdv'];
        const visioRdv = ['visio', 'rdv'];
        const allValuesToDelete = ['call','visio', 'rdv'];
        this.hourOptions = []

        const callVisioExist = callVisio.every(val => {
          return this.wouldLikeSelected.includes(val);
        })

        const callRdvExist = callRdv.every(val => {
          return this.wouldLikeSelected.includes(val);
        })

        const visioRdvExist = visioRdv.every(val => {
          return this.wouldLikeSelected.includes(val);
        })

        if (callVisioExist || callRdvExist || visioRdvExist) {
          this.wouldLikeSelected = this.wouldLikeSelected.filter(value => !allValuesToDelete.includes(value));
          this.wouldLikeSelected.push(e)
        }

        if (this.wouldLikeSelected.includes('call')) {
          this.hourAvailable = true
          this.hourOptions = [
            '10h00 - 11h00',
            '11h00 - 12h00',
            '12h00 - 13h00',
            '13h00 - 14h00',
            '14h00 - 15h00',
            '15h00 - 16h00',
            '16h00 - 17h00',
            '17h00 - 18h00',
          ]
        }
        
        if (this.wouldLikeSelected.includes('visio') || this.wouldLikeSelected.includes('rdv')) {
          if (this.date === '') {
            this.hourAvailable = false
          } else {
            if (this.$moment(this.date).weekday() === 0) {
              this.hourOptions = [
                '14h00 - 15h00',
                '15h00 - 16h00',
                '16h00 - 17h00',
                '17h00 - 18h00',
                '18h00 - 19h00'
              ]
            } else {
              this.hourOptions = [
                '10h00 - 11h00',
                '11h00 - 12h00',
                '12h00 - 13h00',
                '13h00 - 14h00',
                '14h00 - 15h00',
                '15h00 - 16h00',
                '16h00 - 17h00',
                '17h00 - 18h00',
                '18h00 - 19h00'
              ]
            }
          }
        }
      },

      pickedADate (e) {
        if (e.length) {
          this.hourAvailable = false
          return
        }

        this.hourAvailable = true
        if (this.wouldLikeSelected.includes('visio') || this.wouldLikeSelected.includes('rdv')) {
          if (this.$moment(e).weekday() === 0) {
            this.hourOptions = [
              '14h00 - 15h00',
              '15h00 - 16h00',
              '16h00 - 17h00',
              '17h00 - 18h00',
              '18h00 - 19h00'
            ]
          } else {
            this.hourOptions = [
              '10h00 - 11h00',
              '11h00 - 12h00',
              '12h00 - 13h00',
              '13h00 - 14h00',
              '14h00 - 15h00',
              '15h00 - 16h00',
              '16h00 - 17h00',
              '17h00 - 18h00',
              '18h00 - 19h00'
            ]
          }
        }

        if (this.hourSelected.length && !this.hourOptions.includes(this.hourSelected)) {
          this.hourSelected = ''
          document.getElementById('hour').value = ''
        }
      },

      callback () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      }
    },

    beforeMount () {
    },

    beforeDestroy () {
      this.$bus.$off('dl-brochure', (menuOpened) => {
        this.menuOpened = menuOpened
      })
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

.vue-tel-input.custom-vue-tel-input {
 @apply w-full text-placeholder font-roboto h-full border border-black border-solid rounded p-0 bg-white focus-within:border-black focus-within:shadow-none;
}
.vue-tel-input.custom-vue-tel-input .vti__input {
 @apply px-4 py-[1.7rem];
}
</style>