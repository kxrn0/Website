import random from "./random.js";

export default function draw_noise(canvas) {
	const context = canvas.getContext("2d");
	const imageData = context.createImageData(
		canvas.width,
		canvas.height / 2
	);
	const data = imageData.data;

	for (let i = 0; i < data.length; i += 4) {
		if (random(0, 1) < 0.5) {
			data[i] = ~~random(0, 100);
			data[i + 1] = ~~random(0, 100);
			data[i + 2] = ~~random(100, 255);
		} else {
			data[i] = ~~random(0, 100);
			data[i + 1] = ~~random(100, 225);
			data[i + 2] = ~~random(225, 255);
		}

		data[i + 3] = ~~random(0, 200);
	}

	context.putImageData(imageData, 0, 0);
}
