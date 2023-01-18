import map from "./map.js";

export default function create_curve(start, width, items, simplex, d) {
	const points = [];
	const secs = width / items;

	points.push({ x: start.x, y: start.y });
	for (let i = 1; i < items; i++)
		points.push({
			x: start.x + i * secs,
			y:
				start.y +
				map(simplex(i + d, 1), -1, 1, -200, -10),
		});
	points.push({ x: start.x + width, y: start.y });
	return points;
}
