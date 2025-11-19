import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "../lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Index() {
	const allPosts = getAllPosts();
	const heroPost = allPosts[0];
	const heroPostContent = await markdownToHtml(heroPost.content || "");

	return (
		<HeroPost
			title={heroPost.title}
			coverImage={heroPost.coverImage}
			date={heroPost.date}
			content={heroPostContent}
			slug={heroPost.slug}
		/>
	);
}
