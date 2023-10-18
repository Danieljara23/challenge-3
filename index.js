import data from "./data.json" assert { type: 'json' };;

const infoCards = data.films.map((element) => {
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
document.getElementsByClassName("movies-container")[0].innerHTML = infoCards
console.log(data)
console.log(data.films)
document.querySelectorAll(".filter-button").forEach((buttonElement) => {
  buttonElement.addEventListener("click", (e) => {
    console.log(e.target.tex)
    const selectedButtonText = e.target.textContent;
    const filteredTasks = data.films.filter((filmElement) => filmElement.Genre.toLowerCase().includes(selectedButtonText.toLowerCase()))
    console.log(filteredTasks)

    const newInfoCards = filteredTasks.map((buttonElement) => {
      return `
    <article class="movie-item">
          <div class="image-wrapper">
            <img
              src=${buttonElement.Images[0]}
              alt=""
            />
          </div>
          <div class="content">
            <h4>${buttonElement.Title}</h4>
            <div class="movie-info">
              <div class="score-wrapper">
                <img src="./assets/star.svg" alt="Ícono de una estrella" />
                <p class="score">${buttonElement.imdbRating}</p>
              </div>
              <span class="genre">${buttonElement.Genre}</span>
            </div>
            <p class="plot">
             ${buttonElement.Plot}
            </p>
          </div>
        </article>
        `;

    }).join("");
    document.getElementsByClassName("movies-container")[0].innerHTML = newInfoCards
  })
})