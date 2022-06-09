import React from "react";
import emailjs from "emailjs-com";

export default function Contact({
	SERVICE_ID,
	TEMPLATE_ID,
	USER_ID,
	profilePicture,
}) {
	function handleOnSubmit(e) {
		e.preventDefault();
		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}
	return (
		<div className="container">
			<h1 className="text-3xl font-bold mb-4">Let's get in touch</h1>
			<div>
				<div className="grid lg:grid-cols-auto-fit">
					<form onSubmit={handleOnSubmit}>
						<div className="grid grid-rows-1 gap-2 mb-2 lg:grid-cols-auto-fit lg:gap-4 lg:mb-4">
							<input
								type="text"
								id="fname"
								name="name"
								placeholder="First Name"
								className="input input-secondary w-full"
							/>
							<input
								type="text"
								id="email"
								name="email"
								placeholder="Your Email"
								className="input input-secondary w-full"
							/>
							<input
								type="text"
								id="subject"
								name="subject"
								placeholder="Subject Line"
								className="input input-secondary w-full"
							/>
						</div>
						<div>
							<textarea
								rows="4"
								cols="50"
								type="text"
								id="message"
								name="message"
								placeholder="Type here..."
								className="textarea textarea-secondary textarea-bordered w-full mb-4"
							/>
							<input
								type="submit"
								value="Send Message"
								className="btn float-right"
							/>
						</div>
					</form>
					<div class="mockup-code mx-4 hidden lg:block">
						<pre data-prefix="$">
							<code>git clone cjlaserna/portfolio</code>
						</pre>
						<pre data-prefix=">">
							<code>Cloning...</code>
						</pre>
						<pre data-prefix=">">
							<code>Done!</code>
						</pre>
					</div>
				</div>
			</div>
		</div>
	);
}
