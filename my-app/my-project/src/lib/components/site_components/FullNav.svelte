<script lang="ts">
	import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte';
	import IoLogoLinkedin from 'svelte-icons/io/IoLogoLinkedin.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import TiHomeOutline from 'svelte-icons/ti/TiHomeOutline.svelte';
	import Vinyl from '$lib/Icons/Vinyl.svelte';
	import SiteForm from './SiteForm.svelte';
</script>

<div class="hidden nav sm:flex justify-between px-10 py-6 bg-transparent">
	<div class="nav__logo">
		<a href="/">
			<div class="icon">
				<TiHomeOutline />
			</div>
		</a>
	</div>
	<div class="nav__links flex justify-center items-center space-x-5">
		<a href="/work">
			<h1 class="font-os sm:text-xl lg:text-2xl text-white">Work</h1>
		</a>
		<a href="/music">
			<h1 class="font-os sm:text-xl lg:text-2xl text-white">Music</h1>
		</a>
		<a href="/music">
			<h1 class="font-os sm:text-xl lg:text-2xl text-white">Notes</h1>
		</a>
		<a href="/music">
			<h1 class="font-os sm:text-xl lg:text-2xl text-white">Services</h1>
		</a>
	</div>

	<div class="nav__social flex justify-between items-center space-x-5">
		<div class="icon">
			<a href="https://www.linkedin.com/in/paulo-ac-ferreira">
				<IoLogoLinkedin />
			</a>
		</div>
		<div class="icon">
			<a href="https://discordapp.com/users/714566602519216190">
				<FaDiscord />
			</a>
		</div>
		<div class="icon">
			<a href="https://github.com/voodoochilee16">
				<GoMarkGithub />
			</a>
		</div>
		<div class="icon">
			<SiteForm />
		</div>
	</div>
</div>

<div class="mobile sm:hidden fixed right-0 mx-4 my-4">
	<Vinyl />
</div>

<!-- <script>
    import ChevronCircleUp from 'svelte-icons/fa/FaChevronCircleUp.svelte';
  </script>
  
  <style>
    .icon {
      color: red;
      width: 32px;
      height: 32px;
    }
  </style>
  
  <div class="icon">
    <ChevronCircleUp />
  </div> -->

<style>
	.icon {
		color: #6d33a6;
		width: 32px;
		height: 32px;
	}
</style>
