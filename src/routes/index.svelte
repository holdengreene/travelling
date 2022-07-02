<script>
	import CountrySelector from '$lib/components/CountrySelector.svelte';

	export let countryCode = '';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Country Code: {countryCode}</h2>

<form method="post">
	<CountrySelector />

	<button type="submit">Submit</button>
</form>
