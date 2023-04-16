<template>
	<div class="list-item">
		<span>{{ label }}</span>
	</div>
</template>

<script>
export default {
	name: "ListItem",
	props: {
		label: {
			type: String,
			required: true
		},
	},
}
</script>
