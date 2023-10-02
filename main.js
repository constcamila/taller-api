const input = document.getElementById("inputBuscar");
const btn = document.getElementById("btnBuscar");
const container = document.getElementById("contenedor");

btn.addEventListener ("click", function(){
    
    container.innerHTML = ""; //limpia el contenido del contendor

    let searchValue = input.value; //toma el valor de la barra de busqueda

    //se declara la url del json con la variable searchValue para poder tomar el dato de busqueda ingresado
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?character=${searchValue}`

    console.log(searchValue); //imprime en pantalla el dato de busqueda

    //toma los datos del json
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        //verifica si se recibieron datos
        if (data.length > 0) {
            //toma la primera cita (en caso de que haya varias) para mostrarla en el contenedor
            const quoteData = data[0];
            container.innerHTML = `
                <h2>${quoteData.character}</h2>
                <img src="${quoteData.image}" alt="${quoteData.character}">
                <p>Cita: ${quoteData.quote}</p>
                <p>Personaje: ${quoteData.character}</p>
            `;
        } else {
            container.innerHTML = "<p>No se encontraron citas para este personaje.</p>";
        }
    })
    .catch((error) => {
        console.error("Hubo un error:", error);
    });

})