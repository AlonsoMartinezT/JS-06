const title = document.getElementById("title");
console.log(title);
const titleInput = document.getElementById("title-input");
titleInput.addEventListener("input", (event) => {
    console.log(event);
    title.textContent = event.target.value;
    //paragraphs.forEach((e) => (e.textContent = event.target.value));
});

/*const paragraphs = document.getElementsByClassName("text");
console.log(paragraphs);
*/

const paragraph1 = document.createElement("p");
paragraph1.textContent = "Parrafo 1";
document.getElementById("main-content").appendChild(paragraph1);

