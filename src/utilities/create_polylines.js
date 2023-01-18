export default function create_polylines(radius, items, width, height) {
	const lines = [];
	const step = radius / items;

	for (let i = 0; i < items; i++) {
		const a = height / 2;
		const b = width / 2;
		const y = a + i * step;
		const c = Math.sqrt(radius * radius - (y - a) * (y - a));

		lines.push({ start: { x: b - c, y }, end: { x: b + c, y } });
	}
	return lines;
}
