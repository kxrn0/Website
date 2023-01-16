import { useContext } from "react";
import ThemeContext from "../../theme_context";
import "./theme_toggle.css";

export default function ThemeToggle({ change_theme, hidden }) {
	const themeCon = useContext(ThemeContext);

	return (
		<div className={`theme-toggle ${themeCon.theme}`}>
			<div className="labels">
				{themeCon.themes.map((theme) => (
					<label
						key={theme}
						htmlFor={`theme-toggler-${theme}`}
					>
						{theme}
					</label>
				))}
			</div>
			<div className="inputs">
				{themeCon.themes.map((theme) => (
					<input
						tabIndex={hidden ? -1 : 0}
						key={theme}
						type="radio"
						id={`theme-toggler-${theme}`}
						checked={
							theme === themeCon.theme
						}
						name="theme-toggler"
						onChange={change_theme}
						data-theme={theme}
					/>
				))}
				<span className="ball"></span>
			</div>
		</div>
	);
}
