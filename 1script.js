const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MGJhZGZhMTMyM2YxYTQ4NzFiNzQxYTAxNTFmY2Q5YyIsInN1YiI6IjY2MjVhYjY0NjNkOTM3MDE2NDcyNDJkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nMR1kHl2C35maQQW1F3hkQd-uE-2VlDuJgSoP7J5vTc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


const Movie [

    "Harry Potter and the Prisoner of Azkaban",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Return of the King",
    "The Dark Knight",
    "Inception",
    "Interstellar",
    "Tenet",
    "Pirates of the Caribbean: At World's End"
]    




const searchMovie = (data, keyword) => {
    return data.filter((item) => item.include(keyword));
};

const findMovie = searchMovie(Movie, keyword);



const MyMovieCards = document.querySelector(".MyMovieCards");

MyMovieCards.innerHTML = Movie.map((Movie) => `${Movie}`).join("");