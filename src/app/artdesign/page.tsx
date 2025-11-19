import { getAllPosts } from "../../lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Index() {
	// Get all project posts
	const allPosts = getAllPosts().filter((post) =>
		post.tags?.includes("ArtDesign")
	);

	return (
		<div className="right">
			<h1>Gallery</h1>
			<div className="project-grid">
				{allPosts.map((post) => (
					<>
						<Link href={`/posts/${post.slug}`}>
							<div key={post.slug} className="project-card box">
								<h3>{post.title}</h3>
								<div className="project-cover">
									<Image src={post.coverImage} alt={post.title} fill />
								</div>
							</div>
						</Link>
					</>
				))}
			</div>
		</div>
	);
}
