import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./eye.css";

export default function Eye({ change_theme }) {
	return (
		<div className="eye">
			<input type="checkbox" className="sharp"/>
			<ThemeToggle change_theme={change_theme} />
		</div>
	);
}
