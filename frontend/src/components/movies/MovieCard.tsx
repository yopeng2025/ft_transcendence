type MovieCardProps = {
    title: string
    year: number
}

const cardClass = "w-[180px] bg-surface rounded-lg overflow-hidden shadow-card cursor-pointer transition-transform hover:-translate-y-1"
const infoClass = "py-3.5 px-4"
const infoTitleClass = "text-lg font-semibold"

function MovieCard({
    title,
    year,
}: MovieCardProps) {
    return (
        <div className={cardClass}>
            <div>
                {/* RESERVE FOR POSTER */}
            </div>

            <div className={infoClass}>
                <h3 className={infoTitleClass}>{title}</h3>
                <h3 className={infoTitleClass}>{year}</h3>
            </div>
        </div>
    )
}

export default MovieCard
