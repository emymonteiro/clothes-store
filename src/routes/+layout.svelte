<script lang="ts">
	import AppHeader from '../components/AppHeader.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Footer from './Footer.svelte';
</script>

<AppHeader />
<slot />
<Sidebar />
<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Kablammo&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
</style>
