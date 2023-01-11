const colors = [
	"red",
	"pink",
	"orange",
	"green",
	"blue",
	"purple",
	"skyblue",
	"aliceblue",
	"magenta",
	"black",
	"gold",
	"white",
	"greenyellow",
	"yellow",
	"aqua",
	"azure",
	"#8A2BE255",
	"#7FFF0099",
	"#6495ED55",
	"#DC143C55",
	"cyan",
	"springgreen",
	"snow",
	"#EE82EE77"
];
export default function random_color() {
	return colors[~~(Math.random() * colors.length)];
}
