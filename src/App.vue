<script setup>
import Navbar from "@/components/nav/Navbar.vue";
import Hero from "@/components/sections/Hero.vue";
import EmailLink from "@/components/misc/EmailLink.vue";
</script>

<template>
  <header class="header" ref="header">
    <Navbar />
  </header>
  <main>
    <Hero/>
  </main>
  <EmailLink />

</template>

<style scoped>

</style>
