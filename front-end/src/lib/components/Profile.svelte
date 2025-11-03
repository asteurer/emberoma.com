<script>
  export let about = "DEFAULT ABOUT";
  export let name = "DEFAULT NAME";
  export let imageUrl = "/api/images/default.jpg";
  export let imageAlt = "DEFAULT IMAGE ALT";
</script>

<div class="content-card">
  <div class="image-container">
    <img src={imageUrl} alt={imageAlt} class="content-image" />
  </div>
  <div class="text-content">
    <h1 class="name">{name}</h1>
    <p class="about">{@html about}</p>
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

  .text-content {
    padding: 2rem;
  }

  .name {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--global-color-font-header);
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }

  .about {
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
  }
</style>
