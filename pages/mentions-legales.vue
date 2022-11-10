<template>
  <div class="px-4 mb-40">
    <div
      class="mt-12 flex justify-center items-center gap-4"
    >
      <nuxt-link
        to="/"
        title="Accueil Ki"
        class="underline text-xs-m lg:text-xs"
      >
        Accueil
      </nuxt-link>
      <span
        class="text-xs-m lg:text-xs"
      >
        •
      </span>
      <span
        class="text-xs-m lg:text-xs"
      >
        Mentions légales
      </span>
    </div>
    <h1 class="my-20 lg:my-40 text-h1-m lg:text-h1 text-center font-black font-roboto uppercase">
      Mentions légales
    </h1>
    <div class="lg:px-80">
      <h2 class="text-h2-m lg:text-h2 uppercase font-roboto font-black mb-8">
        Editeur du site
      </h2>
      <p class="text-s-m lg:text-s font-robotoslab">
        Le présent site Internet www.ki-lyon.fr est édité et exploité par la société PITCH IMMO SNC, Société en nom collectif au capital social de 75 000 000 euros, immatriculée au R.C.S de Paris sous le numéro 422 989 715, situé au 87 rue de Richelieu– 75002 PARIS, ayant comme numéro de TVA intracommunautaire : FR 25 422 989 715. Vous pouvez nous joindre par téléphone au 01 42 68 33 33 ou par courrier électronique à l’adresse <a class="underline" href="mailto:contact@pitchimmo.fr">contact@pitchimmo.fr</a>
        <br /><br />
        Directeur de la publication : Julien CHATTER
      </p>

      <h2 class="text-h2-m lg:text-h2 uppercase font-roboto font-black mt-20 mb-8">
        Hébergeur
      </h2>
      <p class="text-s-m lg:text-s font-robotoslab">
        Nom de l'hébergeur : Vercel Inc. - Adresse postale : 340 S Lemon Ave #4133 Walnut, CA 91789
      </p>

      <h2 class="text-h2-m lg:text-h2 uppercase font-roboto font-black mt-20 mb-8">
        Conception et réalisation
      </h2>
      <p class="text-s-m lg:text-s font-robotoslab">
        Extreme Topo - 92-98 Bd Victor Hugo - 92 115 Clichy Cedex
      </p>

      <h2 class="text-h2-m lg:text-h2 uppercase font-roboto font-black mt-20 mb-8">
        Propriété Intellectuelle
      </h2>
      <p class="text-s-m lg:text-s font-robotoslab">
        PITCH IMMO fera ses meilleurs efforts pour rendre le site accessible 24 heures sur 24 et 7 jours sur 7, mais ne saurait en aucun cas engager sa responsabilité pour des raisons d'inaccessibilité au site web.<br /><br />
        La structure générale, ainsi que les logiciels, textes, images animées ou fixes, sons, savoir-faire, dessins, graphismes et tout autre élément composant le site web sont la propriété exclusive de PITCH IMMO.<br /><br />
        Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de PITCH IMMO, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.<br /><br />
        Il en est de même des bases de données figurant sur le site web, qui sont protégées par les dispositions de la loi du 1er juillet 1998 relative à la protection juridique des bases de données et dont PITCH IMMO est producteur.<br /><br />
        Les marques de PITCH IMMO et de ses partenaires, ainsi que les logos, figurant sur le site web sont des marques (semi-figuratives ou non) déposées.<br /><br />
        Toute représentation totale ou partielle de ces marques et/ou logos, effectuées à partir des éléments du site web sans l'autorisation expresse de PITCH IMMO sont donc prohibées, au sens de l'article L.713-2 du Code de la propriété intellectuelle.<br /><br />
        Les liens hypertextes mis en place dans le cadre du site web en direction d'autres ressources présentes sur le réseau Internet, et notamment vers ses partenaires ont fait l'objet d'une autorisation préalable, expresse et écrite.<br /><br />
        PITCH IMMO met tout en œuvre pour offrir aux utilisateurs des informations et/ou outils disponibles et vérifiés, mais ne saurait être tenue pour responsable des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son site web.<br /><br />
        PITCH IMMO invite les utilisateurs du site web à faire part d'éventuelles omissions, erreurs, ou corrections, en adressant un e-mail au webmaster du site web à l'adresse suivante : <a class="underline" href="mailto:contact@pitchimmo.fr">contact@pitchimmo.fr</a>.<br /><br />
        Conformément à l’article L 616-1 du code de la consommation, le consommateur est informé par le professionnel qu’il a la possibilité, en cas de contestation, de recourir à la procédure de médiation de la consommation en saisissant le médiateur MEDIMMOCONSO par voie postale à l’adresse suivante : Association MEDIMMOCONSO, 1 Allée du Parc de Mesemena - Bât A - CS25222 44505 LA BAULE CEDEX, par email à contact@medimmoconso.fr ou depuis son site internet <a class="underline" href="https://medimmoconso.fr/">https://medimmoconso.fr/</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        siteURL: process.env.SITE_URL,
    }
  },

  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": this.siteURL
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Mentions légales",
        "item": this.siteURL + this.$route.path
      }]
    }
  },

  head () {
    return {
      title: 'Mentions légales - Ki Lyon',
      meta: [
        { hid: 'url', property: 'og:url', content: this.siteURL + this.$route.path },
        { hid: 'title', property: 'og:title', content: 'Mentions légales - Ki Lyon' },
      ],
      link: [
        { rel: 'canonical', href: this.siteURL + this.$route.path }
      ]
    }
  },
}
</script>