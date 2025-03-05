import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faWhatsapp, faLinkedin, faGithub, faInstagram);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
});
