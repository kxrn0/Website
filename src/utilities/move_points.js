import map from "./map.js";

export default function move_points(points, height, simplex, d) {
	const mid = points[~~(points.length / 2)];
	const amp = height - points[0].y - 30;

	for (let i = 1; i < points.length - 1; i++) {
		const dist = points[i].x - mid.x;

		points[i].y =
			points[0].y +
			amp *
				Math.exp((-dist * dist) / 5000) *
				map(simplex(i / 5 + d, d * 5), -1, 1, -1, 0);
	}
}
