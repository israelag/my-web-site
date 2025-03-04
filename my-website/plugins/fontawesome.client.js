import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faWhatsapp, faLinkedin, faGithub, faInstagram)
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
