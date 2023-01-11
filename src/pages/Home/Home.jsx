import { motion } from "framer-motion";
import Box from "../../components/Box/Box";
import Lines from "../../components/Lines/Lines";
import "./home.css";

export default function Home() {
	return (
		<motion.div className="home">
			<Lines lines={3} />
			<div className="content">
				<div className="intro">
					<Box />
					<div className="summary">
						<h1>About</h1>
						<p>
							Hi, I'm Kxrn0, an
							aspiring web developer
							and creative coder. I
							have experience with
							Reactjs, and Svelte, as
							well as with various
							libraries like firebase,
							threejs, framer motion,
							react router, among
							others. I also have
							experience with various
							development tools like
							jest, vite, webpack,
							git, bash, among others.
						</p>
					</div>
				</div>
				<div className="skills">
					<h2>Skills</h2>
					<ul>
						<li>
							<i className="devicon-javascript-plain colored"></i>
							<i className="devicon-html5-plain-wordmark colored"></i>
							<i className="devicon-css3-plain-wordmark colored"></i>
						</li>
						<li>
							<i className="devicon-react-original-wordmark colored"></i>
							<i className="devicon-svelte-plain-wordmark colored"></i>
							<i className="devicon-firebase-plain-wordmark colored"></i>
							<i className="devicon-threejs-original-wordmark colored"></i>
						</li>
						<li>
							<i className="devicon-git-plain-wordmark colored"></i>
							<i className="devicon-webpack-plain-wordmark colored"></i>
							<i className="devicon-jest-plain colored"></i>
						</li>
						<li>
							<i className="devicon-linux-plain colored"></i>
						</li>
					</ul>
				</div>
			</div>
		</motion.div>
	);
}
