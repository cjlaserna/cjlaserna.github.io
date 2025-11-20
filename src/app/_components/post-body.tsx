import markdownStyles from "./markdown-styles.module.css";

type Props = {
	content: string;
};

export function PostBody({ content }: Props) {
	return (
		<div
			className={markdownStyles["markdown"] + " post-body"}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
}
