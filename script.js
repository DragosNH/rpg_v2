import { creatures } from "./creatures.js";

const main = document.querySelector("main");
const submitName = document.querySelector(".submitName");
const inputName = document.querySelector(".inputName");
const playerAttack = Math.floor((Math.random() * 5) + 2);

const creatureName = creatures.find(creature => creature.id === 1).name;




const getCreature = id => {
    let creatureName = creatures.find(creature => creature.id === id).name;
    let creatureLvl = creatures.find(creature => creature.id === id).level;
    let creatureHp = creatures.find(creature => creature.id === id).hp;
    let creatureXp = creatures.find(creature => creature.id === id).xp;
    let creatureDammage = creatures.find(creature => creature.id === id).dammage_dealing;
    let currentHp = `${creatureHp}`


    let wolfContainer = `
        <div class="creatureContainer">
            <h2>${creatureName}</h2>
            <p>Level: ${creatureLvl}</p>
            <p>HP: ${currentHp}</p>
            <p>XP drop: ${creatureXp}</p>
            <button class="fight">Attack</button>
        </div>
    `

    return wolfContainer
}

console.log(getCreature(1));


let hp = 100;
let heroHp = `HP: ${hp}`;
let level = 1;
let heroLvl = `Level: ${level}`;
let count = 0;

submitName.addEventListener("submit", e => {
    e.preventDefault();

    let heroName = inputName.value;


    const heroContainer = `
        <div class="heroContainer">
            <h2>${heroName}</h2>
            <p>${heroHp}</p>
            <p>${heroLvl}</p>
            <button class="woflFightBtn">Fight Wolf</button>
            <button class="bossFightBtn">Fight Wolf Boss</button>
        </div>

    `;

    inputName.value = "";
    submitName.remove();
    main.insertAdjacentHTML('beforeend', heroContainer)

    const fightWolf = document.querySelector(".woflFightBtn");

    const wolfContainer = `${getCreature(1)}`

    fightWolf.addEventListener("click", e => {
        e.preventDefault();
        if (count < 1) {
            main.insertAdjacentHTML('beforeend', wolfContainer)
            count++;
        }
    });



})

