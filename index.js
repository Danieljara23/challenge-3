import data from "./data.json" assert { type: 'json' };;

const movies = data.films.map((element) => {
  return `
    <article class="movie-item">
        <div class="image-wrapper">
            <img
                src=${element.Images}
                alt=""
            />
        </div>
        <div class="content">
        <h4>${element.Title}</h4>
        <div class="movie-info">
            <div class="score-wrapper">
                <img src="./assets/star.svg" alt="Ícono de una estrella" />
                <p class="score">${element.imdbRating}</p>
            </div>
            <span class="genre">${element.Genre}</span>
        </div>
        <p class="plot">
          ${element.Plot}
        </p>
        </div>
    </article>
  `;
}).join("");

document.getElementsByClassName("movies-container")[0].innerHTML = movies

console.log(data)
console.log(data.films)

const buttons = document.querySelectorAll(".filter-button")

buttons.forEach((buttonElement) => {
  buttonElement.addEventListener("click", (event) => {
    console.log(EventTarget)
    const selectedButton = event.target.innerText;

    const filteredMovies = data.films.filter(filteredElement => filteredElement.Genre.toLowerCase().includes(selectedButton.toLowerCase()))
    console.log(filteredMovies);

    const filteredMoviesHtml = filteredMovies.map((filteredElement) => {
      return`
        <article class="movie-item">
        <div class="image-wrapper">
            <img
                src=${filteredElement.Images}
                alt=""
            />
        </div>
        <div class="content">
        <h4>${filteredElement.Title}</h4>
        <div class="movie-info">
            <div class="score-wrapper">
                <img src="./assets/star.svg" alt="Ícono de una estrella" />
                <p class="score">${filteredElement.imdbRating}</p>
            </div>
            <span class="genre">${filteredElement.Genre}</span>
        </div>
        <p class="plot">
          ${filteredElement.Plot}
        </p>
        </div>
      </article>
      `;
    }).join("")
      
    document.getElementsByClassName("movies-container")[0].innerHTML = filteredMoviesHtml
    })
})