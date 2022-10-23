<script>
	export let image = '';
	export let release = '';
	export let nom = '';
	export let prix = '';
</script>

<div class="text-lg min-w-fit">
	<img src={image} alt="" />
	<p class="bg-[#C8C8C8] w-fit uppercase mt-3">{release}</p>
	<p class="w-fit">{nom}</p>
	<p class="pt-3 w-fit">{prix}</p>
</div>
