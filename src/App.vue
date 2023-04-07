<script setup>
import Navbar from "@/components/nav/Navbar.vue";
import Hero from "@/components/sections/Hero.vue";
import EmailLink from "@/components/misc/EmailLink.vue";
import About from "@/components/sections/About.vue";
import Projects from "@/components/sections/Projects.vue";
</script>

<template>
  <header class="header" ref="header">
    <Navbar/>
  </header>
  <main>
    <Hero/>
    <About/>
    <Projects/>
  </main>
  <EmailLink/>

</template>

<style scoped>

</style>
