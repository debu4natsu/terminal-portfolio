import { GoVerified } from "react-icons/go";
import { SiGithub, SiReddit, SiLinkedin } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/debu4natsu",
			text: "@debu4natsu",
		},
		{
			title: "Reddit",
			Icon: SiReddit,
			href: "https://www.reddit.com/user/New-Heat-3243/",
			text: "@Kamui",
		},
		{
			title: "Linkedin",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/debojyoti-mahto-118514266/",
			text: "@Debojyoti",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="/debu.jpeg"
					alt="Chensokheng"
					className="w-40 h-40 rounded-full border-2 border-black-300"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Debojyoti Mahto</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 21 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a software developer. Passionate with web
				development and Rust like to learn new thing related to coding
				and sharing insights with the online community.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
