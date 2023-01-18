import { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Work from "./pages/Work/Work";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Lines from "./components/Lines/Lines";
import Box from "./components/Box/Box";
import Worms from "./components/Worms/Worms";
import Signal from "./components/Signal/Signal";
import projects from "./projects.js";
import box from "./assets/project_images/gallery/box.png";
import worms from "./assets/project_images/gallery/worms.png";
import lines from "./assets/project_images/gallery/lines.png";
import signal from "./assets/project_images/gallery/signal.png";
import { AnimatePresence } from "framer-motion";

export default function AnimeRoutes() {
	const location = useLocation();
	const piecesRef = useRef([
		{
			component: Lines,
			project: {
				thumbnail: lines,
				data: { lines: 3, width: 600, height: 600 },
				name: "lines",
			},
		},
		{
			component: Box,
			project: { thumbnail: box, data: null, name: "box" },
		},
		{
			component: Worms,
			project: {
				thumbnail: worms,
				data: { width: 600, height: 600, n: 100 },
				name: "worms",
			},
		},
		{
			component: Signal,
			project: {
				thumbnail: signal,
				data: { width: 600, height: 600 },
				name: "signal",
			},
		},
	]);

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route
					path="/work"
					element={<Work projects={projects} />}
				/>
				<Route path="/" element={<Home />} />
				<Route
					path="/gallery"
					element={
						<Gallery
							pieces={
								piecesRef.current
							}
						/>
					}
				/>
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
}
