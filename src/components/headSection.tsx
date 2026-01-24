export const HeadSection = ({ head, discripion }: { head: string, discripion: string }) => {
    return (
        <div className="text-center mb-5 mt-5 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">{head}</h2>
            <p className="w-xl max-w-full mx-auto text-sm text-gray-500">{discripion}</p>
        </div>
    )
}