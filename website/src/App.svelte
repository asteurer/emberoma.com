<script>
	import BandSection from './components/BandSection.svelte';
	import SocialLinks from './components/SocialLinks.svelte';
	import UpcomingEvents from './components/UpcomingEvents.svelte';
  </script>

  <main>
	<header class="hero">
	  <h1>EMBEROMA</h1>
	  <SocialLinks />
	</header>

	<UpcomingEvents />

	<BandSection />
  </main>

  <style>
	main {
	  font-family: 'RetroFont', sans-serif;
	  background: #f3e2d0;
	  color: #5c3c1e;
	}
	header.hero {
	  text-align: center;
	  padding: 2rem;
	  background: #f89c6e;
	  color: white;
	}
  </style>