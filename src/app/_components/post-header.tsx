import { PostTitle } from "./post-title";

type Props = {
	title: string;
};

export function PostHeader({ title }: Props) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
		</>
	);
}
