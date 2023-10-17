import data from "./data.json" assert { type: 'json' };;

console.log(data)
console.log(data.films)

const filmsHtml = data.films.map((element) => {
  return `
  <article class="movie-item">
  <div class="image-wrapper">
    <img src="${element.Images[0]}">
  </div>
  <div class="content">
    <h4>${element.Title}</h4>
    <div class="movie-info">
      <div class="score-wrapper">
        <img src="./assets/star.svg" alt="Ícono de una estrella" />
        <p>${element.imdbRating}/10</p>
      </div>
      <span class="genre">${element.Genre}</span>
    </div>
    <p class="plot">${element.Plot}</p>
  </div>
</article>
  `
}).join("")

document.getElementsByClassName("movies-container")[0].innerHTML = filmsHtml