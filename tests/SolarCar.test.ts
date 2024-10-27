import { SolarCar } from "../src/SolarCar";

describe("Run Solar Car Tests", () => {
	test("team property is set from the constructor", () => {
		const car1 = new SolarCar("SolarOne");
		expect(car1.team).toBeTruthy;
	});
	test("the speed property starts at zero", () => {
		const car1 = new SolarCar("SolarOne");
		expect(car1.speed).toBe(0);
	});
	test("call accelerate once", () => {
		const car1 = new SolarCar("SolarOne");
		car1.accelerate();
		expect(car1.speed).toBe(1);
	});
	test("call accelerate twice", () => {
		const car1 = new SolarCar("SolarOne");
		car1.accelerate();
		car1.accelerate();
		expect(car1.speed).toBe(2);
	});
	test("there's no fuel", () => {
		const car3 = new SolarCar("Car 3");
		expect(car3.isFuelEmpty()).toBe(false);
	});
});
