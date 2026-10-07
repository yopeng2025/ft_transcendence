import './PrivacyPolicyPage.css'

function PrivacyPolicyPage() {
	return (
		<main className="privacy-policy-page">
			<section className="privacy-policy-header">
				<h1>Privacy Policy</h1>
				<p>CineClub is a scheduling and social platform for members of a local 
					independent-cinema club. This page explains what personal data we collect, 
					why, and what control members have over it.</p>
				<h2>What we collect</h2>
				<p>Account data (email, display name, avatar, bio), activity data (RSVPs, 
					friend connections, chat messages), 
					and — if used — your 42 Intra login or two-factor authentication secret.</p>
				<h2>Why we collect it</h2>
				<p>To operate the club's shared screening schedule, 
					let members recognise and message each other, 
					generate your personal calendar export, and secure your account.</p>
				<h2>Third parties</h2>
				<p>Screening times come from the public datacinesindes.fr feed.
					We do not sell or share your data with advertisers.</p>
				<h2>Your rights</h2>
				<p>You can export a copy of everything we hold about your account, or request permanent deletion, at any time from your profile settings.</p>
			</section>
		</main>
	)
}

export default PrivacyPolicyPage
