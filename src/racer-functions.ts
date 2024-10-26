import { Racer } from "Racer";
export const findRacersWithEmptyFuel = (racerArray: Racer[]) => {
	if (!racerArray?.length) {
		return [];
	}
	let racers: Racer[] = racerArray.filter(
		(racer: Racer) => racer.isFuelEmpty() === true
	);

	return racers;
};

export const findAverageSpeed = (racerArray: Racer[]) => {
	if (!racerArray?.length) {
		return 0;
	}

	let avgSpeed: number = 0;
	racerArray.forEach((Racer: Racer) => {
		avgSpeed += Racer.speed;
	});
	return avgSpeed / racerArray.length;
};

export const getFasterRacer = (racerA: Racer, racerB: Racer) => {
	if (racerA.speed === racerB.speed) {
		return null;
	}
	return racerA.speed > racerB.speed ? racerA : racerB;
};
