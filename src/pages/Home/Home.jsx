import { motion } from "framer-motion";
import Box from "../../components/Box/Box";
import Lines from "../../components/Lines/Lines";
import "./home.css";

export default function Home() {
	return (
		<motion.div className="home">
			<Lines
				lines={3}
				width={window.innerWidth}
				height={window.innerHeight}
			/>
			<Box />
			<div className="summary">
				<h1>About</h1>
				<p>
					Hi, I'm{" "}
					<a
						href="https://github.com/kxrn0"
						target="_blank"
					>
						Kxrn0
					</a>
					, an aspiring web developer and creative
					coder.
				</p>
			</div>
		</motion.div>
	);
}
