import { creatures } from "./creatures.js";

const submitName = document.querySelector(".submitName");
const inputName = document.querySelector(".inputName");

const creatureName = creatures.find(creature => creature.id === 1).name;

