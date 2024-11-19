<script>
    export let links = [
      { platform: 'Instagram', url: 'https://instagram.com/bandname' },
      { platform: 'TikTok', url: 'https://tiktok.com/bandname' },
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
      font-weight: bold; /* Makes links stand out */
      transition: color 0.3s ease, box-shadow 0.3s ease; /* Smooth hover transition */
    }

    a:hover {
      color: #007f66; /* Viridian green */
      box-shadow: 0 2px 0 #007f66; /* Adds underline effect on hover */
      text-shadow: 
        -1px -1px 0 white, 
        1px -1px 0 white, 
        -1px  1px 0 white, 
        1px  1px 0 white;
    }
  </style>
