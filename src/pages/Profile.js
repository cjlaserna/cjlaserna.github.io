import Navigation from "../content/Navigation";
import pfp from "../component/pfp.jpg";
import data from "../content/data";

const Profile = () => {
	const { user, characterDescription } = data;
	return (
		<>
			<header className="header">
				<Navigation />
			</header>
			<main className="main-content flex flex-col items-center justify-center md:justify-items-stretch gap-y-2 mt-0 md:flex-row md:gap-x-2 ">
				<div className="!m-0 !p-0 flex flex-col items-center justify-center h-full md:items-end md:justify-end">
					<div class="s_box41 !m-0 h-full overflow-auto">
						<p className="text-center alagard">{user.name}</p>
						<div class="box-inner">
							<div className="avatar">
								<div className="mask mask-squircle">
									<img src={pfp} alt="Profile" />
								</div>
							</div>
						</div>
						<div className="text-[1rem] pixel px-3 pt-3 leading-none ">
							<p className="font-bold">Character Details</p>
							<p>Affiliation: {user.affiliation}</p>
							<p>Expected Grad. Year: {user.expectedGradYear}</p>
							<p>Discipline: {user.discipline}</p>
						</div>
					</div>
				</div>
				<div class="s_box41 text-lg pixel overflow-scroll h-full !m-0">
					<div class="box-inner" />
					<div className="p-3">
						<p className="alagard">Character Description</p>
						<p>{characterDescription.replace(/\n/g, `\n\n`)}</p>
						<a
							href="https://docs.google.com/document/d/1VK5QTNg_zJnfUjKXHFQKk6ayrq7-5vH_f9s3N3AujAo/edit?usp=sharing"
							target="_blank"
							rel="noreferrer"
							className="badge badge-lg badge-primary text-white float-right hover:underline"
						>
							View My Resume
						</a>
					</div>

					<div class="box-inner"></div>
					<div className="p-3 flex flex-col gap-y-2 pixel">
						<div>
							<p className="alagard">Programming Languages</p>
							<div className="grid grid-cols-2 gap-1 md:flex">
								{data.programmingLanguages.map((language) => (
									<div key={language} className="badge badge-neutral">
										{language}
									</div>
								))}
							</div>
						</div>

						<div>
							<p className="alagard">Courses</p>
							<div className="grid grid-cols-2 gap-1 md:flex">
								{data.courses.past.map((course) => (
									<div key={course} className="badge badge-neutral">
										{course}
									</div>
								))}
							</div>
						</div>

						<div>
							<p className="alagard">Current Courses</p>
							<div className="grid grid-cols-2 gap-1 md:flex">
								{data.courses.current.map((course) => (
									<div key={course} className="badge badge-neutral">
										{course}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Profile;
