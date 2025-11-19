import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
	title: string;
	coverImage: string;
	date: string;
	content: string;
	slug: string;
};

export function HeroPost({ title, coverImage, date, content, slug }: Props) {
	return (
		<div className="right">
			<div className="box">
				<div className="inner-box">
					<h2>{title}</h2>
					<div
						className={markdownStyles["markdown"]}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
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
			</div>
		</div>
	);
}

{
	/* <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div> */
}
