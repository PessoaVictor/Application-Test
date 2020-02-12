
let divContainer = document.querySelector('div.flex-container');
let randoms = [...Array(8)].map(() => Math.floor(Math.random() * 11));
randoms.sort();

for (const iterator of randoms) {
    let divElement = document.createElement('div');
    let divTextElement = document.createTextNode(iterator);
    divElement.appendChild(divTextElement);
    divElement.classList.add('circle');

    divContainer.appendChild(divElement);
}