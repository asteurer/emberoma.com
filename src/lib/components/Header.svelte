<script>
    export let links = [
        {name: "about", url: "/about"},
        {name: "services", url: "/services"},
        // TODO: Once they have merch
        // {name: "merch", url: "https://www.shopify.com"},
        {name: "discography", url: "/discography"},

    ];
</script>

<header class="hero">
    <a href="/about" class = "logo-link">
        <img src="/logos/header_cream.png" alt="Studio Emberoma" class="logo" />
    </a>
    <div class="nav-links">
    {#each links as link}
        <a href={link.url}>{link.name}</a>
    {/each}
    </div>
</header>

<style>
@font-face {
	font-family: 'CooperBlack';
	src: url('/fonts/coopbl.ttf');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'MerriweatherSansExtraBold';
	src: url('/fonts/msans.ttf');
	font-weight: normal;
	font-style: normal;
}

header.hero {
    font-family: 'CooperBlack';
    font-size: larger;
    text-align: center;
    padding: 2rem;
    background: var(--header-color-background);
    color: var(--header-color-title-text);
}

.logo {
    max-height: 4rem;
    height: auto;
    width: auto;
    margin-bottom: 1rem;
}

.logo-link {
    display: inline-block;
    margin-bottom: 1rem;
    transition: opacity 0.3s ease;
}

.logo-link:hover {
    opacity: 0.8;
    box-shadow: none; /* Override the default link hover styles */
    text-shadow: none;
}

.nav-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

a {
    color: var(--header-color-nav-text);
    font-family: 'MerriweatherSansExtraBold';
    text-decoration: none;
    transition: color 0.3s ease, box-shadow 0.3s ease;
}

a:hover {
    color: var(--header-color-nav-text-hover);
    box-shadow: 0 2px 0 var(--header-color-nav-text-hover); /* Underline effect on hover */
    text-shadow:
    -1px -1px 0 var(--header-color-nav-text-hover-outline),
    1px -1px 0 var(--header-color-nav-text-hover-outline),
    -1px  1px 0 var(--header-color-nav-text-hover-outline),
    1px  1px 0 var(--header-color-nav-text-hover-outline);
}
</style>
