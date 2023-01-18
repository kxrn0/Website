import { useEffect, useRef } from "react";
import random from "../../utilities/random.js";
import clamp from "../../utilities/clamp.js";
import "./worms.css";

export default function Worms({ width, height, n }) {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		const worms = [];
		let wormsAnime;

		function init() {
			for (let i = 0; i < n; i++) {
				const worm = [];
				const position = {
					x: random(0, canvas.width),
					y: random(-1000, canvas.height),
				};

				for (let i = 0; i < 10; i++) {
					worm[i] = {
						x: position.x,
						y: position.y,
					};
				}

				worms.push(worm);
			}

			anime();
		}

		function anime() {
			context.clearRect(0, 0, canvas.width, canvas.height);

			for (let worm of worms) {
				draw_worm(worm);
				move_worm(worm, {
					x: random(-10, 10),
					y: random(-5, 15),
				});
			}

			wormsAnime = requestAnimationFrame(anime);
		}

		function draw_worm(worm) {
			context.beginPath();
			context.fillStyle = "#c6fdfd";
			context.strokeStyle = "#56fdad";
			context.arc(worm[0].x, worm[0].y, 2, 0, Math.PI * 2);
			context.fill();

			for (let seg of worm) context.lineTo(seg.x, seg.y);
			context.stroke();
		}

		function move_worm(worm, v) {
			for (let i = worm.length - 1; i > 0; i--)
				worm[i] = {
					x: worm[i - 1].x,
					y: worm[i - 1].y,
				};

			worm[0] = {
				x: clamp(worm[0].x + v.x, 0, canvas.width),
				y: worm[0].y + v.y,
			};

			if (worm[worm.length - 1].y > canvas.height)
				for (let seg of worm)
					seg.y -= random(1000, 1500);
		}

		init();

		return () => cancelAnimationFrame(wormsAnime);
	}, []);

	return (
		<canvas
			className="worms"
			ref={canvasRef}
			width={width}
			height={height}
		></canvas>
	);
}
