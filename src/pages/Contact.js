import Navigation from "../content/Navigation";

const Contact = () => {
	return (
		<>
			<header className="header">
				<Navigation />
			</header>
			<main className="main-content flex items-center justify-center">
				<div class="s_box41">
					<div class="box-inner">
						<h1 className="title text-center">Let's Chat!</h1>
						<form
							action="https://formsubmit.co/clasernaj@gmail.com"
							method="POST"
							className="flex flex-col gap-y-2"
						>
							<span className="label-text">Details:</span>
							<input
								type="text"
								name="name"
								required
								className="input w-full input-bordered rounded bg-[#E6E6E6] text-sm"
								placeholder="Name"
							/>
							<input
								type="email"
								name="email"
								required
								className="input w-full input-bordered rounded bg-[#E6E6E6] text-sm"
								placeholder="Email Address"
							/>
							<span className="label-text">Message:</span>
							<textarea
								type="text"
								name="message"
								required
								className="textarea textarea-bordered w-full rounded bg-[#E6E6E6] text-sm"
								placeholder="Type your message here.."
							/>
							<button type="submit" className="btn px-10 rounded self-end">
								Send
							</button>
						</form>
					</div>
				</div>
			</main>
		</>
	);
};

export default Contact;
