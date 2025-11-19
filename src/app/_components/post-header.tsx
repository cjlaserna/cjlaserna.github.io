import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
	title: string;
};

export function PostHeader({ title }: Props) {
	return (
		<>
			<h2>{title}</h2>
		</>
	);
}
