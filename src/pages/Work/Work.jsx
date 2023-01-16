import { motion } from "framer-motion";
import Project from "../../components/Project/Project";
import WorkProject from "../../components/WorkProject/WorkProject";
import "./work.css";

export default function Work({ projects }) {
	return (
		<motion.div className="work">
			<h1 className="work-title">Work</h1>
			<div className="projects-container">
				{projects.map((project) => (
					<Project
						key={project.name}
						Component={WorkProject}
						project={{name: project.name, thumbnail: project.thumbnail, data: project}}
					/>
				))}
			</div>
		</motion.div>
	);
}
