<template>
	<div class="project-card row mt-40 flex-wrap">
		<div class="w-full md:w-6/12 col">
			<h3 class="mb-2">{{ project.title }}</h3>
			<p>{{ project.description }}</p>
			<TagSection :tags="project.tags"/>
			<div class="button-container">
				<a
						v-if="project.live_site"
						:href="project.live_site"
						class="btn"
						target="_blank"
				>
					Live Site
				</a>
				<a
						v-if="project.github"
						:href="project.github"
						class="btn"
						target="_blank"
				>
					Github
				</a>
			</div>
		</div>
		<div class="w-full md:w-6/12 col">
			<BasicCarousel
					v-if="project.images.length"
					:images="project.images"
			/>
		</div>
	</div>
</template>
<script>
import TagSection from "@/components/misc/TagSection.vue";
import BasicCarousel from "@/components/misc/BasicCarousel.vue";

export default {
	name: 'ProjectCard',
	components: {BasicCarousel, TagSection},
	props: {
		project: {
			type: Object,
			required: true
		}
	}
}
</script>
