<svelte:head>
  <meta http-equiv="refresh" content="0; url=/about" />
  <link rel="canonical" href="/about" />
  <title>Studio Emberoma</title>
</svelte:head>

<script>
  import { browser } from '$app/environment';

  if (browser && window.location.pathname === '/') {
    window.location.replace('/about');
  }
</script>

<div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui, -apple-system, sans-serif;">
  <p>Redirecting to <a href="/about">About</a>...</p>
</div>
