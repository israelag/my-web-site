<!-- components/ProfileInfo.vue -->
<template>
  <div class="max-w-7xl mx-auto">
    <div>
      <figure class="p-6">
        <img
          class="profile-photo w-32 h-32 rounded-full mx-auto"
          :src="photo"
          alt="Profile Photo"
        />
        <div class="pt-6 text-center space-y-4">
          <figcaption class="font-medium">
            <div class="text-cyan-900 text-xl">{{ title }}</div>
            <div class="text-gray-500 font-light relative">
              <span @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
                {{ subtitle }}
              </span>
              <div v-if="showTooltip" class="absolute bg-white border border-gray-300 p-2 rounded shadow-lg">
                {{ resume }}
              </div>
            </div>
          </figcaption>
          <blockquote>
            <p class="text-lg font-medium">
              {{ heading }}
            </p>
          </blockquote>
        </div>
      </figure>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { resume } from '../assets/js/professionalSummary.js';

const { photo = null, title = '', subtitle = '', heading = '' } = defineProps(['photo', 'title', 'subtitle', 'heading']);
const showTooltip = ref(false);
</script>

<style scoped>
.profile-photo {
  width: 250px;
  height: auto;
  object-fit: cover;
}
</style>