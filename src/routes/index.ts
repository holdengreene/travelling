import countries from '$lib/json/countries.json';
import { parse } from 'cookie';

/** @type {import('./__types/index').RequestHandler} */
export async function get({ request: { headers } }) {
	const cookies = parse(headers.get('cookie') ?? '');

	if (cookies.country) {
		return {
			body: {
				country: JSON.parse(cookies.country)
			}
		};
	}

	return {
		status: 200
	};
}

/** @type {import('./__types/index').RequestHandler} */
export async function post({ request }) {
	const data = await request.formData();

	const countryName = data.get('country');

	const country = countries.find((country) => country.name === countryName);

	if (country) {
		return {
			status: 200,
			headers: {
				'set-cookie': `country=${JSON.stringify(country)}; Secure; Max-Age=31536000; path=/;` // Set cookie for 1 year
			},
			body: {
				country
			}
		};
	}

	return {
		status: 400
	};
}
