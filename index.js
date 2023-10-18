import data from "./data.json" assert { type: 'json' };;

const infoCards = data.films.map((element) => {
    return `
    <article class="movie-item">
    <div class="image-wrapper">
      <img
        src="${element.Images}"
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

document.getElementsByClassName("movies-container")[0].innerHTML = infoCards;

const btn = document.querySelectorAll(".filter-button");

btn.forEach((btnelement) => {
  btnelement.addEventListener("click", (e)  => {
    console.log(e.target);
    const selectBtn = e.target.innerText;
    const filterBtn = data.films.filter((filmElement) => filmElement.Genre.toLowerCase().includes(selectBtn.toLowerCase()));
    console.log(filterBtn);

    const films = filterBtn.map((element) => {
      return `
      <article class="movie-item">
      <div class="image-wrapper">
        <img
          src="${element.Images}"
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
    document.getElementsByClassName("movies-container")[0].innerHTML = films;
  });
});

console.log(data)
console.log(data.films)