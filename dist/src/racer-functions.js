"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFasterRacer = exports.findAverageSpeed = exports.findRacersWithEmptyFuel = void 0;
const findRacersWithEmptyFuel = (racerArray) => {
    if (!(racerArray === null || racerArray === void 0 ? void 0 : racerArray.length)) {
        return [];
    }
    let racers = racerArray.filter((racer) => racer.isFuelEmpty() === true);
    return racers;
};
exports.findRacersWithEmptyFuel = findRacersWithEmptyFuel;
const findAverageSpeed = (racerArray) => {
    if (!(racerArray === null || racerArray === void 0 ? void 0 : racerArray.length)) {
        return 0;
    }
    let avgSpeed = 0;
    racerArray.forEach((Racer) => {
        avgSpeed += Racer.speed;
    });
    return avgSpeed / racerArray.length;
};
exports.findAverageSpeed = findAverageSpeed;
const getFasterRacer = (racerA, racerB) => {
    if (racerA.speed === racerB.speed) {
        return null;
    }
    return racerA.speed > racerB.speed ? racerA : racerB;
};
exports.getFasterRacer = getFasterRacer;
