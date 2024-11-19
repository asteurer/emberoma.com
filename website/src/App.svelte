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

	:global(html), :global(body) {
 		margin: 0 !important; /* Removes default margin */
  		padding: 0 !important; /* Removes default padding */
  		width: 100% !important; /* Ensures full width */
	}

	@font-face {
		font-family: 'CooperBlack';
		src: url('/fonts/COOPBL.TTF');
		font-weight: normal;
		font-style: normal;
	}

	header.hero {
		font-family: 'CooperBlack', sans-serif;
		font-size: larger;
		text-align: center;
		padding: 2rem;
		background: #f89c6e;
		color: white;
		text-shadow:
			-1px -1px 0 #000, /* Top left */
			1px -1px 0 #000, /* Top right */
			-1px  1px 0 #000, /* Bottom left */
			1px  1px 0 #000; /* Bottom right */
	}

  </style>