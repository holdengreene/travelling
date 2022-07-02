<script lang="ts">
	import { browser } from '$app/env';

	let geolocationAvailable = false;

	// Check for support
	if (browser && 'geolocation' in navigator) {
		geolocationAvailable = true;
	}

	function handleGeolocation() {
		navigator.geolocation.getCurrentPosition((position) => console.log(position));
	}
</script>

{#if geolocationAvailable}
	<button type="button" on:click={handleGeolocation}>Use Geolocation</button>
{/if}
