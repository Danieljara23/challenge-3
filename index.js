
import data from "./data.json"assert { type: 'json' };;

console.log(data);
console.log(data.films);

const movieHtml = data.films.map((filmsElement) => {
  return `
    <article class="movie-item">
      <div class="content">
      <div class="image-wrapper">
            <img
              src="${filmsElement.Images}"
              alt=""
            />
        <h4>${filmsElement.Title}</h4>
        <div class="score-wrapper">
        <img src="./assets/star.svg" alt="Ícono de una estrella" />
        <p class="score">${filmsElement.imdbRating}</p>
        <span class="genre">${filmsElement.Genre}</span>
        </div>
        <p class="plot"> ${filmsElement.Plot}</p>
      </div>
    </article>
  `;
}).join("");

const moviesContainer = document.querySelector(".movies-container");

if (moviesContainer) {
  moviesContainer.innerHTML = movieHtml;
} else {
  console.error("Element with class 'movies-container' not found.");
}