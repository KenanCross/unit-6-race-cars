import { Racer } from "./Racer";

export class GasCar implements Racer {
	constructor(
		public team: string,
		public fuel: number = 10,
		public speed: number = 0
	) {}

	accelerate() {
		this.speed = this.speed + 2;
		this.fuel--;
	}
	isFuelEmpty() {
		if (this.fuel <= 0) {
			return true;
		} else {
			return false;
		}
	}
}
