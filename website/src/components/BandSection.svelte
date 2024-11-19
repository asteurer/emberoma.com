<script>
  import {imageBaseURL} from '../config.js';

  export let bandMembers = [
    { name: 'Ryles Steurer', link: 'test', image: 'chad.png' },
    { name: 'Joy Melan', link: 'test', image: 'chad.png' },
    { name: 'Seth Thomas', link: 'test', image: 'chad.png' },
    { name: 'Hunter Walkup', link: 'test', image: 'chad.png' },
    { name: 'Nico Little', link: 'test', image: 'chad.png' },
    { name: 'Jac Carson', link: 'test', image: 'chad.png' },
    { name: 'Kendall Harrison', link: 'test', image: 'chad.png' },
    { name: 'August King', link: 'test', image: 'chad.png' },
    { name: 'Sam Blue', link: 'test', image: 'chad.png' },
    { name: 'Jade Parx', link: 'test', image: 'chad.png' },
    { name: 'Rhett Belcher', link: 'test', image: 'chad.png' },
    { name: 'Craig Kierce', link: 'test', image: 'chad.png' },
    { name: 'Roy Marrero', link: 'test', image: 'chad.png' },
    { name: 'Carlos VanWees', link: 'test', image: 'chad.png' },
    { name: 'Liz Mallet', link: 'test', image: 'chad.png' },
    { name: 'Donovan Handy', link: 'test', image: 'chad.png' },
    { name: 'Spencer Ryan', link: 'test', image: 'chad.png' },
    { name: 'Ronnie Hall', link: 'test', image: 'chad.png' }
  ];

    bandMembers = bandMembers.map(member => ({...member, image: imageBaseURL + member.image}))
  </script>

  <section>
    <h1>The Artists</h1>
    <div class="grid">
      {#each bandMembers as member}
      <a href={member.link} target="_blank" class="member"> <!-- Wrap card in <a> tag -->
        <img src={member.image} alt={member.name} />
        <h4>{member.name}</h4>
      </a>
      {/each}
    </div>
  </section>

  <style>
      @font-face {
        font-family: 'CooperBlack';
        src: url('/fonts/COOPBL.TTF');
        font-weight: normal;
        font-style: normal;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Max 4 cards per row */
        gap: 1.5rem; /* Space between cards */
      }

      .member {
        display: block; /* Ensure the entire card is clickable */
        background-color: #a1887f; /* Lighter brown for contrast */
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); /* Subtle shadow */
        padding: 1.5rem;
        text-align: center;
        text-decoration: none; /* Remove underline on links */
        color: inherit; /* Inherit text color */
        transition: transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer; /* Indicate clickability */
      }

      .member:hover {
        background-color: #8d6e63; /* Slightly darker brown on hover */
        transform: scale(1.05); /* Slightly enlarge the card */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25); /* Increase shadow depth on hover */
      }

      .member img {
        max-width: 100%; /* Responsive images */
        height: auto;
        border-radius: 8px;
        margin-bottom: 1rem;
      }

      .member h4 {
        margin: 0.5rem 0;
        color: #fbe9e7; /* Off-white text for better readability */
        font-size: 1.25rem;
      }

      section {
        background-color: #4e342e; /* Dark brown */
        padding: 1rem;
      }

      h1 {
        margin-top: 0.5rem;
        font-family: 'CooperBlack', sans-serif;
        font-size: 3rem;
        color: #fff;
        text-align: center;
        margin-bottom: 2rem;
      }

  </style>