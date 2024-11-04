const IMAGE_URL = "https://placehold.co/200";
//lo pongo todo en imayusculas porque será una constante global
const CARD_CONTAINER = document.getElementById("container");
//son variables contexto¿?
const CARD = document.getElementById("card");
const IMG_CONTAINER = document.getElementById("img-container");

const fetchUserData = () => {
    //setTimeout (() => {
        return {
            id: 1, 
            username: "User Name",
            description: "Lorem Ipsum",
            age: 25,
            fav_music: {
                bands: [
                    "Temerarios",
                    "Los Panchos",
                    "Los Acosta", 
                    "Los Yonics", "Las Jilguerillas",
                ],
            },
        } ;
    //}  200);
};
const USERDATA = fetchUserData();
//IMG
const image = document.createElement("img");
image.src = IMAGE_URL;
image.alt = "PLacejolder user photo";
//CARD Desc
const userName = document.createElement("h3");
const description = document.createElement("p");
const age = document.createElement("p");
//arr.map es muy similar al foreach pero el foreach no regresa nada, solo ejecuta y arr: este si devuelve algo 
const bands = document.createElement("ul");

console.log(USERDATA);
const bandList = USERDATA.fav_music.bands.map(e => {
    const item = document.createElement("li");
    item.textContent = e; 
    return item;
});

// Asignación de datos a los elementos de la tarjeta
userName.textContent = USERDATA.username;
description.textContent = USERDATA.description;
age.textContent = USERDATA.age;

// Añadiendo la imagen y la lista de bandas
IMG_CONTAINER.appendChild(image);
bands.append(...bandList);
CARD.append(userName, description, age, bands);

// Alternar visibilidad de la tarjeta al hacer clic en el botón
document.getElementById("btn-hide").addEventListener("click", () => {
        CARD_CONTAINER.style.visibility = 
            CARD_CONTAINER.style.visibility === "hidden" ? "visible" : "hidden";
    });


