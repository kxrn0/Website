//https://www.codeproject.com/articles/31859/draw-a-smooth-curve-through-a-set-of-2d-points-wit

export default function get_control_points(points) {
	const n = points.length - 1;
	const firstPoints = new Array(n);
	const secondPoints = new Array(n);
	const x = hando(points, "x");
	const y = hando(points, "y");

	for (let i = 0; i < n; i++) {
		firstPoints[i] = {
			x: x[i],
			y: y[i],
		};
		if (i < n - 1)
			secondPoints[i] = {
				x: 2 * points[i + 1].x - x[i + 1],
				y: 2 * points[i + 1].y - y[i + 1],
			};
		else
			secondPoints[i] = {
				x: (points[n].x + x[n - 1]) / 2,
				y: (points[n].y + y[n - 1]) / 2,
			};
	}
	return {
		firstPoints,
		secondPoints,
	};
}

function hando(points, prop) {
	const n = points.length - 1;
	const rhs = new Array(n);

	for (let i = 1; i < n - 1; i++)
		rhs[i] = 4 * points[i][prop] + 2 * points[i + 1][prop];
	rhs[0] = points[0][prop] + 2 * points[1][prop];
	rhs[n - 1] = (8 * points[n - 1][prop] + points[n][prop]) / 2;
	return get_first_control_points(rhs);
}

function get_first_control_points(rhs) {
	const n = rhs.length;
	const x = new Array(n);
	const temp = new Array(n);
	let b;

	b = 2;

	x[0] = rhs[0] / b;
	for (let i = 1; i < n; i++) {
		temp[i] = 1 / b;
		b = (i < n - 1 ? 4 : 3.5) - temp[i];
		x[i] = (rhs[i] - x[i - 1]) / b;
	}
	for (let i = 1; i < n; i++) x[n - i - 1] -= temp[n - 1] * x[n - i];
	return x;
}
