import { useEffect, useRef } from "react";
import { makeNoise2D } from "open-simplex-noise";
import draw_noise from "../../utilities/draw_noise.js";
import draw_curve from "../../utilities/draw_curve.js";
import move_points from "../../utilities/move_points.js";
import create_polylines from "../../utilities/create_polylines.js";
import create_curve from "../../utilities/create_curve.js";
import random from "../../utilities/random.js";
import "./signal.css";

export default function Signal({ width, height }) {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		const curves = [];
		const simplex = makeNoise2D(performance.now());
		let signalAnime;

		function anime() {
			context.clearRect(0, 0, canvas.width, canvas.height);

			draw_noise(canvas);

			for (let curve of curves) {
				draw_curve(curve.points, canvas);
				move_points(
					curve.points,
					canvas.height,
					simplex,
					curve.d
				);
				curve.d += 0.005;
			}

			context.beginPath();
			context.strokeStyle = "#faebff";
			context.lineWidth = 31;
			context.arc(
				canvas.width / 2,
				canvas.height / 2,
				canvas.width / 2 - 15,
				0,
				Math.PI * 2
			);
			context.stroke();

			signalAnime = requestAnimationFrame(anime);
		}

		function init() {
			const lines = create_polylines(
				canvas.width / 2 - 25,
				12,
				canvas.width,
				canvas.height
			);

			for (let line of lines)
				curves.push({
					points: create_curve(
						line.start,
						line.end.x - line.start.x,
						100,
						simplex,
						0
					),
					d: random(0, -1),
				});

			anime();
		}

		init();

		return () => cancelAnimationFrame(signalAnime);
	}, []);

	return (
		<canvas
			className="signal"
			ref={canvasRef}
			width={width}
			height={height}
		></canvas>
	);
}
