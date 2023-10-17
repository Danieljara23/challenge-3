import data from "./data.json" assert { type: 'json' };

console.log(data)
console.log(data.films)

const filmsHtml = data.films.map((element) => {
    return `
    <div class="image-wrapper">
      <img
        src="https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
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
    `
}).join("")

document.getElementsByClassName("movies-container").innerHTML = filmsHtml