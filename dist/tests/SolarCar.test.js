"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SolarCar_1 = require("../src/SolarCar");
describe("Run Solar Car Tests", () => {
    test("call accelerate once", () => {
        const car1 = new SolarCar_1.SolarCar("SolarOne", 0);
        car1.accelerate();
        expect(car1.speed).toBe(1);
    });
    test("call accelerate twice", () => {
        const car1 = new SolarCar_1.SolarCar("SolarOne", 0);
        car1.accelerate();
        car1.accelerate();
        expect(car1.speed).toBe(2);
    });
    test("there's no fuel", () => {
        const car3 = new SolarCar_1.SolarCar("Car 3", 0);
        expect(car3.isFuelEmpty()).toBe(false);
    });
});
