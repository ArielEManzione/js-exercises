
let form = document.querySelector("#MyForm");

let card = document.createElement("div");
let cardbody = document.createElement("div");
let img = document.createElement("img");
let titulo = document.createElement("h5");
let descripcion = document.createElement("p");

card.className = "card";
card.style = "width: 18rem;";
img.className = "card-img-top";
cardbody.className = "card-body";
titulo.className = "card-title";
descripcion.className = "card-text";

// escuchamos evento submit del form.
form.addEventListener("submit", evt => {

    evt.preventDefault();

    let elements = evt.target.elements;

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if (element.id == "Titulo") {
            titulo.innerHTML = element.value;
        } else if (element.id == "Descripcion") {
            descripcion.innerHTML = element.value;
        } else if (element.id == "Imagen") {
            img.src = element.value;
        }
    }


});


cardbody.appendChild(titulo);
cardbody.appendChild(descripcion);
card.appendChild(img);
card.appendChild(cardbody);
document.querySelector(".prueba").appendChild(card);