<template>
    <ProfileInfo
      :photo="photo"
      title="Jaison Schmidt"
      subtitle="@jaisonschmidt"
      heading="FIAP Teacher & Front-end Developer"
    />

    <div class="max-w-xs mx-auto">
        <ButtonAction
          text="Whatsapp"
          link="https://wa.me/+5554999776648"
          icon="📱"
        />

        <ButtonAction
          text="Linkedin"
          link="https://www.linkedin.com/in/jaison-schmidt-19b80725/"
          icon="💼"
        />

        <ButtonAction
          text="Github"
          link="https://github.com/jaisonschmidt"
          icon="👨‍💻"
        />

        <ButtonAction
          text="Instagram"
          link="https://www.instagram.com/jaisonschmidt/"
          icon="📸"
        />
    </div>
</template>

<script setup>
  import photo from "../assets/img/picture.jpg";
</script>
