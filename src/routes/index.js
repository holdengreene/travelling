import countries from '$lib/json/countries';

/** @type {import('./__types/index').RequestHandler} */
export async function post({ request }) {
	const data = await request.formData();

	const countryName = data.get('country');

	const country = countries.find((country) => country.name === countryName);

	if (country?.code) {
		return {
			status: 200,
			body: {
				countryCode: country.code
			}
		};
	}

	return {
		status: 400
	};
}
