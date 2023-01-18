import { useState, useEffect } from "react";
import "./popup.css";

export default function Popup({ children, shown, close, duration, containerStyle }) {
	const [hasContent, setHasContent] = useState(shown);

	useEffect(() => {
		let timeout;

		timeout = null;

		if (shown) setHasContent(true);
		else
			timeout = setTimeout(
				() => setHasContent(false),
				1000 * duration
			);

		return () => clearTimeout(timeout);
	}, [shown]);

	return (
		<div
			className={`popup ${shown ? "shown" : "hidden"}`}
			style={{ "--duration": `${duration}s` }}
		>
			<button
				className="close-popup"
				onClick={close}
				tabIndex={shown ? 0 : -1}
			></button>
			<div className="backdrop" onClick={close}></div>
			<div className="container" style={containerStyle}>
				{hasContent ? children : null}
			</div>
		</div>
	);
}
