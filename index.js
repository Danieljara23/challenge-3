import data from "./data.json" assert { type: 'json' };

console.log(data)
console.log(data.films)

const cardsHtml = data.films.map((element)=>{
    return `<div class="image-wrapper">
      <img src="${element.Images[0]}" alt="${element.Title}" />
    </div>
    <div class="content">
      <h4>${element.Title}</h4>
      <div class="movie-info">
        <div class="score-wrapper">
          <img src="./assets/star.svg" alt="Ícono de una estrella" />
          <p class="score">${element.imdbRating}/10</p>
        </div>
        <span class="genre">${element.Genre}</span>
      </div>
      <p class="plot">${element.Plot}</p>
    </div>`
  }).join ("")
  console.log(cardsHtml)
 document.querySelector(".movie-item").innerHTML = cardsHtml


 









