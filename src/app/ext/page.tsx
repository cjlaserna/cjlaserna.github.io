import { HeroPost } from "@/app/_components/hero-post";
import { getAllPosts } from "../../lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Post } from "@/interfaces/post";

export default async function Index() {
	const allPosts = getAllPosts().filter((post: Post) =>
		post.tags?.includes("ExternalLinks")
	);
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
