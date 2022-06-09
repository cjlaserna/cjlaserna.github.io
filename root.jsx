import {
	Links,
	LiveReload,
	Meta,
	Form,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "remix";
import {
	renderMetaTags,
	toRemixMeta,
	useQuerySubscription,
} from "react-datocms";
import styles from "~/styles/global.css";
import { metaTagsFragment } from "~/lib/fragments";
import { datoQuerySubscription } from "~/lib/datocms";
import tailwindcss from "./tailwind.css";
import { Navbar } from "./components/Navbar";
import React from "react";

export function links() {
	return [
		{ rel: "stylesheet", href: styles },
		{ rel: "stylesheet", href: tailwindcss },
		{
			rel: "stylesheet",
			href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
		},
	];
}

export const loader = async ({ request }) => {
	return datoQuerySubscription({
		request,
		query: `
        {
          site: _site {
            favicon: faviconMetaTags(variants: [icon, msApplication, appleTouchIcon]) {
              ...metaTagsFragment
            }
          }
          blog {
            seo: _seoMetaTags {
              ...metaTagsFragment
            }
          }
        }
        ${metaTagsFragment}
      `,
	});
};

export const meta = ({
	data: {
		datoQuerySubscription: {
			initialData: { blog, site },
		},
	},
}) => {
	return toRemixMeta([...blog.seo, ...site.favicon]);
};

export default function App() {
	const { datoQuerySubscription } = useLoaderData();
	const htmlRef = React.useRef(null);

	const {
		data: { site },
	} = useQuerySubscription(datoQuerySubscription);

	const previewEnabled =
		datoQuerySubscription.enabled === undefined ||
		datoQuerySubscription.enabled === true;

	function getInitialTheme() {
		if (typeof window !== "undefined" && window.localStorage) {
			const storedPrefs = window.localStorage.getItem("color-theme");
			if (storedPrefs) {
				if (storedPrefs === "true") {
					return true;
				} else {
					return false;
				}
			}
			const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
			if (userMedia.matches) {
				return true;
			}
		}
		return false;
	}

	const [theme, setTheme] = React.useState(getInitialTheme());

	React.useEffect(() => {
		setTheme(getInitialTheme());
		htmlRef.current.dataset.theme = theme ? "rosepinemoon" : "rosepinedawn";
	}, [theme]);
	return (
		<html
			lang="en"
			className="scroll-smooth bg-base-100"
			ref={htmlRef}
			data-theme={theme ? "rosepinemoon" : "rosepinedawn"}
		>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
				{renderMetaTags([...site.favicon])}
			</head>
			<body tabIndex="-1">
				<Navbar theme={theme} setTheme={setTheme} />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === "development" && <LiveReload />}
			</body>
		</html>
	);
}
