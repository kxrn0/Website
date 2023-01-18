import { useRef, useEffect, useState } from "react";
import random_color from "../../utilities/random_color";
import "./box.css";

export default function Box() {
	const frontRef = useRef(null);
	const backRef = useRef(null);
	const [background, setBackground] = useState("");

	useEffect(() => {
		let tenPrintAnime;
		let noiseAnime;

		function ten_print() {
			const canvas = frontRef.current;
			const context = canvas.getContext("2d");
			const scale = 10;
			const cellW = canvas.width / scale;
			const cellH = canvas.height / scale;
			let y, presentDay;

			function anime() {
				for (let x = 0; x < cellW; x++) {
					context.beginPath();
					if (Math.random() < 0.5) {
						context.strokeStyle = "skyblue";
						context.moveTo(
							x * scale,
							y * scale
						);
						context.lineTo(
							(x + 1) * scale,
							(y + 1) * scale
						);
					} else {
						context.strokeStyle =
							"greenyellow";
						context.moveTo(
							(x + 1) * scale,
							y * scale
						);
						context.lineTo(
							x * scale,
							(y + 1) * scale
						);
					}
					context.stroke();
				}

				if (y < cellH) {
					const presentTime = performance.now();

					if (presentTime - presentDay > 20) {
						y++;
						presentDay = presentTime;
					}
					tenPrintAnime =
						requestAnimationFrame(anime);
				} else setBackground(canvas.toDataURL());
			}

			function init() {
				y = 0;
				presentDay = performance.now();
				context.fillStyle = "black";
				context.fillRect(
					0,
					0,
					canvas.width,
					canvas.height
				);
				context.lineWidth = 2;
				anime();
			}

			init();
		}

		function noise() {
			const canvas = backRef.current;
			const context = canvas.getContext("2d");
			const scale = 10;
			const cellW = canvas.width / scale;
			const cellH = canvas.height / scale;
			let y;

			function anime() {
				for (let x = 0; x < cellW; x++) {
					context.beginPath();
					context.fillStyle = random_color();
					context.rect(
						x * scale,
						y * scale,
						scale,
						scale
					);
					context.fill();
				}

				if (y >= cellH) y = 0;
				else y++;

				noiseAnime = requestAnimationFrame(anime);
			}

			function init() {
				y = 0;
				anime();
			}

			init();
		}

		noise();

		ten_print();

		return () => {
			cancelAnimationFrame(tenPrintAnime);
			cancelAnimationFrame(noiseAnime);
		};
	}, []);

	return (
		<div className="box-container">
			<div className="box">
				<div className="front plane">
					<canvas
						style={{
							opacity: background
								? 0
								: 1,
						}}
						ref={frontRef}
						width="200"
						height="300"
					></canvas>
					<span
						style={{
							backgroundImage: `url(${background})`,
						}}
					>
						K
					</span>
				</div>
				<canvas
					ref={backRef}
					className="back plane"
					width="200"
					height="300"
				></canvas>
				<div className="top side plane"></div>
				<div className="bottom side plane"></div>
				<div className="left side plane"></div>
				<div className="right side plane"></div>
			</div>
		</div>
	);
}
