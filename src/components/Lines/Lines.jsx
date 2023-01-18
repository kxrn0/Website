import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { makeNoise3D } from "open-simplex-noise";
import map from "../../utilities/map";
import "./lines.css";

export default function Lines({ lines, width, height }) {
	const containerRef = useRef(null);
	const canvas = useState(() => {
		const renderer = new THREE.WebGLRenderer();
		const camera = new THREE.PerspectiveCamera(
			75,
			width / height,
			0.1,
			1000
		);
		const scene = new THREE.Scene();
		const noise = makeNoise3D(performance.now());

		return { renderer, camera, scene, noise };
	})[0];

	useEffect(() => {
		const { renderer, camera, scene, noise } = canvas;
		const light = new THREE.DirectionalLight(0x12dfff);
		const backgroundColor = 0x777797;
		const rows = [];
		let linesAnime;

		function create_line(n, index) {
			const spheres = [];
			let d;

			function init() {
				for (let i = 0; i < n; i++) {
					const x = map(i, 0, n, -50, 50);
					const y = map(
						noise(
							i / 10,
							i / 10,
							index / 10
						),
						-1,
						1,
						-50,
						50
					);
					const z = index * 20;
					const geometry =
						new THREE.SphereGeometry(
							1,
							32,
							32
						);
					const material =
						new THREE.MeshLambertMaterial();
					const mesh = new THREE.Mesh(
						geometry,
						material
					);
					d = 0;

					mesh.position.set(x, y, z);
					spheres.push({ mesh, material });
				}
			}

			function update() {
				for (let i = 0; i < n; i++) {
					const y = map(
						noise(
							(i + d) / 10,
							(i + d) / 10,
							index / 5
						),
						-1,
						1,
						-50,
						50
					);

					spheres[i].mesh.position.y = y;
					spheres[i].mesh.material.color.setHSL(
						map(y, -50, 50, 0, 1),
						1,
						0.5
					);
				}
				d += 0.05;
			}

			function add_line() {
				for (let sphere of spheres)
					scene.add(sphere.mesh);
			}

			init();

			return { spheres, update, add_line };
		}

		function anime() {
			for (let row of rows) row.update();

			renderer.render(scene, camera);
			linesAnime = requestAnimationFrame(anime);
		}

		for (let i = 0; i < lines; i++) {
			const newRow = create_line(25, -i);

			rows.push(newRow);
			newRow.add_line();
		}

		light.position.set(0, 1, 1);
		scene.add(light);
		scene.fog = new THREE.Fog(backgroundColor, 0.25, 150);
		camera.position.set(0, 0, 75);
		renderer.setSize(width, height);
		renderer.setClearColor(backgroundColor);
		if (containerRef.current.innerHTML === "")
			containerRef.current.appendChild(renderer.domElement);
		anime();

		return () => cancelAnimationFrame(linesAnime);
	}, []);

	return <div className="lines" ref={containerRef}></div>;
}
