import data from "./data.json" assert { type: 'json' };;

const filmsHtml = data.films
 .map((filmsElement) => {
    return `
    <h4>${pelicula.Title}</h4>
    <p><strong>Género:</strong> ${pelicula.Genre}</p>
    <p><strong>Calificación:</strong> ${pelicula.Rated}</p>
    <p><strong>Argumento:</strong> ${pelicula.Plot}</p>
    <img src="${pelicula.Images}" alt="${pelicula.Title}" />
    `;
  })
  .join("");
  document.getElementById("movies-container").innerHTML = filmsHtml

  const buttons = document.querySelectorAll(".filter-button")
  
  buttons.forEach(buttonElement => {
    buttonElement.addEventListener("click", (event)=>{
      console.log(event.target.innerHTML)
      const selectedButtonText = event.target.innerText;

      const filteredFilms = data.films.filter((filmsElement) => filmsElement.Genre === selectedButtonText.toLowerCase())
      console.log(filteredFilms)

      const filteredFilmsHtml = filteredFilms.map((filmsElement) => {
        return `
        <h4>${pelicula.Title}</h4>
        <p><strong>Género:</strong> ${pelicula.Genre}</p>
        <p><strong>Calificación:</strong> ${pelicula.Rated}</p>
        <p><strong>Argumento:</strong> ${pelicula.Plot}</p>
        <img src="${pelicula.Images}" alt="${pelicula.Title}" />
        `;
      })
      .join("");

      document.getElementById("movies-container").innerHTML = filteredFilmsHtml

    })
  })

console.log(data)
console.log(data.films)