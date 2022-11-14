<template>
  <div class="pt-32 pb-24 lg:pt-64 lg:pb-40 px-8 lg:px-40">
    <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-bleu-1 font-black lg:text-center">
      Foire aux questions
    </h3>
    <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 mb-4 uppercase lg:text-center max-w-[630px] mx-auto">
      Tout savoir sur les programmes immobiliers neufs
    </h2>
    <div
      v-for="(qa, i) in qas"
      :key="i"
      :class="i + 1 !== qas.length ? 'border-b border-solid border-black border-opacity-10' : ''"
    >
      <qa :qa="qa" />
    </div>
  </div>
</template>

<script>
import Qa from '@/components/Qa.vue'

export default {
  data () {
    return {
      qas : [
        {
          question: 'Loi Pinel, quelles sont les nouveautés ?',
          answer: '<p>Le dispositif Pinel permet de bénéficier d’une réduction d’Impôt sur le Revenu (IR) en investissant dans l’immobilier locatif neuf. Cette baisse d’impôt peut atteindre les 63 000 € sur 12 ans. Pour profiter de cet avantage fiscal, il existe plusieurs conditions à respecter comme les plafonds de loyers du dispositif ou les ressources des locataires.</p>',
          link : {
            label : 'Tout savoir sur les nouveautés du dispositif',
            href: 'https://pitchimmo.fr/article/dispositif-pinel-quelles-nouveautes'
          }
        },
        {
          question: 'Habiter dans le neuf, quels avantages ?',
          answer: "<p>En faisant le choix d'un logement neuf, vous bénéficiez de nombreux avantages tels que :</p><ul><li>Un prêt immobilier à taux 0% (PTZ)</li><li>Une réduction des frais de notaire à 2 ou 3%, contre 7 à 8% dans un logement ancien</li><li>Une réduction de votre consommation d'énergie grâce aux normes thermiques</li></ul>",
          link : {
            label : "Découvrir tous les bénéfices financiers d'un logement neuf",
            href: 'https://pitchimmo.fr/habiter-dans-le-neuf'
          }
        },
        {
          question: "Qu'est-ce que le taux d'usure en immobilier ?",
          answer: "<p>Le taux de l’usure est le taux maximal auquel une banque peut prêter et il est défini par la Banque de France. Il a pour objectif de protéger l'emprunteur contre des taux excessifs.</p>",
          link : {
            label : "Taux d'usure 2022 : définition, calcul, fonctionnement",
            href: 'https://pitchimmo.fr/article/taux-dusure-2022-definition-calcul-fonctionnement'
          }
        }
      ]
    }
  },

  components: {
    Qa
  },

  jsonld() {
    let qas = []
    
    for (const element of this.qas) {
      const elm = element
      qas.push({
        "@type":"Question",
        "name": elm.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": elm.answer
        }
      })
    }

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": qas
    }
  },
}
</script>

<style>
.answer p,
.answer ul li {
  @apply text-s-m lg:text-s font-robotoslab;
}
.answer ul {
  @apply flex flex-col gap-4 mt-4;
}
.answer ul li {
  @apply pl-5 relative before:content-[] before:w-2 before:h-2 before:rounded-full before:bg-black before:absolute before:left-0 before:top-4;
}

.see-more:hover .see-more-picto {
  @apply after:bg-white before:bg-white;
}
</style>