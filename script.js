import { creatures } from "./creatures.js";

const main = document.querySelector("main");
const submitName = document.querySelector(".submitName");
const inputName = document.querySelector(".inputName");

const creatureName = creatures.find(creature => creature.id === 1).name;

submitName.addEventListener("submit", e => {
    e.preventDefault();

    let heroName = inputName.value;
    let hp = 100;
    let heroHp = `HP: ${hp}`;
    let level = 1;
    let heroLvl = `Level: ${level}`;

    const heroContainer = `
        <div class="heroContainer">
            <h2>${heroName}</h2>
            <p>${heroHp}</p>
            <p>${heroLvl}</p>
            <button>Fight Wolf</button>
            <button>Fight Wolf Boss</button>
        </div>

    `;

    inputName.value = "";
    submitName.remove();
    main.insertAdjacentHTML('beforeend', heroContainer)
})

