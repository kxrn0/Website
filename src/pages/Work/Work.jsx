import { motion } from "framer-motion";
import Project from "../../components/Project/Project";
import WorkProject from "../../components/WorkProject/WorkProject";

export default function Work({ projects }) {
	return (
		<motion.div className="work basic">
			<h1 className="basic-title">Work</h1>
			<div className="basic-container">
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
