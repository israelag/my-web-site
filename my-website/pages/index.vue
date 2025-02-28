<template>
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
          icon="📱"
        />

        <ButtonAction
          text="Linkedin"
          link="https://www.linkedin.com/in/iagomes/"
          icon="💼"
        />

        <ButtonAction
          text="Github"
          link="https://github.com/israelag"
          icon="👨‍💻"
        />

        <ButtonAction
          text="Instagram"
          link="https://www.instagram.com/israel_a_g/"
          icon="📸"
        />
    </div>
</template>

<script setup>
  import photo from "../assets/img/picture.jpeg";
</script>
