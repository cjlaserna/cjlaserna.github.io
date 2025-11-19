import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../lib/api";
import { CMS_NAME } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";
import Alert from "../../_components/alert";
import Container from "../../_components/container";
import Header from "../../_components/header";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "../../_components/post-header";
import { Intro } from "@/app/_components/intro";
import Link from "next/link";
import Image from "next/image";
import DateFormatter from "@/app/_components/date-formatter";

export default async function Post({ params }: Params) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || "");

	return (
		<article className="right box">
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
		</article>
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
