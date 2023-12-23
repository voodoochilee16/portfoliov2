<script>
	// your script goes here
	import { page } from '$app/stores';
	import { fly, fade } from 'svelte/transition';
	console.log($page.state);
	import IoIosExpand from 'svelte-icons/io/IoIosExpand.svelte';
	import { goto } from '$app/navigation';
	console.log($page.state);
	let iframeLoaded = false;
</script>

<div
	transition:fade={{ duration: 300 }}
	class="fixed left-0 right-0 bottom-0 top-0 z-50 backdrop-brightness-[0.5]"
>
	<div
		transition:fly={{ x: 200, duration: 500 }}
		class="fixed w-full right-0 bottom-0 top-0 z-50 sm:px-10"
	>
		<div class="sticky top-0 w-full py-4 m_container z-50 flex justify-end">
			<!-- <button
				class="hidden btn btn-xs xl:btn-sm btn-outline border-sabbath"
				on:click={() => goto($page.state.selected.url)}
			>
				<div class="icon">
					<IoIosExpand />
				</div></button
			> -->
			<button
				class="btn btn-xs xl:btn-sm btn-outline border-sabbath text-sabbath px-3 py-1 mx-3"
				on:click={() => history.back()}>Close</button
			>
		</div>

		<slot name="page">Content</slot>

		<!-- <EventPage data={$page.state.selected} /> -->
	</div>
</div>

<style>
	.icon {
		height: 24px;
		width: 24px;
		color: #6d33a6;
	}
</style>
