<template>
	<div class="tabs-wrapper">
		<ul class='tabs-header'>
			<li v-for='(title, index) in tabTitles'
				:key='title'
				@click='selectTab(title)'
				class="tabs-header__heading"
				:class="{'tabs-header__heading--active': selectedTitle === title}"
            >
				{{ title }}
			</li>
		</ul>
		<slot></slot>
	</div>
</template>

<script setup>
import { ref, provide, useSlots } from "vue";
const tabTitles = ref(useSlots().default()[0].children.map(tab => tab.props.title));
let selectedTitle = ref(tabTitles.value[0]);
function selectTab(title) {
	 selectedTitle.value = title
}

provide("selectedTitle", selectedTitle);
</script>
