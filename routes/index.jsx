import { Link } from "remix";
import { useLoaderData } from "remix";
import styles from "~/styles/index.css";
import { datoQuerySubscription } from "~/lib/datocms";
import { Image, useQuerySubscription } from "react-datocms";
import { responsiveImageFragment } from "~/lib/fragments";
import { Avatar, links as avatarLinks } from "~/components/Avatar";
import { Navbar } from "../components/Navbar";
import React from "react";
import Scrollbar from "../components/Scrollbar/Scrollbar";
import Contact from "../components/Contact/Contact";
import { json } from "remix";

export function links() {
	return [...avatarLinks(), { rel: "stylesheet", href: styles }];
}

export const loader = async ({ request }) => {
	datoQuery = await datoQuerySubscription({
		request,
		query: `
		{
			aboutMe {
				greeting
				shortIntroduction
				about
				profilePicture {
					url
					alt
					title
				}
			}
			experiences: allExperiences(orderBy: startDate_DESC) {
				job
				jobDescription
				jobEndDate
				startDate
				stillEmployedHere
				company
			}
			creativeSkills: allSkills(filter: {skillType: {eq: "creative"}}) {
				skillName
				skillLevel
				skillType
				skillLink
				skillTag
			}
			programmingSkills: allSkills(filter: {skillType: {eq: "technologies"}}) {
				skillName
				skillLevel
				skillType
				skillLink
				skillTag
			}
			languageSkills: allSkills(filter: {skillType: {eq: "languages"}}) {
				skillName
				skillLevel
				skillType
				skillLink
				skillTag
			}
			projects: allProjects {
				shortProjectDescription
				projectType
				projectName
				projectLink
				longProjectDescription(markdown: true)
			}
			socials: allSocialLinks {
				faIcon
				link
			}
		}
		`,
	});
	return json({
		ENV: {
			SERVICE_ID: process.env.SERVICE_ID,
			TEMPLATE_ID: process.env.TEMPLATE_ID,
			USER_ID: process.env.USER_ID,
		},
		datoQuery: datoQuery,
	});
};

export default function Index() {
	const {
		ENV: { SERVICE_ID: SERVICE_ID, TEMPLATE_ID: TEMPLATE_ID, USER_ID: USER_ID },
		datoQuery: datoQuery,
	} = useLoaderData();

	const datoQuerySubscription = datoQuery.datoQuerySubscription;
	const [filter, setFilter] = React.useState("programming");

	const {
		data: {
			aboutMe: { greeting, shortIntroduction, about, profilePicture },
			experiences: [...jobs],
			creativeSkills: [...creativeSkills],
			programmingSkills: [...programmingSkills],
			languageSkills: [...languageSkills],
			projects: [...projects],
			socials: [...socials],
		},
	} = useQuerySubscription(datoQuerySubscription);

	function formatDate(date) {
		const month = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		const today = new Date(date);
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = month[today.getMonth()];
		const yyyy = today.getFullYear();

		return mm + " " + dd + ", " + yyyy;
	}

	function skillMap() {
		switch (filter) {
			case "programming":
				return programmingSkills;
			case "creative":
				return creativeSkills;
			case "languages":
				return languageSkills;
			default:
				return programmingSkills;
		}
	}

	return (
		<div className="container">
			<section className="section" id="about">
				<div>
					<div className="w-full">
						<div className="flex flex-col items-start justify-start">
							{profilePicture ? (
								<div className="avatar mr-5 ">
									<div className="w-30 lg:w-24 rounded-full">
										<img
											src={profilePicture.url}
											alt={profilePicture.alt}
											title={profilePicture.title}
										/>
									</div>
								</div>
							) : (
								""
							)}
							{greeting ? (
								<h1 className="title text-primary-content text-left">
									{greeting}
								</h1>
							) : (
								""
							)}
						</div>
					</div>
					<p className="text-3xl mb-3 text-primary-content">
						{shortIntroduction}
					</p>
					<p className="text-xl text-primary-content">{about ? about : ""}</p>
				</div>
			</section>
			<section className="section" id="experiences">
				<div className="max-w-full mx-auto">
					<h3 className="text-5xl font-bold mb-5 text-primary-content">
						Experiences
					</h3>
					<ol className="relative border-l border-accent">
						{jobs
							? jobs.map((job, index) => (
									<li className="mb-10 ml-4 group">
										<div className="absolute w-3 h-3 rounded-full -left-1.5 transition-all bg-accent group-hover:border-accent-focus group-hover:bg-base-100 group-hover:border-2"></div>
										<time className="mb-1 text-lg font-normal leading-none text-secondary-content">
											{formatDate(job.startDate)}
											{job.jobEndDate
												? ` - ${formatDate(job.jobEndDate)}`
												: job.stillEmployedHere
												? " - Present"
												: ""}
										</time>
										<h3 className="text-2xl font-semibold text-primary-content">
											{job.company} - {job.job}
										</h3>
										<p className="mb-4 text-base font-normal text-primary-content">
											{job.jobDescription}
										</p>
									</li>
							  ))
							: ""}
					</ol>
				</div>
			</section>
			<section className="section" id="projects">
				<div className="container w-full flex items-start relative flex-col mb-5">
					<p className="text-5xl font-bold text-center text-primary-content float-left">
						Projects
					</p>
					<span className="text-sm">Click on cards to view projects</span>
				</div>

				<div className="container mx-auto my-2">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{projects
							? projects.map((project, index) => {
									return (
										<label
											className="modal-button hover:cursor-pointer"
											htmlFor={`modal-${index}`}
										>
											<div className="card bg-accent text-primary-content hover:bg-accent-focus group text-neutral h-full">
												<div className="card-body">
													<h2 className="card-title text-neutral line-clamp-1">
														{project.projectName}
														<div className="badge badge-neutral ml-2">
															{project.projectType}
														</div>
													</h2>
													<p className="text-neutral">
														{project.shortProjectDescription}
													</p>
												</div>
											</div>
										</label>
									);
							  })
							: ""}
					</div>
				</div>
			</section>
			<section className="section" id="skills">
				<div className="container w-full flex items-start relative flex-col">
					<p className="text-5xl font-bold mb-5 text-center text-primary-content float-left">
						Technical Skills
					</p>
					<div className="collapse collapse-arrow bg-base-100 rounded-box lg:right-4 w-full z-50 lg:absolute lg:w-1/4">
						<input type="checkbox" className="peer" aria-label="filter" />
						<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
							Filter
						</div>
						<div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
							<div className="container w-full">
								<div className="form-control">
									<label className="label cursor-pointer hover:bg-neutral">
										<span className="label-text">Programming Skills</span>
										<input
											type="radio"
											name="radio-6"
											className="radio"
											value="programming"
											onChange={(e) => {
												setFilter(e.target.value);
											}}
											defaultChecked
										/>
									</label>
								</div>

								<div className="form-control">
									<label className="label cursor-pointer hover:bg-neutral">
										<span className="label-text">Creative Skills</span>
										<input
											type="radio"
											name="radio-6"
											className="radio"
											value="creative"
											onChange={(e) => {
												setFilter(e.target.value);
											}}
										/>
									</label>
								</div>

								<div className="form-control">
									<label className="label cursor-pointer hover:bg-neutral">
										<span className="label-text">Languages</span>
										<input
											type="radio"
											name="radio-6"
											className="radio"
											value="languages"
											onChange={(e) => {
												setFilter(e.target.value);
											}}
										/>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container mx-auto my-2">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{skillMap
							? skillMap().map((programming, index) => {
									function getSkillValue(skillLevel) {
										switch (skillLevel) {
											case "beginner":
												return "25";
											case "intermediate":
												return "50";
											case "proficient":
												return "75";
											case "advanced":
												return "100";
											default:
												return "75";
										}
									}

									return (
										<a
											href={
												programming.skillLink
													? programming.skillLink
													: "javascript:void(0)"
											}
											target={programming.skillLink ? "_blank" : "_self"}
										>
											<div className="card bg-accent text-primary-content hover:bg-accent-focus group text-neutral">
												<div className="card-body">
													<h2 className="card-title text-neutral line-clamp-1">
														{programming.skillName}{" "}
														{programming.skillTag ? (
															<div className="badge badge-neutral">
																{programming.skillTag}
															</div>
														) : (
															""
														)}
													</h2>
													<div
														className="tooltip tooltip-bottom hover:cursor-pointer"
														data-tip={programming.skillLevel}
													>
														<progress
															className="progress progress-secondary"
															value={getSkillValue(programming.skillLevel)}
															max="100"
														></progress>
													</div>
												</div>
											</div>
										</a>
									);
							  })
							: ""}
					</div>
				</div>
			</section>
			<section className="contact" id="contact">
				<Contact
					SERVICE_ID={SERVICE_ID}
					TEMPLATE_ID={TEMPLATE_ID}
					USER_ID={USER_ID}
					profilePicture={profilePicture}
				/>
			</section>
			<section className="footer mt-10 ">
				<footer class="footer footer-center p-10 text-base-content">
					<div class="grid grid-flow-col gap-4">
						<a class="link link-hover" href="#experiences">
							Experiences
						</a>
						<a class="link link-hover" href="#projects">
							Projects
						</a>
						<a class="link link-hover" href="#skills">
							Skills
						</a>
						<a class="link link-hover" href="#contact">
							Contact
						</a>
					</div>
					<div>
						<div class="grid grid-flow-col gap-4">
							{socials
								? socials.map((social, index) => {
										return (
											<a href={social.link}>
												<i class={`fa fa-${social.faIcon.toLowerCase()}`}></i>
											</a>
										);
								  })
								: ""}
						</div>
					</div>
					<div>
						<p>Made with &#60;3 by Catherine Laserna</p>
					</div>
				</footer>
			</section>

			{projects
				? projects.map((project, index) => {
						return (
							<>
								<input
									type="checkbox"
									id={`modal-${index}`}
									className="modal-toggle"
								/>
								<div className="modal">
									<Scrollbar classNames="modal-box w-11/12 max-w-3xl bg-transparent shadow-none">
										<div className="p-4 text-lg whitespace-pre-wrap bg-neutral my-2 rounded-md">
											<h3 className="text-lg">
												Project: {project.projectName}
											</h3>
											Project Type:{" "}
											<div className="badge badge-accent ml-2">
												{project.projectType}
											</div>
										</div>
										<div
											className="p-4 text-lg whitespace-pre-wrap bg-neutral my-2 rounded-md"
											dangerouslySetInnerHTML={{
												__html: project.longProjectDescription,
											}}
										></div>
										<div className="modal-action">
											<a href={project.projectLink} target="_blank">
												<label className="btn">View Project</label>
											</a>
											<label htmlFor={`modal-${index}`} className="btn">
												Close
											</label>
										</div>
									</Scrollbar>
								</div>
							</>
						);
				  })
				: ""}
		</div>
	);
}
