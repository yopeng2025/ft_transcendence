import { useState } from 'react'
import EventList from '../../components/events/EventList'

const boxClass = "flex items-center gap-4 max-w-[1000px] mx-auto my-[100px] p-8 bg-surface border border-border rounded-lg shadow-card"
const inputClass = "flex-1 py-4 px-5 border border-border rounded-md text-xl"
const buttonClass = "py-4 px-8 rounded-md bg-brand hover:bg-brand-hover text-white text-xl font-bold cursor-pointer transition-colors"
const selectClass = "py-4 px-5 border border-border rounded-md text-xl bg-surface cursor-pointer"

function SearchMoviesPage() {
	const [searchTerm, setSearchTerm] = useState('')
	const [filter, setFilter] = useState('title')

	return (
		<main>
			<section className={boxClass}>
				<input
					id="search"
					type="text"
					value={searchTerm}
					placeholder="Search for a movie"
					onChange={(e) => setSearchTerm(e.target.value)}
					className={inputClass}
				/>
				<select
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					className={selectClass}
				>
					<option value="title">Title</option>
					<option value="year">Cinema</option>
					<option value="genre">Date</option>
				</select>
				<button className={buttonClass}>Search</button>
			</section>
			<section className=" grid gap-5 max-w-[1000px] mx-auto my-[50px]">
				<EventList />
			</section>
		</main>
	)
}

export default SearchMoviesPage
