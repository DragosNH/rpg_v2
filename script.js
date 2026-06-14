import { creatures } from "./creatures.js";

const main = document.querySelector("main");
const submitName = document.querySelector(".submitName");
const inputName = document.querySelector(".inputName");

const creatureName = creatures.find(creature => creature.id === 1).name;

submitName.addEventListener("submit", e => {
    e.preventDefault();

    let heroName = inputName.value;

    const heroContainer = `<h2>${heroName}</h2>`;

    inputName.value = "";
    submitName.remove();
    main.insertAdjacentHTML('beforeend', heroContainer)
})

