import { Routes, Route, useLocation } from "react-router-dom";
import Work from "./pages/Work/Work";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import { AnimatePresence } from "framer-motion";

export default function AnimeRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/work" element={<Work />} />
				<Route path="/" element={<Home />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
}

