<template>
	<div class='tab' v-show="isActive">
		<slot>
		</slot>
	</div>
</template>

<script setup>
import {inject, defineProps, computed} from "vue";

const props = defineProps({
	title: {
		type: String,
		default: 'Tab',
	}
})

const selectedTitle = inject('selectedTitle')
const isActive = computed(() => props.title === selectedTitle.value);

</script>