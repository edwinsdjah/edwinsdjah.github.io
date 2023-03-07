// CONTEKAN GET VIDEO TMDB

const apiKey = 'YOUR_API_KEY'; // Replace with your own API key
const movieId = '12345'; // Replace with the ID of the movie you want to get the teaser video for

// Make API request to get the list of videos for the movie
fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Filter the results to find the teaser video
    const teaserVideo = data.results.find(video => video.type === 'Teaser' || video.type === 'Trailer');
    if (teaserVideo) {
      // Get the key property of the teaser video
      const videoKey = teaserVideo.key;

      // Create URL for the video player
      const videoUrl = `https://www.youtube.com/embed/${videoKey}`;

      // Embed the video player in your HTML page
      const videoPlayer = document.createElement('iframe');
      videoPlayer.setAttribute('src', videoUrl);
      videoPlayer.setAttribute('width', '560');
      videoPlayer.setAttribute('height', '315');
      document.body.appendChild(videoPlayer);
    } else {
      console.log('Teaser video not found.');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  const apiKey = 'YOUR_API_KEY';
  const movieId = 'MOVIE_ID';
  
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`)
    .then(response => response.json())
    .then(data => {
      const director = data.credits.crew.find(person => person.job === 'Director');
      const cast = data.credits.cast.slice(0, 5);
      console.log(director, cast);
    })
    .catch(error =>
  