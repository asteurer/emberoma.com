<script>
    export let links = [
      { platform: 'Instagram', url: 'https://instagram.com/bandname' },
      { platform: 'Twitter', url: 'https://twitter.com/bandname' },
      { platform: 'YouTube', url: 'https://youtube.com/bandname' },
    ];
  </script>

  <div class="social-links">
    {#each links as link}
      <a href={link.url} target="_blank">{link.platform}</a>
    {/each}
  </div>

  <style>
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
    }
  </style>
