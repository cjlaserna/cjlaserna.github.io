import { getAllPosts } from "../../lib/api";
import Link from "next/link";

export default async function Index() {
	// Get all project posts
	const allPosts = getAllPosts().filter((post) =>
		post.tags?.includes("Projects")
	);

	return (
		<div className="right">
			<h1>Projects</h1>
			<div className="project-grid">
				{allPosts.map((post) => (
					<>
						<Link href={`/posts/${post.slug}?from=/projects`} key={post.slug}>
							<div key={post.slug} className="project-card box">
								<h3>{post.title}</h3>
								<p>{post.excerpt}</p>
							</div>
						</Link>
					</>
				))}
			</div>
		</div>
	);
}
