<script>
    import {imageBaseURL} from '../config.js';

    let events = [
        {
            title: 'Album Release Party',
            date: 'December 13th, 2024',
            location: 'Friend\'s Bar in Austin, TX',
            time: '7:30pm - 10:30pm',
            posterImage: imageBaseURL + 'salted_caramel_poster.jpg'
        },
    ];
</script>


<div class="event-poster">
    {#each events as event}
      <div class="poster-container">
        <img src={event.posterImage} alt="Event Poster" class="poster" />
        <div class="details-overlay">
          <h2>{event.title}</h2>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p>{event.time}</p>
        </div>
      </div>
    {/each}
  </div>

  <style>
    .event-poster {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 0;
    }

    .poster-container {
      position: relative;
      width: 80%;
      max-width: 600px;
      margin-bottom: 1rem;
    }

    .poster {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .details-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      border-radius: 10px; /* Match the poster's border radius */
      text-align: center;
      padding: 0; /* Ensure no extra padding interferes with centering */
      box-sizing: border-box; /* Ensures consistent dimensions */
      transition: opacity 0.3s ease;
    }

    .details-overlay h2 {
      font-size: 2rem;
      margin: 0 0 1rem; /* Remove top margin, keep bottom margin */
    }

    .details-overlay p {
      margin: 0.5rem 0; /* Consistent spacing for paragraphs */
    }


    .poster-container:hover .poster {
      transform: scale(1.05);
      opacity: 0.3;
    }

    .poster-container:hover .details-overlay {
      opacity: 1;
    }

  </style>