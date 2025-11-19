import { parseISO, format } from "date-fns";

type Props = {
	dateString: string | Date;
};

const DateFormatter = ({ dateString }: Props) => {
	let date: Date;

	if (typeof dateString === "string") {
		date = parseISO(dateString);
	} else if (dateString instanceof Date) {
		date = dateString;
	} else {
		return null; // fallback if neither
	}

	return (
		<time dateTime={date.toISOString()}>{format(date, "LLLL d, yyyy")}</time>
	);
};

export default DateFormatter;
