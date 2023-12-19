<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="feature-card text-white shadow-3xl rounded-xl md:rounded-4xl 3xl:rounded-6xl transform md:-rotate-3 px-6 py-9 xl:px-6 xl:py-10 3xl:px-9 3xl:py-14">
    <span class="feature-icon flex justify-center items-center rounded-full w-20 h-20 2xl:w-24 2xl:h-24 bg-white p-3">
      <span :class="`icon-${icon}`" class="text-white text-5xl 2xl:text-6xl"></span>
    </span>
    <div class="text-2xl 2xl:text-3xl font-bold pt-4 pb-3">
      {{ title }}
    </div>
    <div class="text-lg 2xl:text-2xl pb-7 3xl:pb-16">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
.feature-card{
  background: theme('backgroundColor.blue-gradient');
}
.feature-card .feature-icon{
  background: theme('backgroundColor.feature-card');
}
</style>