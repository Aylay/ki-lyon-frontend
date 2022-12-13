<template>
  <div>
    <div class="pt-24 lg:pt-40 lg:pb-12 px-8 lg:px-56 bg-bleu-1">
      <h3 class="text-h4-m lg:text-h4 font-roboto uppercase text-white font-black lg:text-center">
        Du studio au 5 pièces 
      </h3>
      <h2 class="text-h2-m lg:text-h2 font-black font-roboto mt-4 pb-8 uppercase lg:text-center text-white">
        Habiter l'exception, vivre l'aisance<br />à tout prix
      </h2>
    </div>
    <unit
      v-for="(elm, i) in newProperties"
      :key="i"
      :unit="elm"
      :isOpened="unitkeyToOpen === i ? true : false"
      :isLast="(i + 1) === newProperties.length ? true : false"
      :actualUnit="i"
      @unitNeedToBeOpen="unitToOpen"
    />
  </div>
</template>

<script>
import Unit from '@/components/Unit'
const xml2js = require('xml2js')

export default {
  data () {
    return {
      properties: [],
      newProperties: [],
      unitkeyToOpen: 0,
    }
  },

  components : {
    Unit
  },

  mounted () {
    let newProperties = this.properties
    .filter(bien => bien.informationstarifaires)
    .map((bien) => {
      // Check parking
      let parking = false
      if (bien.annexes) {
        for (const annexe of bien.annexes[0].annexe) {
          if (annexe.description[0].typeannexe[0] === 'PARKING') parking = true
        }
      }

      // Check annexes
      let annexes = ''
      if (bien.description[0].options) {
        for (const option of bien.description[0].options) {
          for (const opt of option.option) {
            annexes += annexes + ' ' + opt._
          }
        }
      }

      // Check plans
      let plans = []
      if (bien.images) {
        for (const element of bien.images[0].image) {
          const elm = element;
          let plan = {
            type: elm.$.type,
            source: elm.source[0]
          }
          plans.push(plan)
        }
      }

      return {
        lot: bien.identification[0].nom[0] ,
        nbPieces: parseInt(bien.description[0].nombrepieces[0]),
        surface: parseFloat(bien.description[0].superficie[0]),
        etage: parseInt(bien.description[0].etage[0]),
        annexes: annexes,
        parking: parking,
        prix: parseFloat(bien.informationstarifaires[0].prix[0].montant),
        plans: plans
      }
    })

    const newPropertiesFiltered = this.groupBy(newProperties, 'nbPieces')
    Object.entries(newPropertiesFiltered).forEach(([key, value]) => {
      let prices = []
      for (const lot of value) {
        prices.push(lot.prix)
      }
      prices = prices.sort(function(a, b){return a - b})

      const set = {
        nbPieces: parseInt(key),
        lots: value,
        surface: value[0].surface,
        prixMin : prices[0]
      }

      this.newProperties.push(set)
    })

    this.newProperties = this.newProperties.sort(function(a, b){return a.nbPieces - b.nbPieces})
  },

  async fetch () {
    const xmlData = await fetch('http://ftp2.mgcconnecting.com/CONNECTING/KILYON/mgc_kilyon.xml')
    .then(res => res.text())
    .then(data => {
      return data;
    });
    const jsonData = await this.xmlToJSON(xmlData);
    if (jsonData && jsonData.clients) this.properties = jsonData.clients.client[0].groupes[0].groupe[0].annonceurs[0].annonceur[0].programmes[0].programme[0].biens[0].bien
  },

  methods: {
    xmlToJSON (str, options)  {
      return new Promise((resolve, reject) => {
        xml2js.parseString(str, options, (err, jsonObj) => {
          if (err) {
            return reject(err);
          }
          resolve(jsonObj);
        });
      });
    },

    groupBy (arr, prop) {
      let grouped = {};
      for (const element of arr) {
        const p = element[prop];
        if (!grouped[p]) { grouped[p] = []; }
        grouped[p].push(element);
      }
      return grouped;
    },

    unitToOpen (unit) {
      if (this.unitkeyToOpen === unit) {
        this.unitkeyToOpen = -1
      } else {
        this.unitkeyToOpen = unit
        
        let offset = 0
        if (window.innerWidth > 1023) {
          offset = -130
        } else {
          offset = -101
        }
        const options = {
          offset: offset
        }
        setTimeout(() => {
          this.$scrollTo('#unit-' + unit, 500, options)
        }, 100)
      }
    }
  }
}
</script> 