<script>
    import { onMount } from 'svelte';
    import 'lite-youtube-embed/src/lite-yt-embed.css';

    export let videoId;
    export let title = "YouTube video";

    onMount(async () => {
        // Import the custom element on client-side only
        await import('lite-youtube-embed');
    });
</script>

<div class="video-card">
    <div class="video-container">
        <lite-youtube videoid={videoId} playlabel={title}></lite-youtube>
    </div>
    {#if title}
        <div class="text-content">
            <h2 class="title">{title}</h2>
        </div>
    {/if}
</div>

<style>
    .video-card {
        max-width: 600px;
        background-color: var(--global-color-accent);
        margin: 2rem auto;
        border-radius: 12px;
        overflow: hidden;
    }

    .video-container {
        width: 100%;
    }

    .video-container :global(lite-youtube) {
        max-width: 100%;
    }

    .text-content {
        padding: 1.5rem 2rem;
    }

    .title {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--global-color-font-header);
        margin: 0;
        line-height: 1.2;
    }

    @media (max-width: 640px) {
        .video-card {
            margin: 1rem;
            max-width: none;
        }

        .text-content {
            padding: 1rem 1.5rem;
        }

        .title {
            font-size: 1.25rem;
        }
    }
</style>
