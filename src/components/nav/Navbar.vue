<template>
	<nav :class="{'navbar--active': navActive}" class="navbar">
		<div class="navbar-container">
			<nav-logo/>
			<div
					id="navbar-trigger"
					ref="navTrigger"
					class="navbar-trigger"
					@click="handleNavToggle"
			>
				<span class="navbar-trigger__lines"> </span>
			</div>
			<div
					id="nav-wrapper"
					ref="navmenu"
					class="navbar-wrapper"
			>
				<div class="menu">
					<ul>
						<nav-link link="About" @nav-item-clicked="handleNavToggle"/>
						<nav-link link="Experience" @nav-item-clicked="handleNavToggle"/>
						<nav-link link="Projects" @nav-item-clicked="handleNavToggle"/>
						<nav-link link="Contact Me" @nav-item-clicked="handleNavToggle"/>
					</ul>
				</div>
			</div>
		</div>
	</nav>

</template>

<script>
import NavLink from "@/components/nav/NavLink.vue";
import NavLogo from "@/components/nav/NavLogo.vue";

export default {
	name: "Navbar",
	components: {NavLogo, NavLink},
	data() {
		return {
			navActive: false,
		}
	},
	methods: {
		handleNavToggle() {
			this.navActive = !this.navActive
		}
	},
}
</script>

