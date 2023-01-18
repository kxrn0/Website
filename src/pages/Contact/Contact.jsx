import { motion } from "framer-motion";
import "./contact.css";

export default function Contact() {
	return (
		<motion.div className="contact basic">
			<h1 className="basic-title">Contact</h1>
			<div className="links">
				<a
					className="reddit"
					href="https://old.reddit.com/user/_by_me/"
					target="_blank"
				></a>
				<a
					className="github"
					href="https://github.com/kxrn0/"
					target="_blank"
				></a>
			</div>
		</motion.div>
	);
}
