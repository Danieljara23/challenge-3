import data from "./data.json" assert { type: 'json' };;

const infoCards = data.films.map((element) => {
    return`
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
                <p class="score">9.0/10</p>
              </div>
              <span class="genre">Suspend</span>
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