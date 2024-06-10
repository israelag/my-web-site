<template>
    <ProfileInfo
      :photo="photo"
      title="Jaison Schmidt"
      subtitle="@jaisonschmidt"
      heading="FIAP Teacher & Front-end Developer"
    />

    <div class="max-w-xs mx-auto">
        <ButtonAction />
        <ButtonAction />
        <ButtonAction />
        <ButtonAction />
    </div>
</template>

<script setup>
  import photo from "../assets/img/picture.jpg";
</script>
