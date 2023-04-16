<template>
	<div class="tag-section">
		<span class="tag">Tags:</span><span v-for="tag in tags" class="tag">{{ tag }}</span>
	</div>
</template>

<script>
export default {
	name: "TagSection",
	props: {
		tags: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>

</style>