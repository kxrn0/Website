import get_control_points from "./control.js";

export default function draw_curve(points, canvas) {
	const context = canvas.getContext("2d");
	const controlPoints = get_control_points(points);

	context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = "#faeffe";
	context.fillStyle = "#123321";
	context.moveTo(points[0].x, points[0].y);

	for (let i = 1; i < points.length; i++) {
		if (i === 1) context.lineTo(points[i].x, points[i].y);
		else
			context.bezierCurveTo(
				controlPoints.firstPoints[i - 1].x,
				controlPoints.firstPoints[i - 1].y,
				controlPoints.secondPoints[i - 1].x,
				controlPoints.secondPoints[i - 1].y,
				points[i].x,
				points[i].y
			);
	}
	context.stroke();
	context.fill();
	context.beginPath();
	context.rect(
		points[0].x,
		points[0].y,
		points[points.length - 1].x - points[0].x,
		canvas.height - points[0].y
	);
	context.fill();
}
