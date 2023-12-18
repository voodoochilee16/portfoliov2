import { DIRECTUS_TOKEN, DIRECTUS_URL } from '$env/static/private';
import { createDirectus, rest, staticToken } from '@directus/sdk';

const client = createDirectus(DIRECTUS_URL).with(rest()).with(staticToken(DIRECTUS_TOKEN));
// const client = createDirectus(PUBLIC_URL).with(staticToken(TOKEN)).with(rest());

export default client;
