import Navigation from "../content/Navigation";
import CardComponent from "../component/js/CardComponent";
import data from "../content/data";

const Experiences = () => {
	const experienceData = data.experiences;
	return (
		<>
			<header className="header">
				<Navigation />
			</header>
			<main className="main-content grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-y-20">
				{experienceData.map((experience) => (
					<CardComponent
						key={experience.title}
						title={experience.title}
						imageSrc={experience.imgSrc}
						desc={experience.desc}
						src={experience.src}
						langs={experience.langs}
					/>
				))}
			</main>
		</>
	);
};

export default Experiences;
