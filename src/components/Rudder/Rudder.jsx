import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./rudder.css";

export default function Rudder() {
	const linksRef = useRef(["work", "home", null, "gallery", "contact"]);
	const page = (() => {
		const path = useLocation().pathname;

		return path === "/" ? "home" : path.slice(1);
	})();

	return (
		<nav className="rudder">
			<input type="checkbox" />

			<ul>
				{linksRef.current.map((item) => (
					<li
						key={item}
						className={`${item}-page ${
							page === item
								? "active"
								: ""
						}`}
					>
						{item ? (
							<Link
								to={`/${
									item ===
									"home"
										? ""
										: item
								}`}
							></Link>
						) : (
							""
						)}
					</li>
				))}
			</ul>
			<div className={`link-image ${page}-image`}></div>
		</nav>
	);
}
