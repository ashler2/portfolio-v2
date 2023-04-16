<template>
	<section id="projects">
		<div class="container mx-auto">
			<SectionHeading title="Projects" number="03" class="w-full md:w-6/12"/>
			<div style="margin-top: -40px;">
				<ProjectCard v-for="project in projects" :key="project.title" :project="project"/>
			</div>
		</div>
	</section>
</template>

<script>
import projects from '../../data/projects.json'
import SectionHeading from "@/components/misc/SectionHeading.vue";
import ProjectCard from "@/components/misc/ProjectCard.vue";

export default {
	name: "Projects",
	components: {ProjectCard, SectionHeading},
	data() {
		return {
			projects
		}
	},
}
</script>

