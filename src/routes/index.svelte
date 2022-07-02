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
