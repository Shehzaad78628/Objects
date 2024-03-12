 const favoriteMovies = [
    {
      name: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      picture: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
    },
    {
      name: "Jawan",
        year: 2023,
        director: "Atlee Kumar",
        picture: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg"
    },
    {
      name: "Ford v Ferrari",
      year: 2019,
      director: "James Mangold",
      picture: "https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png"
    }
  ];
  
  function createMovieList(movies) {
    return movies.map(movie => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <p>Name: ${movie.name}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <img src="${movie.picture}" alt="${movie.name} Poster" width="200">
      `;
      return listItem;
    });
  }
  const movieListElement = document.getElementById('movieList');
  createMovieList(favoriteMovies).forEach(movie => {
    movieListElement.appendChild(movie);
  });