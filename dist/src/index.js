"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GasCar_1 = require("./GasCar");
const SolarCar_1 = require("./SolarCar");
const racer_functions_1 = require("./racer-functions");
const RACE_END_SPEED = 12;
const TICK_TIME_MS = 2000; // 2 seconds
// Setup
let racers = [
    new GasCar_1.GasCar("Gas Guzzler", getRandomFuel()),
    new GasCar_1.GasCar("Carbon Footprint", getRandomFuel()),
    new GasCar_1.GasCar("Burn Baby Burn", getRandomFuel()),
    new SolarCar_1.SolarCar("Green Machine"),
    new SolarCar_1.SolarCar("Sunray"),
    new SolarCar_1.SolarCar("Light Lightning"),
];
for (const racer of racers) {
    racer.speed = getRandomSpeed();
}
// Run program
displayStatus();
let raceInterval = setInterval(tick, TICK_TIME_MS);
function tick() {
    for (const racer of racers) {
        if (!racer.isFuelEmpty()) {
            racer.accelerate();
        }
    }
    displayStatus();
    // Stop when the average racer speed reaches the limit
    if ((0, racer_functions_1.findAverageSpeed)(racers) >= RACE_END_SPEED) {
        clearInterval(raceInterval);
    }
}
// Some needed functions
function getRandomFuel() {
    return Math.floor(Math.random() * 10);
}
function getRandomSpeed() {
    return Math.floor(Math.random() * 6);
}
function displayStatus() {
    // Sort with fastest racer first using getFasterRacer
    racers.sort((a, b) => {
        const faster = (0, racer_functions_1.getFasterRacer)(a, b);
        return faster === a ? -1 : faster === b ? 1 : 0;
    });
    console.log();
    console.log("======================");
    for (const racer of racers) {
        const fuelStatus = racer.isFuelEmpty() ? " (out of fuel)" : "";
        console.log(`Team: ${racer.team}, Speed: ${racer.speed}${fuelStatus}`);
    }
    console.log();
    console.log(`Average speed: ${(0, racer_functions_1.findAverageSpeed)(racers).toFixed(1)}, Cars out of fuel: ${(0, racer_functions_1.findRacersWithEmptyFuel)(racers).length}`);
}
