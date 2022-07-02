<script>
	import countries from '$lib/json/countries.json';

	export let countryCode = '';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Country Code: {countryCode}</h2>

<form method="post">
	<label for="country">Country</label>
	<input id="country" list="country-list" name="country" autocomplete="off" required />
	<datalist id="country-list">
		{#each countries as country}
			<option value={country.name} />
		{/each}
	</datalist>

	<button type="submit">Submit</button>
</form>
