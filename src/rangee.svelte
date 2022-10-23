<script>
	import App from './App.svelte';
	import Jeux from './jeux.svelte';
	import { liste } from './liste-jeux.json';
	import NavBar from './navBar.svelte';
	import PremierePage from './premiere-page.svelte';
</script>

<div class="flex flex-wrap gap-10 p-4 justify-center">
	{#each liste as donne}
		<Jeux {...donne} />
	{:else}
		<p>aucun jeux ne correspond a vos critère</p>
	{/each}
</div>
