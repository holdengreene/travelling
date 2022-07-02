<script>
	import countries from '$lib/json/countries.json';
</script>

<form method="post" class="w-1/3">
	<label for="country" class="text-lg font-bold">Country</label>

	<div class="flex">
		<input
			id="country"
			type="text"
			list="country-list"
			name="country"
			autocomplete="off"
			class="w-full"
			required
		/>
		<datalist id="country-list">
			{#each countries as country}
				<option value={country.name} />
			{/each}
		</datalist>

		<button type="submit" class="bg-emerald-500 p-3">Submit</button>
	</div>
</form>
