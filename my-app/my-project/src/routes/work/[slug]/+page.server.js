import client from '$lib/clients/directusClient';
import { readItem, readItems } from '@directus/sdk';

/** @type {import('./$types').PageServerLoad} */
export async function load(params) {
	const slug = params.params.slug;
	async function getData() {
		let data = await client.request(
			readItems('voodoo_projects', {
				filter: {
					slug: slug
				},
				fields: ['*.*', 'images.*.*', 'tags.*.*']
			})
		);
		return data;
	}
	return {
		data: await getData()
	};
}
