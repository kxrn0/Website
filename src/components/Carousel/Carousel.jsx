import { useState, useEffect, useRef } from "react";
import Image from "../Image/Image";
import "./carousel.css";

export default function Carousel({ images, radius }) {
	const [offset, setOffset] = useState(0);
	const [translation, setTranslation] = useState(() => get_translation());
	const angleRef = useRef((2 * Math.PI) / images.length);

	function get_translation() {
		return window.innerWidth < 800
			? { centerOffset: 900, div: 1.75 }
			: { centerOffset: 500, div: 1 };
	}

	function check_index(offset, index) {
		const m = offset % images.length;

		if (offset < 0) {
			return (m !== 0) * images.length + m === index;
		}
		return m === index;
	}

	useState(() => {
		function resize() {
			setTranslation(get_translation());
		}

		window.addEventListener("resize", resize);

		return () => window.removeEventListener("resize", resize);
	}, []);

	return (
		<div className="carousel">
			<div className="viewport">
				<div
					className="center"
					style={{
						transform: `translateZ(-${
							translation.centerOffset
						}px) rotateY(${
							-angleRef.current *
							offset
						}rad)`,
					}}
				>
					{images.map((image, index) => (
						<Image
							key={index}
							className="image-container"
							styles={{
								transform: ` translateX(-50%) translateY(-50%) rotateY(${
									index *
									angleRef.current
								}rad) translateZ(${
									radius /
									translation.div
								}px)`,
							}}
							src={
								window.innerWidth <
								800
									? image.vertical
									: image.horizontal
							}
							alt="an image"
						/>
					))}
				</div>
				<button
					className="left-button"
					onClick={() =>
						setOffset((prev) => prev - 1)
					}
				></button>
				<button
					className="right-button"
					onClick={() =>
						setOffset((prev) => prev + 1)
					}
				></button>
			</div>
			<div className="beads">
				{images.map((_, index) => (
					<input
						key={index}
						name="navigation-radio-selectors"
						type="radio"
						data-index={index}
						checked={check_index(
							offset,
							index
						)}
						onChange={(e) =>
							setOffset(
								Number(
									e.target
										.dataset
										.index
								)
							)
						}
					/>
				))}
			</div>
		</div>
	);
}
