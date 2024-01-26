import Navigation from "../content/Navigation";
import CardComponent from "../component/js/CardComponent";
import data from "../content/data";

const Achievements = () => {
	const achievementData = data.achievements;
	return (
		<>
			<header className="header">
				<Navigation />
			</header>
			<main className="main-content grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-y-20">
				{achievementData.map((achievement) => (
					<CardComponent
						key={achievement.title}
						title={achievement.title}
						imageSrc={achievement.imgSrc}
						desc={achievement.desc}
					/>
				))}
			</main>
		</>
	);
};

export default Achievements;
