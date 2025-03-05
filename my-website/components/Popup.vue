<!-- components/Popup.vue -->
<template>
    <div v-if="show" class="fixed inset-0 flex items-end justify-end p-4 bg-gray-800 bg-opacity-75">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h2 class="text-2xl font-bold mb-4">Resumo Profissional</h2>
        <p>{{ resume }}</p>
        <button @click="closePopup" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Fechar</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { resume } from '../assets/js/professionalSummary.js';
  
  const show = ref(true);
  
  const closePopup = () => {
    show.value = false;
  };
  
  onMounted(() => {
    setTimeout(() => {
      show.value = true;
    }, 1000); // Mostra o pop-up 1 segundo após a montagem do componente
  });
  </script>
  
  <style scoped>
  /* Estilos adicionais, se necessário */
  </style>