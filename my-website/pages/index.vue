<!-- pages/index.vue -->
<template>
  <Popup />
  <ProfileInfo
    :photo="photo"
    title="Israel A Gomes"
    subtitle="@israel_a_g"
    heading="Software Engineer"
  />

  <div class="max-w-xs mx-auto">
    <ButtonAction
      text="Whatsapp"
      link="https://wa.me/+5511982992762"
      :icon="['fab', 'whatsapp']"
    />
    <ButtonAction
      text="Linkedin"
      link="https://www.linkedin.com/in/iagomes/"
      :icon="['fab', 'linkedin']"
    />
    <ButtonAction
      text="Github"
      link="https://github.com/israelag"
      :icon="['fab', 'github']"
    />
    <ButtonAction
      text="Instagram"
      link="https://www.instagram.com/israel_a_g/"
      :icon="['fab', 'instagram']"
    />
  </div>
</template>

<script setup>
import photo from "../assets/img/picture.jpeg";
import Popup from "../components/Popup.vue";
</script>