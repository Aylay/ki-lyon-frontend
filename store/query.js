export const state = () => ({
  utm: false,
  utmSource: '',
  utmMedium: '',
  utmCampagne: ''
})

export const mutations = {
  setUTM(state, { utmSource, utmMedium, utmCampagne }) {
    state.utmSource = utmSource
    state.utmMedium = utmMedium
    state.utmCampagne = utmCampagne
    state.utm = true
  }
}