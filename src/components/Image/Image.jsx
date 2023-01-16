import "./image.css";

export default function Image({ src, alt, styles }) {
	return (
		<div className="image" style={styles}>
			<span
				className="background"
				style={{ backgroundImage: `url(${src})` }}
			></span>
			<img src={src} alt={alt} />
		</div>
	);
}
