import type { PageServerLoad } from './$types';
import { prisma } from '$lib/clients/prisma';
import { readItem, readItems } from '@directus/sdk';
import client from '$lib/clients/directusClient';

export const config = {
	isr: {
		expiration: 1000
	}
};

export const load: PageServerLoad = async (params) => {
	const projects = await client.request(
		readItems('voodoo_projects', {
			fields: ['id, title, desc, slug, cover, categorie']
		})
	);

	return {
		projects
	};
};
