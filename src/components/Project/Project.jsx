import { useState, useEffect } from "react";
import Popup from "../Popup/Popup";
import Carousel from "../Carousel/Carousel";
import "./project.css";

export default function Project({ Component, project }) {
	const [isOpen, setIsOpen] = useState(false);
	const [image, setImage] = useState("");

	return (
		<div className="project">
			<Popup
				shown={isOpen}
				close={() => setIsOpen(false)}
				duration={0.33}
			>
				<Component {...project.data} />
			</Popup>
			<div className="project-card">
				<img src={project.thumbnail} />
				<span>{project.name}</span>
				<button
					onClick={() => setIsOpen(true)}
				></button>
			</div>
		</div>
	);
}
