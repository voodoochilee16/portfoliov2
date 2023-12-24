<script lang="ts">
	import { enhance } from '$app/forms';
	import FaExternalLinkAlt from 'svelte-icons/fa/FaExternalLinkAlt.svelte';
	import FaRegCommentAlt from 'svelte-icons/fa/FaRegCommentAlt.svelte';
	import { fade, fly } from 'svelte/transition';
	let showModal = false;
	let name = '';
	let email = '';
	let message = '';

	let isSubmitted = false; // Add this line

	export let form;

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!name || !email || !message) {
			alert('All fields are required');
		}

		if (name && email && message) {
			// setTimeout(() => {
			// 	isSubmitted = false;
			// }, 1000);
			isSubmitted = true;
			setTimeout(() => {
				isSubmitted = false;
			}, 2000);
			showModal = false;
		}

		// ...rest of the form submission logic...
	};
</script>

{#if showModal}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 200 }} class="modal_text">
		<form
			action="/work?/form_data"
			method="POST"
			use:enhance
			class="flex flex-col gap-4 items-center justify-center border-sabbath w-full h-full z-50 bg-opacity-80 backdrop-blur-xl fixed top-0 left-0"
		>
			<input
				bind:value={name}
				name="name"
				type="text"
				placeholder="Your Name"
				class="input text-white input-bordered w-full max-w-xs"
			/>
			<input
				bind:value={email}
				type="email"
				name="email"
				placeholder="Your Email"
				class="input input-bordered w-full text-white max-w-xs"
			/>
			<textarea
				bind:value={message}
				name="message"
				placeholder="Your Message"
				class="input text-white text-center input-bordered w-1/2 min-h-64"
			/>
			<div class="flex gap-4">
				<button
					on:submit={handleSubmit}
					class="text-base btn btn-success px-4 py-2 rounded-lg"
					type="submit">Submit</button
				>
				<button
					id="close_button"
					type="button"
					on:click|preventDefault={() => (showModal = !showModal)}
					class="text-base btn btn-warning px-4 py-2 rounded-lg"
				>
					X
				</button>
			</div>
		</form>
	</div>
{/if}

{#if isSubmitted}
	<!-- Add this block -->
	<div
		class="flex flex-col gap-4 items-center justify-center border-sabbath w-full h-full z-50 bg-opacity-80 backdrop-blur-xl fixed top-0 left-0"
	>
		Message sent successfully
	</div>
{/if}
<button
	class="text-xs text-center btn-xs sm:btn-sm btn-primary text-white items-center rounded-lg"
	on:click={() => (showModal = !showModal)}
>
	<div class="icon">
		<FaRegCommentAlt></FaRegCommentAlt>
	</div>
</button>

<style lang="postcss">
	.input {
		@apply border-sabbath bg-black;
	}
	.icon {
		width: 30px;
		height: 30px;
		color: #6d33a6;
	}
</style>
