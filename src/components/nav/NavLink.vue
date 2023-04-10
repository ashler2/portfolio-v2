<template>
	<li class="nav-item">
		<a
				:href="`#${link.toLowerCase()}`"
				aria-current="page"
				class="nav-link active"
				@click="handleClick"
		>
			{{ link }}
		</a>
	</li>
</template>
<script>
export default {
	name: 'nav-link',
	props: {
		link: {
			type: String,
			required: true,
		}
	},
	methods: {
		handleClick() {
			this.$emit('nav-item-clicked')
		}
	}
}
</script>
