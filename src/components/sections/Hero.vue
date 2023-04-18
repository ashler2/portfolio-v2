<template>
	<section id="hero">
		<div class="container">
			<h1 class="mb-2">Hello There,<br> My Name is <span class="alt-color">Ashley Readman-Thorley</span></h1>
			<h2 class="mb-5">Full Stack Web Develop</h2>
			<a class="btn btn--large" :href="nextSectionId">Find Out More</a>
		</div>

		<a id="hero-next-section-button" :href="nextSectionId">
			<svg fill="currentColor" height="20" viewBox="0 0 34 20" width="34" xmlns="http://www.w3.org/2000/svg">
				<path
						d="M15.1943 19.3187L0.748833 6.15236C-0.249607 5.24233 -0.249607 3.7708 0.748833 2.87045L3.14933 0.682519C4.14777 -0.227506 5.76226 -0.227506 6.75008 0.682519L16.9894 10.0151L27.2287 0.682519C28.2271 -0.227506 29.8416 -0.227506 30.8294 0.682519L33.2512 2.86077C34.2496 3.7708 34.2496 5.24233 33.2512 6.14267L18.8057 19.309C17.8072 20.2287 16.1928 20.2287 15.1943 19.3187Z"
						fill="currentColor"/>
			</svg>
		</a>
	</section>
</template>

<script setup>
const nextSectionId = '#about'

</script>