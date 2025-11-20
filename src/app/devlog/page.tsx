import Image from "next/image";
import { getAllPosts } from "../../lib/api";
import { PostBody } from "../_components/post-body";
import { PostHeader } from "../_components/post-header";
import Link from "next/link";
import { Post } from "@/interfaces/post";
import DateFormatter from "../_components/date-formatter";
import markdownToHtml from "../../lib/markdownToHtml";

export default async function DevLog() {
	// Filter, sort, and take first 5 posts
	const devlogPosts = getAllPosts()
		.filter((post: Post) => post.tags?.includes("Devlog"))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 5);

	// Convert all post contents to HTML
	const postsWithHtml = await Promise.all(
		devlogPosts.map(async (post) => ({
			...post,
			contentHtml: await markdownToHtml(post.content || ""),
		}))
	);

	return (
		<article className="right scroll-box">
			<h1>Micro Dev Log</h1>
			{postsWithHtml.map((post) => (
				<div key={post.slug} className="box scroll-post">
					<div className="inner-box">
						<PostHeader title={post.title} />
						<PostBody content={post.contentHtml} />
						<span className="inner-date">
							Updated <DateFormatter dateString={post.date} />
						</span>
					</div>
				</div>
			))}
		</article>
	);
}
