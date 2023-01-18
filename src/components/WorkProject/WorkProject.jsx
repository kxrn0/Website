import Carousel from "../Carousel/Carousel";
import "./workproject.css";

export default function WorkProject({
	images,
	radius,
	name,
	description,
	repoLink,
	liveLink,
}) {
	return (
		<div className="work-project">
			<Carousel images={images} radius={radius} />
			<div className="project-info">
				<h1 className="project-name">{name}</h1>
				<p className="project-description">
					{description}
				</p>
				<div className="project-links">
					<a href={repoLink} target="_blank">
						Repo
					</a>
					<a href={liveLink} target="_blank">
						Live
					</a>
				</div>
			</div>
		</div>
	);
}
