import { useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Rudder from "./components/Rudder/Rudder";
import AnimeRoutes from "./AnimeRoutes";
import Eye from "./components/Eye/Eye";
import ThemeContext from "./theme_context.js";
import "./style.css";

function App() {
	const [theme, setTheme] = useState("light");

	function change_theme(event) {
		const theme = event.target.dataset.theme;

		setTheme(theme);
	}

	return (
		<div className="App">
			<BrowserRouter>
				<ThemeContext.Provider
					value={{
						theme,
						themes: [
							"light",
							"dark",
							"neom",
						],
					}}
				>
					<Rudder />
					<Eye change_theme={change_theme} />
					<AnimeRoutes />
				</ThemeContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
