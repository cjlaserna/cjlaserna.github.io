import * as React from "react";
import PerfectScrollbar from "perfect-scrollbar";

const Scrollbar = ({ children, classNames }) => {
	const [containerRef, setContainerRef] = React.useState(null);
	const [perfectScrollbarInstance, setPerfectScrollbarInstance] =
		React.useState(null);

	React.useEffect(() => {
		if (!containerRef || perfectScrollbarInstance) {
			return;
		}

		setPerfectScrollbarInstance(new PerfectScrollbar(containerRef));
	}, [containerRef, perfectScrollbarInstance]);

	return (
		<div
			ref={setContainerRef}
			data-mdb-perfect-scrollbar="true"
			className={classNames}
		>
			{children}
		</div>
	);
};

export default Scrollbar;
