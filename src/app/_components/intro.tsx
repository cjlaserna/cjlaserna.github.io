import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";
import profile_picture from "../../public/assets/media/pfp.png";
import question_mark from "../../public/assets/graphics/question.gif";

export function Intro() {
	return (
		<section className="left">
			<div className="box image-box">
				<Image
					src={profile_picture}
					alt="Profile Picture"
					width={300}
					height={300}
					objectFit="cover"
				/>
			</div>

			<div className="box links-box">
				<a href="/">Home</a>
				<a href="/devlog">Micro Dev Log</a>
				<a href="/projects">Projects</a>
				<a href="/artdesign">Art & Design</a>
				<a href="/resources">Resources</a>
				<a href="/ext">Ext Links</a>
			</div>

			<div className="box text-box">
				<div className="heading-wrap">
					<h2 className="title">Welcome to my site</h2>
				</div>
				<p>
					Obsessed with anything video games and tech, I like to create
					intuitive and engaging user experiences for users! With a passion for
					UI/UX design, I focus on creating seamless, immersive, and
					player-centric interfaces.
				</p>
			</div>
		</section>
	);
}
