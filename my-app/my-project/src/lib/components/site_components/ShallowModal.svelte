<script>
	// your script goes here
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	console.log($page.state);
</script>

<div
	transition:fade={{ duration: 300 }}
	class="fixed left-0 right-0 bottom-0 top-0 z-50 backdrop-blur-xl overflow-y-auto"
>
	<div
		transition:fly={{ x: 200, duration: 500 }}
		class="fixed w-full lg:w-[85vw] right-0 bottom-0 top-0 z-50 overflow-y-auto pb-20"
	>
		<div class=" sticky top-0 backdrop-blur-xl w-full py-4 m_container z-50 flex justify-between">
			<div class=" font-medium text-lg"></div>
			<button class="btn btn-xs xl:btn-sm btn-outline" on:click={() => history.back()}>Close</button
			>
		</div>
		<slot name="page">Content</slot>

		<!-- <EventPage data={$page.state.selected} /> -->
	</div>
</div>
