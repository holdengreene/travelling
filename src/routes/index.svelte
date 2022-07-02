<script lang="ts">
	import { browser } from '$app/env';
	import CountrySelector from '$lib/components/CountrySelector.svelte';

	export let country: { name: string; code: string } | null;

	if (browser) {
		if (country) {
			localStorage.setItem('country', JSON.stringify(country));
		}

		country = localStorage.getItem('country')
			? JSON.parse(localStorage.getItem('country')!)
			: null;
	}

	function clearCountry() {
		country = null;
		localStorage.removeItem('country');
	}
</script>

{#if country?.name}
	<button class="changeCountry" on:click={clearCountry}
		>Your currently selected country is {country?.name}
		<span class="changeCountrySpan">(click here to change it)</span></button
	>
{/if}

{#if country === null}
	<form method="post">
		<CountrySelector />

		<button type="submit">Submit</button>
	</form>
{/if}

<style>
	.changeCountry {
		background-color: transparent;
		border: none;
	}

	.changeCountry:hover {
		cursor: pointer;
	}

	.changeCountrySpan {
		text-decoration: underline;
	}
</style>
