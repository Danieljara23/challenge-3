import data from "./data.json" assert { type: 'json' };;

console.log(data)
console.log(data.films)

const filmsHtml = data.films.map((element) => {
    return `
    <article class="movie-item">
      <div class="image-wrapper">
        <img
          src=${element.Images}
          alt="Movie Poster"
        />
      </div>
      <div class="content">
        <h4>${element.Title}</h4>
        <div class="movie-info">
          <div class="score-wrapper">
            <img src="./assets/star.svg" />
            <p class="score"${element.imdbRating}/10</p>
          </div>
          <span class="genre">${element.Genre}</span>
        </div>
        <p class="plot">
          ${element.Plot}
        </p>
      </div> 
    </article>
    `
}).join("")

document.getElementById("container").innerHTML = filmsHtml

const buttons = document.querySelectorAll(".filter-button")

buttons.forEach(buttonElement => {
  buttonElement.addEventListener(`click`, (event)=> {
    console.log(event.target.innerHTML)
    const selectedButtonText = event.target.innerText;
    
    const filteredFilms = data.films.filter(filmElement => filmElement.Genre.toLowerCase().includes(selectedButtonText.toLowerCase()))
    console.log(filteredFilms);

    const filteredFilmsHTML = filteredFilms.map((filmElement) => {
      return `
      <article class="movie-item">
        <div class="image-wrapper">
          <img
            src=${filmElement.Images}
            alt="Movie Poster"
          />
        </div>
        <div class="content">
          <h4>${filmElement.Title}</h4>
          <div class="movie-info">
            <div class="score-wrapper">
              <img src="./assets/star.svg" />
              <p class="score"${filmElement.imdbRating}/10</p>
            </div>
            <span class="genre">${filmElement.Genre}</span>
          </div>
          <p class="plot">
            ${filmElement.Plot}
          </p>
        </div> 
      </article>
      `;
    }).join("")

    document.getElementById("container").innerHTML = filteredFilmsHTML
  })
})

  