import Link from "next/link";
import DateFormatter from "./date-formatter";
import Image from "next/image";
import { PostHeader } from "./post-header";
import { PostBody } from "./post-body";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	content: string;
	slug: string;
};

export function HeroPost({ title, coverImage, date, content, slug }: Props) {
	return (
		<article className="right">
			<div className="inner-box">
				<PostHeader title={title} />
				<PostBody content={content} />
				<span className="inner-date">
					Updated <DateFormatter dateString={date} />
				</span>
			</div>
			<div className="banner-box">
				<Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
					<Image
						src={coverImage}
						alt={title}
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
