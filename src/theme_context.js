import { createContext } from "react";

const ThemeContext = createContext({
	theme: "light",
	themes: ["light", "dark", "neom"],
});

export default ThemeContext;
