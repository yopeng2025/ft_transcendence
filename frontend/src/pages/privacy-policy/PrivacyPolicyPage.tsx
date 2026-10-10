
const titleClass = "font-serif font-bold text-4xl text-text"
const subtitleClass = "font-serif font-bold text-2xl text-text-muted"
const textClass = "my-4 text-lg text-text"



function PrivacyPolicyPage() {
	return (
		<main className="max-w-[1200px] mx-auto py-12 px-10">
			<section>
				<h1 className={titleClass}>Privacy Policy</h1>
				<p className={textClass}>CineClub is a scheduling and social platform for members of a local 
					independent-cinema club. This page explains what personal data we collect, 
					why, and what control members have over it.</p>
				<h2 className={subtitleClass}>What we collect</h2>
				<p className={textClass}>Account data (email, display name, avatar, bio), activity data (RSVPs, 
					friend connections, chat messages), 
					and — if used — your 42 Intra login or two-factor authentication secret.</p>
				<h2 className={subtitleClass}>Why we collect it</h2>
				<p className={textClass}>To operate the club's shared screening schedule, 
					let members recognise and message each other, 
					generate your personal calendar export, and secure your account.</p>
				<h2 className={subtitleClass}>Third parties</h2>
				<p className={textClass}>Screening times come from the public datacinesindes.fr feed.
					We do not sell or share your data with advertisers.</p>
				<h2 className={subtitleClass}>Your rights</h2>
				<p className={textClass}>You can export a copy of everything we hold about your account, or request permanent deletion, at any time from your profile settings.</p>
			</section>
		</main>
	)
}

export default PrivacyPolicyPage
