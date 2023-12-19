<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
import { scrollToSection } from "@/@core/utils/functions";
</script>

<template>
  <section id="home" class="relative">
    <div class="container pt-40 pb-96 xss:pb-72 xs:pb-[450px] sm:pb-[500px] md:pb-[600px] lg:py-40 2xl:py-64">
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-10 3xl:gap-10">
        <div class="text-white z-20">
          <h1 class="text-4.5xl lg:text-5xl 3xl:text-7xl pb-5 lg:pb-8 font-bold">
            {{ heroSectionContent.heading }}
          </h1>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton outlined @click="scrollToSection('whyUs')">
              {{ buttonsLabel.whyUsBtn }}
            </SiteButton>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0  right-0">
      <img class="block w-11/12 sm:w-3/4 lg:w-8/12 2xl:w-11/12 ml-auto lg:mr-0" :src="heroSectionContent.image" :alt="heroSectionContent.alt">
    </div>
  </section>
</template>
