import {
	findRacersWithEmptyFuel,
	findAverageSpeed,
	getFasterRacer,
} from "../src/racer-functions";
import { GasCar } from "../src/GasCar";
import { SolarCar } from "../src/SolarCar";

describe("Racer Functions", () => {
	test("2 cars have no fuel", () => {
		const car1 = new GasCar("car1", 0);
		const car2 = new GasCar("car2");
		const car3 = new GasCar("car3", 0);
		const car4 = new GasCar("car4");
		const myRacers = [car1, car2, car3, car4];
		expect(findRacersWithEmptyFuel(myRacers)).toEqual([car1, car3]);
	});
	test("all cars have no fuel", () => {
		const car1 = new GasCar("car1", 0);
		const car2 = new GasCar("car2", 0);
		const car3 = new GasCar("car3", 0);
		const car4 = new GasCar("car4", 0);
		const myRacers = [car1, car2, car3, car4];
		expect(findRacersWithEmptyFuel(myRacers)).toEqual([car1, car2, car3, car4]);
	});
	test("all cars have fuel", () => {
		const car1 = new GasCar("car1");
		const car2 = new GasCar("car2");
		const car3 = new GasCar("car3");
		const car4 = new GasCar("car4");
		const myRacers = [car1, car2, car3, car4];
		expect(findRacersWithEmptyFuel(myRacers)).toEqual([]);
	});
	test("all Solar Cars have fuel", () => {
		const car1 = new SolarCar("car1");
		const car2 = new SolarCar("car2");
		const car3 = new SolarCar("car3");
		const car4 = new SolarCar("car4");
		const myRacers = [car1, car2, car3, car4];
		expect(findRacersWithEmptyFuel(myRacers)).toEqual([]);
	});
	test("show a mix of solar and gas cars", () => {
		const car1 = new GasCar("car1", 0);
		const car2 = new SolarCar("car2");
		const car3 = new SolarCar("car3");
		const car4 = new GasCar("car4");
		const myRacers = [car1, car2, car3, car4];
		expect(findRacersWithEmptyFuel(myRacers)).toEqual([car1]);
	});
	test("test empty array result", () => {
		expect(findRacersWithEmptyFuel([])).toEqual([]);
	});
});

describe("test average speed function", () => {
	test("average speed of 3 racers", () => {
		const car1 = new GasCar("car1", 10, 10);
		const car2 = new GasCar("car2", 5, 5);
		const car3 = new GasCar("car3");
		const myRacers = [car1, car2, car3];
		expect(findAverageSpeed(myRacers)).toEqual(5);
	});
	test("average speed of 3 racers of solar and gas", () => {
		const car1 = new GasCar("car1", 10, 20);
		const car2 = new SolarCar("car2", 10);
		const car3 = new GasCar("car3", 5, 9);
		const myRacers = [car1, car2, car3];
		expect(findAverageSpeed(myRacers)).toEqual(13);
	});
	test("test 0 result", () => {
		const car1 = new GasCar("car1");
		const car2 = new GasCar("car2");
		const car3 = new GasCar("car3");
		const myRacers = [car1, car2, car3];
		expect(findAverageSpeed(myRacers)).toEqual(0);
	});
	test("test empty array", () => {
		expect(findAverageSpeed([])).toEqual(0);
	});
});
describe("whos the faster racer", () => {
	test("racer A is faster", () => {
		const car1 = new SolarCar("car1", 10);
		const car2 = new SolarCar("car2", 8);
		expect(getFasterRacer(car1, car2)).toBe(car1);
	});
	test("racer B is faster", () => {
		const car1 = new SolarCar("car1", 3);
		const car2 = new SolarCar("car2", 7);
		expect(getFasterRacer(car1, car2)).toBe(car2);
	});
	test("same speed", () => {
		const car1 = new SolarCar("car1", 10);
		const car2 = new SolarCar("car2", 10);
		expect(getFasterRacer(car1, car2)).toBeNull;
	});
	test("racer A is faster", () => {
		const car1 = new GasCar("car1", 10, 8);
		const car2 = new SolarCar("car2", 7);
		expect(getFasterRacer(car1, car2)).toBe(car1);
	});
});
