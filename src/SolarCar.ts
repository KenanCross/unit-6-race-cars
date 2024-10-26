import { Racer } from "./Racer";

export class SolarCar implements Racer {
	constructor(public team: string, public speed: number = 0) {}

	accelerate() {
		this.speed++;
	}
	isFuelEmpty() {
		return false;
	}
}
