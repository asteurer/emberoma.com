<script>
import BandSection from '$lib/components/BandSection.svelte';
import SocialLinks from '$lib/components/SocialLinks.svelte';
import UpcomingEvents from '$lib/components/UpcomingEvents.svelte';
import Albums from '$lib/components/Albums.svelte';
</script>

<main>
<header class="hero">
    <h1>EMBEROMA</h1>
    <SocialLinks />
</header>

<UpcomingEvents />

<Albums />

<BandSection />

<footer> <small>&copy; Copyright 2024, EMBEROMA</small> </footer>
</main>

<style>
main {
    font-family: 'RetroFont', sans-serif;
    background: #f3e2d0;
    color: #5c3c1e;
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

footer {
    text-align: center;
}

</style>