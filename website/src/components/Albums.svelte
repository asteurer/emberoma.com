<script>
    import {imageBaseURL} from '../config.js';
    let image = imageBaseURL + 'salted_caramel_album.jpg';
    let albumLink = 'https://distrokid.com/hyperfollow/emberoma/salted-caramel';
</script>


<section>
  <h1>The Album</h1>
  <div class="albums">
    <div class="album-container">
      <a href={albumLink} >
        <img src={image} alt="Album Cover" class="album" />
      </a>
    </div>
  </div>
</section>

  <style>
    section {
      background: linear-gradient(90deg, #d6a77e, #4e342e);
      padding: 2rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    h1 {
      margin-top: 0.5rem;
      font-family: 'CooperBlack', sans-serif;
      font-size: 3rem;
      text-align: center;
      margin-bottom: 2rem;
      color: #fff7ed;
      text-shadow:
        -1px -1px 0 #4e342e,
        1px -1px 0 #4e342e,
        -1px  1px 0 #4e342e,
        1px  1px 0 #4e342e;
    }

    .albums {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 0;
    }

    .album-container {
      position: relative;
      width: 80%;
      max-width: 600px;
      margin-bottom: 1rem;
    }

    .album {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .album-container:hover .album {
      transform: scale(1.05);
    }

  </style>