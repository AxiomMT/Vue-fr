<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<p>You must be kidding</p>
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ est un alias vers /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
	name: 'HomeView',
	components: {
		HelloWorld
	}
}
</script>
