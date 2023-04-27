import "./style.css"

//almacenamos el contenedor
const main = document.querySelector("main")

//Variable del numero de pagina
let pageNum = 1


//con una funcion recuperamos los personajes
const getData = async (num) => {

const ul = document.querySelector("main")

ul.innerHTML=""; //Borra los elemenos para poner los siguientes al pasar la pagina
  
  
  const data = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNum}`
  )
  //setransformamos a JSON para representar los datos estructurados en la forma de objetos.
  
  const dataJSON = await data.json()
  console.log(dataJSON.results)//para saber los personajes sacamos por consola .results (20 en nuestro caso)
//con un bucle recorremos el array de results y acceder a cada objeto(personaje) mostrado ya en la consola
//con un figure pintaremos la imagen y el nombre de cada personaje, accede al HTML en el contenedor main
  for (const character of dataJSON.results) {
    const figure = document.createElement("figure")
    figure.innerHTML = `
    <img src=${character.image} alt=${character.name}/>
    <h3>${character.name}</h3>
    <h3> Especie: ${character.species}</h3> 
    <h3> Estado:${character.status}</h3>
    `
    main.appendChild(figure)
  }
}

//accionamos pintar la pagina
getData(pageNum)

//botón le sumará 1 a pageNum y volverá a hacer la petición y pintar los personajes siguientes
const nextBtn = document.querySelector("#nextBtn")
nextBtn.addEventListener("click", () => {
  pageNum++
  getData(pageNum)
})

const previousBtn = document.querySelector("#previousBtn")
previousBtn.addEventListener("click", () => {
 pageNum = pageNum > 0 ? (pageNum - 1) : 1
 getData(pageNum)
})