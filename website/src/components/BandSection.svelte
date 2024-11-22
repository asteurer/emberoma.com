<script>
  import {imageBaseURL} from '../config.js';
  export let bandMembers = [
    { name: 'Ryles Steurer', instagram: 'rylessteurermusic'},
    { name: 'Joy Melan', instagram: 'joy.melan'},
    { name: 'Seth Thomas', instagram: '_sethom_'},
    { name: 'Hunter Walkup', instagram: 'hunter_walkup'},
    { name: 'Nico Little', instagram: 'nicolittlemusic'},
    { name: 'Jac Carson', instagram: 'jac_withnok'},
    { name: 'Kendall Harrison', instagram: 'kenxall'},
    { name: 'August King', instagram: 'august_king_keys'},
    { name: 'Sam Blue', instagram: 'sambluesmusic'},
    { name: 'Jade Parx', instagram: 'jadeparx'},
    { name: 'Rhett Belcher', instagram: '100percent_brett'},
    { name: 'Craig Kierce', instagram: 'ckierce'},
    { name: 'Roy Marrero', instagram: 'dat_boi_palmtree'},
    { name: 'Carlos VanWees', instagram: 'losvanwees'},
    { name: 'Liz Mallet', instagram: 'lizzzzz.adrienne.2222'},
    { name: 'Donovan Handy', instagram: 'donosinferno'},
    { name: 'Spencer Ryan', instagram: 'spencer_gtr'},
    { name: 'Ronnie Hall', instagram: 'ronniehallatx'}
  ];

  // Reducing replicated code
  bandMembers = bandMembers.map(member => ({
      ...member,
      instagram: "https://instagram.com/" + member.instagram,
      image: imageBaseURL + 'chad.png'
    }))
  </script>

  <section>
    <h1>The Artists</h1>
    <div class="grid">
      {#each bandMembers as member}
      <a href={member.instagram} target="_blank" class="member"> <!-- Wrap card in <a> tag -->
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
        background-color: #b9a89b; /* Lighter brown for contrast */
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); /* Subtle shadow */
        padding: 1.5rem;
        text-align: center;
        text-decoration: none; /* Remove underline on instagrams */
        color: inherit; /* Inherit text color */
        transition: transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer; /* Indicate clickability */
      }

      .member:hover {
        background-color: #a79a91; /* Slightly darker brown on hover */
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
        /* color: #fbe9e7; */
        color: #4e342e;
        font-size: 1.25rem;
      }

      section {
        /* background-color: #4e342e; */
        padding: 1rem;
      }

      h1 {
        margin-top: 0.5rem;
        font-family: 'CooperBlack', sans-serif;
        font-size: 3rem;
        /* color: #fff; */
        color: #4e342e;
        text-align: center;
        margin-bottom: 2rem;
      }

  </style>