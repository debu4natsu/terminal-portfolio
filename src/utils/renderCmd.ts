import About from "../components/commands/About";
import Bio from "../components/commands/Bio";
import Contact from "../components/commands/Contact";
import Help from "../components/commands/Help";
import NotFound from "../components/commands/NotFound";
import Skills from "../components/commands/Skills";
import project from "../components/commands/project";
import { CmdHistory } from "../type";

function renderCmd(cmd: string): CmdHistory {
	switch (cmd) {
		case "ls":
			return {
				cmd,
				Component: Help,
				time: "",
			};
		case "bio":
			return {
				cmd,
				Component: Bio,
				time: "",
			};
		case "skill":
			return {
				cmd,
				Component: Skills,
				time: "",
			};
		case "contact":
			return {
				cmd,
				Component: Contact,
				time: "",
			};
		case "about": {
			return {
				cmd,
				Component: About,
				time: "",
			};
		};
		case "project": {
			return {
				cmd,
				Component: project,
				time: "",
			};
		}
		default:
			return {
				cmd,
				Component: NotFound,
				time: "",
			};
	}
}

export default renderCmd;
