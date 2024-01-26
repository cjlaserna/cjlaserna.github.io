import React, { useState } from "react";
import "./card.css";

const CardComponent = ({ imageSrc, title, desc, langs, src }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleButtonClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className="figure-wrapper">
				<figure className={isOpen ? "open" : ""}>
					{langs ? (
						<div className="text-right flex flex-row gap-x-1 justify-end m-2 pixel absolute right-0 z-10">
							{langs.map((lang, index) => (
								<div key={index} className="badge badge-neutral">
									{lang}
								</div>
							))}
							{src && (
								<a
									className="badge badge-success text-white underline hover:cursor-pointer"
									href={src}
									target="_blank"
								>
									Visit Here
								</a>
							)}
						</div>
					) : (
						<div className="text-right flex flex-row gap-x-1 justify-end m-2 pixel absolute right-0 z-10">
							{src && (
								<a
									className="badge badge-success text-white underline hover:cursor-pointer"
									href={src}
									target="_blank"
								>
									Visit Here
								</a>
							)}
						</div>
					)}
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<filter id="outline" mask="url(#mask)">
								<feFlood flood-color="#FFFFFF" result="base" />
								<feMorphology in="SourceGraphic" operator="dilate" radius="5" />
								<feComposite in="base" operator="in" />
								<feBlend in="SourceGraphic" mode="normal" />
								<feDropShadow stdDeviation="1" />
							</filter>
						</defs>
					</svg>
					<div className="img overflow-clip">
						<img src={imageSrc} alt={title + " Image"} />
					</div>
					<figcaption>
						<span className="ml-2">About</span>
						<span className="ml-2 z-10"> {title}</span>
						<span className="!text-[1.25rem]">{desc}</span>
					</figcaption>
					<button
						onClick={handleButtonClick}
						className="btn btn-active btn-neutral text-sm rounded text-white"
					>
						{isOpen ? "Close" : "Learn More"}
					</button>
				</figure>
			</div>
		</>
	);
};

export default CardComponent;
