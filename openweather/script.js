const apiKey = "434fbf1f2b5a832d9d01b2cd4e8d46ab";
const apiUrl = "https://api.openweathermap.org/";

const campoBusqueda = document.getElementById("busquedaCiudad");
const btnBusqueda = document.getElementById("btnBusqueda");
const sugerenciasContainer = document.getElementById("sugerencias");
const sugerenciasUl = sugerenciasContainer.querySelector("ul");

document.addEventListener("DOMContentLoaded", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {

            console.log(posicion);
            let latitud = posicion.coords.latitude;
            let longitud = posicion.coords.longitude;
            console.log(`Latitud: ${latitud}, Longitud: ${longitud}`);
            elegirSugerencia(latitud, longitud);
        });
    }
});

btnBusqueda.addEventListener("click", () => {

});

function elegirSugerencia(lat, lon) {
    console.log(`Latitud: ${lat}, Longitud: ${lon}`);
    fetch(`${apiUrl}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(respuesta => {
        if (respuesta) {
            return respuesta.json();
        }
    })
    .then(data => {
        console.log(data);
    })
}

function consultarClima() {

}

function consultarCiudades() {

}

campoBusqueda.addEventListener("keyup", function(){
    if (sugerenciasUl.children.length > 0) {
        Array.from(sugerenciasUl.children).forEach(sugerencia => {
            sugerenciasUl.removeChild(sugerencia);
        });
        
    }
    fetch(`${apiUrl}geo/1.0/direct?q=${campoBusqueda.value}&limit=5&appid=${apiKey}&units=metric`)
    .then(respuesta => {
        if (respuesta) {
            return respuesta.json();
        }
    })
    .then(data => {
        let ciudadesData = data;
        let sugerencias = sugerenciasUl.querySelectorAll("li a");

        ciudadesData.forEach(ciudad => {

            let sugerenciaLI = `<li><a href="javascript:void(0);">${ciudad.name}, ${ciudad.country}</a></li>`;
            sugerenciasUl.insertAdjacentHTML("beforeend", sugerenciaLI);
        });

        sugerencias.forEach((sugerencia, index) => {
            sugerencia.addEventListener("click", () => elegirSugerencia(c[index].lat, c[index].lon));
            
        });
    })
})
