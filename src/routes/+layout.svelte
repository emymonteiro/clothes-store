<script lang="ts">
	import AppHeader from '../components/AppHeader.svelte';
</script>

<AppHeader />
<slot />
<aside>sidebar</aside>
<footer>Footer</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
</style>
