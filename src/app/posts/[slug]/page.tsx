import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "../../_components/post-header";
import Link from "next/link";
import Image from "next/image";
import DateFormatter from "@/app/_components/date-formatter";

export default async function Post({
	params,
	searchParams,
}: {
	params: Params;
	searchParams: { [key: string]: string | undefined };
}) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || "");
	const from = searchParams.from || "/";

	return (
		<>
			<article className="right">
				{from ? (
					<a href={from} className="post-crumb">
						← Back
					</a>
				) : null}
				<div className="box">
					<PostHeader title={post.title} />
					<PostBody content={content} />
					<span className="inner-date">
						Updated <DateFormatter dateString={post.date} />
					</span>
					<div className="banner-box">
						<Link
							as={`/posts/${post.slug}`}
							href="/posts/[slug]"
							aria-label={post.title}
						>
							<Image
								src={post.coverImage}
								alt={post.title}
								className="object-cover banner-img"
								fill
								objectFit="cover"
								objectPosition="center"
							/>
						</Link>
					</div>
				</div>
			</article>
		</>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
