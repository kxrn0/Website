import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./eye.css";

export default function Eye({ change_theme }) {
	const [open, setOpen] = useState(false);

	return (
		<div className="eye">
			<input
				type="checkbox"
				className="sharp"
				checked={open}
				onChange={() => setOpen((prev) => !prev)}
			/>

			<ThemeToggle
				change_theme={change_theme}
				hidden={!open}
			/>
		</div>
	);
}
