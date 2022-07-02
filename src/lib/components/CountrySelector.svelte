<script>
	import countries from '$lib/json/countries.json';
</script>

<label for="country">Country</label>
<input id="country" list="country-list" name="country" autocomplete="off" required />
<datalist id="country-list">
	{#each countries as country}
		<option value={country.name} />
	{/each}
</datalist>
