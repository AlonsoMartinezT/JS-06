const IMAGE_URL = "https://placehold.co/200";
const CARD_CONTAINER = document.getElementById("container");
const BTN_HIDE = document.getElementById("btn-hide");

// Usuarios
const users = [
    {
        id: 1,
        user_name: 'Usuario 1',
        description: 'Alonso Martinez',
        age: '23',
        fav_music: {
            bands: [
                'Linkin Park', 'Shaw Mendez', 'Rels B', 'Micro Tdh'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Usuario 2',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 3,
        user_name: 'Usuario 3',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
];

// Creamos la  funcion
const createCard = (user) => {
    const card = document.createElement("div"); // Crear la tarjeta
    card.classList.add("card");
    const imgContainer = document.createElement("div"); // Crear contenedor de la imagen
    imgContainer.classList.add("img-container");
    const image = document.createElement("img"); // Crear contenedor de la imagen
    image.src = IMAGE_URL;
    image.alt = `Imagen de ${user.user_name}`;
    imgContainer.appendChild(image);
    const userName = document.createElement("h3"); // Crear contenido de la tarjeta
    const description = document.createElement("p");
    const age = document.createElement("p");
    const bandsList = document.createElement("ul");
    userName.textContent = user.user_name; // Asignación de datos 
    description.textContent = user.description;
    age.textContent = `Age: ${user.age}`;
    const bandItems = user.fav_music.bands.map(band => { // Crear la lista de bandas favoritas
        const li = document.createElement("li");
        li.textContent = band;
        return li;
    });
    bandsList.append(...bandItems);
    card.append(imgContainer, userName, description, age, bandsList); // Agregar elementos a la tarjeta
    return card;
};

// Función para mostrar las tarjetas de todos los usuarios
const displayUsers = () => {
    users.forEach(user => {
        const userCard = createCard(user);
        CARD_CONTAINER.appendChild(userCard);
    });
};

// Mostrar las tarjetas al cargar la página
displayUsers();

// Visibilidad de las cards
BTN_HIDE.addEventListener("click", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.visibility = card.style.visibility === "hidden" ? "visible" : "hidden";
    });
});
