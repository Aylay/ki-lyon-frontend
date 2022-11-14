import Vue from 'vue'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'

const globalOptions = {
  autoDefaultCountry: false,
  mode: 'national',
  dropdownOptions: {
    showDialCodeInSelection: false,
    showFlags: true,
    disabled: true
  },
  onlyCountries: ['FR'],
  defaultCountry: 'FR'
}
Vue.use(VueTelInput, globalOptions)
