const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=`;

const containner = document.querySelector(".containner");
const movieName = document.querySelector("#movieNameInput");
const searchButton = document.querySelector("#search-btn");
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

async function fetchMovie(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  const movieList = data.results;
  movieList.forEach((movie) => {
    let { title, poster_path, vote_average } = movie;
    console.log(title, poster_path, vote_average, movie);

    if (movie.poster_path) {
      containner.innerHTML += ` <div class="movie-card">
    <img src='${
      IMGPATH + poster_path
    }' alt="posterImg"    id="image" class='poster' />
    <div class="details">
    <div class='info'>
    <h1>${title}</h1>
    <span class='${getClassbyRating(
      vote_average
    )}' > <i class="fa-solid fa-star"></i>${vote_average.toFixed(1)}</span>
    </div>
    </div>
  </div>`;
    }
  });
}
function getClassbyRating(rating) {
  if (rating >= 8) return "green";
  else if (rating >= 5) return "orange";
  else return "red";
}

// fetching default movies
fetchMovie(APIURL);

// fetching movie on serach term
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  containner.innerHTML = "";
  const nameValue = movieName.value;
  fetchMovie(SEARCHAPI + nameValue);
});
