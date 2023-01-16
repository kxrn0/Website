import { motion } from "framer-motion";
import "./gallery.css";

function Test({ one, two, three }) {
	return (
		<div>
			<p>{one}</p>
			<p>{two}</p>
			<p>{three}</p>
		</div>
	);
}

function TheOne({ Byme, data }) {
	return (
		<div>
			<h1>Shalom</h1>
			<Byme {...data} />
		</div>
	);
}

export default function Gallery({ pieces }) {
	return (
		<motion.div className="gallery">
			<h1>Gallery</h1>
			<TheOne
				Byme={Test}
				data={{
					one: "this",
					two: "is a",
					three: "string",
				}}
			/>
		</motion.div>
	);
}
