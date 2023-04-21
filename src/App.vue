<script setup>
import Navbar from "@/components/nav/Navbar.vue";
import Hero from "@/components/sections/Hero.vue";
import EmailLink from "@/components/misc/EmailLink.vue";
import About from "@/components/sections/About.vue";
import Projects from "@/components/sections/Projects.vue";
import Experience from "@/components/sections/Experience.vue";
</script>

<template>
	<header ref="header" class="header">
		<Navbar/>
	</header>
	<main>
		<Hero/>
		<About/>
		<Experience/>
		<Projects/>
	</main>
	<EmailLink/>

</template>

<style scoped>

</style>
