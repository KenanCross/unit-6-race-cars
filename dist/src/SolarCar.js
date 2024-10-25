"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarCar = void 0;
class SolarCar {
    constructor(team, speed) {
        this.team = team;
        this.speed = speed;
    }
    accelerate() {
        this.speed++;
    }
    isFuelEmpty() {
        return false;
    }
}
exports.SolarCar = SolarCar;
