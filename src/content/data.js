const data = {
	user: {
		name: "Catherine Laserna",
		affiliation: "CSU Fresno",
		expectedGradYear: 2026,
		discipline: "Computer Science",
	},
	characterDescription:
		"Hello! The purpose of this site is to go in detail about my meaningful experiences/projects and get to know me beyond my resume. My resume is still available for download below, but I didn't want this to be a mere retelling of what it already has. I'm Catherine, I'm obsessed with anything video games and tech! I'm committed to bringing my interests to underserved communities and becoming a software engineer. My dream company is Riot Games :)",
	programmingLanguages: ["Python", "Javascript", "Typescript", "C++", "C#"],
	courses: {
		past: ["Intro.Programming", "Intro.DSA", "Intro.SWE", "Disc. Math"],
		current: ["Simulation", "DSA", "Fin. Automata"],
	},
	experiences: [
		{
			title: "NookOffice",
			imgSrc: "https://i.ibb.co/HrFZwSJ/timerprev.png",
			desc: "NookOffice was an Animal Crossing themed productivity site I made that had hourly-rotating Animal Crossing Music, to-do list, and a timer! It had peaked at 5k users, AUG 2023! But I couldn't pay anymore for the domain/server.",
			langs: ["Astro", "JS", "YTEmbedAPI"],
			src: "https://github.com/cjlaserna/nookoffice",
		},
		{
			title: "Teyvat Travel Notes",
			imgSrc: "https://i.ibb.co/nzPYyvY/teyvatnotes.gif",
			desc: "Teyvat Travel Notes is a Genshin Impact themed to-do list for Genshin players! It has folders, Genshin icons, emotes, and characters. I made it for fun over winter break while I was obsessed with Genshin!",
			langs: ["Next", "Typescript", "JS"],
			src: "https://teyvat-travel-notes.vercel.app/",
		},
		{
			title: "ACF Coaching",
			imgSrc:
				"https://i.ibb.co/k2PYcws/364975347-2050546588633362-1730203568416576462-n.jpg",
			desc: "I was an ACF coach for a couple months. I hosted and helped organize a Game Jam for ACF students. I also lived on my own and worked for them over the summer. I got to impact many young lives through ACF.",
			langs: ["Python", "Lego"],
			src: "https://www.applied-computing.org/",
		},
		{
			title: "School Clubs",
			imgSrc: "https://i.ibb.co/80FVTDm/mainpage.png",
			desc: "I was part of the CSCI/GDSC Club. It felt great to network and reach out to speakers, even greater to give back to my community. Moreover, watching GDSC x GDG Dev Fest unfold as GDSC VP was amazing.",
			src: "https://gdsc.community.dev/california-state-university-fresno/",
		},
		{
			title: "TTV Streaming",
			imgSrc: "https://i.ibb.co/CbF5rSS/ttv.png",
			desc: "I was consistently streaming my coding projects on Twitch. I peaked at over 500 live viewers! It fun experience and I met a lot of interesting people through streaming. I hope to get back into this hobby again sometime.",
			src: "https://www.twitch.tv/bubbaguppylive/about",
		},
	],
	achievements: [
		{
			title: "Smittcamp Honors",
			imgSrc: "https://i.ibb.co/Ytd9Frf/fsn-smittcamp.jpg",
			desc: "I am extremely grateful having received this scholarship. Going into college I had an EFC score of 0 from FAFSA. Thanks to this scholarship a lot of financial burden had been taken off of my shoulders.",
			src: "https://academics.fresnostate.edu/honors/",
		},
		{
			title: "Google Gen. WIG",
			imgSrc: "https://i.ibb.co/9ZybZmX/maxresdefault-11.jpg",
			desc: "I won Google's Generation Scholarship for Women In Gaming shortly after accepting Fresno State. This scholarship would've drastically changed where I went had I known earlier. It was an amazing scholarship!",
			src: "https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship",
		},
	],
};

export default data;
