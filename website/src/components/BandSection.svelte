<script>
  import {imageBaseURL} from '../config.js';

  export let bandMembers = [
    { name: 'Ryles Steurer', link: 'test', image: 'banana.jpg' },
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
    <h2>Meet the Artists</h2>
    <div class="grid">
      {#each bandMembers as member}
        <div class="member">
          <img src={member.image} alt={member.name} />
          <h4>{member.name}</h4>
          <a href={member.link} target="_blank">View Profile</a>
        </div>
      {/each}
    </div>
  </section>

  <style>
    section {
      padding: 2rem;
    }
    h2 {
    text-align: center;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }
    .member {
      text-align: center;
    }
  </style>