<template>
  <div class="pt-6 text-center space-y-4">
    <a
      :href="link"
      target="_blank"
      class="flex items-start rounded-lg border border-gray-400 bg-white px-5 py-4 text-lg leading-6 font-medium shadow-md hover:shadow-xl transition ease-in-out duration-150"
    >
      <FontAwesomeIcon :icon="icon" class="mr-3 h-6 w-6 text-blue-600" />
      {{ text }}
      <div class="ml-auto mt-0.5 pl-4">
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </a>
  </div>
</template>

<script setup>
  defineProps({
    link: { type: String, required: true },
    text: { type: String, required: true },
    icon: { type: Array, required: true },
  });
</script>
