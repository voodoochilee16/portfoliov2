<script lang="ts">
	import FullNav from '$lib/components/site_components/FullNav.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	console.log($page);
	export let data;
	let showModal = false;
	let name = '';
	let email = '';
	let message = '';
</script>

<main>
	{#key data.url}
		<div in:fade={{ duration: 300, delay: 200 }} out:fade={{ duration: 200 }}>
			{#if data.url == '/'}
				<slot />
			{:else}
				<FullNav />

				<slot />
				{#if showModal}
					<div
						in:fade={{ duration: 300, delay: 200 }}
						out:fade={{ duration: 200 }}
						class="modal_text"
						on:click={() => (showModal = false)}
					>
						<form
							class="flex flex-col gap-4 items-center justify-center border-sabbath"
							on:click|stopPropagation
						>
							<input
								bind:value={name}
								type="text"
								placeholder="Your Name"
								class="input input-bordered w-full max-w-xs"
							/>
							<input
								bind:value={email}
								type="email"
								placeholder="Your Email"
								class="input input-bordered w-full max-w-xs"
							/>
							<textarea
								bind:value={message}
								placeholder="
									Your Message"
								class="input input-bordered w-full min-h-64"
							/>
							<button class="text-base btn-ghost border-sabbath px-4 py-2 rounded-lg" type="submit"
								>Submit</button
							>
						</form>
					</div>
				{/if}
				<button
					class="fixed bottom-4 right-4 text-xs btn-ghost border-sabbath p-2 rounded-lg"
					on:click={() => (showModal = !showModal)}
				>
					{showModal ? 'Close Modal' : 'Open Modal'}
				</button>

				<!-- Open the modal using ID.showModal() method -->
			{/if}
		</div>
	{/key}
</main>

<style lang="postcss">
	.input {
		@apply border-sabbath bg-black;
	}
	.modal_text {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(10px); /* Add this line */
	}

	main {
		background-color: black;
		color: white;
	}
</style>
