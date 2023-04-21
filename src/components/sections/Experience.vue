<template>
	<section class="flex items-center">
		<div class="container mx-auto">
			<SectionHeading title="Experience" number="02" class="w-full md:w-6/12"/>
			<div class="tab-panel">
				<Tabs>
					<Tab :title="experience.title" v-for="experience in experiences">
						<h3 class="tab__title">{{ experience.title }}</h3>
						<h4 class="tab__dates">{{ experience.dates}}</h4>
						<ul>
							<li
								v-for="point in experience.points"
								class="list-item tab__list-item"
							> {{ point}}</li>
						</ul>
					</Tab>
				</Tabs>
			</div>
		</div>
	</section>
</template>

<script>
import SectionHeading from "@/components/misc/SectionHeading.vue";
import Tab from "@/components/misc/Tab.vue";
import Tabs from "@/components/misc/Tabs.vue";
import experiences from '../../data/experiences.json'
// @todo - This will need expanding at some point, the tabs section wont be very good on mobile if the jobs go off the screen
export default {
	name: "Experience",
	components: {Tab, Tabs, SectionHeading},
	data() {
		return {
			experiences
		}
	}
}
</script>
