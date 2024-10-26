"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasCar = void 0;
class GasCar {
    constructor(team, fuel = 10, speed = 0) {
        this.team = team;
        this.fuel = fuel;
        this.speed = speed;
    }
    accelerate() {
        this.speed = this.speed + 2;
        this.fuel--;
    }
    isFuelEmpty() {
        if (this.fuel <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.GasCar = GasCar;
