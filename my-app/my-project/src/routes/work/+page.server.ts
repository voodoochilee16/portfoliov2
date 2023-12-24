import type { PageServerLoad } from './$types';
import { createItem, readItem, readItems } from '@directus/sdk';
import client from '$lib/clients/directusClient';
import { fail } from '@sveltejs/kit';

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

export const actions = {
	form_data: async ({ request }) => {
		const body = await request.formData();
		const name = body.get('name');
		const email = body.get('email');
		const message = body.get('message');
		console.log(name, email, message);

		if (!email) {
			return fail(400, { email, missing: true });
		}
		if (!name) {
			return fail(400, { name, missing: true });
		}
		if (!message) {
			return fail(400, { message, missing: true });
		}
		console.log(name, email, message);
		let messages = await client.request(
			createItem('voodoo_messages', {
				name: name,
				email: email,
				message: message
			})
		);
		console.log(messages);
		return {
			messages,
			sucess: true,
			message: 'Message sent'
		};
	}
};
