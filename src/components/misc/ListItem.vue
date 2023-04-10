<template>
	<div class="col-6 col-sm-4 list-item">
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
