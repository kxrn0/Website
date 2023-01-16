import { useState, useEffect } from "react";
import "./popup.css";

export default function Popup({ children, shown, close, duration = 0.33 }) {
	const [hasContent, setHasContent] = useState(shown);

	function close_popup() {
		close();

		setTimeout(() => setHasContent(), 330);
	}

	useEffect(() => {
		if (shown) setHasContent(true);
	}, [shown]);

	return (
		<div
			className={`popup ${shown ? "shown" : "hidden"}`}
			style={{ "--duration": `${duration}s` }}
		>
			<button
				className="close-popup"
				onClick={close_popup}
				tabIndex={shown ? 0 : -1}
			></button>
			<div className="backdrop" onClick={close_popup}></div>
			<div className="container">
				{hasContent ? children : null}
			</div>
		</div>
	);
}
