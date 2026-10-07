import './TermsOfServicePage.css'

function TermsOfServicePage() {
	return (
		<main className="terms-of-service-page">
			<section className="terms-of-service-header">
				<h1>Terms of Service</h1>
				<p>These terms govern your use of CineClub, a scheduling and social platform for the members of a local independent-cinema club. By creating an account, you agree to them.</p>
				<h2>Membership</h2>
				<p>Accounts are for individual club members. You're responsible for keeping your login credentials confidential and for activity under your account.</p>
				<h2>Acceptable use</h2>
				<p>Be respectful in chat, RSVP honestly, and don't attempt to access another member's account or misuse the schedule.</p>
				<h2>Screening data</h2>
				<p>Screening times are pulled from the public datacinesindes.fr feed and may occasionally be inaccurate or change without notice on the cinema's side — always double-check before travelling.</p>
				<h2>Termination</h2>
				<p>You may delete your account at any time. We may suspend accounts that violate these terms.</p>
			</section>
		</main>
	)
}

export default TermsOfServicePage
