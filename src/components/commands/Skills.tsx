import ProgressBar from "../ProgressBar";
import {
	SiExpress,
	SiNextdotjs,
	SiRust,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
export default function Skills() {
	const listOfSkills = [
		{
			Icon: FaJava,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "Java",
		},
		{
			Icon: SiRust,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Rust",
		},
		{
			Icon: SiTypescript,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Typescript",
		},
		{
			Icon: SiPostgresql,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "PostgreSQL",
		},
		{
			Icon: SiNextdotjs,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Next.js",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
