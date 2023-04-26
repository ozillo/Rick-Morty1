import "./style.css"

const main = document.querySelector("main")

//Variable del numero de pagina
let pageNum = 1

const getData = async (num) => {
  const data = await fetch(
    `https://starwars-databank-server.vercel.app/api/v1/characters?page=${num}&limit=30`
  )
  const dataJSON = await data.json()

  for (const character of dataJSON.data) {
    const figure = document.createElement("figure")
    figure.innerHTML = `
    <img src=${character.image} alt=${character.name}/>
    <h3>${character.name}</h3>
    `
    main.appendChild(figure)
  }
}

//Inicialmente pinto la página 1
getData(pageNum)

//El botón va a sumarle 1 a pageNum y va a volver a hacer la petición y pintar los personajes siguientes
const nextBtn = document.querySelector("#nextBtn")
nextBtn.addEventListener("click", () => {
  pageNum++
  getData(pageNum)
})
