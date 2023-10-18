import data from "./data.json" assert { type: 'json' };

const cardsHtml = data.films.map((element)=>{
    return ` <article class="movie-item">
    <div class="image-wrapper">
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
    </div>
    </article>`
  }).join ("")
 document.querySelector(".movies-container").innerHTML = cardsHtml     
 
 document.querySelectorAll(".filter-button").forEach((buttonElement) => {
  buttonElement.addEventListener("click", (event) => {
    const selectedType = event.target.textContent;
    const cardsfilter = data.films.filter(
      (element) => element.Genre.includes(selectedType) 
    );
    const newfilmsHtml = cardsfilter.map((element) => {
      return ` <article class="movie-item">
      <div class="image-wrapper">
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
      </div>
      </article>`
    }).join ("")

   document.querySelector(".movies-container").innerHTML = newfilmsHtml   


  });
}); 


 









