const titleClass = "font-serif font-bold text-4xl text-text"
const subtitleClass = "font-serif font-bold text-2xl text-text-muted"
const textClass = "my-4 text-lg text-text"

function TermsOfServicePage() {
	return (
		<main className="max-w-[1200px] mx-auto py-12 px-10">
			<section>
				<h1 className={titleClass}>Terms of Service</h1>
				<p className={textClass}>These terms govern your use of CineClub, a scheduling and social platform for the members of a local independent-cinema club. By creating an account, you agree to them.</p>
				<h2 className={subtitleClass}>Membership</h2>
				<p className={textClass}>Accounts are for individual club members. You're responsible for keeping your login credentials confidential and for activity under your account.</p>
				<h2 className={subtitleClass}>Acceptable use</h2>
				<p className={textClass}>Be respectful in chat, RSVP honestly, and don't attempt to access another member's account or misuse the schedule.</p>
				<h2 className={subtitleClass}>Screening data</h2>
				<p className={textClass}>Screening times are pulled from the public datacinesindes.fr feed and may occasionally be inaccurate or change without notice on the cinema's side — always double-check before travelling.</p>
				<h2 className={subtitleClass}>Termination</h2>
				<p className={textClass}>You may delete your account at any time. We may suspend accounts that violate these terms.</p>
			</section>
		</main>
	)
}

export default TermsOfServicePage
