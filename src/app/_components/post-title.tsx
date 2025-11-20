import { ReactNode } from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
	children?: ReactNode;
};

export function PostTitle({ children }: Props) {
	return (
		<div className={markdownStyles["markdown"]}>
			<h1>
				<strong>{children}</strong>
			</h1>
		</div>
	);
}
