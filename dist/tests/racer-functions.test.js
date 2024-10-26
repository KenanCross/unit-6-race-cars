"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const racer_functions_1 = require("../src/racer-functions");
const GasCar_1 = require("../src/GasCar");
const SolarCar_1 = require("../src/SolarCar");
describe("Racer Functions", () => {
    test("2 cars have no fuel", () => {
        const car1 = new GasCar_1.GasCar("car1", 0);
        const car2 = new GasCar_1.GasCar("car2");
        const car3 = new GasCar_1.GasCar("car3", 0);
        const car4 = new GasCar_1.GasCar("car4");
        const myRacers = [car1, car2, car3, car4];
        expect((0, racer_functions_1.findRacersWithEmptyFuel)(myRacers)).toEqual([car1, car3]);
    });
    test("all cars have no fuel", () => {
        const car1 = new GasCar_1.GasCar("car1", 0);
        const car2 = new GasCar_1.GasCar("car2", 0);
        const car3 = new GasCar_1.GasCar("car3", 0);
        const car4 = new GasCar_1.GasCar("car4", 0);
        const myRacers = [car1, car2, car3, car4];
        expect((0, racer_functions_1.findRacersWithEmptyFuel)(myRacers)).toEqual([car1, car2, car3, car4]);
    });
    test("all cars have fuel", () => {
        const car1 = new GasCar_1.GasCar("car1");
        const car2 = new GasCar_1.GasCar("car2");
        const car3 = new GasCar_1.GasCar("car3");
        const car4 = new GasCar_1.GasCar("car4");
        const myRacers = [car1, car2, car3, car4];
        expect((0, racer_functions_1.findRacersWithEmptyFuel)(myRacers)).toEqual([]);
    });
    test("all Solar Cars have fuel", () => {
        const car1 = new SolarCar_1.SolarCar("car1");
        const car2 = new SolarCar_1.SolarCar("car2");
        const car3 = new SolarCar_1.SolarCar("car3");
        const car4 = new SolarCar_1.SolarCar("car4");
        const myRacers = [car1, car2, car3, car4];
        expect((0, racer_functions_1.findRacersWithEmptyFuel)(myRacers)).toEqual([]);
    });
    test("show a mix of solar and gas cars", () => {
        const car1 = new GasCar_1.GasCar("car1", 0);
        const car2 = new SolarCar_1.SolarCar("car2");
        const car3 = new SolarCar_1.SolarCar("car3");
        const car4 = new GasCar_1.GasCar("car4");
        const myRacers = [car1, car2, car3, car4];
        expect((0, racer_functions_1.findRacersWithEmptyFuel)(myRacers)).toEqual([car1]);
    });
    test("test empty array result", () => {
        expect((0, racer_functions_1.findRacersWithEmptyFuel)([])).toEqual([]);
    });
});
describe("test average speed function", () => {
    test("average speed of 3 racers", () => {
        const car1 = new GasCar_1.GasCar("car1", 10, 10);
        const car2 = new GasCar_1.GasCar("car2", 5, 5);
        const car3 = new GasCar_1.GasCar("car3");
        const myRacers = [car1, car2, car3];
        expect((0, racer_functions_1.findAverageSpeed)(myRacers)).toEqual(5);
    });
    test("average speed of 3 racers of solar and gas", () => {
        const car1 = new GasCar_1.GasCar("car1", 10, 20);
        const car2 = new SolarCar_1.SolarCar("car2", 10);
        const car3 = new GasCar_1.GasCar("car3", 5, 9);
        const myRacers = [car1, car2, car3];
        expect((0, racer_functions_1.findAverageSpeed)(myRacers)).toEqual(13);
    });
    test("test 0 result", () => {
        const car1 = new GasCar_1.GasCar("car1");
        const car2 = new GasCar_1.GasCar("car2");
        const car3 = new GasCar_1.GasCar("car3");
        const myRacers = [car1, car2, car3];
        expect((0, racer_functions_1.findAverageSpeed)(myRacers)).toEqual(0);
    });
    test("test empty array", () => {
        expect((0, racer_functions_1.findAverageSpeed)([])).toEqual(0);
    });
});
describe("whos the faster racer", () => {
    test("racer A is faster", () => {
        const car1 = new SolarCar_1.SolarCar("car1", 10);
        const car2 = new SolarCar_1.SolarCar("car2", 8);
        expect((0, racer_functions_1.getFasterRacer)(car1, car2)).toBe(car1);
    });
    test("racer B is faster", () => {
        const car1 = new SolarCar_1.SolarCar("car1", 3);
        const car2 = new SolarCar_1.SolarCar("car2", 7);
        expect((0, racer_functions_1.getFasterRacer)(car1, car2)).toBe(car2);
    });
    test("same speed", () => {
        const car1 = new SolarCar_1.SolarCar("car1", 10);
        const car2 = new SolarCar_1.SolarCar("car2", 10);
        expect((0, racer_functions_1.getFasterRacer)(car1, car2)).toBeNull;
    });
    test("racer A is faster", () => {
        const car1 = new GasCar_1.GasCar("car1", 10, 8);
        const car2 = new SolarCar_1.SolarCar("car2", 7);
        expect((0, racer_functions_1.getFasterRacer)(car1, car2)).toBe(car1);
    });
});
