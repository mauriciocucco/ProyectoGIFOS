// MENÚ HAMBURGUESA DE MOBILE

document.addEventListener("click", event => {

    if (window.matchMedia("(max-width: 1199px)").matches) {

        let menuHamburguesa = document.querySelector(".menu");
        let checkbox = document.getElementById("hamburguesa_checkbox");

        if(event.target.id == "hamburguesa_checkbox") {

            if(checkbox.checked) {

                menuHamburguesa.style.display = "unset";

            }else {

                menuHamburguesa.style.display = "none";
            }

        }else if (event.target.id == "segundo"
                  || event.target.id == "tercero") {

            if(checkbox.checked) {

                menuHamburguesa.style.display = "none";
                checkbox.checked = false;
        
            }

        }
    } 
})

/*$(document).ready(function() {

    $("#hamburguesa_checkbox").click(function() {
       
        $(".menu").slideToggle(500);
    })
})*/


// MODO NOCTURNO

let modo = document.getElementById("primero");
let modoNocturno = document.createElement("link");
modoNocturno.setAttribute("rel", "stylesheet");
modoNocturno.setAttribute("href", "css/style_nocturno.css")
let gifos = document.querySelector("text#texto-gifos");
let head = document.getElementById("head");
let searchIcon = document.querySelector(".search-icon");
let close = document.querySelector(".close");
let camara = document.querySelector(".camara");
let pelicula = document.getElementById("pelicula");

modo.addEventListener("click", () => {

    if(event.target.textContent == "Modo Nocturno") {

        head.appendChild(modoNocturno);

        event.target.textContent = "Modo Diurno";

        body.style.backgroundColor = "rgb(55, 56, 60)";

        head.style.backgroundColor = "rgb(55, 56, 60)";

        searchIcon.setAttribute("src", "images/icon-search-mod-noc.svg");

        inactivo.setAttribute("src", "images/icon-search-mod-noc.svg");

        close.setAttribute("src", "images/close-noc.svg");

        gifos.style.fill = "#FFFFFF";

        camara.setAttribute("src", "images/camara-modo-noc.svg");
        pelicula.setAttribute("src", "images/pelicula-modo-noc.svg");

    }else if(event.target.textContent == "Modo Diurno") {

        event.target.textContent = "Modo Nocturno";

        gifos.style.fill = "#572EE5";

        body.style.backgroundColor = "unset";

        head.style.backgroundColor = "unset";

        searchIcon.setAttribute("src", "images/icon-search.svg");

        inactivo.setAttribute("src", "images/icon-search.svg");

        close.setAttribute("src", "images/close.svg");

        camara.setAttribute("src", "images/camara.svg");
        pelicula.setAttribute("src", "images/pelicula.svg");

        head.removeChild(modoNocturno);

    }
})