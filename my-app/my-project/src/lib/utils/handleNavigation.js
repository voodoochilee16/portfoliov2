// navigation.js
import { preloadData, pushState, goto } from '$app/navigation';

export async function handleNavigation(e) {
	if (e.ctrlKey || e.metaKey) return;
	e.preventDefault();
	const { href } = e.currentTarget;
	const result = await preloadData(href);
	if (result.type === 'loaded' && result.status === 200) {
		pushState(href, { selected: result.data });
	} else {
		// something bad happened! try navigating
		goto(href);
	}
}
