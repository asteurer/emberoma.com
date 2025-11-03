<script>
  export let group = "DEFAULT GROUP";
  export let spotifyLink = "/";
  export let albumTitle = "DEFAULT ALBUM TITLE"
  export let description = "DEFAULT DESCRIPTION";
  export let imageUrl = "/api/images/default.jpg";
  export let imageAlt = "DEFAULT IMAGE ALT";
</script>

<div class="content-card">
  <a href={spotifyLink} class="image-link">
    <div class="image-container">
      <img src={imageUrl} alt={imageAlt} class="content-image" />
      <div class="image-overlay">
        <span class="play-icon">▶</span>
      </div>
    </div>
  </a>
  <div class="text-content">
    <h1 class="title">
      <span class="album-title"><u>{albumTitle}</u></span>
      <span class="separator">-</span>
      <span class="group-name">{group}</span>
    </h1>
    <p class="description">{@html description}</p>
  </div>
</div>

<style>
  .content-card {
    max-width: 600px;
    background-color: var(--global-color-accent);
    margin: 2rem auto;
    border-radius: 12px;
    overflow: hidden;
  }

  .image-link {
    display: block;
    text-decoration: none;
  }

  .image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
  }

  .content-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .play-icon {
    font-size: 3rem;
    color: white;
    transform: scale(0.8);
    transition: transform 0.3s ease;
  }

  .image-link:hover .content-image {
    transform: scale(1.05);
  }

  .image-link:hover .image-overlay {
    opacity: 1;
  }

  .image-link:hover .play-icon {
    transform: scale(1);
  }

  .text-content {
    padding: 2rem;
  }

  .title {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--global-color-font-header);
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }

  .album-title {
    font-weight: 700;
  }

  .group-name {
    font-weight: 400;
  }

  .separator {
    font-weight: 400;
    margin: 0 0.5rem;
  }

  .description {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--global-color-font-paragraph);
    margin: 0;
  }

  @media (max-width: 640px) {
    .content-card {
      margin: 1rem;
      max-width: none;
    }

    .text-content {
      padding: 1.5rem;
    }

    .title {
      font-size: 1.5rem;
    }
  }
</style>
