import { motion } from "framer-motion";
import Project from "../../components/Project/Project";
import "./gallery.css";

export default function Gallery({ pieces }) {
	return (
		<motion.div className="gallery basic">
			<h1 className="basic-title">Gallery</h1>
			<div className="basic-container">
				{pieces.map((piece, index) => (
					<Project
						key={index}
						Component={piece.component}
						project={piece.project}
						containerStyle={
							index === 0
								? {
										width: "600px",
										height: "600px",
								  }
								: null
						}
					/>
				))}
			</div>
		</motion.div>
	);
}
