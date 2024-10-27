import { GasCar } from "../src/GasCar";

describe("Gas Car Tests", () => {
	test("team and fuel are set by the constructor", () => {
		const gasCar = new GasCar("carOne");
		expect(gasCar.team).toBeTruthy;
		expect(gasCar.fuel).toBeTruthy;
	});
	test("fuel starts at ten.", () => {
		const gasCarFuel = new GasCar("carFuel");
		expect(gasCarFuel.fuel).toEqual(10);
	});
	test("speed starts at zero.", () => {
		const gasCarSpeed = new GasCar("carSpeed");
		expect(gasCarSpeed.speed).toEqual(0);
	});
	test("Accerate Once to 2 speed.", () => {
		const gasCar1 = new GasCar("car1");
		gasCar1.accelerate();
		expect(gasCar1.speed).toBe(2);
	});
	test("Accerate twice to 4 speed.", () => {
		const gasCar2 = new GasCar("car2");
		gasCar2.accelerate();
		gasCar2.accelerate();
		expect(gasCar2.speed).toBe(4);
	});
	test("Accerate Once to reduce fuel to 9.", () => {
		const gasCar3 = new GasCar("car3");
		gasCar3.accelerate();
		expect(gasCar3.fuel).toBe(9);
	});
	test("Accerate twice to reduce fuel to 8.", () => {
		const gasCar4 = new GasCar("car4");
		gasCar4.accelerate();
		gasCar4.accelerate();
		expect(gasCar4.fuel).toBe(8);
	});
	test("isFuelEmpty returns true when zero fuel.", () => {
		const gasCar5 = new GasCar("car5", 0);
		expect(gasCar5.isFuelEmpty()).toBe(true);
	});
	test("isFuelEmpty returns fasle when fuel greater than zero.", () => {
		const gasCar6 = new GasCar("car6");
		expect(gasCar6.isFuelEmpty()).toBe(false);
	});
});
