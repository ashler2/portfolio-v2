<template>
	<section id="about">
		<div class="container mx-auto">
			<SectionHeading title="About Me" number="01" class="w-full md:w-6/12"/>
			<div class="w-full md:w-6/12 ">
				<p>
					Hello! My name is Ashley.
				</p>
				<p>
					I'm a self taught full stack develop based in the north of England.
					I've been a developer for <span class="text-green">{{ developerDays }}</span> days.
					I am self-driven and hard working. I enjoy working in a fast pasted environment.
				</p>
				<p class="mb-8">Here are a few of the technologies I've worked with: </p>
				<div class="flex flex-wrap mb-8" style="margin-top: -20px">
					<ListItem
							v-for="tech in technologies"
							:key="tech.label"
							:label="tech.label"
							class="w-6/12 md:w-3/12"
					/>
				</div>
				<div class="flex flex-center">
					<a href="#" @click.prevent="toggleLoaded" class="text-button">{{ buttonText }}</a>
				</div>
			</div>
			<div class="w-full md:w-6/12">
				<div class="image-container">

				</div>
			</div>
		</div>
	</section>
</template>

<script>
import dayjs from "dayjs";
import technologies from '../../data/technologies.json'

import SectionHeading from "@/components/misc/SectionHeading.vue";
import ListItem from "@/components/misc/ListItem.vue";

export default {
	name: "About",
	components: {ListItem, SectionHeading},
	data() {
		return {
			loadMore: false,
		}
	},
	computed: {
		developerDays() {
			return dayjs().diff(dayjs('2019-04-18'), 'days')
		},
		technologies() {
			if (this.loadMore) {
				return technologies
			}
			return technologies.slice(0, 8)
		},
		buttonText() {
			return !this.loadMore ? 'Show More' : 'Hide'
		}
	},
	methods: {
		toggleLoaded() {
			this.loadMore = !this.loadMore
		}
	}
}
</script>

<style scoped>

</style>