<script lang="ts">
	import CountrySelector from '$lib/components/CountrySelector.svelte';

	interface ICountry {
		name: string;
		code: string;
	}

	export let country: ICountry | null;

	function clearCountry() {
		country = null;
		document.cookie = 'country=; Max-Age=0; path=/; Secure;';
	}
</script>

<main class="container mx-auto min-h-screen">
	{#if country?.name}
		<button class="changeCountry" on:click={clearCountry}
			>Your currently selected country is {country?.name}
			<span class="changeCountrySpan">(click here to change it)</span></button
		>
	{/if}

	<div class="grid place-items-center h-screen">
		{#if !country?.name}
			<CountrySelector />
		{/if}
	</div>
</main>
