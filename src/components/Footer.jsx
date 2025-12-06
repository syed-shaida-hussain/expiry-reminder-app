import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className=" flex flex-col gap-10 items-center py-10">
			<h4 className="text-lg lg:text-4xl">Social presence</h4>
			<ul className="flex gap-5 items-center lg:gap-10 font-semibold text-lg">
				<li className="hover:scale-110 transition-all duration-300">
					<a href="https://github.com/syed-shaida-hussain" target="_blank">
						<FaGithub className="w-7 h-7" />
					</a>
				</li>
				<li className="hover:scale-110 transition-all duration-300">
					<a
						href="https://www.linkedin.com/in/syed-shaida-hussain/"
						target="_blank"
					>
						<FaLinkedin className="w-7 h-7" />
					</a>
				</li>
				<li className="hover:scale-110 transition-all duration-300">
					<a href="https://x.com/shaida_hussain_" target="_blank">
						<FaTwitter className="w-7 h-7" />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
